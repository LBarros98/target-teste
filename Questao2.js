function pertenceFibonacci(num) {
    let a = 0, b = 1, temp;

    while (a < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (a === num) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
}

let numeroInformado = 21;
pertenceFibonacci(numeroInformado);

