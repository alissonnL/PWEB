let num1 = parseFloat(prompt("número 1:"));
let num2 = parseFloat(prompt("número 2:"));

alert(`soma: ${(num1 + num2)}`);
alert(`subtração (primeiro pelo segundo): ${(num1 - num2)}`);
alert(`multiplicação: ${(num1 * num2).toFixed(2)}`);
alert(`divisão (primeiro pelo segundo): ${(num1 / num2).toFixed(2)}`);
alert(`resto da divisão: ${(num1 % num2)}`);