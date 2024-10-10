const hoje = new Date().toISOString().split('T')[0];


function calcularIdade() {
    const inputDataNascimento = document.getElementById('dataNascimento');
    const anoNascimento = inputDataNascimento.value;
    const resultado = document.getElementById("resultado");
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    if (!anoNascimento   || isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > new Date().getFullYear()){
        resultado.innerHTML = "<p>Por favor, insira um ano válido.</p>";
        return;
    }
    resultado.innerHTML = `<p>Quem nasceu em ${anoNascimento} irá completar ${anoAtual - anoNascimento} anos em ${anoAtual}.</p>`;
}

