
let productsarray = []

// Funcion que literalmente hace todo lo relacionado con comprar Items.

function buyitem(event) {

       // La primera parte toma los valores puestos en la funcion buyitems, colocados con un event(onclick).

       const nombre = event.target.dataset.nombre
       const precio = event.target.dataset.precio
       const product = document.createElement("h5");
       product.className = "productitemstyle"
       product.innerHTML = nombre + " " + "$" + precio
       // los agrega al div de lista de productos seleccionados
       document.getElementById("productlist").appendChild(product)

       // Funcion que agrega los precios al array

       function price(precio) {
              let totalprice = "" + precio
              productsarray.push(+totalprice)
              // console.log(productsarray);
       }

       price(precio)

       // Funcion que suma el precio y te devuelte un total junto a un "$"

       function addProduct(productsarray) {
              let result = 0;
              for (let num of productsarray) {
                     result += num;
              }
              let money = "$" + result
              return money
       }

       addProduct(productsarray)
       let returnprice = addProduct(productsarray)

       // Modifica el numero bajo el carrito de compras y Guarda el precio total en el Local Storage para que se le muestre al usuarion en la pagina de pago (Sera creada mas adelante)

       localStorage.setItem('carritototal', JSON.stringify(returnprice));
       let milocalprice = JSON.parse(localStorage.getItem('carritototal'));       
       
       let h5carrito = document.getElementById("totalprice");
       h5carrito.innerHTML = milocalprice

       
              
       
}


