const botonesLike = document.querySelectorAll('.card .boton');
botonesLike.forEach(boton => {
    const originalContent = boton.innerHTML;
    let isLiked = false;

    boton.addEventListener('click', () => {     
        isLiked = !isLiked;
        if (isLiked) {
            boton.textContent = '¡Gracias por tu like!';
        } else {
            boton.innerHTML = originalContent;
        }
    });
});