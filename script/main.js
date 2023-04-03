alert("Bienvenido a CoderGaming, Gracias por escojernos, A continuacion eliga una categoria para ver los productos disponibles.");

let cancel = 'si';
// FUNCION QUE PERMITE SABER MAS DATOS SOBRE EL PRODUCTO
function info() {
    let saber = prompt("Usted desea saber mas informacion acerca de la categoria/producto elegido?");

    // EN CASO DE "SI" LE PREGUNTA AL USUARIO SOBRE QUE QUIERE LA INFORMACION
    if (saber.toLowerCase() == "si") {

        alert("Desea saber el area de envio o la garantia del producto?");

        let infoplus = prompt("Para ello ingresar la palabra Envio o Garantia.");

        if (infoplus.toLowerCase() == "garantia") {

            alert("Al ser una tienda nueva, todos nuestros productos cuentan con una carantia de 24 meses.");

        } else if (infoplus.toLowerCase() == "envio") {

            alert("Llegamos a todo el pais, Los envios son gratis dentro de CABA, apartir de alrededores o mas lejano se debera abonar segun la distancia ");

        } else {
            alert("Ingrese Envio o Garantia, en caso contrario oprima cancelar")

        }
    }
}

// HASTA QUE EL USUARIO DIGA QUE NO DESEA VER MAS PRODUCTOS SEGUIRA EN LOOP 

while (cancel.toLowerCase() == "si") {

    let categoria = prompt("Que desea desea buscar?, (Auriculares, Teclados, Componentes, Cables, Mouses o Juegos)");

    switch (categoria.toLowerCase()) {
        case "auriculares":
            alert("Estos son los Auriculares disponibles en el momento:");
            info();
            break;

        case "teclados":
            alert("Estos son los Teclados disponibles en el momento:");
            info();
            break;

        case "mouses":
            alert("Estos son los Mouses disponibles en el momento:");
            info();
            break;

        case "componentes":
            alert("Estos son los Componentes disponibles en el momento:");
            info();
            break;

        case "juegos":
            alert("Estos son los Juegos disponibles en el momento:")
            info();
            break;

        case "cables":
            alert("Estos son los Cables disponibles en el momento:")
            info();
            break;

    }

    cancel = prompt("Si desea ver otros productos ingrese (Si) ");
}

 