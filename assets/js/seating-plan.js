$(window).on('load', () => {
  $('.seat').click(function() {
    $(this).toggleClass('booked')

    if ($(this).hasClass('booked')) {
      localStorage.setItem(this.id, 1)
    } else {
      localStorage.removeItem(this.id)
    }
  })

  $('.seat').each(function() {
    if(localStorage.getItem(this.id) !== null) {
      $(this).addClass('booked')
    }
  })
});
