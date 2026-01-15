// PREMENNE

let idMeno = document.getElementsById("meno")
let idVek = document.getElementsById("vek")
let idMesto = document.getElementsById("mesto")
let idKonicek = document.getElementsById("konicek")

const meno = "Samuel";
const vek = "17";
const mesto = "Čereňany";
const konicek = "dizajn";

// VYPOCTY

const rokNarodenia = 2025 - vek
const doDospelosti = 18 - vek

// ZOBRAZENIE UDAJOV V HTML

document.getElementById("meno").textContent = meno;
document.getElementById("vek").textContent = vek;
document.getElementById("mesto").textContent = mesto;
document.getElementById("konicek").textContent = konicek;
document.getElementById("rok-narodenia").textContent = rokNarodenia;
document.getElementById("do-dospelosti").textContent = doDospelosti;

// BIO

const text = 'Ahoj! Volám sa ${meno}, mám ${vek}, rokov a pochadzam z ${mesto}. Vo volnom case rad robim ${konicek}.';
document.getElementsById("o-mne").textContent = text;

// AKTUALIZOVANIE STATUSU
document.getElementById("status").textContent = "Profil načítaný!";