let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let message = "";
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");  // more powerful function, need # to state id
let sumMessage = sumEl.textContent;
let cardEl = document.getElementById("card-el");
let cardMessage = cardEl.textContent;

function startGame() {
    isAlive = true;
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "Wohoo! You've got BlackJack!"
    } else {
        isAlive = false;
        message = "You are out of the game~"
    }
    messageEl.textContent = message;
    sumEl.textContent = sumMessage + " " + sum;
    cardEl.textContent = cardMessage + " " + arrayToString(cards);
}

function drawCard() {
    if (isAlive && !hasBlackJack) {
        let card = generateCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}

function arrayToString(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + " ";
    }
    return result;
}

function generateCard() {
    let r = Math.floor(Math.random() * 13) + 1
    switch (r) {
        case 1:
            return 11;
        case 11:
        case 12:
        case 13:
            return 10;
        default:
            return r;
    }
}