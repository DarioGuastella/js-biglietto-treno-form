const kmtariff = 0.21
let kmInput  = document.querySelector("#kilometers");
let nameInput = document.querySelector("#username");
let ageInput = document.querySelector("#ageselect");
let btn = document.querySelector("#generateBtn");
 

btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + nameInput.value);
    console.log("L'utente ha scritto: " + kmInput.value);
    console.log("L'utente ha scritto: " + ageInput.value);
    
    if (ageInput.value=="senior") {
        console.log((Number(kmInput.value) * kmtariff) * 0.6);
    } else if (ageInput.value=="underage") {
        console.log((Number(kmInput.value) * kmtariff) * 0.8);
    } else {
        console.log(Number(kmInput.value) * kmtariff);

    }
});

