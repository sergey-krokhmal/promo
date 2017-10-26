$(document).ready(function(){
    
    // Ключи для api твиттера. Нужно из менеджере приложений твиттера подставить сюда ключи
    KEY = "cVgrzbfD8TioymOgZrr6C1uGT";  //Consumer Key (API Key)
    SECRET = "tQkGp2PqhF2MZLpqoS58Xx444GGUyakPIgM9t73iVlwADFFr2l";  //Consumer Secret (API Secret)
    TOKEN = "800703805453021184-M9ijpBCO1Cf75DvzIpW8AHN9PENpD6z";   //Access Token
    TOKEN_SECRET = "bC3gawodaYHzQj7W3tdf0OtqOZJ3SxqMK64Hy6sFVCmyv";  //Access Token Secret
    
    $('[data-fancybox]').fancybox({});
    
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
    cb.setConsumerKey(KEY, SECRET);
    cb.__call(
        "oauth_requestToken",
        {oauth_callback: "oob"},
        function (reply, rate, err) {
          if (err) {
            console.log("error response or timeout exceeded" + err.error);
          }
          if (reply) {
            console.log("reqToken", reply);
              cb.setToken(TOKEN, TOKEN_SECRET);
              cb.__call(
                "statuses_userTimeline",
                "count=3&screen_name=Sergey_Krokhmal",
                function (reply, rate, err) {
                    console.log(reply);
                    for(i = 0; i < reply.length; i++) {
                        var text = reply[i].text;
                        for(j = 0; j < reply[i].entities.urls.length; j++) {
                            console.log(reply[i].entities.urls[j].url);
                            text = text.replace(new RegExp(reply[i].entities.urls[j].url, 'g'), '<a href="' + reply[i].entities.urls[j].expanded_url + '">' + reply[i].entities.urls[j].display_url + '</a>');
                        }
                        formated_date = formatDate(new Date(reply[i].created_at));
                        $($('.twitter-news-content .news-block')[i]).html('<h4 class="date">'+formated_date+'</h4><div class="news-text">'+text+'</div>');
                    }
                }
            );
              
          }
        });
});

function formatDate(date) {
    var monthNames = [
        "Января", "Февраля", "Марта",
        "Апреля", "Мая", "Июня", "Июля",
        "Августа", "Сентября", "Октября",
        "Ноября", "Декабря"
    ];
    
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

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