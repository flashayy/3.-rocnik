const form = document.getElementById('newsletterForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();


    const nameInput = document.getElementById('meno');
    const emailInput = document.getElementById('email');
    
    const name = nameInput.value;
    const email = emailInput.value;

    console.log(`Meno: ${name}, Email: ${email}`);

    const checkboxy = document.querySelectorAll('input[type="checkbox"]');

    const poleCheckboxov = Array.from(checkboxy) //prevedie NodeList na pole

    const checkedValues = poleCheckboxov.map(checkbox => {
        if (checkbox.checked) {
            return checkbox.value;
        }
    
 
    console.log(poleCheckboxov);
};

