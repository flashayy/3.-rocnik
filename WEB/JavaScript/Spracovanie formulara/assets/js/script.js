const form = document.getElementById('newsletterForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Inputs
    const meno = document.getElementById('meno').value.trim();
    const email = document.getElementById('email').value.trim();
    const ineOblasti = document.getElementById('ineOblasti').value.trim();

    // Checkboxy (iba oblasti)
    const checkboxy = document.querySelectorAll('input[name="tema"]');
    const poleCheckboxov = Array.from(checkboxy);

    const checkedValues = poleCheckboxov
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Ak je vyplnené "Iné", pridaj to medzi oblasti
    const finalOblasti = [...checkedValues];
    if (ineOblasti.length > 0) finalOblasti.push(ineOblasti);

    // UI pre správu
    const sprava = document.getElementById('sprava');
    const spravaNadpis = document.getElementById('spravaNadpis');
    const spravaText = document.getElementById('spravaText');
    const spravaZoznam = document.getElementById('spravaZoznam');

    // Vyčisti výstup
    spravaZoznam.innerHTML = '';
    spravaText.textContent = '';

    // Validácia
    const errors = [];

    if (meno.length < 3) errors.push('Zadaj celé meno (aspoň 3 znaky).');
    if (!email.includes('@') || email.length < 5) errors.push('Zadaj platný email.');
    if (finalOblasti.length < 3) errors.push('Vyber aspoň 3 oblasti (alebo dopíš Iné).');

    if (errors.length > 0) {
        sprava.classList.remove('hidden');
        sprava.classList.remove('success');
        sprava.classList.add('error');

        spravaNadpis.textContent = 'Oprav tieto veci:';

        errors.forEach(err => {
            const li = document.createElement('li');
            li.textContent = err;
            spravaZoznam.appendChild(li);
        });

        return;
    }

    // Úspech
    sprava.classList.remove('hidden');
    sprava.classList.remove('error');
    sprava.classList.add('success');

    spravaNadpis.textContent = 'Hotovo ✅';
    spravaText.textContent = `Ďakujeme, ${meno}! Vybral si:`;

    finalOblasti.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        spravaZoznam.appendChild(li);
    });

    // Debug do konzoly (voliteľné)
    console.log({ meno, email, oblasti: finalOblasti });

    // Reset formulára po úspechu
    form.reset();
}

