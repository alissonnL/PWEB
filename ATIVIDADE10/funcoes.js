
let maior = (n1, n2, n3) => alert(Math.max(n1, n2, n3));

let tipoTriangulo = (a, b, c) => {
    if (
        a < b + c &&
        b < a + c &&
        c < a + b
    ) {
        if (a === b && b === c)
            return "Triângulo equilátero";
        else if (a === b || a === c || b === c)
            return "Triângulo isósceles";
        else
            return "Triângulo escaleno"
    }
    else {
        return "As medidas não formam um triângulo!"
    }
}

function crescente() {
    let arr = [
        Number(
            prompt(
                `2.Organizar números\n\n
Digite o primeiro número:`
            )
        ),
        Number(
            prompt(
                `Digite o segundo número:`
            )
        ),
        Number(
            prompt(
                `Digite o terceiro número:`
            )
        )
    ];
    return alert(arr.sort(function (a, b) { return a - b }));
}

function isPalindromo(str) {
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (String(str[i]).toUpperCase() === String(str[j]).toUpperCase())
            return alert(`É palíndromo`);
        else
            return alert(`Não é palíndromo`);
    }
}

//chamar funções

while (true) {
    maior(
        Number(
            prompt(
                `1.Maior entre 3 números\n\n
Digite o primeiro número:`
            )
        ),
        Number(
            prompt(
                `Digite o segundo número:`
            )
        ),
        Number(
            prompt(
                `Digite o terceiro número:`
            )
        )
    );

    crescente();

    isPalindromo(prompt(`3.Verificar palíndromo`));

    alert(
        tipoTriangulo(
            Number(
                prompt(
                    `4.Verificar tipo de triângulo\n\n
Digite o valor do lado A:
            `
                )
            ),
            Number(
                prompt(
                    `Digite o valor do lado B:`
                )
            ),
            Number(
                prompt(
                    `Digite o valor da base:`
                )
            )
        )
    )
}
