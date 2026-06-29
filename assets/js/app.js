// ==========================================
// 1. VARIABLES GLOBALES E INVENTARIO
// ==========================================
let carrito = JSON.parse(localStorage.getItem('carritoTemucoDulce')) || [];
let datosUsuario = JSON.parse(localStorage.getItem('usuarioTemucoDulce')) || { nombre: '', telefono: '', email: '', direcciones: [], tarjetas: [] };

const productos = [
    { id: 1, nombre: "Torta Chocolate", categoria: "Tortas", precio: 24900, descripcion: "Suave bizcocho de cacao intenso relleno con ganache y cubierta de crema.", imagen: "assets/img/torta_chocolate.webp" },
    { id: 2, nombre: "Torta Red Velvet", categoria: "Tortas", precio: 26900, descripcion: "Clásico bizcocho aterciopelado rojo relleno con frosting de queso crema.", imagen: "assets/img/torta_red_velvet.webp" },
    { id: 3, nombre: "Torta Selva Negra", categoria: "Tortas", precio: 24900, descripcion: "Bizcocho húmedo de chocolate, crema chantilly, mermelada y guindas.", imagen: "assets/img/torta_selva_negra.webp" },
    { id: 4, nombre: "Torta Tres Leches", categoria: "Tortas", precio: 22900, descripcion: "Esponjoso bizcocho bañado en tres leches con suave merengue suizo.", imagen: "assets/img/torta_tres_leches.webp" },
    { id: 5, nombre: "Torta Panqueque Choco-Naranja", categoria: "Tortas", precio: 26900, descripcion: "Finas capas de panqueque de chocolate con sedosa crema de naranja.", imagen: "assets/img/torta_panqueques _chocolate_naranja.webp" },
    { id: 6, nombre: "Torta Zanahoria", categoria: "Tortas", precio: 25900, descripcion: "Bizcocho especiado con zanahoria rallada, nueces y frosting de queso crema.", imagen: "assets/img/torta_zanahoria.webp" },
    { id: 7, nombre: "Torta Moka", categoria: "Tortas", precio: 24900, descripcion: "Suave bizcocho de vainilla, crema de café espresso y chocolate.", imagen: "assets/img/torta_moka.webp" },
    { id: 8, nombre: "Tiramisú", categoria: "Tortas", precio: 26900, descripcion: "Clásico italiano: bizcocho en café, queso mascarpone y cacao.", imagen: "assets/img/tiramisu.webp" },
    { id: 9, nombre: "Brownie", categoria: "Tortas", precio: 19900, descripcion: "Torta densa a base de nuestro brownie, crujiente por fuera y fundida por dentro.", imagen: "assets/img/brownie.webp" },
    { id: 10, nombre: "Kuchen de Frutos del Bosque", categoria: "Kuchens & Pies", precio: 18900, descripcion: "Masa dulce rellena de berries de la zona y cubierta con migas crocantes.", imagen: "assets/img/kuchen_frutos_bosque.webp" },
    { id: 11, nombre: "Kuchen de Frambuesa", categoria: "Kuchens & Pies", precio: 17900, descripcion: "Tradicional kuchen del sur relleno con frambuesas frescas.", imagen: "assets/img/kuchen_frambuesa.webp" },
    { id: 12, nombre: "Kuchen de Manzana", categoria: "Kuchens & Pies", precio: 16900, descripcion: "Manzanas acarameladas con canela sobre masa suave.", imagen: "assets/img/kuchen_manzana.webp" },
    { id: 13, nombre: "Kuchen de Maracuyá", categoria: "Kuchens & Pies", precio: 17900, descripcion: "Base crujiente y cremosa capa de maracuyá tropical.", imagen: "assets/img/kuchen_maracuya.webp" },
    { id: 14, nombre: "Pie de Limon", categoria: "Kuchens & Pies", precio: 16900, descripcion: "Masa quebrada rellena con crema de limón natural y merengue tostado.", imagen: "assets/img/pie_limon.webp" },
    { id: 15, nombre: "Cheesecake", categoria: "Kuchens & Pies", precio: 21900, descripcion: "Cremoso cheesecake horneado estilo Nueva York con frutos rojos.", imagen: "assets/img/cheesecake.webp" },
    { id: 16, nombre: "Pie de Chocolate", categoria: "Kuchens & Pies", precio: 18900, descripcion: "Base crujiente rellena con trufa sedosa de chocolate de origen.", imagen: "assets/img/pie_chocolate.webp" },
    { id: 17, nombre: "Alfajores de Maicena", categoria: "Masas", precio: 1500, descripcion: "Suaves tapas de maicena rellenas con manjar y coco.", imagen: "assets/img/alfajores_maicena.webp" },
    { id: 18, nombre: "Mendocinos", categoria: "Masas", precio: 2000, descripcion: "Alfajor relleno de dulce de leche y bañado en chocolate.", imagen: "assets/img/mendocinos.webp" },
    { id: 19, nombre: "Rollitos de Canela", categoria: "Masas", precio: 2500, descripcion: "Masa esponjosa rellena de canela y cubierta con glaseado de queso crema.", imagen: "assets/img/rollitos_canela.webp" },
    { id: 20, nombre: "Galletas Chips", categoria: "Masas", precio: 1500, descripcion: "Clásica galleta crujiente con trozos de chocolate.", imagen: "assets/img/galletas_chips.webp" },
    { id: 21, nombre: "Croissants", categoria: "Masas", precio: 2000, descripcion: "Hojaldre dorado y crujiente con marcado sabor a mantequilla.", imagen: "assets/img/croissants.webp" },
    { id: 22, nombre: "Berlines", categoria: "Masas", precio: 1500, descripcion: "Masa tierna frita rellena de pastelera o manjar.", imagen: "assets/img/berlines.webp" },
    { id: 23, nombre: "Donas", categoria: "Masas", precio: 1500, descripcion: "Esponjosas rosquillas glaseadas o bañadas en chocolate.", imagen: "assets/img/donas.webp" },
    { id: 24, nombre: "Eclairs", categoria: "Masas", precio: 2500, descripcion: "Masa choux rellena de pastelera y cubierta con glaseado de chocolate.", imagen: "assets/img/eclairs.webp" },
    { id: 25, nombre: "Macarons", categoria: "Masas", precio: 1500, descripcion: "Elegantes galletas francesas a base de almendra con cremoso interior.", imagen: "assets/img/macarons.webp" },
    { id: 26, nombre: "Torta Vainilla-Choco Sin Azúcar", categoria: "Sin Azucar", precio: 28900, descripcion: "Capas de vainilla y chocolate, endulzadas naturalmente.", imagen: "assets/img/torta_vainilla_cholate_sin_azucar.webp" },
    { id: 27, nombre: "Queque Marmoleado Sin Azúcar", categoria: "Sin Azucar", precio: 9900, descripcion: "Clásico queque de vainilla y chocolate sin azúcar añadida.", imagen: "assets/img/queque_marmoleado_sin_azucar.webp" },
    { id: 28, nombre: "Queque Naranja Chips Sin Azúcar", categoria: "Sin Azucar", precio: 9900, descripcion: "Queque cítrico con chips de chocolate endulzado con alulosa.", imagen: "assets/img/queque_naranja_chips_sin_azucar.webp" },
    { id: 29, nombre: "Queque Limon Sin Azúcar", categoria: "Sin Azucar", precio: 8900, descripcion: "Queque tierno y cítrico sin romper la dieta.", imagen: "assets/img/queque_limon_sin_azucar.webp" },
    { id: 31, nombre: "Bombones Sin Azucar (Caja)", categoria: "Sin Azucar", precio: 6900, descripcion: "Finos chocolates artesanales endulzados naturalmente.", imagen: "assets/img/bombones_sin_azucar.webp" },
    { id: 30, nombre: "Queque Chocolate Sin Gluten", categoria: "Sin Gluten", precio: 9900, descripcion: "Intenso cacao preparado exclusivamente con harinas sin gluten.", imagen: "assets/img/queque_chocolate_sin_gluten.webp" },
    { id: 32, nombre: "Torta de Frutilla Sin Gluten", categoria: "Sin Gluten", precio: 29900, descripcion: "Bizcocho alternativo relleno de crema y frutillas frescas.", imagen: "assets/img/torta_frutilla_sin_gluten.webp" },
    { id: 33, nombre: "Galletas Sin Gluten (Bolsa)", categoria: "Sin Gluten", precio: 4500, descripcion: "Crujientes galletas horneadas sin trigo.", imagen: "assets/img/galletas_sin_gluten.webp" },
    { id: 34, nombre: "Galletas Proteicas", categoria: "Proteina", precio: 2800, descripcion: "Galletas fortificadas con proteína aislada.", imagen: "assets/img/galletas_proteicas.webp" },
    { id: 35, nombre: "Barritas de Proteina", categoria: "Proteina", precio: 3000, descripcion: "Snack nutritivo con alto aporte proteico.", imagen: "assets/img/barritas_proteina.webp" }
];

// ==========================================
// 2. LÓGICA GLOBAL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 800);
    }

    actualizarContador();

    // --- Botón Volver Arriba ---
    const btnArriba = document.getElementById('btnVolverArriba');
    if(btnArriba) {
        window.addEventListener('scroll', () => { btnArriba.style.display = window.scrollY > 300 ? 'flex' : 'none'; });
        btnArriba.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // --- Mascota Rotativa ---
    const textoMascota = document.getElementById('textoMascota');
    if (textoMascota) {
        const frasesMascota = [
            "¡Hola! ¿Antojo de algo rico?", "Recuerda llevar algo dulcecito", "Acabemos con ese antojo",
            "Si no te decides, llévatelos todos", "La vida es corta, ¡come dulce!", "Mmmm de-li-ci-o-so"
        ];
        let indiceFrase = 0;
        
        setTimeout(() => {
            textoMascota.style.opacity = '1'; textoMascota.style.visibility = 'visible';
            setInterval(() => {
                textoMascota.style.opacity = 0; 
                setTimeout(() => {
                    indiceFrase = (indiceFrase + 1) % frasesMascota.length;
                    textoMascota.innerText = frasesMascota[indiceFrase];
                    textoMascota.style.opacity = 1; 
                }, 500);
            }, 5000);
        }, 5000);
        
        const btnMascota = document.getElementById('mascotaDulce');
        if(btnMascota) {
            btnMascota.addEventListener('click', () => {
                if(window.location.pathname.includes('index.html') || window.location.pathname === '/') window.location.hash = 'productos';
                else window.location.href = 'index.html#productos';
            });
        }
    }

    const modalPagoEl = document.getElementById('modalPago');
    if (modalPagoEl) {
        modalPagoEl.addEventListener('show.bs.modal', () => {
            const seccionAuth = document.getElementById('seccionAuth');
            const seccionEnvio = document.getElementById('seccionEnvio');
            
            if (seccionEnvio && seccionAuth) {
                if (datosUsuario && datosUsuario.nombre) {
                    seccionAuth.classList.add('d-none'); 
                    seccionEnvio.classList.remove('d-none');
                    document.getElementById('tituloModal').innerText = 'Finalizar Compra';
                    document.getElementById('nombreUsuario').innerText = datosUsuario.nombre.split(' ')[0];
                    if (datosUsuario.direcciones && datosUsuario.direcciones.length > 0) {
                        document.getElementById('bloqueCargarDireccion').style.display = 'block';
                    }
                } else {
                    seccionAuth.classList.remove('d-none'); 
                    seccionEnvio.classList.add('d-none');
                    document.getElementById('tituloModal').innerText = 'Accede para continuar';
                }
            }
        });
    }

    actualizarNavbar();
    initClickSpark();

    // Configuración robusta para múltiples modales de contraseña
    configurarVerPassword('btnVerPassword', 'regPassword', 'iconoVerPassword');
    configurarVerPassword('btnVerPasswordCarrito', 'regPasswordCarrito', 'iconoVerPasswordCarrito');

    // --- ENRUTADOR ---
    const path = window.location.pathname;
    if (document.getElementById('contenedor-productos') && !path.includes('carrito')) iniciarLogicaIndex();
    if (document.getElementById('tabla-carrito')) renderizarCarrito();
    if (document.getElementById('vistaPerfil')) iniciarLogicaMiCuenta();
    if (document.getElementById('lista-pedidos')) iniciarLogicaPedidos();
});

// ==========================================
// 3. FUNCIONES DEL CARRITO Y COMPRAS
// ==========================================
window.agregarAlCarrito = (id) => {
    const producto = productos.find(p => p.id === id);
    const existe = carrito.find(p => p.id === id);
    if (existe) existe.cantidad++; else carrito.push({ ...producto, cantidad: 1 });
    localStorage.setItem('carritoTemucoDulce', JSON.stringify(carrito));
    actualizarContador();
    Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 2000 }).fire({ icon: 'success', title: `¡Añadido!` });
};

window.actualizarContador = () => {
    const contadores = document.querySelectorAll('#contador-carrito');
    contadores.forEach(c => c.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0));
};

function renderizarCarrito() {
    const tabla = document.getElementById('tabla-carrito');
    const totalTexto = document.getElementById('total-carrito');
    const totalModal = document.getElementById('total-modal');
    const btnPagar = document.querySelector('[data-bs-target="#modalPago"]');
    const secSugerencias = document.getElementById('seccionSugerencias');
    let total = 0; tabla.innerHTML = '';
    
    if (carrito.length === 0) {
        tabla.innerHTML = '<tr><td colspan="5" class="text-center py-5 text-muted fs-5">Tu carrito está vacío 🍰<br><a href="index.html" class="btn btn-primary rounded-pill mt-3 px-4">Ver Catálogo</a></td></tr>';
        if(totalTexto) totalTexto.innerText = '$0'; if(totalModal) totalModal.innerText = '$0';
        if(btnPagar) btnPagar.disabled = true;
        if(secSugerencias) secSugerencias.classList.remove('d-none'); 
        renderizarSugerencias();
        return;
    }

    if(btnPagar) btnPagar.disabled = false;
    if(secSugerencias) secSugerencias.classList.remove('d-none');
    
    carrito.forEach((p) => {
        const subtotal = p.precio * p.cantidad; total += subtotal;
        // Inclusión de aria-label para accesibilidad
        tabla.innerHTML += `<tr>
                <td><span class="fw-bold text-secondary">${p.nombre}</span></td>
                <td>$${p.precio.toLocaleString('es-CL')}</td>
                <td class="text-center">
                    <button onclick="cambiarCantidad(${p.id}, -1)" aria-label="Disminuir cantidad" class="btn btn-sm btn-outline-secondary rounded-circle">-</button>
                    <span class="mx-2 fw-bold" aria-live="polite">${p.cantidad}</span>
                    <button onclick="cambiarCantidad(${p.id}, 1)" aria-label="Aumentar cantidad" class="btn btn-sm btn-outline-secondary rounded-circle">+</button>
                </td>
                <td class="fw-bold text-primary">$${subtotal.toLocaleString('es-CL')}</td>
                <td class="text-center">
                    <button onclick="eliminarDelCarrito(${p.id})" aria-label="Eliminar producto" class="btn btn-sm btn-danger rounded-circle"><i class="bi bi-trash"></i></button>
                </td>
            </tr>`;
    });
    totalTexto.innerText = '$' + total.toLocaleString('es-CL');
    totalModal.innerText = '$' + total.toLocaleString('es-CL');
    
    renderizarSugerencias();
}

window.cambiarCantidad = (id, cambio) => {
    const p = carrito.find(item => item.id === id);
    if(p) { p.cantidad += cambio; if(p.cantidad < 1) p.cantidad = 1; }
    localStorage.setItem('carritoTemucoDulce', JSON.stringify(carrito)); renderizarCarrito(); actualizarContador();
};
window.eliminarDelCarrito = (id) => { carrito = carrito.filter(i => i.id !== id); localStorage.setItem('carritoTemucoDulce', JSON.stringify(carrito)); renderizarCarrito(); actualizarContador(); };
window.confirmarVaciarCarrito = () => { carrito = []; localStorage.removeItem('carritoTemucoDulce'); renderizarCarrito(); actualizarContador(); };

function renderizarSugerencias() {
    const contenedorSugerencias = document.getElementById('contenedor-sugerencias-dinamicas');
    if (!contenedorSugerencias) return;
    
    const prodDisponibles = productos.filter(p => !carrito.some(c => c.id === p.id));
    if (prodDisponibles.length === 0) { 
        const sec = document.getElementById('seccionSugerencias');
        if (sec) sec.classList.add('d-none'); 
        return; 
    }
    
    const sugerencias = prodDisponibles.sort(() => 0.5 - Math.random()).slice(0, 2);
    contenedorSugerencias.innerHTML = '';
    
    // Inclusión de loading="lazy" y reemplazo de estilos en línea
    sugerencias.forEach(prod => {
        contenedorSugerencias.innerHTML += `
            <div class="col-md-6 mb-3">
                <div class="card h-100 border-1 border-primary-subtle shadow-sm rounded-4 overflow-hidden">
                    <div class="row g-0 align-items-center h-100">
                        <div class="col-4 h-100 bg-light text-center d-flex align-items-center justify-content-center">
                            <img src="${prod.imagen}" loading="lazy" class="img-fluid object-fit-cover img-sugerencia" alt="${prod.nombre}">
                        </div>
                        <div class="col-8">
                            <div class="card-body py-2 px-3">
                                <h6 class="fw-bold mb-1 fs-6 text-truncate" title="${prod.nombre}">${prod.nombre}</h6>
                                <p class="text-primary fw-bold mb-2 small">$${prod.precio.toLocaleString('es-CL')}</p>
                                <button aria-label="Agregar ${prod.nombre} al carrito" class="btn btn-sm btn-outline-primary rounded-pill w-100" onclick="agregarAlCarrito(${prod.id}); renderizarCarrito();">+ Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

window.cargarDireccionPredeterminada = () => {
    if (datosUsuario && datosUsuario.direcciones && datosUsuario.direcciones.length > 0) {
        const fav = datosUsuario.direcciones.find(d => d.favorita) || datosUsuario.direcciones[0];
        const dirInput = document.getElementById('inputDireccion');
        if(dirInput) dirInput.value = `${fav.calle}${fav.depto ? ', ' + fav.depto : ''}, ${fav.comuna}, ${fav.region || ''}`;
        
        const telInput = document.getElementById('inputTelefono');
        if(telInput && datosUsuario.telefono) telInput.value = datosUsuario.telefono;
        
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1500, icon: 'info', title: 'Dirección cargada' });
    } else {
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1500, icon: 'warning', title: 'No tienes direcciones guardadas' });
    }
};

// ==========================================
// 4. GESTIÓN DE SESIÓN INTELIGENTE
// ==========================================
function actualizarNavbar() {
    if (datosUsuario && datosUsuario.nombre) {
        const menuUsuario = document.getElementById('menuUsuario');
        const botonLoginNav = document.getElementById('botonLoginNav');
        const nombreNav = document.getElementById('nombreNav');

        if (menuUsuario) menuUsuario.style.display = 'block';
        if (botonLoginNav) botonLoginNav.style.display = 'none';
        if (nombreNav) nombreNav.innerText = datosUsuario.nombre.split(' ')[0];
    }
}

window.cerrarSesion = () => {
    Swal.fire({ title: '¿Cerrar sesión?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#d63384', confirmButtonText: 'Sí, salir' }).then((result) => {
        if (result.isConfirmed) { localStorage.removeItem('usuarioTemucoDulce'); window.location.href = 'index.html'; }
    });
};

function configurarVerPassword(btnId, inputId, iconoId) {
    const btn = document.getElementById(btnId), input = document.getElementById(inputId), icono = document.getElementById(iconoId);
    if(btn && input) btn.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        icono.classList.toggle('bi-eye-slash'); icono.classList.toggle('bi-eye');
    });
}

function manejarAuthExitosa(nuevoUsuario) {
    datosUsuario = nuevoUsuario;
    localStorage.setItem('usuarioTemucoDulce', JSON.stringify(datosUsuario));
    actualizarNavbar();
    
    const seccionAuth = document.getElementById('seccionAuth');
    const seccionEnvio = document.getElementById('seccionEnvio');
    
    if (window.location.pathname.includes('carrito') && seccionEnvio && seccionAuth) {
        seccionAuth.classList.add('d-none');
        seccionEnvio.classList.remove('d-none');
        document.getElementById('tituloModal').innerText = 'Finalizar Compra';
        document.getElementById('nombreUsuario').innerText = datosUsuario.nombre.split(' ')[0];
        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: '¡Sesión iniciada!', showConfirmButton: false, timer: 1500 });
    } else {
        Swal.fire({ icon: 'success', title: '¡Bienvenido!', showConfirmButton: false, timer: 1500 }).then(() => location.reload());
    }
}

// CAPTURA GLOBAL ROBUSTA (Evita fallos por IDs duplicados buscando dentro del Formulario)
document.addEventListener('submit', (e) => {
    const formId = e.target.id;
    const form = e.target;
    
    if (formId === 'formLogin' || formId === 'formLoginCarrito') {
        e.preventDefault();
        if (!form.checkValidity()) { e.stopPropagation(); form.classList.add('was-validated'); return; }
        
        let usuarioTemp = JSON.parse(localStorage.getItem('usuarioTemucoDulce'));
        if(!usuarioTemp || !usuarioTemp.nombre) {
            usuarioTemp = { nombre: "Usuario Demo", email: "demo@correo.com", direcciones: [], tarjetas: [] };
        }
        manejarAuthExitosa(usuarioTemp);
    }
    
    if (formId === 'formRegistro' || formId === 'formRegistroCarrito') {
        e.preventDefault();
        if (!form.checkValidity()) { e.stopPropagation(); form.classList.add('was-validated'); return; }
        
        // Ahora buscamos los inputs DENTRO del formulario que se activó, ignorando sus IDs.
        const inputsDeTexto = form.querySelectorAll('input[type="text"]');
        const inputDeEmail = form.querySelector('input[type="email"]');
        
        const nombreFormateado = (inputsDeTexto[0] ? inputsDeTexto[0].value : '') + " " + (inputsDeTexto[1] ? inputsDeTexto[1].value : '');
        const emailFormateado = inputDeEmail ? inputDeEmail.value : 'correo@correo.com';
        
        const nuevoUser = { nombre: nombreFormateado.trim(), email: emailFormateado, direcciones: [], tarjetas: [] };
        manejarAuthExitosa(nuevoUser);
    }
    
    if (formId === 'formPerfil') {
        e.preventDefault();
        if (!form.checkValidity()) { e.stopPropagation(); form.classList.add('was-validated'); return; }
        datosUsuario.nombre = document.getElementById('inputNombre').value; 
        datosUsuario.telefono = document.getElementById('inputTelefono').value; 
        datosUsuario.email = document.getElementById('inputEmail').value;
        localStorage.setItem('usuarioTemucoDulce', JSON.stringify(datosUsuario));
        Swal.fire({ icon: 'success', title: 'Datos actualizados', timer: 1500, showConfirmButton: false });
        if(window.cancelarEdicionPerfil) window.cancelarEdicionPerfil(); 
        if(window.renderizarVistaPerfil) window.renderizarVistaPerfil(); 
        actualizarNavbar();
    }

    if (formId === 'formDireccion') {
        e.preventDefault();
        if (!form.checkValidity()) { e.stopPropagation(); form.classList.add('was-validated'); return; }
        if(!datosUsuario.direcciones) datosUsuario.direcciones = [];
        datosUsuario.direcciones.push({ 
            id: Date.now(), alias: document.getElementById('dirAlias').value, calle: document.getElementById('dirCalle').value, 
            depto: document.getElementById('dirDepto') ? document.getElementById('dirDepto').value : '',
            region: document.getElementById('dirRegion') ? document.getElementById('dirRegion').value : '',
            comuna: document.getElementById('dirComuna').value, 
            extra: document.getElementById('dirExtra') ? document.getElementById('dirExtra').value : '',
            favorita: datosUsuario.direcciones.length === 0 
        });
        localStorage.setItem('usuarioTemucoDulce', JSON.stringify(datosUsuario)); 
        if(window.ocultarFormDireccion) window.ocultarFormDireccion(); 
        if(window.renderizarDirecciones) window.renderizarDirecciones(); 
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1500, icon: 'success', title: 'Dirección guardada' });
    }

    if (formId === 'formTarjeta') {
        e.preventDefault();
        if (!form.checkValidity()) { e.stopPropagation(); form.classList.add('was-validated'); return; }
        if(!datosUsuario.tarjetas) datosUsuario.tarjetas = [];
        const num = document.getElementById('tarjNum').value;
        datosUsuario.tarjetas.push({ 
            id: Date.now(), tipo: document.getElementById('tarjTipo').value, 
            rut: document.getElementById('tarjRut') ? document.getElementById('tarjRut').value : '',
            vencimiento: document.getElementById('tarjVenc') ? document.getElementById('tarjVenc').value : '',
            ultimosCuatro: num.slice(-4) 
        });
        localStorage.setItem('usuarioTemucoDulce', JSON.stringify(datosUsuario)); 
        if(window.ocultarFormTarjeta) window.ocultarFormTarjeta(); 
        if(window.renderizarTarjetas) window.renderizarTarjetas(); 
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 1500, icon: 'success', title: 'Tarjeta guardada' });
    }

    if (formId === 'formFinalizarCompra') {
        e.preventDefault();
        let historial = JSON.parse(localStorage.getItem('pedidosTemucoDulce')) || [];
        historial.push({ id: "TC-" + Date.now(), fecha: new Date().toLocaleDateString(), monto: document.getElementById('total-modal').innerText, items: carrito.length, detalle: [...carrito] });
        localStorage.setItem('pedidosTemucoDulce', JSON.stringify(historial));
        Swal.fire({ icon: 'success', title: '¡Compra Exitosa!', confirmButtonColor: '#d63384' }).then(() => {
            localStorage.removeItem('carritoTemucoDulce'); window.location.href = 'pedidos.html';
        });
    }
});

// ==========================================
// 5. LÓGICAS ESPECÍFICAS POR PÁGINA
// ==========================================
function iniciarLogicaIndex() {
    let categoriaSeleccionada = "todos";
    const contenedor = document.getElementById('contenedor-productos');
    
    if (!datosUsuario.nombre) {
        setTimeout(() => {
            const modalEl = document.getElementById('modalBienvenida');
            if (modalEl) { const modal = new bootstrap.Modal(modalEl); modal.show(); }
        }, 2000);
    }

    function filtrarYRenderizar() {
        const inputBuscador = document.getElementById('inputBuscador');
        const textoBuscado = inputBuscador ? inputBuscador.value.toLowerCase() : '';
        const filtrados = productos.filter(prod => {
            const nombreProd = prod.nombre.toLowerCase();
            const coincideTexto = nombreProd.includes(textoBuscado) || prod.descripcion.toLowerCase().includes(textoBuscado);
            let cat = 'masas'; 
            if (nombreProd.includes('sin gluten')) cat = 'sin-gluten';
            else if (nombreProd.includes('sin azucar') || nombreProd.includes('azúcar')) cat = 'sin-azucar';
            else if (nombreProd.includes('proteina') || nombreProd.includes('proteic')) cat = 'proteina';
            else if (nombreProd.includes('torta') || nombreProd.includes('tiramis') || nombreProd.includes('brownie')) cat = 'tortas';
            else if (nombreProd.includes('kuchen') || nombreProd.includes('pie') || nombreProd.includes('cheesecake')) cat = 'kuchens-pies';
            return coincideTexto && (categoriaSeleccionada === 'todos' || cat === categoriaSeleccionada);
        });

        contenedor.innerHTML = '';
        if (filtrados.length === 0) { contenedor.innerHTML = '<div class="col-12 text-center py-5">No encontramos productos 🍰</div>'; return; }

        // Inclusión de loading="lazy" y reemplazo de estilos en línea
        filtrados.forEach(prod => {
            contenedor.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                        <a href="producto.html?id=${prod.id}" aria-label="Ver detalles de ${prod.nombre}" class="bg-light text-center d-flex align-items-center justify-content-center img-wrapper-catalogo">
                            <img src="${prod.imagen}" loading="lazy" class="img-fluid object-fit-cover w-100 h-100 img-zoom" alt="${prod.nombre}">
                        </a>
                        <div class="card-body p-4 d-flex flex-column">
                            <h5 class="fw-bold text-secondary mb-1">${prod.nombre}</h5>
                            <p class="text-muted small flex-grow-1">${prod.descripcion}</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="fw-bold fs-4 text-primary">$${prod.precio.toLocaleString('es-CL')}</span>
                                <button aria-label="Agregar ${prod.nombre} al carrito" onclick="agregarAlCarrito(${prod.id})" class="btn btn-sm btn-primary rounded-pill px-3">Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    }

    const buscador = document.getElementById('inputBuscador');
    if(buscador) buscador.addEventListener('input', filtrarYRenderizar);
    
    document.querySelectorAll('.btn-cat').forEach(boton => {
        boton.addEventListener('click', function() {
            document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
            this.classList.add('active'); categoriaSeleccionada = this.getAttribute('data-categoria'); filtrarYRenderizar(); 
        });
    });
    setTimeout(filtrarYRenderizar, 300);
}

function iniciarLogicaMiCuenta() {
    if(!datosUsuario.nombre) { window.location.href = "index.html"; return; }
    
    window.renderizarVistaPerfil = () => {
        const txtNombre = document.getElementById('txtNombre');
        if(txtNombre) {
            txtNombre.innerText = datosUsuario.nombre;
            document.getElementById('txtTelefono').innerText = datosUsuario.telefono ? `+56 9 ${datosUsuario.telefono}` : 'No registrado';
            document.getElementById('txtEmail').innerText = datosUsuario.email;
        }
    };
    window.activarEdicionPerfil = () => { document.getElementById('vistaPerfil').classList.add('d-none'); document.getElementById('formPerfil').classList.remove('d-none'); };
    window.cancelarEdicionPerfil = () => { document.getElementById('formPerfil').classList.add('d-none'); document.getElementById('vistaPerfil').classList.remove('d-none'); };

    window.renderizarDirecciones = () => {
        const c = document.getElementById('contenedorDirecciones'); 
        if(!c) return;
        c.innerHTML = '';
        if(!datosUsuario.direcciones || datosUsuario.direcciones.length === 0) { c.innerHTML = '<div class="col-12 text-muted small">Sin direcciones.</div>'; return; }
        datosUsuario.direcciones.forEach(dir => {
            c.innerHTML += `
                <div class="col-md-6">
                    <div class="card border-1 rounded-3 h-100 ${dir.favorita ? 'border-primary shadow-sm' : ''}">
                        <div class="card-body position-relative">
                            <button aria-label="Eliminar dirección" onclick="eliminarDireccion(${dir.id})" class="btn btn-sm text-danger position-absolute top-0 end-0 m-2"><i class="bi bi-trash"></i></button>
                            ${dir.favorita ? `<span class="badge bg-primary mb-2">Favorita</span>` : `<button aria-label="Marcar dirección como favorita" onclick="marcarFavorita(${dir.id})" class="btn btn-sm btn-outline-secondary mt-2 w-100">Elegir Favorita</button>`}
                            <h6 class="fw-bold mb-1">${dir.alias}</h6>
                            <p class="text-muted small mb-0"><strong>${dir.calle}</strong>${dir.depto ? ', ' + dir.depto : ''}</p>
                            <p class="text-muted small mb-1">${dir.comuna}, ${dir.region || 'Región'}</p>
                            ${dir.extra ? `<p class="text-muted small fst-italic border-top pt-1 mt-1">${dir.extra}</p>` : ''}
                        </div>
                    </div>
                </div>`;
        });
    };
    window.marcarFavorita = (id) => { datosUsuario.direcciones.forEach(d => d.favorita = (d.id === id)); localStorage.setItem('usuarioTemucoDulce', JSON.stringify(datosUsuario)); renderizarDirecciones(); };
    window.eliminarDireccion = (id) => { datosUsuario.direcciones = datosUsuario.direcciones.filter(d => d.id !== id); localStorage.setItem('usuarioTemucoDulce', JSON.stringify(datosUsuario)); renderizarDirecciones(); };
    window.mostrarFormDireccion = () => document.getElementById('divNuevaDireccion').classList.remove('d-none');
    window.ocultarFormDireccion = () => { document.getElementById('divNuevaDireccion').classList.add('d-none'); document.getElementById('formDireccion').reset(); document.getElementById('formDireccion').classList.remove('was-validated'); };

    window.renderizarTarjetas = () => {
        const contenedor = document.getElementById('contenedorTarjetas'); 
        if(!contenedor) return;
        contenedor.innerHTML = '';
        if(!datosUsuario.tarjetas || datosUsuario.tarjetas.length === 0) { contenedor.innerHTML = '<div class="text-muted small">Sin tarjetas asociadas.</div>'; return; }
        datosUsuario.tarjetas.forEach(t => {
            contenedor.innerHTML += `
                <div class="card border-1 rounded-3 mb-3">
                    <div class="card-body d-flex align-items-center">
                        <i class="bi bi-credit-card-2-front fs-2 text-primary me-3"></i>
                        <div>
                            <h6 class="fw-bold mb-0">Tarjeta de ${t.tipo}</h6>
                            <p class="text-muted small mb-0">Termina en **** ${t.ultimosCuatro} | RUT: ${t.rut || 'N/A'} | Venc: ${t.vencimiento || 'N/A'}</p>
                        </div>
                        <div class="ms-auto">
                            <button aria-label="Eliminar tarjeta" onclick="eliminarTarjeta(${t.id})" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>`;
        });
    };
    window.eliminarTarjeta = (id) => { datosUsuario.tarjetas = datosUsuario.tarjetas.filter(t => t.id !== id); localStorage.setItem('usuarioTemucoDulce', JSON.stringify(datosUsuario)); renderizarTarjetas(); };
    window.mostrarFormTarjeta = () => document.getElementById('divNuevaTarjeta').classList.remove('d-none');
    window.ocultarFormTarjeta = () => { document.getElementById('divNuevaTarjeta').classList.add('d-none'); document.getElementById('formTarjeta').reset(); document.getElementById('formTarjeta').classList.remove('was-validated'); };

    const inputVenc = document.getElementById('tarjVenc');
    const vencFeedback = document.getElementById('vencFeedback');
    if(inputVenc) {
        inputVenc.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
            this.value = value;
            if (value.length === 5) {
                const mes = parseInt(value.slice(0, 2), 10), ano = parseInt(value.slice(3, 5), 10);
                if (mes < 1 || mes > 12) {
                    this.setCustomValidity('Mes Inválido');
                    if (vencFeedback) vencFeedback.innerText = 'Fecha de vencimiento inválida. El mes debe ser entre 01 y 12.';
                } else if (ano <= 26) {
                    this.setCustomValidity('Año Inválido');
                    if (vencFeedback) vencFeedback.innerText = 'Fecha de vencimiento inválida. El año debe ser mayor a 26.';
                } else this.setCustomValidity(''); 
            } else {
                this.setCustomValidity('Incompleto');
                if (vencFeedback) vencFeedback.innerText = 'Fecha de vencimiento inválida o incompleta (Usa MM/AA).';
            }
        });
    }

    const btnVerCvv = document.getElementById('btnVerCvv');
    const inputCvv = document.getElementById('tarjCvv');
    const iconoCvv = document.getElementById('iconoCvv');
    if (btnVerCvv && inputCvv && iconoCvv) {
        btnVerCvv.addEventListener('click', () => {
            if (inputCvv.type === 'password') { inputCvv.type = 'text'; iconoCvv.classList.replace('bi-eye', 'bi-eye-slash'); } 
            else { inputCvv.type = 'password'; iconoCvv.classList.replace('bi-eye-slash', 'bi-eye'); }
        });
    }

    renderizarVistaPerfil(); renderizarDirecciones(); renderizarTarjetas();
}

function iniciarLogicaPedidos() {
    const lista = document.getElementById('lista-pedidos');
    const pedidos = JSON.parse(localStorage.getItem('pedidosTemucoDulce')) || [];
    if (pedidos.length === 0) { document.getElementById('mensaje-vacio').classList.remove('d-none'); return; }

    pedidos.reverse().forEach((pedido) => {
        const pedidoData = JSON.stringify(pedido).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
        lista.innerHTML += `<tr><td class="ps-4 fw-bold text-primary">${pedido.id}</td><td class="text-muted">${pedido.fecha}</td><td>${pedido.items} ítems</td><td class="fw-bold text-titulos fs-5">${pedido.monto}</td><td class="text-center"><span class="badge bg-success">Pagado</span></td><td class="text-center"><button aria-label="Descargar comprobante en PDF" onclick="descargarPDF('${pedidoData}')" class="btn btn-sm btn-outline-danger rounded-pill px-3"><i class="bi bi-file-earmark-pdf"></i> Descargar Comprobante</button></td></tr>`;
    });

    window.descargarPDF = function(dataStr) {
        const pedido = JSON.parse(dataStr);
        const elemento = document.createElement('div'); let filasHTML = "";
        
        // (Nota: Estos son estilos obligatorios para la librería HTML2PDF)
        if(pedido.detalle) { pedido.detalle.forEach(p => { filasHTML += `<tr><td style="padding: 10px; border-bottom: 1px solid #eee;">${p.nombre} (x${p.cantidad})</td><td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$${(p.precio * p.cantidad).toLocaleString('es-CL')}</td></tr>`; }); }
        elemento.innerHTML = `<div style="padding: 30px; font-family: sans-serif; color: #333; border: 2px solid #d63384; border-radius: 10px;"><h1 style="color: #d63384; text-align: center;">🍰 Temuco Dulce</h1><p style="text-align: center; border-bottom: 2px solid #fce4ec; padding-bottom: 10px;">Comprobante de Pedido</p><p><strong>N° Orden:</strong> ${pedido.id}</p><p><strong>Fecha:</strong> ${pedido.fecha}</p><table style="width: 100%; border-collapse: collapse; margin-top: 20px;"><thead><tr style="background-color: #fce4ec;"><th style="padding: 10px; text-align: left;">Producto</th><th style="padding: 10px; text-align: right;">Subtotal</th></tr></thead><tbody>${filasHTML}</tbody></table><div style="text-align: right; margin-top: 20px;"><h2 style="color: #d63384;">Total: ${pedido.monto}</h2></div></div>`;
        html2pdf().set({ margin: 0.5, filename: `Boleta-${pedido.id}.pdf`, html2canvas: { scale: 3 }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } }).from(elemento).save();
    };
}

function initClickSpark() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let sparks = [];

    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
    window.dispatchEvent(new Event('resize'));

    document.addEventListener('click', (e) => {
        for (let i = 0; i < 8; i++) sparks.push({ x: e.clientX, y: e.clientY, angle: (2 * Math.PI * i) / 8, startTime: performance.now(), color: '#d63384' });
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const now = performance.now();
        sparks = sparks.filter(spark => {
            const elapsed = now - spark.startTime;
            if (elapsed >= 600) return false;
            const distance = (elapsed / 600) * 40;
            ctx.strokeStyle = spark.color; ctx.lineWidth = 3; ctx.beginPath();
            ctx.moveTo(spark.x + distance * Math.cos(spark.angle), spark.y + distance * Math.sin(spark.angle));
            ctx.lineTo(spark.x + (distance + 15) * Math.cos(spark.angle), spark.y + (distance + 15) * Math.sin(spark.angle));
            ctx.stroke(); return true;
        });
        requestAnimationFrame(draw);
    }
    draw();
}