const dobInput = document.getElementById('dob');
const calcBtn = document.getElementById('calc-btn');
const resultDiv = document.getElementById('result');


calcBtn.addEventListener('click', () => {
    const dobValue = dobInput.value;

    // 1. Check if the user actually picked a date
    if (!dobValue) {
        resultDiv.textContent = "Please select your date of birth first!";
        return;
    }

    // 2. Your math logic
    const dob = new Date(dobValue);
    const today = new Date();
    const ageInMilliseconds = today - dob;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

    // 3. Display the result on the page
    resultDiv.textContent = `You are ${ageInYears} years old!`;
});



const hamburger = document.querySelector('.hamburger-icon');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.dataset.target).scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('open');
    });
});
