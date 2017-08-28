

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