# Seguno Ejercicio 

links con la clase link
Cualquier elemento HTML que tenga la clase link
Enlaces que no tengan href
hijos directos pares de los divs que tengan la clase container
hermano adjacente directo de los enlaces
divs hijos de cualquier elemento que tenga la clase container

links con la clase link -> a.link
Cualquier elemento HTML que tenga la clase link -> .link
Enlaces que no tengan href -> a:not([href])
hijos directos pares de los divs que tengan la clase container -> div.container > :nth-child(even)
hermano adyacente directo de los enlaces -> a + *
divs hijos de cualquier elemento que tenga la clase container -> .container div
(editado)