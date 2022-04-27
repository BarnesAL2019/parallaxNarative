$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll < $(window).height() * 3.2) {
    $('#planetPositionWrapper').css({
      'left': '100%',
      'top': wScroll + ($(window).height() * 0.5)
    })
  } else if (wScroll < $(window).height() * 4.1) {
    $('#planetPositionWrapper').css({
      'left': $(window).width() - (wScroll - $(window).height() * 3.2) * ($(window).width() / $(window).height()),
      'top': wScroll + ($(window).height() * 0.5)
    })
  } else {
    $('#planetPositionWrapper').css({
      'left': '10%',
      'top': wScroll + ($(window).height() * 0.5)
    })
  }

  $('.landing').css({
    'top': wScroll + 'px'
  });

  $('.starField').css({
    'transform': 'translateY(' + (wScroll * 0.85) + 'px)'
  });

  if (wScroll > $(window).height() * 2.9 && wScroll < $(window).height() * 3.2) {
    $('#text3').css({
      'top': wScroll + ($(window).height() * 0.5)
    })
  }

  if (wScroll < $(window).height() * 4.3) {
    $('#planetScaleWrapper').css({
      'transform': 'scale(1)',
      'display': 'block'
    })
  } else if (wScroll < ($(window).height() * 4.3) + 500) {
    $('#planetScaleWrapper').css({
      'transform': 'scale(' + (1 - (wScroll - $(window).height() * 4.3) * 0.002) + ')',
      'display': 'block'
    })
  } else {
    $('#planetScaleWrapper').css({
      'transform': 'scale(0)',
      'display': 'none'
    })
  }

  if (wScroll < $(window).height() * 0.7) {
    $('#astroPositionWrapper').css({
      'top': $(window).height() * 1.2,
      'left': ($(window).width() * 0.15)
    });
  } else if (wScroll < $(window).height() * 1.5) {
    $('#astroPositionWrapper').css({
      'top': wScroll + ($(window).height() * 0.5),
      'left': ($(window).width() * 0.15)
    });
  } else if (wScroll < $(window).height() * 1.9) {
    $('#astroPositionWrapper').css({
      'top': wScroll + ($(window).height() * 0.5),
      'left': ($(window).width() * 0.15) + (wScroll - ($(window).height() * 1.5)) * ((7 * $(window).width()) / (4 * $(window).height()))
    })
  } else {
    $('#astroPositionWrapper').css({
      'top': wScroll + ($(window).height() * 0.5),
      'left': ($(window).width() * 0.85)
    })
  }
});