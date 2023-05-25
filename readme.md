# BENJAMIN CORDOBA

Este proyecto consiste en una plataforma en línea llamada CoderGaming, que ofrece una variedad de productos relacionados con el mundo de los videojuegos. El proyecto consta de tres archivos HTML principales: `index.html`, `pageform.html` y `coderproduct.html`. A continuación, se proporciona una descripción de cada archivo y su funcionalidad:

## Archivo index.html

El archivo `index.html` es la página principal de CoderGaming. Proporciona una interfaz de usuario para navegar por las diferentes categorías de productos y realizar compras. Algunas características clave de esta página son:

- Categorías de productos: Teclados, Mouse, Componentes, Cables, Auriculares y Juegos.
- Enlaces a otras páginas: "Contactanos", "Quienes Somos", "Preguntas Frecuentes" y "Terminos de uso".
- Información de la empresa: Nombre de la empresa y descripción breve.

## Archivo pageform.html

El archivo `pageform.html` es la página de formulario de pago de CoderGaming. Permite a los usuarios completar la información necesaria para realizar una cumpra. Aquí se encuentran los siguientes elementos:

- Campos de formulario: Correo Electrónico, Números de Tarjeta, Fecha de Vencimiento y Código de Seguridad.
- Botón de Confirmar Compra: Al hacer clic en este botón, se realiza la compra.

## Archivo coderproduct.html

El archivo `coderproduct.html` es la página de visualización de productos de CoderGaming. Muestra una lista de productos disponibles en diferentes categorías. Algunos aspectos destacados de esta página son:

- Lista de productos: Teclados, Mouse, Componentes, Cables, Auriculares y Juegos.
- Carrito de compras: Muestra los productos agregados y el total de precios.
- Filtros de categoría: Permite al usuario filtrar los productos por categoría.


# En cuanto a Java Script 
Creación dinámica de productos: El código utiliza la función crearproductos(data) para generar secciones de productos en la página web. Se recorre un arreglo de productos (productos_file) y se crea un bloque HTML para cada producto con su imagen, nombre, precio y un botón para agregarlo al carrito.

Filtrado de categorías: Se utilizan checkboxes para permitir al usuario filtrar los productos por categoría. Hay checkboxes para componentes, juegos, ratones, teclados, cables y auriculares. Al marcar o desmarcar una categoría, se actualiza la matriz filter_array con las categorías seleccionadas y se llama a la función filterfunction().

Función de filtrado: La función filterfunction() verifica las categorías seleccionadas en filter_array y filtra los productos en base a esas categorías. Si no hay categorías seleccionadas, se muestran todos los productos. Si hay categorías seleccionadas, se genera un nuevo arreglo de productos filtrados y se llama a crearproductos(new_products) para mostrar los productos filtrados en la página.

Manipulación del carrito de compras: El código también incluye un evento onclick en el botón "Sumar al carrito" de cada producto (buyitem(event)) que realiza acciones relacionadas con el carrito de compras, como agregar el producto seleccionado y actualizar el precio total.

Funciones adicionales: El código incluye algunas funciones adicionales, como reiniciarPagina() para reiniciar la página, compraRealizada() para simular una compra y mostrar un chiste, y la obtención y actualización del precio total del carrito utilizando el localStorage.

# Este proyecto fue desarrollado como parte de un ejercicio práctico y tiene fines educativos. CoderGaming y los productos mostrados son ficticios.
