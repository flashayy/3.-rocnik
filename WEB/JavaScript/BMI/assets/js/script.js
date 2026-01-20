const weight = prompt("Zadaj svoju hmotnosť v kg:");
const height = prompt("Zadaj svoju výšku v m:");

const bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Podváha.");
}
else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normálna hmotnosť.");
}
else if (bmi >= 25 && bmi < 30) {
    console.log("Nadváha.");
}