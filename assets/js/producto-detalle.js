// --- ASSETS/JS/PRODUCTO-DETALLE.JS ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el ID desde la URL
    const params = new URLSearchParams(window.location.search);
    const idProducto = parseInt(params.get('id'));

    // 2. Buscar el producto en el array global 'productos' (que viene de app.js)
    const prod = productos.find(p => p.id === idProducto);

    const container = document.getElementById('detalle-producto-container');

    // Si el producto no existe, mostrar un error mmm tipo elegante
    if (!prod) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-triangle fs-1 text-danger"></i>
                <h2 class="text-titulos mt-3">Producto no encontrado</h2>
                <p class="text-muted">El dulce que buscas no existe en nuestro catálogo actual.</p>
                <a href="index.html" class="btn btn-primary rounded-pill mt-3">Volver al inicio</a>
            </div>
        `;
        return;
    }

    // 3. Renderizar los datos del producto en la interfaz
    container.innerHTML = `
        <div class="col-md-6 text-center">
            <img src="${prod.imagen}" class="img-fluid rounded-4 shadow-sm" style="max-height: 450px; width: 100%; object-fit: cover; aspect-ratio: 4/3;" alt="${prod.nombre}">
        </div>
        
        <div class="col-md-6">
            <span class="badge bg-pink-subtle text-primary border border-pink-subtle px-3 py-2 rounded-pill mb-3">${prod.categoria}</span>
            <h1 class="display-5 fw-bold text-titulos mb-3">${prod.nombre}</h1>
            <p class="fs-2 text-primary fw-bold mb-4">$${prod.precio.toLocaleString('es-CL')}</p>
            
            <h5 class="text-titulos fw-bold">Descripción:</h5>
            <p class="text-muted lead mb-5">${prod.descripcion}</p>
            
            <div class="d-flex align-items-center gap-3">
                <div class="input-group" style="width: 140px;">
                    <button class="btn btn-outline-secondary rounded-start-pill" type="button" onclick="modificarCantidadDetalle(-1)">-</button>
                    <input type="text" class="form-control text-center fw-bold" id="cantidad-detalle" value="1" readonly>
                    <button class="btn btn-outline-secondary rounded-end-pill" type="button" onclick="modificarCantidadDetalle(1)">+</button>
                </div>
                
                <button onclick="agregarAlCarritoDesdeDetalle(${prod.id})" class="btn btn-primary btn-lg rounded-pill px-5 flex-grow-1 flex-md-grow-0">
                    <i class="bi bi-cart-plus me-2"></i>Añadir al Carrito
                </button>
            </div>
        </div>
    `;
});

// Funciones globales para el control de cantidad interno de página
window.modificarCantidadDetalle = (cambio) => {
    const input = document.getElementById('cantidad-detalle');
    let cantidad = parseInt(input.value) + cambio;
    if (cantidad < 1) cantidad = 1;
    input.value = cantidad;
};

// Función para añadir respetando la cantidad seleccionada en el detalle
window.agregarAlCarritoDesdeDetalle = (id) => {
    const producto = productos.find(p => p.id === id);
    const cantidadSeleccionada = parseInt(document.getElementById('cantidad-detalle').value);
    
    const existe = carrito.find(p => p.id === id);
    if (existe) {
        existe.cantidad += cantidadSeleccionada;
    } else {
        carrito.push({ ...producto, cantidad: cantidadSeleccionada });
    }
    
    localStorage.setItem('carritoTemucoDulce', JSON.stringify(carrito));
    actualizarContador();

    // Feedback visual
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 2000, timerProgressBar: true });
    Toast.fire({ icon: 'success', title: `¡Añadido al carrito (${cantidadSeleccionada} un.)!` });
};