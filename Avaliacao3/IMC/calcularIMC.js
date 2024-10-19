
    function limparCampos() {
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
    }

    function calculadora() {
        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);

        if (isNaN(altura) || isNaN(peso)) {
            alert("Por favor, preencha ambos os campos com valores numéricos.");
            return;
        }

        const imc = peso / (altura * altura);
        alert(`Seu IMC é: ${imc.toFixed(2)}`);
    }

    document.getElementById("limpar").addEventListener("click", limparCampos);
    document.getElementById("calcular").addEventListener("click", calculadora);
