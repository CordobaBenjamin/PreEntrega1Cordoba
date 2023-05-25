let productsarray = [];

function buyitem(event) {
  const nombre = event.target.dataset.nombre;
  const precio = event.target.dataset.precio;

  const product = document.createElement("h5");
  product.className = "productitemstyle";
  product.innerHTML = nombre + " " + "$" + precio;
  document.getElementById("productList").appendChild(product);

  price(precio); // Llamada a la función price() pasando el precio como argumento

  // Actualizar el precio total después de agregar un producto
  updateTotalPrice();

  Toastify({
  text: "Sumado al carrito",
  duration: 800
  }).showToast();
}

function price(precio) {
  let totalprice = parseFloat(precio); // Convertir el precio a un número 
  productsarray.push(totalprice);
  console.log(productsarray);
}

function updateTotalPrice() {
  let totalPrice = productsarray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(totalPrice);

  localStorage.setItem("carritototal", totalPrice.toString());
  let milocalprice = localStorage.getItem("carritototal");

  let h5carrito = document.getElementById("totalprice");
  h5carrito.innerHTML = "$" + milocalprice; // Agrega el símbolo de $ 
}
