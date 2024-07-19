window.addEventListener('load', () => {
    let terminal = document.getElementById('terminal');
    let valor1 = '';
    let valor2 = '';
    let operacao = null;
    let resultado = null;

    const atualizarDisplay = (valor) => {
        if (terminal.innerText === '0') {
            terminal.innerText = valor;
        } else {
            terminal.innerText += valor;
        }
    };

    const limparDisplay = () => {
        terminal.innerText = '0';
    };

    const definirOperacao = (op) => {
        if (valor1 === '') {
            valor1 = terminal.innerText;
        } else if (valor1 !== '' && operacao && valor2 === '') {
            valor2 = terminal.innerText;
        }
        operacao = op;
        limparDisplay();
    };

    const calcularResultado = () => {
        if (valor1 !== '' && operacao) {
            valor2 = terminal.innerText;
            let num1 = parseFloat(valor1);
            let num2 = parseFloat(valor2);

            switch (operacao) {
                case 'multiplicacao':
                    resultado = num1 * num2;
                    break;
                case 'divisao':
                    resultado = num1 / num2;
                    break;
                case 'adicao':
                    resultado = num1 + num2;
                    break;
                case 'subtracao':
                    resultado = num1 - num2;
                    break;
                default:
                    break;
            }

            terminal.innerText = resultado;
            valor1 = resultado;
            valor2 = '';
            operacao = null;
        }
    };

    document.getElementById('multiplicacao').addEventListener('click', () => definirOperacao('multiplicacao'));
    document.getElementById('divisao').addEventListener('click', () => definirOperacao('divisao'));
    document.getElementById('adicao').addEventListener('click', () => definirOperacao('adicao'));
    document.getElementById('subtracao').addEventListener('click', () => definirOperacao('subtracao'));
    document.getElementById('igualdade').addEventListener('click', calcularResultado);
    document.getElementById('ce').addEventListener('click', () => {
        valor1 = '';
        valor2 = '';
        operacao = null;
        resultado = null;
        limparDisplay();
    });
    document.getElementById('c').addEventListener('click', limparDisplay);
    document.getElementById('backspace').addEventListener('click', () => {
        terminal.innerText = terminal.innerText.slice(0, -1) || '0';
    });

    const adicionarNumero = (numero) => {
        atualizarDisplay(numero);
    };

    document.getElementById('botao_00').addEventListener('click', () => adicionarNumero('0'));
    document.getElementById('botao_01').addEventListener('click', () => adicionarNumero('1'));
    document.getElementById('botao_02').addEventListener('click', () => adicionarNumero('2'));
    document.getElementById('botao_03').addEventListener('click', () => adicionarNumero('3'));
    document.getElementById('botao_04').addEventListener('click', () => adicionarNumero('4'));
    document.getElementById('botao_05').addEventListener('click', () => adicionarNumero('5'));
    document.getElementById('botao_06').addEventListener('click', () => adicionarNumero('6'));
    document.getElementById('botao_07').addEventListener('click', () => adicionarNumero('7'));
    document.getElementById('botao_08').addEventListener('click', () => adicionarNumero('8'));
    document.getElementById('botao_09').addEventListener('click', () => adicionarNumero('9'));
});



