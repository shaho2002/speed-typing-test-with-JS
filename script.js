let theTimer = document.querySelector('#timer');
let typingInput = document.querySelector('#typingInput');
let textDisplay = document.querySelector('.text-display');
let resetBtn = document.querySelector('#resetBtn');
let showMistake = document.querySelector('#showMistake');
let accuracy = document.querySelector('#accuracy');


let totalMs = 0;
let minutes;
let seconds;
let centiSeconds;

let pressFirstKey = false;

let mistake = 0;
let totalTyped = 0;
let accuracyPercent = 0;
function addPrefixZero(time) {
    if (time <= 9) {
        time = '0' + time;
    }
    return time;
}


function start() {

    if (pressFirstKey == false) {
        pressFirstKey = true;
        interval = setInterval(runTimer, 10);

    }

}
typingInput.addEventListener('keypress', start);


function runTimer() {
    totalMs = totalMs + 10;

    minutes = Math.floor(totalMs / 60000);
    seconds = Math.floor((totalMs % 60000) / 1000);
    centiSeconds = Math.floor((totalMs % 1000) / 10);

    let currentTime = addPrefixZero(minutes) + ':' + addPrefixZero(seconds) + ':' + addPrefixZero(centiSeconds);
    theTimer.innerHTML = currentTime;
    showMistake.innerHTML = mistake;
accuracy.innerHTML = accuracyPercent.toFixed(0) + '%';

}


function updateAccuracyPercent() {
    if (totalTyped == 0) {
        accuracyPercent = 0;
    } else {
        let correctChars = totalTyped - mistake;
        correctChars = (correctChars < 0) ? 0 : correctChars;
        accuracyPercent = (correctChars / totalTyped) * 100;
    }
}


function spellCheck() {
    let originText = textDisplay.textContent.trim();
    let userText = typingInput.value.trim();

    if (originText === userText) {
        clearInterval(interval);
        typingInput.style.color = "green";
    }
    else if (originText.startsWith(userText)) {
        typingInput.style.color = "green";

    }
    else {
        typingInput.style.color = "red";
        mistake++;
    }
    totalTyped++;

    updateAccuracyPercent();

}
typingInput.addEventListener("keyup", (event) => {
    if (event.key.length === 1) {
        spellCheck();
    }
});


function reset() {

    clearInterval(interval);
    totalMs = 0;
    minutes = 0;
    seconds = 0;
    centiSeconds = 0;
    mistake = 0;
    totalTyped = 0;
    mistake = 0;
    accuracyPercent = 0;
    accuracy.innerHTML = "0";
    showMistake.innerHTML = "0";
    interval = null;
    theTimer.innerHTML = "00:00:00";
    typingInput.value = "";
    typingInput.style.color = "";
    pressFirstKey = false;

}

resetBtn.addEventListener('click', reset);


