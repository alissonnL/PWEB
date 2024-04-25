function Retangulo(x,y){
    this.base = x;
    this.altura = y;
    this.calcArea = function (){
        return this.base * this.altura;
    }
}

var retangulo = new Retangulo(
    parseFloat(prompt("Digite um valor de base:")),
    parseFloat(prompt("Digite um valor de altura"))
);

alert("Área do retângulo: "+ retangulo.calcArea());

//atv2

class Conta{
    constructor(){
        this.nomeCorrentista;
        this.banco;
        this.numeroConta;
        this.saldo;
    }
    
    setNome(nome){
        this.nomeCorrentista = nome;
    }

    getNome(){
        return this.nomeCorrentista;
    }

    setBanco(banco){
        this.banco = banco;
    }

    getBanco(){
        return this.banco;
    }

    setConta(numero){
        this.numeroConta = numero;
    }

    getConta(){
        return this.numeroConta;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }

    getSaldo(){
        return this.saldo;
    }
}

class Corrente extends Conta{
    constructor(){
        super();
        this.saldoEspecial;
    }
    setSaldoEspecial(saldo){
        this.saldoEspecial = saldo;
    }
    getSaldoEspecial(){
        return this.saldoEspecial;
    }
}

class Poupanca extends Conta{
    constructor(){
        super();
        this.juros;
        this.dataVencimento;
    }

    setJuros(juros){
        this.juros = juros;
    }

    getJuros(){
        return this.juros;
    }

    setVencimento(data){
        this.dataVencimento = data;
    }

    getVencimento(){
        return this.dataVencimento;
    }
}

//prompt
var corrente, poupanca;

corrente = new Corrente();
corrente.setNome(prompt("CONTA CORRENTE\nDigite o nome do detentor da conta:"));
corrente.setBanco(prompt("Digite o nome do banco:"));
corrente.setConta(parseInt(prompt("Digite o número da conta:")));
corrente.setSaldo(parseFloat(prompt("Digite o saldo:")));
corrente.setSaldoEspecial(parseFloat(prompt("Valor saldo especial:")));

alert(`CONTA CORRENTE\nNome do detentor:${corrente.getNome()}
Banco:${corrente.getBanco()}
Conta:${corrente.getConta()}
Saldo:${corrente.getSaldo()}
Valor de saldo especial:${corrente.getSaldoEspecial()}`)

poupanca = new Poupanca();
poupanca.setNome(prompt("CONTA POUPANÇA\nDigite o nome do detentor da conta:"));
poupanca.setBanco(prompt("Digite o nome do banco:"));
poupanca.setConta(parseInt(prompt("Digite o número da conta:")));
poupanca.setSaldo(parseFloat(prompt("Digite o saldo:")));
poupanca.setJuros(parseFloat(prompt("Juros da conta poupança:")));
poupanca.setVencimento(prompt("Data de vencimento:"));

alert(`CONTA POUPANÇA\nNome do detentor:${poupanca.getNome()}
Banco:${poupanca.getBanco()}
Conta:${poupanca.getConta()}
Saldo:${poupanca.getSaldo()}
Juros:${poupanca.getJuros()}
Data de vencimento:${poupanca.getVencimento()}`);