let buttonGrid = document.querySelector('.card-view-button-grid');
let buttonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

buttonGrid.onclick = function() {
    buttonList.classList.remove('active');
    buttonGrid.classList.add('active');
    cards.classList.remove('list');
};

buttonList.onclick = function() {
    buttonGrid.classList.remove('active');
    buttonList.classList.add('active');
    cards.classList.add('list');
};


