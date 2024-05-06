let buttonDark = document.querySelector('.theme-button-dark');
let buttonLight = document.querySelector('.theme-button-light');
let page = document.querySelector('.page');

let buttonSansSerif = document.querySelector('.font-button-sans-serif');
let buttonSerif = document.querySelector('.font-button-serif');

// Переключение темы
buttonDark.onclick = function() {
    buttonLight.classList.remove('active');
    buttonDark.classList.add('active');
    page.classList.add('dark');
};

buttonLight.onclick = function() {
    buttonDark.classList.remove('active');
    buttonLight.classList.add('active');
    page.classList.remove('dark');
};
// Переключение темы завершение

buttonSerif.onclick = function() {
    buttonSansSerif.classList.remove('active');
    buttonSerif.classList.add('active');
    page.classList.add('serif');
};

buttonSansSerif.onclick = function() {
    buttonSerif.classList.remove('active');
    buttonSansSerif.classList.add('active');
    page.classList.remove('serif');
};
