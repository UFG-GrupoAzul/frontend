function contarAteN() {
    let n = parseInt(document.getElementById("nValue").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(n) || n <= 0) {
        resultado.innerHTML = `Por favor, insira um número válido maior que 0.`;
        return;
    }

    let contagem = [];
    for (let i = 1; i <= n; i++) {
        contagem.push(i);
    }

    resultado.innerHTML = `Contagem de 1 até ${n} é: ${contagem.join(", ")}`;
}
