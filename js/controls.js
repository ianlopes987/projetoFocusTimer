/*  os codigos desse arquivo podem ser consideraso a mesma explicacao que
consta no arquivo timer.js    */

import Sounds from "./sounds.js"

const sound = Sounds();



export function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    timer,
    buttonSoundOff,
    buttonSoundOn,
    resetControls

}){

    function playOn(){
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
        buttonSet.classList.add('hide');
        buttonStop.classList.remove('hide');
        timer.countDown();
        sound.pressButton();
    }
    
    function pauseOn(){
        buttonPause.classList.add('hide');
        buttonPlay.classList.remove('hide');
        timer.hold();
        sound.pressButton();

    }
    
    function stopOn(){
        resetControls.resetControls();
        timer.resetTimer();
    }
    
    function soundOff(){
        buttonSoundOff.classList.add('hide');
        buttonSoundOn.classList.remove('hide');
        sound.bgAudioOff();
        
    }
    
    function soundOn(){
        buttonSoundOn.classList.add('hide');
        buttonSoundOff.classList.remove('hide');
        sound.bgAudioOn();
    }
    
    function setMinutes(){
        let newMinutes =prompt("Quantos Minutos?");
        if (!newMinutes){
            timer.resetTimer();
            return
        }

        timer.updateTimerDisplay(newMinutes,0);
        timer.updateMinutes(newMinutes);

    }

    return {
        playOn,
        pauseOn,
        stopOn,
        soundOff,
        soundOn,
        setMinutes
    }
}

