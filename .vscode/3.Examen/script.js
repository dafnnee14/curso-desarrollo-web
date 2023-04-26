let blackjackGame = {
    you: {
        scoreSpan: '#your-blackjack-result',
        div: "#your-box",
        boxSize: '.flex-blackjack-row-2 div',
        score: 0
    },

    dealer: {
        scoreSpan: '#dealer-blackjack-result',
        div: "#dealer-box",
        boxSize: '.flex-blackjack-row-2 div',
        score: 0
    },

    'cards': ["2", "3", "4", "5", "6", "7", "8", "9", "0", 'J', "Q", "K", "A"],

    cardsMap: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        0: 10,
        K: 10,
        J: 10,
        Q: 10,
        A: [1, 11],
    },

    'suits': [
        "C", "D", "H", "S"
    ],

    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false,
    isTurnsOver: false,
    pressOnce: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

let windowidth = window.screen.width;
let windowHeight = window.screen.height;
let winner;

// Button Event Listeners
document
    .querySelector("#blackjack-hit-button")
    .addEventListener("click", blackjackHit);

document
    .querySelector('#blackjack-stand-button')
    .addEventListener('click', blackjackStand);
document
    .querySelector('#blackjack-deal-button')
    .addEventListener('click', blackjackDeal);
document
    .querySelector('#blackjack-reset-button')
    .addEventListener('click', blackjackRestart);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card.charAt(0), YOU);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 12);
    let randomSuit = Math.floor(Math.random() * 3)
    console.log(blackjackGame['cards'][randomIndex]+blackjackGame["suits"][randomSuit]);
    return blackjackGame["cards"][randomIndex]+blackjackGame["suits"][randomSuit];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `ImagesCartas/${card}.svg`;
        cardImage.style = `width: ${widthSize()}; height: ${heightSize()};`;
        document.querySelector(activePlayer["div"]).appendChild(cardImage);
    }
}

function widthSize() {
    if (windowidth > 1000) {
        let newWidthSize = window.screen.width * 0.1;
        return newWidthSize;
    } else {
        return window.screen.width * 0.18;
    }
}

function heightSize() {
    if (windowHeight > 1000) {
        let newheightSize = window.screen.height * 0.18;
        return newheightSize;
    } else {
        return window.screen.height * 0.15;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
            activePlayer["score"] += blackjackGame["cardsMap"][card][1];
        } else {
            activePlayer["score"] += blackjackGame["cardsMap"][card][0];
        }
    } else {
        activePlayer["score"] += blackjackGame["cardsMap"][card];
    }
    console.log(YOU["score"]);
    console.log(card);
    console.log(DEALER["score"]);
    showScore(activePlayer);
}

function showScore(activePlayer) {
    // El Bust es "pasarse", por ejemplo, cuando se sobrepasa el veintiuno en una mano.
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
        document.querySelector(activePlayer['scoreSpan']).style.color = "red";
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent =
            activePlayer["score"];
    }
}

function blackjackStand() {
    if (blackjackGame.pressOnce === false) {
        blackjackGame['isStand'] = true;
        let yourImages = document
            .querySelector("#your-box")
            .querySelectorAll("img");

        for (let i = 0; i < yourImages.length; i++) {
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card.charAt(0), DEALER);
            showScore(DEALER);

            blackjackGame['isTurnsOver'] = true;

            computeWinner();
            showWinner(winner);
        }
    }
    blackjackGame.pressOnce = true;
}

function computeWinner() {
    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
        }
        else if (YOU['score'] === DEALER['score']) {
            winner = "Draw"
        }
    }

    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        winner = DEALER;
    }

    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        winner = "None";
    }

    return winner;
}

function showWinner() {
    let message, messageColor;

    if (winner === YOU) {
        message = 'You Win!'
        messageColor = '#00e676'
        document.querySelector('#wins').textContent = blackjackGame['wins'] += 1;
    }

    if (winner === DEALER) {
        message = 'You lost!'
        messageColor = 'red'
        document.querySelector('#losses').textContent = blackjackGame['losses'] += 1;
    }

    if (winner === 'Draw') {
        message = 'You Drew!'
        messageColor = 'yellow'
        document.querySelector('#draws').textContent = blackjackGame['draws'] += 1;
    }
    if (winner === 'None') {
        message = 'You Both Busted!'
        messageColor = 'orange'
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}

function blackjackDeal() {

    if (blackjackGame['isTurnsOver'] === true) {

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        YOU['score'] = DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').textContent = '0';

        document.querySelector("#blackjack-result").textContent = "";
        document.querySelector('#blackjack-result').textContent = "Let's Play";

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        blackjackGame["isStand"] = false;
        blackjackGame.pressOnce = false;
        blackjackGame["isTurnsOver"] = false;
    }
}

function blackjackRestart() {

    blackjackDeal();
    document.querySelector('#wins').textContent = 0;
    document.querySelector('#losses').textContent = 0;
    document.querySelector('#draws').textContent = 0;

    blackjackGame.wins = 0;
    blackjackGame.losses = 0;
    blackjackGame.draws = 0;

}