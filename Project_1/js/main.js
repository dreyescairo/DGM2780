
//Affix was dropped from bootstrap 4. This is a workaround for the sticky nav.
$(document).ready(function () {

    var toggleAffix = function (affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top) {
            wrapper.height(height);
            affixElement.addClass("affix");
        }
        else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }

    };


    $('[data-toggle="affix"]').each(function () {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function () {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });

});


//cool little script to tell me what elements are wider than the body.
$.each($('*'), function () {
    if ($(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width());
    }
});

//fades the banner container (and children) as the page scrolls.
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.bannerContainer').css({
        'opacity': ((height - scrollTop) / height)
    });
});

$('.carousel').carousel({
    interval: 5000,
    keyboard: true
})


$('#collapseOne').collapse('show');