const kmtariff = 0.21
let kmInput  = document.querySelector("#kilometers");
let nameInput = document.querySelector("#username");
let ageInput = document.querySelector("#ageselect");
let btn = document.querySelector("#generateBtn");
let discount = document.getElementById("discountId");
let carriageId = document.getElementById("carriage");
let priceId = document.getElementById("priceId");
let codeId = document.getElementById("codeCp");
btn.addEventListener("click", function() {
    let carriage = parseInt((Math.random() * 9) + 1);
    let cpCode = parseInt((Math.random() * 90000) + 1);
    document.getElementById("nameId").innerHTML = nameInput.value;
    if (ageInput.value=="senior") {
        discount.innerHTML = "Sconto Over 65";
        carriageId.innerHTML = carriage;
        codeId.innerHTML = cpCode;
        priceId.innerHTML = ((Number(kmInput.value) * kmtariff) * 0.6).toFixed(2) + " €";
    } else if (ageInput.value=="underage") {
        discount.innerHTML = "Sconto Under 18";
        carriageId.innerHTML = carriage;
        codeId.innerHTML = cpCode;
        priceId.innerHTML = ((Number(kmInput.value) * kmtariff) * 0.8).toFixed(2) + " €";
    } else {
        discount.innerHTML = "Biglietto Standard";
        carriageId.innerHTML = carriage;
        codeId.innerHTML = cpCode;
        priceId.innerHTML = (Number(kmInput.value) * kmtariff).toFixed(2) + " €";

    }
});

