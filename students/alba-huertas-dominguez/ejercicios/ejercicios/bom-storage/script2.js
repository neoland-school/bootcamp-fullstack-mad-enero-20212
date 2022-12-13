

//4 .Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres  input uno de nombre, uno de password y un input submit, 
//cuando el usuario inicie sesión deberá mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location)

const boton = document.getElementById("bot");


boton.addEventListener('click',e =>
{ e.preventDefault();
let nombre = document.getElementById("name").value
let  contr = document.getElementById("pass").value
localStorage.setItem('nom',nombre);
localStorage.setItem('cont',contr);
location.href = "http://127.0.0.1:5501/index3.html"
});




