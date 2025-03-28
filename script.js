


function calcularImc() {
    // Entrada //
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    // Processamento //
    let valorImc = valorPeso / (valorAltura * valorAltura);
    let classificacaoImc = "";

    if (valorImc < 18.5) {
        classificacaoImc = "Magreza";
    }
    
    else if (valorImc >= 18.5 && valorImc <= 24.9) {
        classificacaoImc = "Normal";
    }

    else if (valorImc >= 25.0 && valorImc <= 29.9) {
        classificacaoImc = "Sobrepeso";
    }
    
    else if (valorImc >= 30.0 && valorImc <= 39.9) {
        classificacaoImc = "Obesidade";
    }
    
    else {
        classificacaoImc = "Obesidade Grave";
    }

    // Saída //
    document.getElementById("valorImc").textContent = "Seu IMC é: " + valorImc.toFixed(2) + " kg";
    document.getElementById("classificacaoImc").textContent = "Você está: " + classificacaoImc;
}


