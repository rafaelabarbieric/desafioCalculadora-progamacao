let conta = document.querySelector("#display")
let operador;

function add_numero(n) {
    conta.value = conta.value + n;
}

function add_operador(op) {
    conta.value = conta.value + op;
    operador = op;
}

function add_numero(n) {
    conta.value = conta.value + n;
}

function total(){
    let contaAnterior = document.querySelector("#history");
    contaAnterior.innerHTML = conta.value;

    numero = conta.value.split(operador);
    console.log(numero);

    switch (operador) {
        case "+":
            conta.value = Number(numero[0]) + Number(numero[1]);
            break;
    
        case "-":
            conta.value = Number(numero[0]) - Number(numero[1]);
            break;

        case "*":
            conta.value = Number(numero[0]) * Number(numero[1]);
            break;

        case "/":
            conta.value = Number(numero[0]) / Number(numero[1]);
            break;
    }
}

function limpar(){
    conta.value = "";
}