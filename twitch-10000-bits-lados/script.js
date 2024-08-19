function createStar(direction) {
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    star.setAttribute("viewBox", "0 0 24 24");
    star.setAttribute("class", "star");
    star.innerHTML = '<path d="M12 2L14.09 8.26L20 9.27L15.5 13.97L16.91 20L12 16.77L7.09 20L8.5 13.97L4 9.27L9.91 8.26L12 2Z"/>';

    const starMovement = document.querySelector('.star-movement');
    starMovement.appendChild(star);

    // Posición aleatoria vertical
    star.style.top = `${Math.random() * 90}vh`;

    // Dirección del movimiento
    if (direction === "left") {
        star.style.animationName = 'moveStarRightToLeft';
    } else {
        star.style.animationName = 'moveStarLeftToRight';
    }

    // Ajuste de la velocidad del movimiento
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;

    setTimeout(() => {
        star.remove();
    }, 3000);
}

setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 1;
    let audio = document.getElementById('coin-sound');
    audio.play();

    const starDirections = ["left", "right"];
    let count = 0;

    const starInterval = setInterval(() => {
        const direction = starDirections[count % 2];
        for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
            createStar(direction);
        }
        count++;
    }, 1000);  // Crear estrellas cada segundo

    setTimeout(() => {
        clearInterval(starInterval);
    }, 10000);  // Detener la creación de estrellas después de 10 segundos

}, 1000);

setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 0;
}, 50000);  // Mantener el texto hasta que caigan todas las estrellas
