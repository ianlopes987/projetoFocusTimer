import "./controls"
import "./timer.js"

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOff = document.querySelector('.sound-off');
const buttonSoundOn = document.querySelector('.sound-on');
const minutesDisplay = document.querySelector('.minutes');
const secondesDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);

buttonPlay.addEventListener('click',playOn);

buttonPause.addEventListener('click',pauseOn);

buttonStop.addEventListener('click',stopOn);

buttonSoundOff.addEventListener('click',soundOff);

buttonSoundOn.addEventListener('click',soundOn);

buttonSet.addEventListener('click',setMinutes);


function playOn(){
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
    countDown();
}

function pauseOn(){
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    clearTimeout(timerTimeOut);
}

function stopOn(){
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
    resetTimer();
}

function soundOff(){
    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide');
}

function soundOn(){
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
}


