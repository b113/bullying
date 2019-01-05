$(function () {
    $('#menu').slicknav({
        label: 'Меню',
        prependTo: '.header'
    });


    $('.youtube__btn').hover(function () {
        $('.youtube__fill').css('opacity', '0');
    }, function () {
        $('.youtube__fill').css('opacity', '0.25');
    });
});


