import login from './modules/login.js';
import loginjs from './modules/login.js';
import mariojs from './modules/mariobros.js';

var caja = document.getElementById("caja");
var option1 = document.getElementById('op1');
var option2 = document.getElementById('op2');

window.logear = loginjs.logear;
window.fly = mariojs.fly;
window.fire = mariojs.fire;
window.lose = mariojs.lose;
window.marioAR = mariojs.mario;
window.usuariosAR = loginjs.usuarios;


option1.addEventListener('click', () => {
    option1.style.backgroundColor = "lightcoral";
    option2.style.backgroundColor = "lightcyan";

    caja.innerHTML = loginjs.data;
});

option2.addEventListener('click', () => {
    option2.style.backgroundColor = "lightcoral";
    option1.style.backgroundColor = "lightcyan";

    caja.innerHTML = mariojs.data;
});