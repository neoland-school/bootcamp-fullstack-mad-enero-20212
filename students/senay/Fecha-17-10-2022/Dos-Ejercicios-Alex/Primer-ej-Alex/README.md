# Calcular la especificidad de los siguientes selectores:

    - p.demo                                    11 puntos
    - #MY_ELEM.hola                             110 puntos
    - #MY_ELEM .hola > input:hover              121 puntos
    - .demo + * > *                             10 puntos
    - p.class:not([type="text"]):invalid        31 puntos



    Calcular la especificidad de los siguientes selectores:
    - p.demo -> 11
    - #MY_ELEM.hola -> 110
    - #MY_ELEM .hola > input:hover -> 121
    - .demo + * > *  -> 10
    - p.class:not([type="text"]):invalid -> 31 (El :not es una pseudoclase que no añade especificidad)