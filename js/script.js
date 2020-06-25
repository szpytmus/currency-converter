

let currencyElement1 = document.querySelector(".js-currency-1");
let currencyElement2 = document.querySelector(".js-currency-2");
let quantityElement = document.querySelector(".js-quantity");
let resultElement = document.querySelector(".js-result");
let submitElement = document.querySelector(".js-submit");
let formElement = document.querySelector(".form");



function showTable(){
    var tableElement = document.getElementById("currencyTable");
    tableElement.classList.toggle("table__hidden");
}



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const euroBuy = 4.3914;
    const euroSell = 4.4802;
    const dollarBuy = 3.8940;
    const dollarSell = 3.9726;
    const poundBuy = 4.8946;
    const poundSell = 4.9934;

    var quantity = quantityElement.value;
    var currency1 = currencyElement1.value;
    var currency2 = currencyElement2.value;
    

    switch (currency1) {
        case "PLN":
            switch (currency2) {
                case "EUR":
                    result = quantity / euroBuy;
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = quantity / dollarBuy;
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = quantity / poundBuy;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = quantity / 1;
                    resultElement.value = result.toFixed(2);
                    break;
            }
        break;
        case "EUR":
            switch (currency2) {
                case "EUR":
                    result = quantity / 1;
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = quantity / (dollarBuy / euroBuy);
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = quantity / (poundBuy / euroBuy);
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = quantity * euroSell;
                    resultElement.value = result.toFixed(2);
                    break;
            }
        break;
        case "USD":
            switch (currency2) {
                case "EUR":
                    result = quantity / (euroBuy / dollarBuy);
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = quantity / 1;
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = quantity / (poundBuy / dollarBuy);
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = quantity * dollarSell;
                    resultElement.value = result.toFixed(2);
                    break;
            }
        break;
        case "GBP":
            switch (currency2) {
                case "EUR":
                    result = quantity / (euroBuy / poundBuy);
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = quantity / (dollarBuy/poundBuy);
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = quantity / 1;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = quantity * poundSell;
                    resultElement.value = result.toFixed(2);
                    break;
            }
    }
});




