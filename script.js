let theTimer = document.querySelector('#timer');
let totalMs = 0;

let minutes;
let seconds;
let centiSeconds;

function runTimer() {
    totalMs = totalMs + 10;

    minutes = Math.floor(totalMs / 60000);
    seconds = Math.floor((totalMs % 60000) / 1000);
    centiSeconds = Math.floor((totalMs % 1000) / 10);

    let currentTime = minutes + ':' + seconds + ':' + centiSeconds;
    theTimer.innerHTML = currentTime;
}

setInterval(runTimer, 10);
