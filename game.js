const buttonColours = ['red', 'blue', 'green', 'yellow']
const gamePattern = []
const userClickedPattern = []

$('div.btn').click((event) => {
  const userChosenColour = $(event.target).attr('id')
  console.log(userChosenColour)
  userClickedPattern.push(userChosenColour)
  console.log(userClickedPattern)

  playSound(userChosenColour)
  animatePress(userChosenColour)
})

const playSound = (name) => {
  var audio = new Audio('sounds/' + name + '.mp3')
  audio.play()
}

const animatePress = (currentColor) => {
  $('#' + currentColor).addClass('pressed')

  setTimeout(() => {
    $('#' + currentColor).removeClass('pressed')
  }, 100)
}

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4)
  //console.log(randomNumber)
  const randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  //return randomNumber

  //** Flash animation added to clicked btn **/
  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)

  var audio = new Audio('sounds/' + randomChosenColour + '.mp3')
  audio.play()
}
