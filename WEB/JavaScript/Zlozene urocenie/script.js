let istinaInput  = document.getElementById("istina");
let urokInput = document.getElementById("urok");
let rokyInput = document.getElementById("roky");

let btnInput = document.getElementById("btn-vypocitaj");

btnInput.addEventListener("click", function() {
    let urok = document.getElementById("urok").value;
    let istina = document.getElementById("istina").value;
    let roky = document.getElementById("roky").value;
});

function zlozeneUrocenie(istina, urok, roky) {
    let celkovaHodnota = istina * Math.pow((1 + urok / 100), roky);
    return celkovaHodnota.toFixed(2);
}

btnInput.addEventListener("click", function() {
    let urok = parseFloat(urokInput.value);
    let istina = parseFloat(istinaInput.value);
    let roky = parseInt(rokyInput.value);
});

// Výpočet zloženého úročenia
let vysledok = zlozeneUrocenie(istina, urok, roky);

// Zobrazenie výsledku na stránke
document.getElementById("vysledok").innerText = `Celková hodnota po ${roky} rokoch je: ${vysledok} €`;