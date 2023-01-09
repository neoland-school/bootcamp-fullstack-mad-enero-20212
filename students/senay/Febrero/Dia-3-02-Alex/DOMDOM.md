## Primero hay k traer el elemento y comprueba si se detecta en el console.log
const encabezado(ejemplo h1)=document.querySlector('si ID con # delante, class(con su . delante) o tal 
## Crea un elemento y añadele texto
const p = document.createElement('p'); Ya esta creado
p.textContent = 'pon algo aki'

## Para añadirle etiqueas bold al P 
p.innerHTML ='<b></b>';

## Para añadir el P creado al HTML usas uno d los nodos preconstruidos (head o body)
document.body.appendChild(p) // esto agrega al body como hojo el P

## Otro ejemplo seria, si tienes una <ul> e ntu HTML creada desde java le añadimos las <li>
primero traemos la <ul> al DOM y despues ....
const ulList = document.QuerySelecto('.su clase')
const elLi = document.createElement('li')
ulList.appendChild('elLi')

## Para eliminar un nodo primero lo integras/traes con su class, id o tal cual
const p = document.querySelector('.card'); 
p.remove();

## Para añadirle un atributo (ID) puede se k lo cambie tamb, no lo se
p.id = 'aki pones el nuevo ID'

## Para añadir clase al parrafo 
p.classList.add('h3-danger', classe-2);
## Para añadirle etiqueas bold al P 
p.innerHTML ='<b></b>';

### Reaccionar con el usuario
## Por ejemplo con un button o submit con su #ID o .class o supongo cualquer elemento

const btn = document.querySelector(".btn"); // seleccionado por su clase .btn

btn.addEventListener("click", () => {
  /*HANDLER del evento*/
});

## Para ecorrer un array usa forEach
