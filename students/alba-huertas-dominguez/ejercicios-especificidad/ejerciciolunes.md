 Calcular la especificidad de los siguientes selectores:
    - p.demo (11)
    - #MY_ELEM.hola(110)
    - #MY_ELEM .hola > input:hover(121)
    - .demo + * > *(10)
    - p.class:not([type="text"]):invalid(31)
* Dado este HTML:
<div class="container">
  <p>Primer parrafo</p>
  <div></div>
  <p>Segundo Parrafo</p>
  <a class="link">hola</a>
  <p>Tercer Parrfo</a>
</div>
    Crear selectores para los siguientes casos:
    
links con la clase link gana este poro especificidad (violeta)
Cualquier elemento HTML que tenga la clase link  nos e pone ninguno (azul)
Enlaces que no tengan href
hijos directos pares de los divs que tengan la clase container
hermano adjacente directo de los enlaces
divs hijos de cualquier elemento que tenga la clase container
(editado)









