const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const btn = document.getElementById("button");
const result = document.getElementById("result");

btn.addEventListener("click", function() { //Ziskanie hodnot po kliknuti na button
    const stranaA = parseFloat(a.value);
    const stranaB = parseFloat(b.value);
    const stranaC = parseFloat(c.value);

    if (stranaA == stranaB && stranaB == stranaC) {
        result.textContent = "Trojuholník je rovnostranný.";
    } else if (stranaA == stranaB || stranaB == stranaC || stranaA == stranaC) {
        result.textContent = "Trojuholník je rovnoramenný.";
    } else if (stranaC * stranaC == stranaA * stranaA + stranaB * stranaB) {
        result.textContent = "Trojuholník je pravouhlý.";
    }});
