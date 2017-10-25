$(document).ready(function(){
    //$(".phone-mask").mask("+7 (999) 999-9999");
    
    $('[data-fancybox]').fancybox({
	});
    
    $('.onepage-scroll-wrapper').onepage_scroll({
        pagination: false,
    });
    
    wheel = $('.reg-promo-page .steering-wheel');
    if (wheel.length > 0) {
        var offset = wheel.offset();

        function mouse(evt) {
            var mouse_x = evt.pageX;
            var page_width = $(window).width();
            var mid = page_width / 2;
            degree = (mouse_x - mid) * 7 / mid;
            wheel.css('-moz-transform', 'translateY(-50%) rotate(' + degree + 'deg)');
            wheel.css('-webkit-transform', 'translateY(-50%) rotate(' + degree + 'deg)');
            wheel.css('-o-transform', 'translateY(-50%) rotate(' + degree + 'deg)');
            wheel.css('-ms-transform', 'translateY(-50%) rotate(' + degree + 'deg)');
        }
        $(document).mousemove(mouse);
    }
    
    var cb = new Codebird;
    cb.setConsumerKey("cVgrzbfD8TioymOgZrr6C1uGT", "tQkGp2PqhF2MZLpqoS58Xx444GGUyakPIgM9t73iVlwADFFr2l");
    var oauth_token = localStorage.getItem("oauth_token");
    var oauth_token_secret = localStorage.getItem("oauth_token_secret");
    /*if (oauth_token && oauth_token_secret) {
      cb.setToken(oauth_token, oauth_token_secret);
    } else {*/
      cb.__call(
        "oauth_requestToken",
        {oauth_callback: "oob"},
        function (reply, rate, err) {
          if (err) {
            console.log("error response or timeout exceeded" + err.error);
          }
          if (reply) {
            console.log("reply", reply)
              // stores it
            cb.setToken(reply.oauth_token, reply.oauth_token_secret);
            cb.__call(
                "statuses_homeTimeline",
                {oauth_callback: "oob"},
                function (reply, rate, err) {
                    console.log(reply);
                    console.log(err);
                }
            );
          }
        });
    /*}*/
    
    cb.logout();
});

function submit_registration() {
    fio = $('[name="fio"]').val();
    phone = $('[name="phone"]').val().replace('+');
    email = $('[name="email"]').val();
    pass = $('[name="password"]').val();
    pass_repeat = $('[name="password_repeat"]').val();
    fio_parts = fio.split('/\s*/');
    f = '';
    i = '';
    o = '';
    if (fio_parts[0] !== undefined) {
        f = fio_parts[0];
    }
    if (fio_parts[1] !== undefined) {
        i = fio_parts[1];
    }
    if (fio_parts[2] !== undefined) {
        o = fio_parts[2];
    }
    data = {
        phone: phone,
        password: pass,
        email: email,
        type: 'phone',
        name: i,
        surname: f,
        fathername: o
    }
    $.ajax({
        method: "POST",
        url: "http://test-cs.mongeo.ru/api/client/registration",
        dataType: 'application/json',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success(data) {
            if (data.authKey !== undefined) {
                show_promo_enter(data.authKey);
            }
        }
    });
}

function show_promo_enter(authKey) {
    $('.promo-code-dialog [name="auth-key"]').val(authKey);
    $.fancybox.open($('.promo-code-dialog'));
}

function send_promo_code() {
    var code = $('.promo-code-dialog [name="promo-code"]').val();
    var auth_key = $('.promo-code-dialog [name="auth-key"]').val();
    data = {
        code: code,
        authKey: auth_key,
    }
    $.ajax({
        method: "PUT",
        url: "http://test-cs.mongeo.ru/api/client/confirm",
        dataType: 'application/json',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success(data) {
            if (data.success !== undefined && data.success == true) {
                $.fancybox.close();
            }
        }
    });
}