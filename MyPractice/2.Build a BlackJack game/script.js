let cardEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


let cards = []
let sum=0
let message = ""
let isAlive = false
let hasBlackJack=false

function startGame() {
    isAlive=true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard];
    sum=firstCard+secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent+=cards[i]+" - "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum === 21) {
        message = "You got a BlackJack!"
        hasBlackJack=true
    }
    else if (sum <= 20) {
        message="You wanna draw a card?"
    }
    else {
        message = "You are out of the game!"
        isAlive=false
    }
    messageEl.textContent=message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}

function randomCard() {
    let random = Math.floor(Math.random() * 13)+1
    if (random === 1) {
        return 11
    }
    else if (random > 10) {
        return 10
    }
    return random
}