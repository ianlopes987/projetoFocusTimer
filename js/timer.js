import Sounds from "./sounds.js";

export function Timer({
    minutesDisplay,
    secondesDisplay,
    resetControls
    /**aqui uso a estrategia do factory de fato, onde esses parametros sao
     * os parametros que sao as variaveis que estao definidas em outro escopo
     * de outro arquivo e uso aqui para referencialas dentro desse arquivo.
     * sao chamdas de dependencias
     */
}){

    let timerTimeOut;
    let minutes = Number(minutesDisplay.textContent); // definindo uma variavel com o conteudo que tem dentro do html e transformando ela em Number

    function countDown(){
        timerTimeOut = setTimeout(function(){
            let seconds = Number(secondesDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);
    
            updateTimerDisplay(minutes,0);
    

           if(minutes == 0 && seconds == 0){
    
                resetTimer();
                resetControls.resetControls();
                Sounds().timeEnd();

                return
            }
    
            if(seconds <= 0){
                seconds = 60;
                --minutes;
            }
    
            updateTimerDisplay(minutes,String(seconds-1));
    
    
    
            countDown();
        },1000);

        /* essa funcao countDown() é uma funcao callback que é executada a partir
        de x segundos definidos como argumento na funcao, que no caso é 1000 milisegundos
        ou 1 segundo. tambem usamos a estrategia de recursividade nesse funcao que chama ela mesmo
        ao final, para que a cada 1 segundo ela seja executada novamente, pois cada segundo
        temos que tirar um segundo da conta, como é um cronometro.*/
    }
    
    function resetTimer(){
        updateTimerDisplay(minutes,0);
        clearTimeout(timerTimeOut);

        //essa funcao reseta o timer chamando uma funcao para isso
    }
    
    function updateTimerDisplay(minutes,seconds){
        minutesDisplay.textContent = String(minutes).padStart(2,"0");
        secondesDisplay.textContent = String(seconds).padStart(2,"0");


        //essa funcao altera o conteudo do html com o .textcontent
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut);
    }


    return {
        countDown,
        resetTimer,
        updateTimerDisplay,
        updateMinutes,
        hold
    }

    /* como estamos usando uma funcao temos que retornar algo
    nesse caso retornamos justamente as funcoes que esto dentro da funcao pai
    para que sejam usadas em outros arquivos com a modularizacao    */
}








