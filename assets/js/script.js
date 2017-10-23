$(document).ready(function(){
    //$(".phone-mask").mask("+7 (999) 999-9999");
    
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
});