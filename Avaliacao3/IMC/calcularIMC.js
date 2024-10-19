function limparCampos() {
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
}

function calculadora() {
  let alturacm = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  altura = alturacm / 100;

  if (isNaN(altura) || isNaN(peso)) {
    alert("Somente valores numéricos!");
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);

  document.querySelector("#resultado").innerHTML = "Seu IMC é: " + imc;

  if (imc < 16) {
    situacao = "Magreza grave";
    grauObesidade = "III";
  } else if (imc >= 16 && imc <= 16.9) {
    situacao = "Magreza moderada";
    grauObesidade = "II";
  } else if (imc >= 17 && imc <= 18.4) {
    situacao = "Magreza leve";
    grauObesidade = "I";
  } else if (imc >= 18.5 && imc <= 24.9) {
    situacao = "Saudável";
    grauObesidade = "0";
  } else if (imc >= 25 && imc <= 29.9) {
    situacao = "Sobrepeso";
    grauObesidade = "I";
  } else if (imc >= 30 && imc <= 34.9) {
    situacao = "Obesidade grau I";
    grauObesidade = "I";
  } else if (imc >= 35 && imc <= 39.9) {
    situacao = "Obesidade grau II";
    grauObesidade = "II";
  } else {
    situacao = "Obesidade grau III";
    grauObesidade = "III";
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `   <h4>Resultado do IMC:</h4>
        <p>Seu IMC é: ${imc}</p>
        <p>Situação: ${situacao}</p>
        <p>Grau de Obesidade: ${grauObesidade}</p>  
        
        <h4>Tabela de Classificação do IMC</h4>
        <table id="tabela-imc" border="1">
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th>Grau de Obesidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>&lt; 16</td>
                    <td>Magreza grave</td>
                    <td>III</td>
                </tr>
                <tr>
                    <td>16 - 16.9</td>
                    <td>Magreza moderada</td>
                    <td>II</td>
                </tr>
                <tr>
                    <td>17 - 18.4</td>
                    <td>Magreza leve</td>
                    <td>I</td>
                </tr>
                <tr>
                    <td>18.5 - 24.9</td>
                    <td>Saudável</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>25 - 29.9</td>
                    <td>Sobrepeso</td>
                    <td>I</td>
                </tr>
                <tr>
                    <td>30 - 34.9</td>
                    <td>Obesidade grau I</td>
                    <td>I</td>
                </tr>
                <tr>
                    <td>35 - 39.9</td>
                    <td>Obesidade grau II</td>
                    <td>II</td>
                </tr>
                <tr>
                    <td>&gt; 40</td>
                    <td>Obesidade grau III</td>
                    <td>III</td>
                </tr>
            </tbody>
        </table>`;
}

document.getElementById("limpar").addEventListener("click", limparCampos);
document.getElementById("calcular").addEventListener("click", calculadora);
