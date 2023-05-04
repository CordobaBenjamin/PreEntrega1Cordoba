
class Producto {
    constructor(id, orden, nombre, categoria, precio) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}   

var productos = [];
var productosComprados = [];

// Teclados
productos.push(new Producto(1,"Marvo k656","Teclado",5800))
productos.push(new Producto(2,"Kurama k552","Teclado",23000))
productos.push(new Producto(3,"Hyperx Alloy Fps","Teclado",51000))
productos.push(new Producto(4,"Logitech k835 TKL","Teclado",22000))

// Componente
productos.push(new Producto(5,"AMD RYZEN 3 3200G","Componente",5800))
productos.push(new Producto(6,"AMD Ryzen 7 PRO 4750G","Componente",135000))
productos.push(new Producto(7,"AMD Ryzen 7 7700","Componente",250000))
productos.push(new Producto(8,"Intel Pentium Gold","Componente",39000))
productos.push(new Producto(9,"Intel Core i5","Componente",101000))
productos.push(new Producto(10,"Gigabyte A520M","Componente",45490))
productos.push(new Producto(11,"Asrock B560M Steel Legend","Componente",128999))
productos.push(new Producto(12,"SuprimX GeForce RTX 3090","Componente",1280000))
productos.push(new Producto(13,"MSI GeForce RTX 3090 24GB","Componente",930650))
productos.push(new Producto(14,"Corsair DDR4 8GB","Componente",17650))
productos.push(new Producto(15,"OLOy DDR4 16GB","Componente",39069))
productos.push(new Producto(16,"SSD Kingston 960GB","Componente",26999))
productos.push(new Producto(17,"Aerocool Cylon 700W","Componente",33800))
productos.push(new Producto(18,"Corsair Crystal 680X","Componente",141000))
productos.push(new Producto(19,"Cooler CPU Deepcool","Componente",9999))

// Auriculares
productos.push(new Producto(20,"Logitech G733","Auricular",60395))
productos.push(new Producto(21,"Red Dragon ZEUS H510","Auricular",28917))
productos.push(new Producto(22,"Nisuta DS501","Auricular",6833))
productos.push(new Producto(23,"HyperX Cloud Stin","Auricular",69999))

// Mouses
productos.push(new Producto(24,"RedDragon Griffin","Mouse",9238))
productos.push(new Producto(25,"RedDragon Cobra","Mouse",16250))
productos.push(new Producto(26,"Logitech G403","Mouse",21000))
productos.push(new Producto(27,"Logitech G904 LightSpeed","Mouse",49999))

// Cables
productos.push(new Producto(28,"Cable HDMI 2 Mts","Cable",2560))
productos.push(new Producto(29,"Adaptador Hdmi a DisplayPort","Cable",2560))
productos.push(new Producto(30,"Cable Ethernet 5 Mts","Cable",2365))
productos.push(new Producto(31,"Cable Fuente 3 Mts","Cable",1399))

// Juegos
productos.push(new Producto(32,"Black ops III","Juego",350))
productos.push(new Producto(33,"GTA V","Juego",1000))
productos.push(new Producto(34,"Terraria","Juego",99))
productos.push(new Producto(35,"Minecraft","Juego",99))
productos.push(new Producto(36,"Need For Speed","Juego",150))
productos.push(new Producto(37,"Assasins Creed IV","Juego",200))


localStorage.setItem("localProducts", JSON.stringify(productos))

var productos = localStorage.getItem("localProducts")

productos = JSON.parse(productos)


