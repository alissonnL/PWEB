let jogador;

while(true){
switch(parseFloat(prompt(
    `Escolha uma opção e digite o respectivo número: \n
    1.Pedra\n
    2.Papel\n
    3.Tesoura\n`
    ))){
    case 1:
        jogador = "Pedra";
        break;
    case 2:
        jogador = "Papel";
        break;
    case 3:
        jogador = "Tesoura";
        break;
}

let maquina = jogar();

alert(`Jogador escolheu: ${jogador}\n
Máquina escolheu: ${maquina}`);

if(maquina == jogador){
    alert("Empate");
} else{
switch (jogador){
    case "Pedra":
        maquina == "Papel"?
            alert("Papel cobre a pedra\nMáquina venceu!!")
            : alert("Pedra quebra tesoura\nJogador venceu!!");
        break;
    case "Papel":
        maquina == "Tesoura"?
        alert("Tesoura corta papel\nMáquina venceu!!")
        : alert("Papel cobre a pedra\nJogador venceu!!");
        break;
    case "Tesoura":
        maquina == "Pedra"?
        alert("Pedra quebra tesoura\nMáquina venceu!!")
        :alert("Tesoura corta papel\nJogador venceu!!");
}
}

function jogar(){
    let value = Math.floor((Math.random() * 3) + 1)
    if(value == 1){
        return "Pedra";
    }else if(value == 2){
        return "Papel";
    }else{
        return "Tesoura";
    }
}
}