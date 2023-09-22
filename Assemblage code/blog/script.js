const boutonTog = document.querySelector('.hum');
console.log(boutonTog);
const boutonTogI = document.querySelector('.burger');
console.log(boutonTogI);
const menuS = document.querySelector('.menuSecondaire');
console.log(menuS);

boutonTog.onclick = function() {
    menuS.classList.toggle('open');

    const isOpen = menuS.classList.contains('open');

    boutonTogI.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

