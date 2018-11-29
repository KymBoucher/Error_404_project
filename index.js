const editBox = $('#codeEdit');




editor.on('change', refresh);
function refresh() {
  $('#output').html(editor.getValue())  ;
}

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemMargin: 5,
    slideshow: true,
    slideshowSpeed:4000,
    directionNav: false,
    controlNav: false,
    itemWidth: 2000,
  });
});
