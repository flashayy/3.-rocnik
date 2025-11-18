console.log("JS funguje")

const btn = document.getElementById("btn")

const text = document.getElementById("text")

if (btn && text){
    btn.addEventListener("click", () => {
        text.textContent = "Novy obsah, ktory som zmenil cez JS";
    })
}

