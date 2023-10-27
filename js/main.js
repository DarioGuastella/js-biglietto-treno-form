const kmtariff = 0.21
let nameInput = document.querySelector("#username");
let kmInput = document.querySelector("#kilometers");
let ageInput = document.querySelector("#ageselect");
let btn = document.querySelector("#generateBtn");
 

btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + nameInput.value);
    console.log("L'utente ha scritto: " + kmInput.value);
    console.log("L'utente ha scritto: " + ageInput.value);
    if (ageInput.value=="senior") {
        console.log("Sei vecchio");
    } else if (ageInput.value=="underage") {
        console.log("Sei minorenne");
    } else {
        console.log("Sei adulto");

    }
});

