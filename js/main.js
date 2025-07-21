// toggle menu


const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active'); // show/hide menu
});


// phone
const phoneInput1 = document.querySelector('#phone');
const phoneInput2 = document.querySelector('#phone2');

const iti1 = window.intlTelInput(phoneInput1, {
    initialCountry: "eg",
    preferredCountries: ["eg", "sa"],
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
});


const iti2 = window.intlTelInput(phoneInput2, {
    initialCountry: "eg",
    preferredCountries: ["eg", "sa"],
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
    });

