const buttonColours = ['red', 'blue', 'green', 'yellow']

var gamePattern = []
let userClickedPattern = []

let level = 0
let started = false

//* Start the game *
$(document).keypress(() => {
  if (!started) {
    $('#level-title').text('Level ' + level)
    nextSequence()
    started = true
  }
})

$('.btn').click((event) => {
  const userChosenColour = $(event.target).attr('id')
  userClickedPattern.push(userChosenColour)
  console.log('You clicked:', userClickedPattern)

  playSound(userChosenColour) //* invokes the playsound function and sending userChosenColor as a parameter
  animatePress(userChosenColour) //* invokes the animatePress function and sending userChosenColor as a parameter

  checkAnswer(userClickedPattern.length - 1)
})

//* Check answer *
const checkAnswer = (currentLevel) => {
  console.log(currentLevel)
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('Success')
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence()
      }, 1000)
    }
  } else {
    console.log('Too slow')
    playSound('wrong')

    $('body').addClass('game-over')
    setTimeout(() => {
      $('body').removeClass('game-over')
    }, 200)

    $('#level-title').text('Game Over, Press Any Key to Restart')

    startOver()
  }
}

const nextSequence = () => {
  userClickedPattern = []
  level++
  $('#level-title').text('Level ' + level)

  const randomNumber = Math.floor(Math.random() * 4)
  const randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)

  //** Flash animation to clicked btn **/
  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)

  playSound(randomChosenColour)
}

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

//* resets the game *
const startOver = () => {
  level = 0
  gamePattern = []
  started = false
}
