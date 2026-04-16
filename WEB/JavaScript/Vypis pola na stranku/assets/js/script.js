const pole = [1, 2, 3, 4, 5, 6, 7];

const vypisCelePole = document.getElementById("vypisCelePole");
const vypisParneCisla = document.getElementById("vypisParneCisla");
const vypisNeparneCisla = document.getElementById("vypisNeparneCisla");

vypisCelePole.textContent = pole.join(", ");

const parneCisla = pole.filter(cislo => cislo % 2 === 0);
const neparneCisla = pole.filter(cislo => cislo % 2 !== 0);

vypisParneCisla.textContent = parneCisla.join(", ");
vypisNeparneCisla.textContent = neparneCisla.join(", ");