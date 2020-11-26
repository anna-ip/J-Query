const gamePattern = []
const buttonColours = ['red', 'blue', 'green', 'yellow']

const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4)
  //console.log(randomNumber)
  return randomNumber
}
//nextSequence()

const randomChosenColour = buttonColours[nextSequence()]
let newArray = gamePattern.push(randomChosenColour)
console.log(newArray)
