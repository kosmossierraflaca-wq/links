
let productos = [];

function agregarProducto(imagen, descripcion) {
    productos.push({
        imagen: imagen,
        descripcion: descripcion
    });
    productos.sort((a, b) => a.descripcion.localeCompare(b.descripcion));
    mostrarProductos();
}

function mostrarProductos() {
    let contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        let elemento = document.createElement('div');
        elemento.classList.add('producto');
        elemento.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.descripcion}">
            <div class="descripcion">${producto.descripcion}</div>
        `;
        contenedor.appendChild(elemento);
    });
}

// Agregar productos
agregarProducto("./imagenes/senalsalidaemer.png", 'Señal de Emergencia $30.00');
agregarProducto("./imagenes/bacoiris12pz.png", 'Colores Bacoiris 12 pzas $44.00');
agregarProducto("./imagenes/cartulinanegra.png", 'Cartulina Negra Pliego 1pza $10.00');
agregarProducto("./imagenes/cartulinablanca.png", 'Cartulina Blanca Pliego 1pza $5.00');
agregarProducto("./imagenes/gomafactiss20.png", 'Goma Factis S20 1pza $9.00');
agregarProducto("./imagenes/gomafactis36r.png", 'Goma Factis 36r 1pza $4.00');
agregarProducto("./imagenes/cutterchicocolor.png", 'Cutter Chico Color 1pz $2.00');
agregarProducto("./imagenes/cuttergrandecolor.png", 'Cutter Grande Color 1pz $4.00');

