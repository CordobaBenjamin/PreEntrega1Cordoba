//Metodo hecho para que el precio guardado en el Local Storage, Se utilize para mostraselo al usuario
let priceForBuy = localStorage.getItem("carritototal")
console.log(priceForBuy);
let moddify_price = document.getElementById("PriceToPay")
moddify_price.innerHTML = "$" +  priceForBuy
let buttonToPay = document.getElementById("idForButtonToPay");

 // Función para reiniciar la página
  function reiniciarPagina() {
    window.location.reload();
  }

// Funcion para dar un chiste y dar a entender que la compra se realizo
function compraRealizada() {
  let confirmarCompra = document.getElementById("idForButtonToPay");
  confirmarCompra.value = "Compra Realizada";
  confirmarCompra.className = "compraRealizada";

  //Chiste malo
  fetch("https://v2.jokeapi.dev/joke/Any?lang=es")
    .then((response) => response.json())
    .then((data) => {
      // Verificar si se obtuvo un chiste exitosamente
      if (data.type === "single") {
        alert(data.joke);
      } else if (data.type === "twopart") {
        alert(data.setup);
        alert(data.delivery);
      }
    })
    .catch((error) => {
      // Manejo de errores
      alert("Ha ocurrido un error:", error);
    });

    setTimeout(reiniciarPagina, 4000);
}
