function convert(from, to, amount) {
  if (from === to) {
    alert("Cannot convert like currency to like currency");
    return;
  }

  fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      document.getElementById("result").innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
    })
}

function pop() {
  const fromSelect = document.getElementById("fromCurrency");
  const toSelect = document.getElementById("toCurrency");

  fetch('https://api.frankfurter.app/currencies')
    .then((resp) => resp.json())
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const optionFrom = document.createElement("option");
        optionFrom.value = key; 
        optionFrom.textContent = value;
        fromSelect.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = key;
        optionTo.textContent = value;
        toSelect.appendChild(optionTo);
      });
    })
}
pop();
