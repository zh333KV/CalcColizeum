const input1 = document.getElementById("price-per-hour");
const input2 = document.getElementById("number-of-minutes");
const btn1 = document.getElementById("count");
const result1 = document.getElementById("result");
const input3 = document.getElementById("price");
const input4 = document.getElementById("percent");
const btn2 = document.getElementById("count2");
const result2 = document.getElementById("result2");

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

btn2.addEventListener('click', () => {
    const value1 = parseFloat(input3.value) || 0;
    const value2 = parseFloat(input4.value) || 0;

    const ans = value1*value2/100;

    result2.textContent = ans.toFixed(2);
});
