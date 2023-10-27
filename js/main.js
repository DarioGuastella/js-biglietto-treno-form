const kmtariff = 0.21
let kmInput  = document.querySelector("#kilometers");
let nameInput = document.querySelector("#username");
let ageInput = document.querySelector("#ageselect");
let btn = document.querySelector("#generateBtn");
 

btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + nameInput.value);
    console.log("L'utente ha scritto: " + kmInput.value);
    console.log("L'utente ha scritto: " + ageInput.value);
    let price = (Number(kmInput.value) * kmtariff);
    if (ageInput.value=="senior") {
        price = price * 0.6;
        console.log("Sei vecchio");
    } else if (ageInput.value=="underage") {
        console.log("Sei minorenne");
    } else {
        console.log("Sei adulto");

    }
});

