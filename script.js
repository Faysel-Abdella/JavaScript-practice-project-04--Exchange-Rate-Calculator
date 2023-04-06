const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
    .then((ans) => ans.json())
    .then((data) => {
      const rate = data.rates[currency_two];

      rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed;
    });
}

// Event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
// .then(res => res.json())
// .then(data => console.log(data));
// On their website they don't have https:// part of the link

// fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
