const btnModra = document.getElementById("btn-modra");
const btnZelena = document.getElementById("btn-zelena");
let farbaText = document.getElementById("farba-text");
const btnReset = document.getElementById("btn-reset")

function zmenaNaModru() {
    document.body.style.backgroundColor = "#3498db";
    farbaText.textContent = "modrá"
}

function zmenaNaZelenu() {
    document.body.style.backgroundColor = "#2ecc71";
    farbaText.textContent = "zelená"
}

function reset() {
    document.body.style.backgroundColor = "white";
    farbaText.textContent = "biela"
}

btnModra.addEventListener('click', zmenaNaModru)
btnZelena.addEventListener('click', zmenaNaZelenu)
btnReset.addEventListener('click', reset)