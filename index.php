<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/assets/libs/jquery/jquery-3.2.1.min.js"></script>
        <script src="/assets/libs/jquery/onepage-scroll/jquery.onepage-scroll.min.js"></script>
        <link rel="stylesheet" href="/assets/libs/jquery/onepage-scroll/onepage-scroll.css">
        <link rel="stylesheet" href="/assets/libs/bootstrap-3.3.7-dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/libs/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="/assets/fonts/svg-font/svg-font.css">
        <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="/assets/fonts/Circe/stylesheet.css">
    </head>
    <body>
        <div class="main-promo">
            <span class="bg-part bg-part-1 svg-icon-light"></span>
            <span class="bg-part bg-part-2 svg-icon-dashboard"></span>
            <span class="bg-part bg-part-3 svg-icon-map-location"></span>
            <span class="bg-part bg-part-4 svg-icon-speed-limit"></span>
            <span class="bg-part bg-part-5 svg-icon-gearbox-2"></span>
            <span class="bg-part bg-part-6 svg-icon-gearbox"></span>
            <span class="bg-part bg-part-7 svg-icon-traffic-light"></span>
            <span class="bg-part bg-part-8 svg-icon-mechanics"></span>
            <span class="bg-part bg-part-9 svg-icon-steering-wheel"></span>
            <div class="onepage-scroll-wrapper">
                <section class="container-fluid main-promo-page">
                    <div class="promo-content">
                        <header>
                            <span class="logo svg-icon-logo-bm"></span>
                            <span class="gerb-text"><span class="gerb svg-icon-gerb"></span> Первый региональный каршеринг</span>
                        </header>
                    </div>
                    <img class="animated-promo-car" src="/assets/images/png/car.png"/>
                </section>
                <section class="container-fluid reg-promo-page">2</section>
            </div>
        </div>
        <script>
            $(document).ready(function() {
                $(".onepage-scroll-wrapper").onepage_scroll({
                    pagination: false,
                });
            });
        </script>
    </body>
</html>