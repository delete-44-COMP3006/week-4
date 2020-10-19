$(window).on('load', () => {
  syncText()

  $('#module-form').submit((e) => {
    localStorage.code = $('#module-code').val()
    localStorage.name = $('#module-name').val()

    syncText();
  });
});

function syncText() {
  let text = 'No module saved. Fill in the information below'

  if (localStorage.code !== undefined && localStorage.name !== undefined) {
    text = `${localStorage.code} - ${localStorage.name}`
  }

  $('#module-info').html(text)
}
