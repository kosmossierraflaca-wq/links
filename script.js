let productos = [];

function agregarProducto(imagen, descripcion, precio) {
    productos.push({
        imagen: imagen,
        descripcion: descripcion,
        precio: precio
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
            <div class="precio">${producto.precio}</div>
        `;
        contenedor.appendChild(elemento);
    });
}

// Agregar productos
agregarProducto('imagenes/senalsalidaemer.png', 'Señal de Emergencia 1', '$30.00');

agregarProducto('imagenes/bacoiris12pz.png', 'Colores Bacoiris 12 pzas', '$44.00');
