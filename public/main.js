let myCardType = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'k',
  'A'
]
let myCardForma = ['S', 'H', 'C', 'D']
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
      console.log(myDeck)
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
    console.log(myDeck)
  }
}

const dealMyCard = () => {
  let myCard = myDeck[0]
  let temp = document.querySelector('.myPlayer').textContent
  myDeck.shift()
  if (temp === '') {
    document.querySelector('.myPlayer').textContent = myCard
  } else {
    document.querySelector('.myPlayer').textContent = temp + '-' + myCard
  }
}

document.addEventListener('DOMContentLoaded', myShufflingDeck)

document.querySelector('.myDeckButton').addEventListener('click', dealMyCard)
