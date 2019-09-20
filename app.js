import isEven from './is-even.js';

const testNumber = () => {
    const numberInput = document.getElementById('number-input');
    const resultParagraph = document.getElementById('result');

    const number = parseInt(numberInput.value);
    const result = isEven(number);

    if(result) {
        resultParagraph.textContent = 'even';
    } 
    else {
        resultParagraph.textContent = 'odd';
    }

}

window.testNumber = testNumber;