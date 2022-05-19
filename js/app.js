const inputName = document.querySelector("[name='nome-utente']");
const inputKm = document.querySelector("[name='km-utente']");
const inputEta = document.querySelector("[name='eta-utente']");

const prezzoBase = 0.21;
let prezzoBigliettoBase = parseInt(inputKm) * prezzoBase;
let prezzoBiglietto = prezzoBigliettoBase;
prezzoBiglietto = prezzoBiglietto.toFixed(2);

console.log("prezzo originale:", prezzoBiglietto);

const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function () {
    console.log("nome utente:", inputName.value);
    console.log("km utente:", inputKm.value);
    console.log("età utente:", inputEta.value);
});


if (inputEta < 18) {
    prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 20) / 100;
} else if (inputEta > 65) {
    prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 40) / 100;
}

const divPrezzoUtente = document.getElementById("prezzoUtente");
divPrezzoUtente.innerHTML = `${prezzoBiglietto} €`;

console.log("prezzo scontato:", prezzoBiglietto);