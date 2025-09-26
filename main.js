const input1 = document.getElementById("price-per-hour");
const input2 = document.getElementById("number-of-minutes");
const btn = document.getElementById("count");
const result = document.getElementById("result");

btn.addEventListener('click', () => {
    const value1 = parseFloat(input1.value) || 0;
    const value2 = parseFloat(input2.value) || 0;

    const ans = value1/60*value2;

    result.textContent = ans.toFixed(2);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    btn.click(); 
    }
});
