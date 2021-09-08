import foodCard from './food-card.hbs'

import menu from '../../menu.json'

const bodyEL = document.querySelector('body')

const checkBox = document.querySelector('.theme-switch__toggle')



const cardList = document.querySelector('.js-menu')

const card = getFoodCard(menu)

cardList.insertAdjacentHTML('beforeend', card)

bodyEL.classList.add('light-theme')

function saveTheme() {
    if (localStorage.getItem('Theme') ==='dark') {
        bodyEL.classList.add('dark-theme')
        checkBox.setAttribute('checked', true)
    }
};
saveTheme();
function getFoodCard(menu) {

    return foodCard(menu);
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
function changeThemeDark() {
    bodyEL.classList.add('dark-theme') || bodyEL.classList.remove('light-theme');
    localStorage.setItem('Theme', 'dark')
};
function changeThemeLight() {
    bodyEL.classList.add('light-theme') || bodyEL.classList.remove('dark-theme');
    localStorage.setItem('Theme', 'light')
};
function changeTheme(e) {
    changeThemeDark()
    if (!e.target.checked) {
        changeThemeLight()
    }
};
checkBox.addEventListener('change', changeTheme);
