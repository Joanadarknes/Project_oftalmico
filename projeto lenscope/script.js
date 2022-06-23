var ResultadoLente = document.getElementById('Resultado-Lente')
var esfericoOD = document.getElementById('esferico-OD')
var esfericoOE = document.getElementById('esferico-OE')
var cilindricoES = document.getElementById('cilindrico-ES')
var cilindricoDR = document.getElementById('cilindrico-DR')

for (var i = 0; i >= -15; i -= 0.25) {
    esfericoOD.innerHTML += '<option value="' + i + '">' + i + '</option>';
    esfericoOE.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

for (var i = 0; i >= -6; i -= 0.25) {
    cilindricoES.innerHTML += '<option value="' + i + '">' + i + '</option>';
    cilindricoDR.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

if (parseFloat(esfericoOD.value) === 0 && parseFloat(esfericoOE.value) === 0 && parseFloat(cilindricoDR.value) === 0 && parseFloat(cilindricoES.value) === 0) {
    ResultadoLente.innerHTML = "Por favor, insira os valores acima para descobrir o tipo de lente"
}

console.log()

esfericoOD.addEventListener("change", e => {
    if ((parseFloat(cilindricoES.value) !== 0) || (parseFloat(cilindricoDR.value) !== 0)) {
        if ((parseFloat(e.target.value) <= -3 && parseFloat(e.target.value) >= -10) && (parseFloat(esfericoOE.value) <= -3 && parseFloat(esfericoOE.value) >= -10) && ((parseFloat(cilindricoES.value) >= -2) && (parseFloat(cilindricoDR.value) >= -2))) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(e.target.value) <= 0 && parseFloat(e.target.value) >= -15) && (parseFloat(esfericoOE.value) <= 0 && parseFloat(esfericoOE.value) >= -15) && ((parseFloat(cilindricoES.value) >= -5) && (parseFloat(cilindricoDR.value) >= -5))) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    } else {
        if ((parseFloat(e.target.value) <= -3 && parseFloat(e.target.value) >= -12) && (parseFloat(esfericoOE.value) <= -3 && parseFloat(esfericoOE.value) >= -12)) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(e.target.value) <= 0 && parseFloat(e.target.value) >= -15) && (parseFloat(esfericoOE.value) <= 0 && parseFloat(esfericoOE.value) >= -15)) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    }

    if (parseFloat(esfericoOD.value) === 0 && parseFloat(esfericoOE.value) === 0 && parseFloat(cilindricoDR.value) === 0 && parseFloat(cilindricoES.value) === 0) {
        ResultadoLente.innerHTML = "Por favor, insira os valores acima para descobrir o tipo de lente"
    }

});
esfericoOE.addEventListener("change", e => {
    if ((parseFloat(cilindricoES.value) !== 0) || (parseFloat(cilindricoDR.value) !== 0)) {
        if ((parseFloat(e.target.value) <= -3 && parseFloat(e.target.value) >= -10) && (parseFloat(esfericoOD.value) <= -3 && parseFloat(esfericoOD.value) >= -10) && ((parseFloat(cilindricoES.value) >= -2) && (parseFloat(cilindricoDR.value) >= -2))) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(e.target.value) <= 0 && parseFloat(e.target.value) >= -15) && (parseFloat(esfericoOD.value) <= 0 && parseFloat(esfericoOD.value) >= -15) && ((parseFloat(cilindricoES.value) >= -5) && (parseFloat(cilindricoDR.value) >= -5))) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    } else {
        if ((parseFloat(e.target.value) <= -3 && parseFloat(e.target.value) >= -12) && (parseFloat(esfericoOD.value) <= -3 && parseFloat(esfericoOD.value) >= -12)) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(e.target.value) <= 0 && parseFloat(e.target.value) >= -15) && (parseFloat(esfericoOD.value) <= 0 && parseFloat(esfericoOD.value) >= -15)) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    }
    if (parseFloat(esfericoOD.value) === 0 && parseFloat(esfericoOE.value) === 0 && parseFloat(cilindricoDR.value) === 0 && parseFloat(cilindricoES.value) === 0) {
        ResultadoLente.innerHTML = "Por favor, insira os valores acima para descobrir o tipo de lente"
    }

});

cilindricoES.addEventListener("change", e => {
    if ((parseFloat(e.target.value) !== 0) || (parseFloat(cilindricoDR.value) !== 0)) {
        if ((parseFloat(esfericoOE.value) <= -3 && parseFloat(esfericoOE.value) >= -10) && (parseFloat(esfericoOD.value) <= -3 && parseFloat(esfericoOD.value) >= -10) && ((parseFloat(e.target.value) >= -2) && (parseFloat(cilindricoDR.value) >= -2))) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(esfericoOE.value) <= 0 && parseFloat(esfericoOE.value) >= -15) && (parseFloat(esfericoOD.value) <= 0 && parseFloat(esfericoOD.value) >= -15) && ((parseFloat(e.target.value) >= -5) && (parseFloat(cilindricoDR.value) >= -5))) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    } else {
        if ((parseFloat(esfericoOE.value) <= -3 && parseFloat(esfericoOE.value) >= -12) && (parseFloat(esfericoOD.value) <= -3 && parseFloat(esfericoOD.value) >= -12)) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(esfericoOE.value) <= 0 && parseFloat(esfericoOE.value) >= -15) && (parseFloat(esfericoOD.value) <= 0 && parseFloat(esfericoOD.value) >= -15)) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    }
    if (parseFloat(esfericoOD.value) === 0 && parseFloat(esfericoOE.value) === 0 && parseFloat(cilindricoDR.value) === 0 && parseFloat(cilindricoES.value) === 0) {
        ResultadoLente.innerHTML = "Por favor, insira os valores acima para descobrir o tipo de lente"
    }

});

cilindricoDR.addEventListener("change", e => {
    if ((parseFloat(cilindricoES.value) !== 0) || (parseFloat(e.target.value) !== 0)) {
        if ((parseFloat(esfericoOE.value) <= -3 && parseFloat(esfericoOE.value) >= -10) && (parseFloat(esfericoOD.value) <= -3 && parseFloat(esfericoOD.value) >= -10) && ((parseFloat(cilindricoES.value) >= -2) && (parseFloat(e.target.value) >= -2))) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(esfericoOE.value) <= 0 && parseFloat(esfericoOE.value) >= -15) && (parseFloat(esfericoOD.value) <= 0 && parseFloat(esfericoOD.value) >= -15) && ((parseFloat(cilindricoES.value) >= -5) && (parseFloat(e.target.value) >= -5))) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    } else {
        if ((parseFloat(esfericoOE.value) <= -3 && parseFloat(esfericoOE.value) >= -12) && (parseFloat(esfericoOD.value) <= -3 && parseFloat(esfericoOD.value) >= -12)) {
            ResultadoLente.innerHTML = "sua lente é: <b>prime</b>"
        } else if ((parseFloat(esfericoOE.value) <= 0 && parseFloat(esfericoOE.value) >= -15) && (parseFloat(esfericoOD.value) <= 0 && parseFloat(esfericoOD.value) >= -15)) {
            ResultadoLente.innerHTML = "sua lente é: <b>Vision</b>"
        }
    }
    if (parseFloat(esfericoOD.value) === 0 && parseFloat(esfericoOE.value) === 0 && parseFloat(cilindricoDR.value) === 0 && parseFloat(cilindricoES.value) === 0) {
        ResultadoLente.innerHTML = "Por favor, insira os valores acima para descobrir o tipo de lente"
    }

});