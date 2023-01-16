
// Initializing some values
let attempts = 0;
let totalAttempts = 6;
let totalWons = 0;
let totalLosts = 0;

// Selecting elements
const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#gusseingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

const lostOwnMessage = document.createElement("p");


form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    attempts++;

    if (attempts === 6) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }

    if (attempts <= 6) {
        const guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`;
    }

    guessingNumber.value = "";
});

// checkResult
const checkResult = (guessingNumber) => {

    const randomNumber = getRandomNumber(6);

    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `Congratulation! you have won.`;
        totalWons++;
    } else {
        resultText.innerHTML = `Oh! you have lost. The random number was: ${randomNumber}`;
        totalLosts++;
    }

    lostOwnMessage.innerHTML = `Total won: ${totalWons}, Total losts: ${totalLosts}`;
    lostOwnMessage.classList.add("large-text");

    cardBody.appendChild(lostOwnMessage);

};

// getRandomNumber
const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
};


