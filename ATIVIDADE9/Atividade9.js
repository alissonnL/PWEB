while(true){
    let altura = parseFloat(prompt("Digite sua altura:"));
    let peso = parseFloat(prompt("Digite seu peso:"));
    
    alert(calcIMC(altura,peso));

}

function calcIMC(altura, peso){
    imc = peso / Math.pow(altura, 2);

    if (imc < 18.5) {
        return "Classificação: MAGREZA\nObesidade(Grau): 0";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Classificação: NORMAL\nObesidade(Grau): 0";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Classificação: SOBREPESO\nObesidade(Grau): I";
    } else if (imc >= 30.0 && imc <= 39.9) {
        return "Classificação: OBESIDADE\nObesidade(Grau): II";
    } else if (imc >= 40) {
        return "Classificação: OBESIDADE GRAVE\nObesidade(Grau): III";
    }
}