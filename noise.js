$(document).ready( function() {

  var notes_array = $('#audio_embeds').children()
  var buttons = $('.instrument').children()

  buttons.on('click', function(event) {
    event.preventDefault()

    var button = $(this)

    if (button.hasClass('note c')) {
      notes_array[0].play()
      notes_array[0].currentTime = 0
    } else if (button.hasClass('note d')) {
      notes_array[1].play()
      notes_array[1].currentTime = 0
    } else if (button.hasClass('note e')) {
      notes_array[2].play()
      notes_array[2].currentTime = 0
    } else if (button.hasClass('note f')) {
      notes_array[3].play()
      notes_array[3].currentTime = 0
    } else if (button.hasClass('note g')) {
      notes_array[4].play()
      notes_array[4].currentTime = 0
    } else if (button.hasClass('note a')) {
      notes_array[5].play()
      notes_array[5].currentTime = 0
    } else if (button.hasClass('note b')) {
      notes_array[6].play()
      notes_array[6].currentTime = 0
    }
  })

  $(document).keypress(function (event) {

    if (event.which === 99) {
      notes_array[0].play()
      notes_array[0].currentTime = 0
    } else if (event.which === 100) {
      notes_array[1].play()
      notes_array[1].currentTime = 0
    } else if (event.which === 101) {
      notes_array[2].play()
      notes_array[2].currentTime = 0
    } else if (event.which === 102) {
      notes_array[3].play()
      notes_array[3].currentTime = 0
    } else if (event.which === 103) {
      notes_array[4].play()
      notes_array[4].currentTime = 0
    } else if (event.which === 97) {
      notes_array[5].play()
      notes_array[5].currentTime = 0
    } else if (event.which === 98) {
      notes_array[6].play()
      notes_array[6].currentTime = 0
    }
  })
});
