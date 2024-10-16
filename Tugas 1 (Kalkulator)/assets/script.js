let input = "";
let output = "0";

function appendNumber(number) {
    input += number;
    document.getElementById('inputDisplay').innerText = input;
}

function appendOperator(operator) {
    input += "" + operator + "";
    document.getElementById('inputDisplay').innerText = input;
}

function clearAll() {
    input = "";
    output = "0";
    document.getElementById('inputDisplay').innerText = input;
    document.getElementById('outputDisplay').innerText = output;
}

function calculateResult() {
    try {
        input = input.replace('^', '**');
        input = input.replace(/,/g, '.');
        if (/[\+\-\*\/\.]{2,}/.test(input) || /^[\.\+\-\*\/]/.test(input)) {
            throw new Error('Invalid input');
        }
        output = eval(input);
        document.getElementById('outputDisplay').innerText = output;
        input = "";
    } catch (e) {
        document.getElementById('outputDisplay').innerText = "Error";
    }
}

