function fatorial(n){

    if (n === 0 || n === 1) 
        return 1
    else
        return n*fatorial(n-1)
    
}

function validaFatorial(){
    let n = document.getElementById('numero').value

    console.log(n)

    if (n === "" || n < 0 ) {
        document.getElementById('resultado').textContent = "Por favor, insira um número válido.";
        return;
    }

    if(n == 0){
        document.getElementById('resultado').textContent = `O fatorial de ${n} é 1.`
    }

    
    let resultado = fatorial(n)
    console.log("passou")
    document.getElementById('resultado').textContent = `O fatorial de ${n} é ${resultado}.`

        document.getElementById('resultado').textContent = `O fatorial de ${n} é ${resultado}.`



    
}