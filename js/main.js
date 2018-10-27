$(function () {
    //Adjust Header Height
    let myHeader = $('.header');
    let slider = $('.slider');

    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
        //Adjust BXslider Item to the center
        slider.each(function () {
            $(this).css(
                'paddingTop',
                ($(window).height() - $('.slider li').height()) / 2
            );
        });
    });
    //Links Add Active Class
    $('.links li a').click(function () {
        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    //Adjust BXslider Item to the center
    slider.each(function () {
        $(this).css(
            'paddingTop',
            ($(window).height() - $('.slider li').height()) / 2
        );
    });
    //Trigger the BX slider
    slider.bxSlider({
        pager: false
    });

    // Smooth Scroll To Div

    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },
            1000
        );
    });
    // Our Auto Slider Code
    (function autoSlider() {
        $('.my-slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.my-slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());

    // Trigger MixItUp
    window.mixitup('#container');

    // Adjust shuffle links
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    // Trigger NiceScroll
    $("body").niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: "10px",
        zindex: 9999999,
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.8,
        cursorborder: "1px solid #1abc9c",
        scrollspeed: 50,
    });
    (function () {
        var css = document.createElement('link');
        css.href = 'https://use.fontawesome.com/releases/v5.4.1/css/all.css';
        css.rel = 'stylesheet';
        css.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(css);
    })();
    (function () {
        var css = document.createElement('link');
        css.href = 'https://fonts.googleapis.com/css?family=Lato:400,700';
        css.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(css);
    })();

});
