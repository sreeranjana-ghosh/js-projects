const currency1 = document.getElementById('currency1');
const currency2 = document.getElementById('currency2');
const amount1 = document.getElementById('amount1');
const amount2 = document.getElementById('amount2');
const rateEle = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch currency rate and update the dom
const calculate = () => {
    const curr1 = currency1.value;
    const curr2 = currency2.value;

    fetch(`https://v6.exchangerate-api.com/v6/553b52ca2251b0bbdddc165b/latest/${curr1}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            const rate = data.conversion_rates[curr2];
            rateEle.innerText = `1 ${curr1} = ${rate} ${curr2}`;
            amount2.value = (amount1.value * rate).toFixed(2);
        });
}



currency1.addEventListener('change', calculate);
currency2.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
amount2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();

})

calculate();