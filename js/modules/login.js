export default {
    usuarios: [
      {login:'projas',pass:123,nombre:'Pedro', apellido:"Rojas",fono:'22332211',cargo:'Obrero' },
      {login:'mdiaz',pass:321,nombre:'Mario', apellido:"Diaz",fono:'99887766',cargo:'Ingeniero' },
      {login:'tcastro',pass:123,nombre:'Tomas', apellido:"Castro",fono:'33344433',cargo:'Obrero' },
      {login:'areyes',pass:123,nombre:'Andrea', apellido:"Reyes",fono:'887766',cargo:'Secretaria' },
      {login:'tmora',pass:123,nombre:'Matias', apellido:"Mora",fono:'4443322',cargo:'Chofer'},
      {login:'ccortes',pass:123,nombre:'Cesar', apellido:"Cortes",fono:'3344555',cargo:'Chofer'},
    ],
    data: `
    <h1>Autor: Carlos Muñoz </h1>
    <br>
    <h2>Login</h2>
    <input id = "txtname" type="text" placeholder = "Nombre" />
    <h2>Pass</h2>
    <input id = "txtpass" type="password" placeholder = "Contraseña" />
    <br><br>
    <button onclick = "logear()">saludar</button>
    <p id="resp"></p>
    <br>
    <div class="result" id = "salida">
    </div>
    `,

    logear: function () {
    var login = document.getElementById('txtname').value;
    var pass = document.getElementById('txtpass').value;
    var result = document.getElementById("result");
    var arr = this.usuarios.filter((u) => u.login == login);

    if (arr.length == 0) {
      result.innerHTML = "Usuario no existe";
    } else {

        var arr2 = this.usuarios.filter((u) => u.pass == pass);
            console.log(arr);
            if (arr2.length == 0) {
                result.innerHTML = "Contraseña incorrecta";
              } else {
                resp.innerHTML = `  
                
                <p>Nombre: ${arr[0].nombre} </p>
                <p>Fono:   ${arr[0].fono}   </p>
                <p>Cargo:  ${arr[0].cargo}  </p> `;
                resp.style.border = "solid";
              }
    }
    },
};