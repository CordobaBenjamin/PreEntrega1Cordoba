alert("Bienvenido a CoderGaming, Gracias por escojernos, A continuacion eliga una categoria para ver los productos disponibles.");

// Funcion constructra de AURICULARES

class productos {
    constructor (id, nombre, categoria, precio) {
        this.id = id
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria
        this.precio = precio;   
    }

    getinfo = function () {
        return (
            "El Producto " + this.nombre + " tienen un valor de " + this.precio + "$"
        )
    }
}

const auricularesadd = [
    new productos(1,"Hyperx", "auriculares", 6000 ),
    new productos(2,"Logitech", "auriculares", 8000 ),
    new productos(3,"RedDragon","auriculares", 4000 ),
    new productos(4,"Nisuta","auriculares", 2500 ),
    
]

const tecladosadd = [

new productos (5,"Marvo k656", "teclados", 1700),
new productos (6,"Kurama k552", "teclados",  5000 ), 
new productos (7,"Hyperx Alloy Fps", "teclados", 8600), 
new productos (8,"Logitech k835 TKL", "teclados",  10000) 

]


const mousesadd = [

new productos (9,"RedDragon Griffin", "Mouses", 2300),
new productos (10,"RedDragon Cobra", "Mouses",1700),
new productos (11,"Logitech G403", "Mouses", 4300),
new productos (12,"Logitech G904", "Mouses", 6000)

]



const juegosadd = [

new productos (13,"Black ops III", "juegos",350),
new productos (14,"GTA V", "juegos", 1000),
new productos (15,"Terraria", "juegos", 99),
new productos (16,"Minecraft", "juegos", 99),
new productos (17,"Need For Speed", "juegos", 150),
new productos (18,"Assasins Creed IV", "juegos", 200)

]
const cablesadd = [
    new productos (19, "Cable HDMI", "Cables", 700),
    new productos (20, "Adaptador Hdmi a DisplayPort", "Cables", 900),
    new productos (21, "Ethernet", "Cables", 1300),
    new productos (22, "Cable Fuente", "Cables", 600),
]


let carrito = [

]

let cancel = 'si';
// FUNCION QUE PERMITE SABER MAS DATOS SOBRE EL PRODUCTO
function info() {
    let saber = prompt("Usted desea saber mas informacion acerca de la categoria/producto elegido?");

    // EN CASO DE "SI" LE PREGUNTA AL USUARIO SOBRE QUE QUIERE LA INFORMACION
    if (saber.toLowerCase() == "si") {

        alert("Desea saber el area de envio o la garantia del producto?");

        let infoplus = prompt("Para ello ingresar la palabra Envio o Garantia.");

        if (infoplus.toLowerCase() == "garantia") {

            alert("Al ser una tienda nueva, todos nuestros productos cuentan con una garantia de 24 meses.");

        } else if (infoplus.toLowerCase() == "envio") {

            alert("Llegamos a todo el pais, Los envios son gratis dentro de CABA, apartir de alrededores o mas lejano se debera abonar segun la distancia ");

        } else {
            alert("Ingrese Envio o Garantia, en caso contrario oprima cancelar")

        }
    }
}

// HASTA QUE EL USUARIO DIGA QUE NO DESEA VER MAS PRODUCTOS SEGUIRA EN LOOP 

while (cancel.toLowerCase() == "si") {

    let categoria = prompt("Que desea desea buscar?, (Auriculares, Teclados, Cables, Mouses o Juegos)");

    switch (categoria.toLowerCase()) {
        case "auriculares":
            let auricularesbuscados = prompt("Nuestros Auriculares son : Nisuta - Hyperx - RedDragon - Logitech || Que marca le intereso?")
            let auriculardeseado = auricularesadd.find(
             (auricularesUno) => auricularesUno.nombre === auricularesbuscados.toUpperCase()
            ) 
            if (auriculardeseado !== undefined) {
                let carritoadd = prompt(auriculardeseado.getinfo(), "Desea adquirir el producto? (si/no)")
                if (carritoadd.toLowerCase() == "si") {
                    carrito.push(auriculardeseado) 
                    alert ("Hemos añadido el producto al Carrito")
                } else {
                    alert ("Vaya... Una lastima. Esperamos que siga interesado en otro producto")
                }
            } else {
                alert("Lo sentimos, no hemos encontrado o no tenemos, el producto que buscaba.")
            }
            info();
            break;

        case "teclados":
            let tecladosbuscados = prompt("Nuestros Teclados son : Marvo k656 - Kurama k552 - Hyperx Alloy Fps - Logitech k835 TKL. || Que marca le intereso?")
            let tecladodeseado = tecladosadd.find(
             (tecladoUno) => tecladoUno.nombre === tecladosbuscados.toUpperCase()
            ) 
            if (tecladodeseado !== undefined) {
                let carritoadd = prompt(tecladodeseado.getinfo(), "Desea adquirir el producto? (si/no)")
                if (carritoadd.toLowerCase() == "si") {
                    carrito.push(tecladodeseado) 
                    alert ("Hemos añadido el producto al Carrito")
                } else {
                    alert ("Vaya... Una lastima. Esperamos que siga interesado en otro producto")
                }
            } else {
                alert("Lo sentimos, no hemos encontrado o no tenemos, el producto que buscaba.")
            }
            info();
            break;

        case "mouses":
            let mousesbuscados = prompt("Nuestros Mouses son : RedDragon Griffin - RedDragon Cobra - Logitech G403 - Logitech G904 || Que marca le intereso?")
            let mousedeseado = mousesadd.find(
             (mouseUno) => mouseUno.nombre === mousesbuscados.toUpperCase()
            ) 
            if (mousedeseado !== undefined) {
                let carritoadd = prompt(mousedeseado.getinfo(), "Desea adquirir el producto? (si/no)")
                if (carritoadd.toLowerCase() == "si") {
                    carrito.push(mousedeseado) 
                    alert ("Hemos añadido el producto al Carrito")
                } else {
                    alert ("Vaya... Una lastima. Esperamos que siga interesado en otro producto")
                }
            } else {
                alert("Lo sentimos, no hemos encontrado o no tenemos, el producto que buscaba.")
            }
            info();
            break;

        case "juegos":
            let juegosbuscados = prompt("Nuestros Juegos son : Black ops III - GTA V - Terraria - Minecraft - Need For Speed - Assasins Creed IV || Que marca le intereso?")
            let juegodeseado = juegosadd.find(
             (juegosUno) => juegosUno.nombre === juegosbuscados.toUpperCase()
            ) 
            if (juegodeseado !== undefined) {
                let carritoadd = prompt(juegodeseado.getinfo(), "Desea adquirir el producto? (si/no)")
                if (carritoadd.toLowerCase() == "si") {
                    carrito.push(juegodeseado) 
                    alert ("Hemos añadido el producto al Carrito")
                } else {
                    alert ("Vaya... Una lastima. Esperamos que siga interesado en otro producto")
                }
            } else {
                alert("Lo sentimos, no hemos encontrado o no tenemos, el producto que buscaba.")
            }
            info();
            break;

        case "cables":
            let cablesbuscados = prompt("Nuestros Cables son : Cable HDMI - Adaptador a DisplayPort - Ethernet - Cable Fuente || Que marca le intereso?")
            let cabledeseado = cablesadd.find(
             (cablesUno) => cablesUno.nombre === cablesbuscados.toUpperCase()
            ) 
            if (cabledeseado !== undefined) {
                let carritoadd = prompt(cabledeseado.getinfo(), "Desea adquirir el producto? (si/no)")
                if (carritoadd.toLowerCase() == "si") {
                    carrito.push(cabledeseado) 
                    alert ("Hemos añadido el producto al Carrito")
                } else {
                    alert ("Vaya... Una lastima. Esperamos que siga interesado en otro producto")
                }
            } else {
                alert("Lo sentimos, no hemos encontrado o no tenemos, el producto que buscaba.")
            }
            info();
            break;

    }

    cancel = prompt("Si desea ver otros productos ingrese (Si) ");
 
}

let preciosfinales = carrito.forEach((carritofinal) => {
    console.log("El Producto seleccionado es ", carritofinal.nombre, "y el Precio es ", carritofinal.precio); 
})

const total = carrito.reduce((precioinicial, elementos) => precioinicial + elementos.precio , 0)
console.log("El total a pagar es" , total);
alert("El total a pagar es " + total + "$")

 console.log(document.head);
