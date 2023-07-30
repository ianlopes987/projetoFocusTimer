/*  os codigos desse arquivo podem ser consideraso a mesma explicacao que
consta no arquivo timer.js    */


export function Reset({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
}){

    function resetControls(){
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        buttonSet.classList.remove('hide');
        buttonStop.classList.add('hide');
    }

    return {
        resetControls,
    }
}

