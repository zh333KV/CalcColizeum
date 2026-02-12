const input1 = document.getElementById("price-per-hour");
const input2 = document.getElementById("number-of-minutes");
const btn1 = document.getElementById("count");
const result1 = document.getElementById("result");
const inputb = document.getElementById("price-before");
const btnb = document.getElementById("count-before");
const resultb = document.getElementById("result-before");
const inputa = document.getElementById("price-after");
const btna = document.getElementById("count-after");
const resulta = document.getElementById("result-after");

btn1.addEventListener('click', () => {
    const value1 = parseFloat(input1.value) || 0;
    const value2 = parseFloat(input2.value) || 0;

    const ans = value1/60*value2;

    result1.textContent = ans.toFixed(2);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    btn1.click(); 
    }
});

btnb.addEventListener('click', () => {
    const value1 = parseFloat(inputb.value) || 0;
    const discount = value1*25/100;
    const ans = value1 + discount;
    if (value1 < 15 || value1 > 60) {
        resultb.textContent = "Лимиты брадок";
    } else {
        btnb.innerText = "+ " + discount;
        resultb.textContent = ans.toFixed(2);
    }
});

btna.addEventListener('click', () => {
    const value1 = parseFloat(inputa.value) || 0;
    const ans = value1 / 1.25;
    const discount = value1 - ans;
    if (value1 < 18.75 || value1 > 75) {
        resulta.textContent = "Лимиты брадок";
    } else {
        resulta.textContent = ans.toFixed(2)+ " + " + discount.toFixed(2) + " = " + value1;
    }
});
