$(window).on('load', () => {
  $('#module-form').submit((e) => {
    let name = $('#module-name').val()
    let code = $('#module-code').val()

    $('#module-info').html(`${code} - ${name}`)

    e.preventDefault();
  });
});
