const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const btn = document.getElementById("button");
const result = document.getElementById("result");

btn.addEventListener("click", function() {
    const stranaA = parseFloat(a.value);
    const stranaB = parseFloat(b.value);
    const stranaC = parseFloat(c.value);

    if (isNaN(stranaA) || isNaN(stranaB) || isNaN(stranaC)) {
        result.textContent = "Zadaj všetky tri strany.";
        return;
    }

    if (stranaA <= 0 || stranaB <= 0 || stranaC <= 0) {
        result.textContent = "Strany musia byť väčšie ako 0.";
        return;
    }

    if (
        stranaA + stranaB <= stranaC ||
        stranaA + stranaC <= stranaB ||
        stranaB + stranaC <= stranaA
    ) {
        result.textContent = "Zadané hodnoty netvoria trojuholník.";
        return;
    }

    const strany = [stranaA, stranaB, stranaC].sort((x, y) => x - y);
    const jePravouhly = strany[2] * strany[2] === strany[0] * strany[0] + strany[1] * strany[1];

    if (stranaA == stranaB && stranaB == stranaC) {
        result.textContent = "Trojuholník je rovnostranný.";
    } else if (stranaA == stranaB || stranaB == stranaC || stranaA == stranaC) {
        result.textContent = "Trojuholník je rovnoramenný.";
    } else if (jePravouhly) {
        result.textContent = "Trojuholník je pravouhlý.";
    } else {
        result.textContent = "Trojuholník je rôznostranný.";
    }
});
