// ===================================
// ÚLOHA 1: Základné údaje
// ===================================

// údaje
const menoText = "Samuel Michalik";
const vekCislo = 17;
const skolaText = "Piaristická stredná odborná škola F. Hanáka";
const konicekText = "programovanie";

// elementy z HTML
const menoEl = document.getElementById("meno");
const vekEl = document.getElementById("vek");
const skolaEl = document.getElementById("skola");
const konicekEl = document.getElementById("konicek");


// ===================================
// ÚLOHA 2: Zobrazenie údajov
// ===================================

menoEl.textContent = menoText;
vekEl.textContent = vekCislo;
skolaEl.textContent = skolaText;
konicekEl.textContent = konicekText;


// ===================================
// ÚLOHA 3: Zmena farieb
// ===================================

const tlacidlo = document.getElementById("btn-zmena");
const container = document.querySelector(".container");

tlacidlo.addEventListener("click", function () {
    container.classList.toggle("zmenene-farby");

    // BONUS – zmena textu tlačidla
    if (container.classList.contains("zmenene-farby")) {
        tlacidlo.textContent = "Pôvodné farby";
    } else {
        tlacidlo.textContent = "Zmeniť farby";
    }
});


// ===================================
// ÚLOHA 4: Výpočet roku narodenia
// ===================================

const aktualnyRok = new Date().getFullYear();
const rokNarodenia = aktualnyRok - vekCislo;

const rokNarodeniaEl = document.getElementById("rok-narodenia");
rokNarodeniaEl.textContent = rokNarodenia;