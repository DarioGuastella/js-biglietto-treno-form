const kmtariff = 0.21
let kmInput  = document.querySelector("#kilometers");
let nameInput = document.querySelector("#username");
let ageInput = document.querySelector("#ageselect");
let btn = document.querySelector("#generateBtn");
 

btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + nameInput.value);
    console.log("L'utente ha scritto: " + kmInput.value);
    console.log("L'utente ha scritto: " + ageInput.value);
    document.getElementById("nameId").innerHTML = nameInput.value;
    if (ageInput.value=="senior") {
        document.getElementById("discountId").innerHTML = "Sconto Over 65";
        document.getElementById("carriage").innerHTML = "5";
        document.getElementById("codeCp").innerHTML = "92911";
        document.getElementById("priceId").innerHTML = ((Number(kmInput.value) * kmtariff) * 0.6).toFixed(2) + " €";
    } else if (ageInput.value=="underage") {
        document.getElementById("discountId").innerHTML = "Sconto Under 18";
        document.getElementById("carriage").innerHTML = "5";
        document.getElementById("codeCp").innerHTML = "92911";
        document.getElementById("priceId").innerHTML = ((Number(kmInput.value) * kmtariff) * 0.8).toFixed(2) + " €";
    } else {
        document.getElementById("discountId").innerHTML = "Biglietto Standard";
        document.getElementById("carriage").innerHTML = "5";
        document.getElementById("codeCp").innerHTML = "92911";
        document.getElementById("priceId").innerHTML = (Number(kmInput.value) * kmtariff).toFixed(2) + " €";
        console.log(Number(kmInput.value) * kmtariff);

    }
});

