let numeroPensado = Math.floor(Math.random()*100);
console.log(numeroPensado);

let tentativas = 10;
console.log(tentativas);


function adivinharNumero(){
    
    if (tentativas <= 0) {
        document.getElementById('resultado').innerHTML = `Suas tentativas acabaram! O número era ${numeroPensado}. Tente novamente!`;
        return;
    }

    let numeroDigitado = parseInt(document.getElementById('numero-digitado').value);
    console.log(numeroDigitado);
    
    
    if (isNaN(numeroDigitado)) {
        document.getElementById('resultado').innerHTML = "Digite um número válido!";
        return;
    }

    tentativas--;

    while (tentativas >= 0) {
        if (numeroDigitado === numeroPensado) {
            document.getElementById('resultado').innerHTML = `Parabéns! Você acertou o número ${numeroPensado} em ${10 - tentativas} tentativas.`;
            return;
        } 
        // Verifica se o número pensado é maior ou menor que o número digitado
        else if (numeroDigitado > numeroPensado) {
            document.getElementById('resultado').innerHTML = `O número pensado é menor. Você tem ${tentativas} tentativas restantes.`;
            return;
        } else {
            document.getElementById('resultado').innerHTML = `O número pensado é maior. Você tem ${tentativas} tentativas restantes.`;
            return;
        }
    }


    if (tentativas === 0) {
        document.getElementById('resultado').innerHTML = `Suas tentativas acabaram! O número era ${numeroPensado}.`;
    }

}