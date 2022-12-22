$(document).ready(function () {

    $('#btnHide').click(function () {
        $('p').hide(1500);
    })

    $('#btnShow').click(function () {
        $('p').show(3000);
    })
    $('#btnToggle').click(function () {
        $('p').Toggle(500);
    })
    // Fade
    $('#btnFadeIn').click(function () {
        $('p').fadeIn();
    });
    $('#btnToggle').click(function () {
        $('p').fadeOut();
    });
    $('#btnFadeToggle').click(function () {
        $('p').fadeToggle('fast');
    });
    $('#btnFadeTo').click(function () {
        $('p').fadeToggle('slow', 0.3);
    });

    // slide
    $('.blue').click(function () {
        $('#divSlide').slideToggle(1000);
    });
});