const form = document.getElementById('form-nueva-pub');
const contenedorPub = document.getElementById('no tengo el nombre');

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

    console.log('feedbakc', feedback)
    if (
        !imagenArchivo ||
        !formatosPermitidos.includes(imagenArchivo.type) ||
        titulo.classList.contains('is-invalid') ||
        descripcion.classList.contains('is-invalid')
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
    nuevaPublicacion.classList.add('card', 'my-4');
    nuevaPublicacion.innerHTML = `
    <img src="${imagenURL}" class="card-img-top" alt="Imagen seleccionada">
    <div class="card-body">
      <h5 class="card-title">${titulo}</h5>
      <p class="card-text">${descripcion}</p>
    </div>
  `;

    // Agregar la publicación al contenedor
    contenedorPub.appendChild(nuevaPublicacion);

    // Limpiar el formulario
    form.reset();
});
