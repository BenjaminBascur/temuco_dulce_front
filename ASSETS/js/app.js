// --- VARIABLES GLOBALES ---
let carrito = JSON.parse(localStorage.getItem('carritoTemucoDulce')) || [];

// --- INVENTARIO TEMUCO DULCE (CON RUTAS LOCALES) ---
const productos = [
    // TORTAS
    { id: 1, nombre: "Torta Chocolate", categoria: "Tortas", precio: 24900, descripcion: "Suave bizcocho de cacao intenso relleno con ganache y cubierta de crema de chocolate belga.", imagen: "assets/img/1. Tortas/1. Torta Chocolate.png" },
    { id: 2, nombre: "Torta Red Velvet", categoria: "Tortas", precio: 26900, descripcion: "Clásico bizcocho aterciopelado rojo con un toque de cacao, relleno y cubierto con frosting de queso crema.", imagen: "assets/img/1. Tortas/2. Torta Red Velvet.png" },
    { id: 3, nombre: "Torta Selva Negra", categoria: "Tortas", precio: 24900, descripcion: "Bizcocho húmedo de chocolate, relleno con crema chantilly, mermelada de guinda y trozos de fruta fresca.", imagen: "assets/img/1. Tortas/3. Torta Selva Negra.png" },
    { id: 4, nombre: "Torta Tres Leches", categoria: "Tortas", precio: 22900, descripcion: "Esponjoso bizcocho bañado en mezcla de tres leches, con un ligero toque a vainilla y merengue suizo.", imagen: "assets/img/1. Tortas/4. Torta Tres Leches.png" },
    { id: 5, nombre: "Torta Panqueque Choco-Naranja", categoria: "Tortas", precio: 26900, descripcion: "Finas capas de panqueque de chocolate intercaladas con una refrescante y sedosa crema de naranja.", imagen: "assets/img/1. Tortas/5. Torta Panqueques Chocolate-Naranja.png" },
    { id: 6, nombre: "Torta Zanahoria", categoria: "Tortas", precio: 25900, descripcion: "Bizcocho especiado con zanahoria rallada y nueces, coronado con un equilibrado frosting de queso crema.", imagen: "assets/img/1. Tortas/6. Torta Zanahoria.png" },
    { id: 7, nombre: "Torta Moka", categoria: "Tortas", precio: 24900, descripcion: "Combinación perfecta de suave bizcocho de vainilla, crema de café espresso y delicadas notas de chocolate.", imagen: "assets/img/1. Tortas/7. Torta Moka.png" },
    { id: 8, nombre: "Tiramisú", categoria: "Tortas", precio: 26900, descripcion: "El clásico italiano en formato torta: bizcocho embebido en café, queso mascarpone y cacao espolvoreado.", imagen: "assets/img/1. Tortas/8. Tiramisú.png" },
    { id: 9, nombre: "Brownie", categoria: "Tortas", precio: 19900, descripcion: "Torta densa y húmeda a base de nuestro mejor brownie, con costra crujiente e interior fundido de chocolate.", imagen: "assets/img/1. Tortas/9. Brownie.png" },

    // KUCHENS & PIES
    { id: 10, nombre: "Kuchen de Frutos del Bosque", categoria: "Kuchens & Pies", precio: 18900, descripcion: "Masa dulce rellena con una selección de berries de la zona y cubierta con migas crocantes.", imagen: "assets/img/2. Kuchens & Pies/1. Kuchen de Frutos del Bosque.png" },
    { id: 11, nombre: "Kuchen de Frambuesa", categoria: "Kuchens & Pies", precio: 17900, descripcion: "Tradicional kuchen del sur relleno con frambuesas frescas, logrando el equilibrio perfecto entre dulce y ácido.", imagen: "assets/img/2. Kuchens & Pies/2. Kuchen de Frambuesa.png" },
    { id: 12, nombre: "Kuchen de Manzana", categoria: "Kuchens & Pies", precio: 16900, descripcion: "El clásico infaltable. Manzanas acarameladas con canela sobre masa suave, ideal para acompañar un buen mate amargo.", imagen: "assets/img/2. Kuchens & Pies/3. Kuchen de Manzana.png" },
    { id: 13, nombre: "Kuchen de Maracuyá", categoria: "Kuchens & Pies", precio: 17900, descripcion: "Una base crujiente que sostiene una cremosa y refrescante capa de maracuyá. Un toque tropical inigualable.", imagen: "assets/img/2. Kuchens & Pies/4. Kuchen de Maracuyá.png" },
    { id: 14, nombre: "Pie de Limon", categoria: "Kuchens & Pies", precio: 16900, descripcion: "Masa quebrada rellena con suave y ácida crema de limón natural, coronada con abundante merengue tostado.", imagen: "assets/img/2. Kuchens & Pies/5. Pie de Limon.png" },
    { id: 15, nombre: "Cheesecake", categoria: "Kuchens & Pies", precio: 21900, descripcion: "Cremoso cheesecake horneado estilo Nueva York sobre base de galleta, acompañado con salsa de frutos rojos.", imagen: "assets/img/2. Kuchens & Pies/6. Cheesecake.png" },
    { id: 16, nombre: "Pie de Chocolate", categoria: "Kuchens & Pies", precio: 18900, descripcion: "Base crujiente de vainilla rellena con una trufa sedosa y fundente de chocolate de origen.", imagen: "assets/img/2. Kuchens & Pies/7. Pie de Chocolate.png" },

    // MASAS
    { id: 17, nombre: "Alfajores de Maicena", categoria: "Masas", precio: 1500, descripcion: "Suaves tapas de maicena que se deshacen en la boca, rellenas con abundante manjar y bordes de coco rallado.", imagen: "assets/img/3. Masas/1. Alfajores de Maicena.png" },
    { id: 18, nombre: "Mendocinos", categoria: "Masas", precio: 2000, descripcion: "Alfajor artesanal relleno generosamente de dulce de leche y bañado por completo en delicioso chocolate.", imagen: "assets/img/3. Masas/2. Mendocinos.png" },
    { id: 19, nombre: "Rollitos de Canela", categoria: "Masas", precio: 2500, descripcion: "Masa esponjosa y tierna, rellena de azúcar rubia y canela, cubiertos con un glaseado de queso crema irresistible.", imagen: "assets/img/3. Masas/3. Rollitos de Canela.png" },
    { id: 20, nombre: "Galletas Chips", categoria: "Masas", precio: 1500, descripcion: "Clásica galleta con bordes crujientes, centro chicloso y abundantes trozos de chocolate en cada bocado.", imagen: "assets/img/3. Masas/4. Galletas Chips.png" },
    { id: 21, nombre: "Croissants", categoria: "Masas", precio: 2000, descripcion: "Masa hojaldrada, dorada y crujiente por fuera, con un interior alveolado y un marcado sabor a mantequilla.", imagen: "assets/img/3. Masas/5. Croissants.png" },
    { id: 22, nombre: "Berlines", categoria: "Masas", precio: 1500, descripcion: "Masa dulce frita, tierna y espolvoreada con azúcar flor, rellenos a elección de pastelera o manjar.", imagen: "assets/img/3. Masas/6. Berlines.png" },
    { id: 23, nombre: "Donas", categoria: "Masas", precio: 1500, descripcion: "Esponjosas rosquillas glaseadas o bañadas en chocolate, con coloridos toppings. El capricho perfecto.", imagen: "assets/img/3. Masas/7. Donas.png" },
    { id: 24, nombre: "Eclairs", categoria: "Masas", precio: 2500, descripcion: "Delicada masa choux alargada, rellena de crema pastelera y cubierta con un brillante glaseado de chocolate.", imagen: "assets/img/3. Masas/8. Eclairs.png" },
    { id: 25, nombre: "Macarons", categoria: "Masas", precio: 1500, descripcion: "Pequeñas y elegantes galletas francesas a base de almendra, con exterior crujiente e interior muy cremoso.", imagen: "assets/img/3. Masas/9. Macarons.png" },

    // SIN AZÚCAR
    { id: 26, nombre: "Torta Vainilla-Chocolate sin Azúcar", categoria: "Sin Azucar", precio: 28900, descripcion: "Esponjosas capas de vainilla y chocolate, endulzadas naturalmente. Todo el sabor, sin culpas.", imagen: "assets/img/4. Sin Azucar/1. Torta Vainilla - Cholate sin Azucar.png" },
    { id: 27, nombre: "Queque Marmoleado Sin Azúcar", categoria: "Sin Azucar", precio: 9900, descripcion: "Clásico queque de vainilla y chocolate entrelazados, suave y húmedo, 100% libre de azúcar añadida.", imagen: "assets/img/4. Sin Azucar/2. Queque Marmoleado Sin Azucar.png" },
    { id: 28, nombre: "Queque Naranja Chips Sin Azúcar", categoria: "Sin Azucar", precio: 9900, descripcion: "Refrescante queque con ralladura de naranja fresca y chips de chocolate oscuro, endulzado con alulosa.", imagen: "assets/img/4. Sin Azucar/3. Queque Naranja Chips sin azucar.png" },
    { id: 29, nombre: "Queque Limon Sin Azúcar", categoria: "Sin Azucar", precio: 8900, descripcion: "Queque tierno y cítrico con un ligero glaseado de limón, perfecto para la once sin romper la dieta.", imagen: "assets/img/4. Sin Azucar/4. Queque Limon Sin Azucar.png" },
    { id: 30, nombre: "Queque Chocolate Sin Gluten", categoria: "Sin Gluten", precio: 9900, descripcion: "Intenso sabor a cacao en un queque húmedo preparado exclusivamente con harinas certificadas sin gluten.", imagen: "assets/img/4. Sin Azucar/5. Queque Chocolate Sin Gluten.png" },
    { id: 31, nombre: "Bombones Sin Azucar (Caja)", categoria: "Sin Azucar", precio: 6900, descripcion: "Caja de finos chocolates artesanales rellenos, endulzados naturalmente para disfrutar de la pureza del cacao.", imagen: "assets/img/4. Sin Azucar/6. Bombones Sin Azucar.png" },

    // SIN GLUTEN
    { id: 32, nombre: "Torta de Frutilla Sin Gluten", categoria: "Sin Gluten", precio: 29900, descripcion: "Suave bizcocho preparado con harinas alternativas, relleno de crema y frutillas frescas de la estación.", imagen: "assets/img/5. Sin Gluten/1. Torta de Frutilla Sin Gluten.png" },
    { id: 33, nombre: "Galletas Sin Gluten (Bolsa)", categoria: "Sin Gluten", precio: 4500, descripcion: "Crujientes y deliciosas galletas horneadas sin trigo, perfectas para un snack rico y completamente seguro.", imagen: "assets/img/5. Sin Gluten/2. Galletas Sin Gluten.png" },

    // PROTEÍNA
    { id: 34, nombre: "Galletas Proteicas", categoria: "Proteina", precio: 2800, descripcion: "Galletas fortificadas con proteína aislada, ideales para recuperar energía de manera sana y deliciosa.", imagen: "assets/img/6. Proteina/1. Galletas Proteicas.png" },
    { id: 35, nombre: "Barritas de Proteina", categoria: "Proteina", precio: 3000, descripcion: "Snack compacto y nutritivo con frutos secos, chocolate oscuro y un alto aporte proteico para el día a día.", imagen: "assets/img/6. Proteina/2. Barritas de Proteina.png" }
];

// --- FUNCIONES PRINCIPALES ---
function mostrarProductos(lista) {
    const contenedor = document.getElementById('contenedor-productos');
    if(!contenedor) return;
    
    contenedor.innerHTML = '';
    const categorias = [...new Set(lista.map(p => p.categoria))];

    categorias.forEach(categoria => {
        const productosSeccion = lista.filter(p => p.categoria === categoria);

        let seccionHTML = `
            <div class="col-12 mt-5 mb-2">
                <h3 class="text-titulos fs-2 fw-bold mb-1">${categoria}</h3>
                <hr style="border: 0; border-top: 2px solid var(--color-primario); opacity: 0.8; margin-top: 5px;">
            </div>
        `;

        productosSeccion.forEach(prod => {
            seccionHTML += `
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                        <a href="producto.html?id=${prod.id}">
                            <img src="${prod.imagen}" class="card-img-top" style="aspect-ratio: 4/3; object-fit: cover; object-position: center; transition: transform 0.3s;" alt="${prod.nombre}" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        </a>
                        <div class="card-body text-center d-flex flex-column">
                            <a href="producto.html?id=${prod.id}" class="text-decoration-none">
                                <h5 class="card-title fw-bold text-titulos mt-2">${prod.nombre}</h5>
                            </a>
                            <p class="fs-4 text-primary fw-bold mt-auto mb-3">$${prod.precio.toLocaleString('es-CL')}</p>
                            <button onclick="agregarAlCarrito(${prod.id})" class="btn btn-outline-primary w-100 rounded-pill">
                                <i class="bi bi-cart-plus"></i> Añadir
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        contenedor.innerHTML += seccionHTML;
    });
}


window.agregarAlCarrito = (id) => {
    const producto = productos.find(p => p.id === id);
    const existe = carrito.find(p => p.id === id);
    
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    
    localStorage.setItem('carritoTemucoDulce', JSON.stringify(carrito));
    actualizarContador();

    // Notificación Toast No Intrusiva
    const Toast = Swal.mixin({
        toast: true, position: 'top-end', showConfirmButton: false, timer: 2000, timerProgressBar: true
    });
    Toast.fire({ icon: 'success', title: `¡${producto.nombre} añadido!` });
};

window.actualizarContador = () => {
    const contador = document.getElementById('contador-carrito');
    if(contador) {
        contador.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
};

// --- GESTIÓN DE SESIÓN ---
function actualizarNavbar() {
    const usuario = JSON.parse(localStorage.getItem('usuarioTemucoDulce'));
    const menuUsuario = document.getElementById('menuUsuario');
    const botonLogin = document.getElementById('botonLoginNav');
    const nombreNav = document.getElementById('nombreNav');

    if (usuario && menuUsuario && botonLogin) {
        menuUsuario.style.display = 'block';
        botonLogin.style.display = 'none';
        nombreNav.innerText = usuario.nombre.split(' ')[0];
    }
}

window.cerrarSesion = () => {
    Swal.fire({
        title: '¿Cerrar sesión?', text: "Tendrás que registrarte de nuevo para comprar.", icon: 'warning', showCancelButton: true, confirmButtonColor: '#d63384', confirmButtonText: 'Sí, salir'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('usuarioTemucoDulce');
            window.location.reload();
        }
    });
};

// --- BUSCADOR Y MASCOTA ---
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    actualizarContador();
    actualizarNavbar();

    // Lógica del Buscador en tiempo real
    const inputBuscador = document.getElementById('inputBuscador');
    if (inputBuscador) {
        inputBuscador.addEventListener('input', (e) => {
            const texto = e.target.value.toLowerCase().trim();
            const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto) || p.categoria.toLowerCase().includes(texto));
            mostrarProductos(filtrados);
            if (filtrados.length === 0) {
                document.getElementById('contenedor-productos').innerHTML = `<div class="col-12 text-center py-5"><i class="bi bi-search fs-1"></i><h4 class="mt-3">Sin resultados</h4></div>`;
            }
        });
    }

    // Lógica de la Mascota
    const mascota = document.getElementById('mascotaDulce');
    if(mascota) {
        const burbuja = mascota.querySelector('.burbuja-saludo');
        setTimeout(() => {
            burbuja.style.opacity = '1'; burbuja.style.visibility = 'visible'; burbuja.style.bottom = '120%';
            setTimeout(() => { burbuja.style.opacity = '0'; burbuja.style.visibility = 'hidden'; }, 5000);
        }, 2000);
        mascota.addEventListener('click', () => window.location.hash = 'productos');
    }
});

/**
 * Efecto de chispas/confeti al hacer clic
**/
function initClickSpark() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none'; // Para que no bloquee los clics
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let sparks = [];

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    window.dispatchEvent(new Event('resize'));

    document.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const now = performance.now();
        
        // Crear 8 partículas por clic
        for (let i = 0; i < 8; i++) {
            sparks.push({
                x, y,
                angle: (2 * Math.PI * i) / 8,
                startTime: now,
                color: '#d63384' 
            });
        }
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const now = performance.now();
        const duration = 600;

        sparks = sparks.filter(spark => {
            const elapsed = now - spark.startTime;
            if (elapsed >= duration) return false;

            const progress = elapsed / duration;
            const distance = progress * 40; // Radio de expansión
            
            ctx.strokeStyle = spark.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            const x1 = spark.x + distance * Math.cos(spark.angle);
            const y1 = spark.y + distance * Math.sin(spark.angle);
            const x2 = spark.x + (distance + 15) * Math.cos(spark.angle);
            const y2 = spark.y + (distance + 15) * Math.sin(spark.angle);
            
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            return true;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', initClickSpark);

// Lógica del Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // pequeña pausa extra
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
            // EliminaR DOM después de la transición
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800); 
    }
});