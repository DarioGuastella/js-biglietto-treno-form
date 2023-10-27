 let nameInput = document.querySelector("#username");
 let btn = document.querySelector("#generateBtn");

 btn.addEventListener("click", function() {
     console.log("L'utente ha scritto: " + nameInput.value);
 });

