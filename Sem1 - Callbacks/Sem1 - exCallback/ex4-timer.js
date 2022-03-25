// Timer - verificar resposta

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let milissegundo = 1000

//let indice = 10
//let resultado = 10


console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);


let contador = 0;

setTimeout(() => {
    let intervalID = setInterval(() => {
        tempoAlarmandoEmSegundos * milissegundo === contador
            ? clearInterval(intervalID)
            : console.log("Beep beep!");
        contador += milissegundo;
    }, milissegundo);
}, tempoParaAlarmarEmSegundos * milissegundo);
