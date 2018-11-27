const editBox = $('#codeEdit');


var editor = CodeMirror.fromTextArea(editBox[0], {
    lineNumbers: true, mode: 'html'
  });

editor.on('change', refresh);
function refresh() {
  $('#output').html(editor.getValue())  ;
}
