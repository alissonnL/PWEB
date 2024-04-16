class Pessoa {
    constructor(idade, sexo, opiniao) {
        this.idade = idade;
        this.sexo = sexo;
        this.opiniao = opiniao;
    }
}

let pesquisas = [];
mediaIdade = 0;
var contadorOpiniao1 = 0;
var pctOtimoBom = 0;
var totalEntrevistados = 0;

for (let i = 0; i < 45; i++) {
    pesquisas[i] = new Pessoa(
        parseInt(
            prompt(
                `Idade do entrevistado nº ${i + 1}:`
            )
        ),
        prompt(
            `Sexo do entrevistado nº ${i + 1}:`
        ),
        parseInt(
            prompt(
                `Opinião (entre 1 e 4) do entrevistado nº ${i + 1}:`
            )
        )
    );
    mediaIdade += pesquisas[i].idade;

    if(pesquisas[i].opiniao === 1){
        contadorOpiniao1 += 1;
    }else if(pesquisas[i].opiniao == 3 || pesquisas[i].opiniao == 4){
        pctOtimoBom += 1;
    }

    if((String(pesquisas[i].sexo).toUpperCase() === "M") || (String(pesquisas[i].sexo).toUpperCase() == "F"))
    totalEntrevistados += 1;
}
mediaIdade /= pesquisas.length;
pctOtimoBom /= pesquisas.length / 100;

let maiorIdade = 0;
let menorIdade = pesquisas[0].idade;

for(let i = 0; i < pesquisas.length; i++){
    if(pesquisas[i].idade > maiorIdade)
    maiorIdade = pesquisas[i].idade;

    if(pesquisas[i].idade < menorIdade)
    menorIdade = pesquisas[i].idade;
}

alert(`Média de idade dos entrevistados: ${mediaIdade}\n` + 
`Idade da pessoa mais velha entrevistada: ${maiorIdade}\n` +
`Idade da pessoa mais nova entrevistada: ${menorIdade}\n` +
`Número de respostas "Péssimo": ${contadorOpiniao1}\n` +
`Porcentagem de respostas "Ótimo" ou "Bom": ${pctOtimoBom}%\n` +
`Número total de mulheres e homens entrevistados: ${totalEntrevistados}\n`
);
