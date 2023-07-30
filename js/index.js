import {Controls} from "./controls.js" /*  aqui estou importando arquivos arquivos .js e usando a modularizacao  */
import {Timer} from "./timer.js"
import {Reset} from "./reset.js"
import Sound from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondesDisplay
}  from "./elements.js"


const sound = Sound();


const resetControls = Reset({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

/*  aqui estou usando uma estrategia chamada Factory criando objetos 
para serem trabalhados junto a modularizacao. 
essa estrategia consiste em criar as funcoes de um determinado arquivo dentro
de uma funcao pai, que essa funcao pai vai ter parametros dentro dela, que sao justamente
as variaveis do arquivo de destino que voce quer usar
entao nesse exemplo do Timer eu estou criando uma const timer e
chamando a funcao que contem outras funcoes dentro dela no arquivo timer.js
tambem estou incluindo nos parametros as variaveis que precisará ser executada
dentro dela. entao assim eu consigo usar modulos dentro de modulos sem precisar
esta modularizando tudo. estrategia interessante.*/

const timer = Timer({
    minutesDisplay,
    secondesDisplay,
    resetControls
})

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    timer,
    buttonSoundOff,
    buttonSoundOn,
    resetControls
})




buttonPlay.addEventListener('click',controls.playOn);

/* aqui eu adiciono um evento de CLICK no buttonPlay ao colicar ele executa a funcao playOn  */

buttonPause.addEventListener('click',controls.pauseOn);

buttonStop.addEventListener('click',controls.stopOn);

buttonSoundOff.addEventListener('click',controls.soundOff);

buttonSoundOn.addEventListener('click',controls.soundOn);

buttonSet.addEventListener('click',controls.setMinutes);





