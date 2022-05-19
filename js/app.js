
// console.log("prezzo originale:", prezzoBiglietto);

let submitButtonUser = document.getElementById("submitButton")

submitButtonUser.addEventListener("click", function () {
    let inputName = document.querySelector(".nome-utente");
    let inputKm = document.querySelector(".km-utente");
    let inputEta = document.querySelector(".eta-utente");
    // console.log(inputKm);
    // console.log(inputKm.value);

    let prezzoBase = 0.21;
    let kmValue = inputKm.value;
    let nameValue = inputName.value;
    let etaValue = inputEta.value;
    let prezzoBigliettoBase = parseInt(kmValue) * prezzoBase;
    let prezzoBiglietto = prezzoBigliettoBase;
    

    console.log("nome utente:", nameValue);
    console.log("km utente:", kmValue);
    console.log("età utente:", etaValue);


    if (isNaN(kmValue) || isNaN(etaValue)) {
        alert("Dati non validi");
    } else { 
        let displayTicket = document.getElementById("display-ticket")
        displayTicket.className = "show"

        if (parseInt(etaValue) < 18) {
            prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 20) / 100;
        } else if (parseInt(etaValue) > 65) {
            prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 40) / 100;
        }
        
        prezzoBiglietto = prezzoBiglietto.toFixed(2);
    
        let divPrezzoUtente = document.getElementById("prezzoUtente");
        divPrezzoUtente.innerHTML = `${prezzoBiglietto} €`;
        
        // console.log("prezzo scontato:", prezzoBiglietto);
    
        let divNomeUtente = document.querySelector(".nome-completo-utente");
        divNomeUtente.innerHTML = `${nameValue}`;
    }
});


