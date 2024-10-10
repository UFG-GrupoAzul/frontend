let operacao = "";


function getValor() {
    let numero = parseInt(document.getElementById("numero").value);
    if (!isValid(numero)) {
        alert("O dado informado não é válido!");
        return;
    }

    return numero;
}

function tabuadaAdicao() {
    let resultSoma = new Array(10);
    let valor = getValor();
    operacao = "adição";

    if (!isNaN(valor)) {
        for (let i = 0; i < 10; i++) {
            resultSoma[i] = valor + (i + 1);
        }

        printResultTabuada(resultSoma, valor);
    }
}


function tabuadaSubtracao() {
    let resultSubtracao = new Array(10);
    let valor = getValor();
    operacao = "subtração";

    if (!isNaN(valor)) {
        for (let i = 0; i < 10; i++) {
            resultSubtracao[i] = (i + valor + 1) - valor;
        }
        printResultTabuada(resultSubtracao, valor);
    }
}


function tabuadaMultiplicacao() {
    let resultMultiplicacao = new Array(10);
    let valor = getValor();
    operacao = "multiplicação";

    if (!isNaN(valor)) {
        for (let i = 0; i < 10; i++) {
            resultMultiplicacao[i] = valor * (i + 1);
        }

        printResultTabuada(resultMultiplicacao, valor);
    }
}


function tabuadaDivisao() {
    let resultDivisao = new Array(10);
    let valor = getValor();
    let j = 1;
    operacao = "divisão";

    if (valor == 0) {
        alert("Impossível realizar divisão por zero!")
        return;
    }

    if (!isNaN(valor)) {
        for (let i = 0; i < 10; i++) {
            resultDivisao[i] = (valor * j) / valor;
            j++;
        }

        printResultTabuada(resultDivisao, valor);
    }
}

function printResultTabuada(resultTabuada, numero) {

    let opAjustada = ajusteOperacao(operacao);
    let resultDiv = document.getElementById("resultTabuada");
    let tabuada = "";

    if (operacao == "adição" || operacao == "multiplicação") {
        for (let i = 0; i < 10; i++) {
            tabuada = tabuada + `${i + 1} ${opAjustada} ${numero} = ${resultTabuada[i]}\n`;
        }
    }
    else if(operacao == "subtração") {
        for (let i = 0; i < 10; i++) {
            tabuada = tabuada + `${i + numero + 1} ${opAjustada} ${numero} = ${resultTabuada[i]}\n`;
        }
    }
    else if (operacao == "divisão") {
        let j = 1;
        for (let i =0; i < 10; i++) {
            tabuada = tabuada + `${numero * j} ${opAjustada} ${numero} = ${resultTabuada[i]}\n`;
            j++;
        }
    }

    let tabuadaAjustada = tabuada.replace(/\n/g, "<br>")
    resultDiv.innerHTML = tabuadaAjustada;
}

function ajusteOperacao(operacao) {
    switch (operacao) {
        case "adição": return "+";
        case "subtração": return "-";
        case "multiplicação": return "x";
        case "divisão": return "/"
        default: "operação não especificada"
    }
}

function isValid(valor) {
    if (isNaN(valor) || (valor < 0) || (!Number.isInteger(valor))) {
        return false;
    }
    return true;
}