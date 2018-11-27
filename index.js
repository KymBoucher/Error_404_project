const editBox = $('#codeEdit');
editBox.on('keydown', refresh);

function refresh() {
$('#output').html(editBox.val())  ;
}
