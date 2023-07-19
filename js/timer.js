export function countDown(){
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondesDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);

        updateTimerDisplay(minutes,0);

        if(minutes <= 0){

            resetControls();
            
            return
        }

        if(seconds <= 0){
            seconds = 2;
            --minutes;
        }

        updateTimerDisplay(minutes,String(seconds-1));



        countDown();
    },1000);
}

export function resetTimer(){
    updateTimerDisplay(minutes,0);
    clearTimeout(timerTimeOut);
}

export function updateTimerDisplay(minutes,seconds){
    minutesDisplay.textContent = String(minutes).padStart(2,"0");
    secondesDisplay.textContent = String(seconds).padStart(2,"0");
}

export function setMinutes(){
    let newMinutes =prompt("Quantos Minutos?");
    if (!newMinutes){
        resetTimer();
        return
    }
    minutes = newMinutes;
    updateTimerDisplay(minutes,0);
}
