let aluno = prompt("Nome do aluno:");
let nota1 = parseFloat(prompt("Primeira nota:"));
let nota2 = parseFloat(prompt("Segunda nota:"));
let nota3 = parseFloat(prompt("Terceira nota"));

alert(`Média aritmética do(a) ${aluno} é: ${((nota1 + nota2 + nota3) / 3).toFixed(2)}`);