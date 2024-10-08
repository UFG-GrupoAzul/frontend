function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function calcularNotaAluno() {
    let nomeAluno = document.getElementById("nomeAluno").value;
    let disciplina = document.getElementById("disciplina").value;
    
    let nota1 = parseFloat(document.getElementById("nota1").value.replace(',', '.'));
    let nota2 = parseFloat(document.getElementById("nota2").value.replace(',', '.'));

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, insira notas válidas.");
        return;
    }

    let media = calcularMedia(nota1, nota2);

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <strong>Nome do Aluno:</strong> ${nomeAluno} <br>
        <strong>Disciplina:</strong> ${disciplina} <br>
        <strong>Nota 1:</strong> ${nota1.toFixed(2)} <br>
        <strong>Nota 2:</strong> ${nota2.toFixed(2)} <br>
        <strong>Média:</strong> ${media.toFixed(2)}
    `;
}
