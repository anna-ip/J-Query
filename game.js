const userClickedPattern = []
const buttonColours = ['red', 'blue', 'green', 'yellow']
const gamePattern = []

// the btn clicked id is stored in userChosenColor
// $('div.btn').click((event) => {
//   const userChosenColour = $(event.target).attr('id')
//   console.log(userChosenColour)
//   userClickedPattern.push(userChosenColour)
//   console.log(userClickedPattern)
// })

// $('div.btn').click((event) => {
//   const userChosenColour = $(event.target).attr('id')
//   console.log(userChosenColour)
//   userClickedPattern.push(userChosenColour)
//   console.log(userClickedPattern)
// })

const playSound = (name) => {
  $('div.btn').click((event) => {
    const name = $(event.target).attr('id')
    console.log(name)
    userClickedPattern.push(name)
    console.log(userClickedPattern)

    var audio = new Audio('sounds/' + name + '.mp3')
    audio.play()
  })
}
playSound()

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
//nextSequence()

// const randomChosenColour = buttonColours[nextSequence()]
// console.log(randomChosenColour)
// let newArray = gamePattern.push(randomChosenColour)
// console.log(newArray)

//** Adding the sound to the btns when clicked**/
// $(document).ready(function () {
//   var audioElement = document.createElement('audio')
//   audioElement.setAttribute('src', 'sounds/' + randomChosenColour + '.mp3')

//   audioElement.addEventListener(
//     'ended',
//     function () {
//       this.play()
//       this.currentTime = 1
//     },
//     false
//   )

//   $('#' + randomChosenColour).click(function () {
//     audioElement.play()
//     //$('#status').text('Status: Playing')
//   })
// })

// const play = () => {
//   var audio = new Audio('sounds/' + randomChosenColour + '.mp3')
//   audio.play()
//   audio.currentTime = 1
// }
// $('#' + randomChosenColour).click(() => {
//   var audio = new Audio('sounds/' + randomChosenColour + '.mp3')
//   audio.play()
//   audio.currentTime = 1
// })

// //** Flash animation added to clicked btn **/
// //$(':button').click(() => {
// $('#' + randomChosenColour).click(() => {
//   setInterval(() => {
//     $('#' + randomChosenColour)
//       .fadeOut(100)
//       .fadeIn(100)
//   }, 2000)

//   //alert(randomChosenColour + '.click()')
// })
// //})
