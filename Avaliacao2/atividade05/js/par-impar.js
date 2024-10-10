function verificarNumero() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    if (numero === "") {
        resultado.textContent = "Por favor, insira um número.";
        resultado.style.color = "red";
        return;
    }

    const numeroInt = parseInt(numero);

    if (isNaN(numeroInt)) {
        resultado.textContent = "Entrada inválida. Por favor, insira um número válido.";
        resultado.style.color = "red";
        return;
    }

    if (numeroInt % 2 === 0) {
        resultado.textContent = `O número ${numeroInt} que foi digitado é Par.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `O número ${numeroInt} que foi digitado é Ímpar.`;
        resultado.style.color = "blue";
    }
    document.getElementById("numero").value = null;
}