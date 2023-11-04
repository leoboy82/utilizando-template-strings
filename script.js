function operacoesBasicas(a, b) {
    const soma = `${a} + ${b} = ${a + b}`;
    const subtracao = `${a} - ${b} = ${a - b}`;
    const multiplicacao = `${a} x ${b} = ${a * b}`;
    const divisao = `${a} / ${b} = ${a / b}`;

    console.log(soma);
    console.log(subtracao);
    console.log(multiplicacao);
    console.log(divisao);
}

// Exemplo de uso da função
operacoesBasicas(4, 5);