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
let myPlayerCard = []
let myNumPlayerCard = []

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
  let totalCard = myDeck.length
  if (totalCard >= numPlayer) {
    let myCard = myDeck[0]
    myDeck.shift()

    if (turnPlayer >= numPlayer) {
      turnPlayer = 0
      while (myPlayerCard.length) {
        myPlayerCard.pop()
      }
    }

    if (turnPlayer === 0) {
      document.querySelector('.adLabel').textContent = 'Let Start'
    }

    document.getElementById('myPlayer').childNodes[
      turnPlayer
    ].textContent = myCard
    myPlayerCard.push(myCard)
    document.querySelector('.myDeckButton').disabled = true
    document.querySelector('.changeTurnButton').disabled = false
  } else {
    document.querySelector('.adLabel').textContent = 'Desk is almost empty'
  }
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
  if (turnPlayer >= numPlayer) {
    changeCardToNumber()
    winPlayer()
  }
  document.querySelector('.myDeckButton').disabled = false
  document.querySelector('.changeTurnButton').disabled = true
}

const changeCardToNumber = () => {
  for (let i = 0; i < myPlayerCard.length; i++) {
    let letterCard = myPlayerCard[i]
    switch (letterCard.charAt(0) + letterCard.charAt(1)) {
      case '2 ':
        myNumPlayerCard.push(2)
        break
      case '3 ':
        myNumPlayerCard.push(3)
        break
      case '4 ':
        myNumPlayerCard.push(4)
        break
      case '5 ':
        myNumPlayerCard.push(5)
        break
      case '6 ':
        myNumPlayerCard.push(6)
        break
      case '7 ':
        myNumPlayerCard.push(7)
        break
      case '8 ':
        myNumPlayerCard.push(8)
        break
      case '9 ':
        myNumPlayerCard.push(9)
        break
      case '10':
        myNumPlayerCard.push(10)
        break
      case 'Ja':
        myNumPlayerCard.push(11)
        break
      case 'Qu':
        myNumPlayerCard.push(12)
        break
      case 'Ki':
        myNumPlayerCard.push(13)
        break
      case 'Ac':
        myNumPlayerCard.push(1)
        break
    }
  }
  console.log(myNumPlayerCard)
}

const winPlayer = () => {
  let maxCard = Math.max.apply(null, myNumPlayerCard)
  let temp = myNumPlayerCard.indexOf(maxCard)
  temp++
  document.querySelector('.adLabel').textContent = 'Winning Player: ' + temp
  while (myNumPlayerCard.length) {
    myNumPlayerCard.pop()
  }
}

document.addEventListener('DOMContentLoaded', myShufflingDeck)

document.querySelector('.myDeckButton').addEventListener('click', dealMyCard)
document
  .querySelector('.addPlayerButton')
  .addEventListener('click', addNumberPlayer)
document
  .querySelector('.changeTurnButton')
  .addEventListener('click', changeTurn)
