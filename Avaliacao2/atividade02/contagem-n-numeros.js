function contarAteN() {
    let n = parseInt(document.getElementById("nValue").value);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido maior que 0.");
        return;
    }

    let contagem = [];
    for (let i = 1; i <= n; i++) {
        contagem.push(i);
    }

    document.getElementById("resultado").innerHTML = `Contagem de 1 até ${n} é: ${contagem.join(", ")}`;
}
