let conta = document.querySelector("#display")
let operador;

function add_numero(n) {
    conta.value = conta.value + n;
}

function add_operador(op) {
    conta.value = conta.value + op;
    operador = op;
}

document.addEventListener('keydown', function(event) {
    if (isNaN(event.key) == false || event.key == "/" || event.key == "*" || event.key == "+" || event.key == "-") {
        conta.value = conta.value + event.key;
    }
    if((event.key).includes("/") == true || (event.key).includes("*") || (event.key).includes("+") || (event.key).includes("-")){
        operador = event.key;
    }
    if (event.key == 'Enter') {
        total();
    }
})

function total(){
    let contaAnterior = document.querySelector("#history");
    contaAnterior.innerHTML = conta.value;

    numero = conta.value.split(operador);

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

