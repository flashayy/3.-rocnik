const pole = [1, 2, 3, 4, 5, 6, 7];

const vypisCelePole = document.getElementById("vypisCelePole");
const vypisParneCisla = document.getElementById("vypisParneCisla");
const vypisNeparneCisla = document.getElementById("vypisNeparneCisla");

vypisCelePole.textContent = pole.join(", ");

let parneCisla = [];
let neparneCisla = [];

for (let i = 0; i < pole.length; i++) {
  if (pole[i] % 2 === 0) {
    parneCisla.push(pole[i]);
  } else {
    neparneCisla.push(pole[i]);
  }
}

vypisParneCisla.textContent = parneCisla.join(", ");
vypisNeparneCisla.textContent = neparneCisla.join(", ");