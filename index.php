<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/assets/libs/jquery/jquery-3.2.1.min.js"></script>
        <script src="/assets/libs/jquery/onepage-scroll/jquery.onepage-scroll.min.js"></script>
        <link rel="stylesheet" href="/assets/libs/jquery/onepage-scroll/onepage-scroll.css">
        <link rel="stylesheet" href="/assets/libs/bootstrap-3.3.7-dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/libs/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="/assets/fonts/svg-font/svg-font.css">
        <link rel="stylesheet" href="/assets/fonts/Circe/stylesheet.css">
    </head>
    <body>
        <div class="main">
            <div class="onepage-scroll-wrapper">
                <section class="container main-page">
                    <div>Check font</div>
                    <div>Проверка фона</div>
                    <div>Проверка фона</div>
                    <div>Проверка фона</div>
                    <div>Проверка фона</div>
                    <img class="car" src="/assets/images/png/car.png"/>
                </section>
                <section class="container-fluid reg-page">2</section>
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