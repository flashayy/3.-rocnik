// PREMENNE - ziskam z HTML elementy, s ktorymi budem pracovat

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

// FUNKCIA - zisti akciu z btn, prevent default, aby tam nebol prazdny riadok, porovna cisla a vypise vysledok do divu result

btn.addEventListener('click', porovnajCisla);

function porovnajCisla(event) {
    event.preventDefault();

    if (number1.value === '' || number2.value === '' || number3.value === '') {
        result.textContent = 'Zadaj cisla do vsetkych okienok';
        return;
    }

    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const num3 = parseFloat(number3.value);

    if (num1 > num2 && num1 > num3) {
        result.textContent = `Najvacsie cislo je: ${num1}`;
    } else if (num2 > num1 && num2 > num3) {
        result.textContent = `Najvacsie cislo je: ${num2}`;
    } else {
        result.textContent = `Najvacsie cislo je: ${num3}`;
    }}
