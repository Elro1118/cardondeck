let numPlayer = 0
let turnPlayer = -1
let myCardType = [
  '2 of ',
  '3 of ',
  '4 of ',
  '5 of ',
  '6 of ',
  '7 of',
  '8 of ',
  '9 of ',
  '10 of ',
  'Jack of ',
  'Queen of ',
  'King of',
  'Ace of'
]
let myCardForma = ['Spades', 'Heart', ' Clubs', 'Diamonds']
let myDeck = []

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const fillDeck = () => {
  for (let y = 0; y < myCardType.length; y++) {
    for (let z = 0; z < myCardForma.length; z++) {
      myDeck.push(myCardType[y] + myCardForma[z])
    }
  }
}
const myShufflingDeck = () => {
  fillDeck()
  let temp = ''
  let j = ''

  for (let i = myDeck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    temp = myDeck[j]
    myDeck[j] = myDeck[i]
    myDeck[i] = temp
  }
  document.querySelector('.playerLabel').disabled = false
  document.querySelector('.addPlayerButton').disabled = false
  document.querySelector('.myDeckButton').disabled = true
  document.querySelector('.changeTurnButton').disabled = true
}

const dealMyCard = () => {
  let myCard = myDeck[0]
  myDeck.shift()

  if (turnPlayer >= numPlayer) {
    turnPlayer = 0
  }

  document.getElementById('myPlayer').childNodes[
    turnPlayer
  ].textContent = myCard

  document.querySelector('.myDeckButton').disabled = true
  document.querySelector('.changeTurnButton').disabled = false
}

const addNumberPlayer = () => {
  numPlayer = document.querySelector('.playerText').value
  if (!numPlayer == '') {
    document.querySelector('.playerLabel').textContent = 'Player: ' + numPlayer
    document.querySelector('.playerText').value = ''
    document.querySelector('.playerLabel').disabled = true
    document.querySelector('.addPlayerButton').disabled = true
    document.querySelector('.changeTurnButton').disabled = false
    for (let i = 0; i < numPlayer; i++) {
      let newList = document.createElement('li')
      newList.textContent = ''
      document.getElementById('myPlayer').appendChild(newList)
    }
  }
}

const changeTurn = () => {
  turnPlayer++
  document.querySelector('.myDeckButton').disabled = false
  document.querySelector('.changeTurnButton').disabled = true
}

document.addEventListener('DOMContentLoaded', myShufflingDeck)

document.querySelector('.myDeckButton').addEventListener('click', dealMyCard)
document
  .querySelector('.addPlayerButton')
  .addEventListener('click', addNumberPlayer)
document
  .querySelector('.changeTurnButton')
  .addEventListener('click', changeTurn)
