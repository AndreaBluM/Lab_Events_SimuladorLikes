const form = document.getElementById('form-nueva-pub');
const contenedorPub = document.getElementById('inner-contenedor');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura de datos
    const titulo = document.getElementById('validacionTitulo').value;
    const descripcion = document.getElementById('validacionTextarea').value;
    const imagenInput = document.getElementById('validacionFile');
    const imagenArchivo = imagenInput.files[0];
    const feedback = document.getElementById('invalid-file');

    // Validar tipo de archivo
    const formatosPermitidos = ['image/jpeg', 'image/jpg', 'image/png'];
    if (
        !imagenArchivo ||
        !formatosPermitidos.includes(imagenArchivo.type) ||
        !titulo || !descripcion
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error en el formulario',
            text: 'Revisa que todos los campos estén completos y en formato válido.',
        });

        form.reset();

        titulo.classList.remove('is-valid', 'is-invalid');
        descripcion.classList.remove('is-valid', 'is-invalid');
        imagenInput.classList.remove('is-valid', 'is-invalid');

        return;
    }


    // Crear la URL temporal de la imagen
    const imagenURL = URL.createObjectURL(imagenArchivo);

    // Crear el bloque con los datos
    const nuevaPublicacion = document.createElement('div');
    nuevaPublicacion.classList.add('col');
    const nuevaCard = document.createElement('div');
    nuevaCard.classList.add('card', 'h-75', 'pacifico-regular');
    nuevaCard.innerHTML = `
    <img src="${imagenURL}" class="card-img-top" alt="Imagen seleccionada">
    <div class="card-body w-100">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${descripcion}</p>
        <button class="likeBoton boton btn btn-primary">
            <i class="bi bi-balloon-heart fs-3 icono"></i>
            <span class="contador fs-3"></span>
        </button>
    </div>
  `;
    nuevaPublicacion.appendChild(nuevaCard);
    // Agregar la publicación al contenedor
    contenedorPub.appendChild(nuevaPublicacion);

    // Limpiar el formulario
    form.reset();

    window.location.href = "#contenedor-publicaciones";

    const likeBoton = document.querySelectorAll('.likeBoton');

    likeBoton.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const contadorElemento = btn.parentElement.querySelector('.contador');
            const icono = btn.parentElement.querySelector('.icono');
            let count = Number(contadorElemento.textContent) + 1;
            contadorElemento.textContent = String(count);
            icono.classList.remove('bi-balloon-heart', 'fs-3');
            icono.classList.add('bi-balloon-heart-fill', 'fs-2');
            icono.style.color = '#f2385a';
            icono.style.size
            setTimeout(() => {
                icono.classList.remove('bi-balloon-heart-fill', 'fs-2');
                icono.classList.add('bi-balloon-heart', 'fs-3');
                icono.style.color = ''; // volver al color original

            }, 1000);

        });
    });
});

const likeBoton = document.querySelectorAll('.likeBoton');

likeBoton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const contadorElemento = btn.parentElement.querySelector('.contador');
        const icono = btn.parentElement.querySelector('.icono');
        let count = Number(contadorElemento.textContent) + 1;
        contadorElemento.textContent = String(count);
        icono.classList.remove('bi-balloon-heart', 'fs-3');
        icono.classList.add('bi-balloon-heart-fill', 'fs-2');
        icono.style.color = '#f2385a';
        icono.style.size
        setTimeout(() => {
            icono.classList.remove('bi-balloon-heart-fill', 'fs-2');
            icono.classList.add('bi-balloon-heart', 'fs-3');
            icono.style.color = ''; // volver al color original

        }, 1000);
    
    });
});



