function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    const bmi = weight / (height * height);

    const roundedBmi = bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Podváha.";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("result").innerHTML = "Normálna hmotnosť.";
    }
    else if (bmi >= 25 && bmi < 30) {
        document.getElementById("result").innerHTML = "Nadváha.";
    }

    else {
        document.getElementById("result").innerHTML = "Obezita.";
    }

    document.getElementById("result").innerHTML += " Tvoje BMI je: " + roundedBmi;
}