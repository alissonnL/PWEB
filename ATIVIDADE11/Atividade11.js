var funcionario = new Object();
        funcionario.matricula = 16372;
        funcionario.nome = "Christopher Johnson";
        funcionario.funcao = "Repositor";

        alert(`Matrícula: ${funcionario.matricula}\n
Nome: ${funcionario.nome}\nFunção: ${funcionario.funcao}`);

function Funcionario1(matricula, nome, funcao){
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
    this.print = function(){
        return `Matrícula: ${this.matricula}
Nome: ${this.nome}
Função: ${this.funcao}        
`
    }
}

var funcionario1 = new Funcionario1(9731, "Maria Manivela", "Estoquista");
alert(funcionario1.print());

var funcionario2 = {
    matricula: 1824,
    nome: "Jackson Gusttavo Lima",
    funcao: "Operador de caixa"
};

alert(JSON.stringify(funcionario2));