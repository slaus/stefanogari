//Scripts
$(function () {

    var $navTopMenu = $("#header__top-menu"),
        $bottomMenu = $("#header__bottom-menu"),
        $bar = $(".menu-bar");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $bar.hasClass("default")) {
            $bar.removeClass("default").addClass("fixed");
            $bar.next().css({"marginTop" : "116px"});
        } else if ($(this).scrollTop() <= 100 && $bar.hasClass("fixed")) {
            $bar.removeClass("fixed").addClass("default");
            $bar.next().css({"marginTop" : "0"});
        }
    });//scroll

    menu($navTopMenu, "top", "Меню");
    menu($bottomMenu, "bottom", "Каталог");

    $(document).on("click", "#top-menu-icon", function () {
        if ($("#bottom-menu-icon").hasClass("active")) {
            $(".bottom-menu").slideToggle();
            $("#bottom-menu-icon").removeClass("active");
        }
        $(".top-menu").slideToggle();
        $(this).toggleClass("active");
    });

    $(document).on("click", "#bottom-menu-icon", function () {
        if ($("#top-menu-icon").hasClass("active")) {
            $(".top-menu").slideToggle();
            $("#top-menu-icon").removeClass("active");
        }
        $(".bottom-menu").slideToggle();
        $(this).toggleClass("active");
    });

    $(document).click(function (event) {
        event.stopPropagation();

        hideMenu(".top-menu", "#top-menu-icon");
        hideMenu(".bottom-menu", "#bottom-menu-icon");

        function hideMenu(type, nav) {
            if ($(event.target).closest(nav).length) return;
            if ($(window).outerWidth() <= "1219") $(type).slideUp();
            $(nav).removeClass("active");
        }
    });

    function menu(name, position, title) {
        return name.prepend('<div id="' + position + '-menu-icon">' + title + '</div>');
    }

    //To top button
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 150) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    //Spinner

    var action;

    $(".spinner button").on("mousedown", function () {
        btn = $(this);
        input = btn.closest('.spinner').find('input');
        btn.closest('.spinner').find('button').prop("disabled", false);

        if (btn.attr('data-dir') == 'up') {
            action = setInterval(function () {
                if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                    input.val(parseInt(input.val()) + 1);
                } else {
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 120);
        } else {
            action = setInterval(function () {
                if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                    input.val(parseInt(input.val()) - 1);
                } else {
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 120);
        }
    }).on("mouseup", function () {
        clearInterval(action);
    });

    //  Bootstrap-slider component

    //$("#bootstrap-slider-1").slider({});

});