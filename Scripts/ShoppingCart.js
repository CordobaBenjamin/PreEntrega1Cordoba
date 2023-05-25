let productosConteiner = document.getElementById("product_div");
let filter_array = [];
// Metodo para crear un "section" utlizando los datos de "../DataBase_Products.js"
const crearproductos = (data) => {
  productosConteiner.innerHTML = "<id='product_div'></>";
  data.forEach((producto) => {
    let productblock = document.createElement("section");
    productblock.classList.add("productosdiv");
    productblock.setAttribute("id", `${producto?.categoria}`);

    productblock.innerHTML = ` 
                                <div class="imgDiv">
                                <img src="${producto?.img}" alt="${producto?.nombre}" id="${producto?.arreglo}">
                                </div>
                                <div class="priceticket"> 
                                    <h5>${producto?.nombre}</h5>
                                    <h5>$${producto?.precio}</h5>
                                    <button data-nombre="${producto?.nombre}" data-precio="${producto?.precio}" onclick=buyitem(event) class="buttonshop">Sumar al carrito</button>
                                </div>
        
        `;
    productosConteiner.appendChild(productblock);
  });
};

crearproductos(productos_file);

// Filtro que borra o Añade las categorias dependiendo del input marcado
let keyboardCheck = document.getElementById("keyboard");
let wiresCheck = document.getElementById("wires");
let headphoneCheck = document.getElementById("headphones");
let componentsCheck = document.getElementById("components");
let gamesCheck = document.getElementById("games");
let mouseCheck = document.getElementById("mouse");


componentsCheck.addEventListener("change", () => {
  if (componentsCheck.checked) {
    filter_array.push("Componentes");
  } else {
    filter_array = filter_array.filter(
      (category) => category !== "Componentes"
    );
  }
  filterfunction();
});

gamesCheck.addEventListener("change", () => {
  if (gamesCheck.checked) {
    filter_array.push("Juegos");
  } else {
    filter_array = filter_array.filter((category) => category !== "Juegos");
  }
  filterfunction();
});

mouseCheck.addEventListener("change", () => {
  if (mouseCheck.checked) {
    filter_array.push("Mouses");
  } else {
    filter_array = filter_array.filter((category) => category !== "Mouses");
  }
  filterfunction();
});

keyboardCheck.addEventListener("change", () => {
  if (keyboardCheck.checked) {
    filter_array.push("Teclados");
  } else {
    filter_array = filter_array.filter((category) => category !== "Teclados");
  }
  filterfunction();
});

wiresCheck.addEventListener("change", () => {
  if (wiresCheck.checked) {
    filter_array.push("Cables");
  } else {
    filter_array = filter_array.filter((category) => category !== "Cables");
  }
  filterfunction();
});

headphoneCheck.addEventListener("change", () => {
  if (headphoneCheck.checked) {
    filter_array.push("Auriculares");
  } else {
    filter_array = filter_array.filter(
      (category) => category !== "Auriculares"
    );
  }
  filterfunction();
});

function filterfunction() {
  if (filter_array.length === 0) {
    crearproductos(productos_file);
  } else {
    let new_products = productos_file.filter((product) => {
      return filter_array.includes(product.categoria);
    });
    crearproductos(new_products);
  }
}