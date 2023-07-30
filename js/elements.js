const buttonPlay = document.querySelector('.play'); // usando a DOM selecionando seletores com queryselector para que eu possa alteralos da maneira que eu quiser
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOff = document.querySelector('.sound-off');
const buttonSoundOn = document.querySelector('.sound-on');
const minutesDisplay = document.querySelector('.minutes');
const secondesDisplay = document.querySelector('.seconds');

export{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondesDisplay
}