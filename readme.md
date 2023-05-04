                                                        PreEntrega 1 
Benjamin Cordoba

Este proyecto fue creado para que en un futuro pueda hacer en la entrega final. Un E-commerce parodiando a CoderHouse. 

El proyecto fue creado de una forma simple y con lineas claras, utilizando lo visto en estas clases y pedido por los tutores:

* Un algoritmo condicional (IF y Switch)
* Un algoritmo utilizando un ciclo (WHILE)
* Un simulador interactivo
* Pagina HTML vinculada a Js y Css
* Objetos
* Arrays
* Funciones de Orden Superior
* DOM
* Eventos
* Local Storage

EN ESTA ENTREGA SE REALIZO :

En esta prentega los Botens para sumar al carrito el producto seleccionado tienen puestos en el Html un evento ONCLICK que ejecuta la funcion de Orden Superior "Buyitem()" 

La funcion primordialmente obtiene los datos de cada boton atraves de un target.dataset y les da ese valor a constantes.

Con estas constantes crea otra. "Product" (El nombre mas el precio del producto) y atraves de un Document y un AppendChild este es pusheado al Div "Product List"

Y la funcion "Buyitem()" Tambien pose otras 2 Funciones

* Price() que pushea el precio de los productos y los convierte de strings a numeros

* addProducto () que atravez de un for suma todo los precios y creando el precio Total del carrito

Para terminar se pasa los datos de AddProducto() a un Local Storage donde queda guardado el precio total del carrito para que en otra pagina se pueda pagar el Monto.