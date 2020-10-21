$(window).on('load', () => {
  $('#currentDate').click(function() {
    $('#currentTime').html(new Date())
  })

  $('#generate').click(function() {
    $('#beforeGeneration').html(new Date())

    let val = $('#numberOfValues').val()
    var i;
    let numbers = []

    if (!isNaN(val)) {
      for (i = 0; i < val; i++) {
        numbers.push(Math.random())
      }
    }

    $('#afterGeneration').html(new Date())

    let worker = new Worker("assets/js/sort-worker.js");

    worker.addEventListener("message", function(evt) {
      let sortedItems = evt.data

      $('#numbersSorted').html(new Date())
      $('#results').html(sortedItems.join(' - '))
    })

    worker.postMessage(numbers)
  })
});
