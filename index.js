



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

var editor = CodeMirror.fromTextArea(editBox[0], {
    lineNumbers: true, mode: 'html'  });

const editBox = $('#codeEdit');


var editor = CodeMirror.fromTextArea(editBox[0], {
    lineNumbers: true , mode: 'html'  });

editor.on('change', refresh);
function refresh() {
  $('#output').html(editor.getValue())  ;
}
