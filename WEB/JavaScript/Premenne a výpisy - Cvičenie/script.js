//==================================================
// Premenné
//==================================================

const chlieb = 1.50;
const mlieko = 0.90;
const maslo = 2.30;


//==================================================
// Výpočty
//==================================================

const cena = 2 * chlieb + 1 * maslo + 3 * mlieko;

//==================================================
// Vypisy
//==================================================

console.log(`Cena chleba je: ${chlieb} EUR`);
console.log(`Cena masla je: ${maslo} EUR`);
console.log(`Cena mlieka je: ${mlieko} EUR`);

console.log(`Cena nákupu je: ${cena} EUR`);

//==================================================
// Cvičenie 2
//==================================================
// Prevod kilometrov na míle

const kmtoMile = 0.621371192;
const km = 5;
const miles = km * kmtoMile;

//==================================================
// Vypisy
//==================================================   

console.log(`${km} kilometrov je ${miles.toFixed(2)} míľ.`)

//==================================================
// Cvičenie 3
//==================================================
// Prevod gramov na kilogramy

const g = 2500;
const kg = g / 1000;

//==================================================
// Vypisy
//==================================================

console.log(`${g} gramov je ${kg} kilogramov.`)

//==================================================
// Cvičenie 4
//==================================================
// Prevod Celsius na Fahrenheit

const C = 22;
const F = (C * 9/5) + 32;

//==================================================
// Vypisy
//==================================================

console.log(`${C}°C je ${F.toFixed(2)}°F.`)

//==================================================
// Cvičenie 5
//==================================================

let meno = "Peter";
let priezvisko = "Novák";
const lowerCaseMeno = meno.toLowerCase();
const upperCasePriezvisko = priezvisko.toUpperCase();

const celkovyPocetZnakov = meno.length + priezvisko.length + 1;

//==================================================
// Vypisy
//==================================================

console.log(`Meno a priezvisko: ${lowerCaseMeno} ${upperCasePriezvisko}`);
console.log(`Celkový počet znakov: ${celkovyPocetZnakov}`);

//==================================================
// Cvičenie 6
//==================================================
// získaj z premenných meno a priezvisko P a N

const celeMeno = [meno, priezvisko];

const prvePismenoMena = meno.charAt(0);
const prvePismenoPriezviska = priezvisko.charAt(0);

//==================================================
// Vypisy
//==================================================

console.log(`Prvé písmeno mena: ${prvePismenoMena}, Prvé písmeno priezviska: ${prvePismenoPriezviska}`);

//==================================================
// Cvičenie 7
//==================================================
// Spravenie E-mail adresy z mena a priezviska

const email = `${meno.toLowerCase()}.${priezvisko.toLowerCase()}@gmail.com`;

//==================================================
// Vypisy
//==================================================

console.log(`E-mailová adresa: ${email}`);

//==================================================
// Cvičenie 8
//==================================================

const veta1 = "Javascript je super jazyk";
const veta2 = "Programovanie nás naozaj baví"

const dlzkaVety1 = veta1.length;
const dlzkaVety2 = veta2.length;

console.log(`${veta1}, ${veta2}`)

if (dlzkaVety1 > dlzkaVety2) {
    console.log(`Dlhšia veta je: "${veta1}"`);
} else if (dlzkaVety2 > dlzkaVety1) {
    console.log(`Dlhšia veta je: "${veta2}"`);
}
