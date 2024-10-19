function calculadora() {
    const operador1 = parseFloat(document.getElementById("numero1").value)
    const operador2 = parseFloat(document.getElementById("numero2").value)
    const operacao = document.getElementById("operadores").value

    console.log(operacao)

    let resultado;

    if (isNaN(operador1) || isNaN(operador2)) {
        alert("Por favor, insira ambos os operadores.");
        return;
    }

    if (operacao === "divisao" && operador2 === 0) {
        alert("Não tem divisão por zero.");
        return;
    }

    switch(operacao)
    {
        case "soma":
            resultado = (operador1 + operador2)
            break
        case "subtracao":
            resultado =(operador1 - operador2)
            break
        case "divisao":
            resultado = (operador1 / operador2)
            break
        case "multiplicacao":
            resultado = (operador1 * operador2)
            break

    }

    document.querySelector("#resultado").value = resultado

}
<<<<<<< Updated upstream
document.getElementById("calcular").addEventListener("click",calculadora)
=======

document.getElementById("calcular").addEventListener("click", calculadora);
>>>>>>> Stashed changes
