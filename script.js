let theTimer = document.querySelector('#timer');
let typingInput = document.querySelector('#typingInput');

let totalMs = 0;
let minutes;
let seconds;
let centiSeconds;

let pressFirstKey = false;
function addPrefixZero(time) {
    if (time <= 9) {
        time = '0' + time;
    }
    return time;
}
function start() {

    if (pressFirstKey == false) {
        pressFirstKey = true;
        setInterval(runTimer, 10);
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
}

