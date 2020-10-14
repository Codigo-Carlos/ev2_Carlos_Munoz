export default {
    mario : {estado:'normal', vidas:3}
    ,

    data: `
    <h1>Autor: CARLOS MUNOZ </h1>
    <br>
    <p id = "vidas">TOTAL VIDAS: 3</p>
    <div class="marioimage" id = "mainimage">
    <img src="img/marioA.png" alt="">
    </div>
    <div class="botones">
    <button id = "btn1" onclick = "fire()"> flor </button>
    <button id = "btn2" onclick = "fly()"> Tanuki </button>
    <button id = "btn3" onclick = "lose()"> Pierde </button>
    </div>

    `,

    fire: function () {
        var marioimage = document.getElementById("mainimage");

        var player = marioAR;
        player.estado = "fuego";
        marioimage.innerHTML = '<img src="img/marioC.png" alt="">';
;        
    },
    fly: function () {
        var marioimage = document.getElementById("mainimage");

        var player = marioAR;
        player.estado = "volar";
        marioimage.innerHTML = `<img src="img/marioD.png" alt="">`;

    },
    lose: function () {
        var marioimage = document.getElementById("mainimage");
        var player = marioAR;
        var vidas = document.getElementById("vidas");
        
        if (player.estado != 'normal'){
            player.estado = 'normal';
        } else {
            if (player.vidas > 1){
                player.vidas -= 1;
            };
        };
        marioimage.innerHTML = `<img src="img/marioA.png" alt="">`;
        vidas.innerText = `TOTAL VIDAS: ${player.vidas}`;

    },
};