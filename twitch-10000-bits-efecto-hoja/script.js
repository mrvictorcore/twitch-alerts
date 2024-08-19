function createStar() {
    const starOrbit = document.createElement('div');
    starOrbit.className = 'star-orbit';
    
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    star.setAttribute("viewBox", "0 0 24 24");
    star.setAttribute("class", "star");
    star.innerHTML = '<path d="M12 2L14.09 8.26L20 9.27L15.5 13.97L16.91 20L12 16.77L7.09 20L8.5 13.97L4 9.27L9.91 8.26L12 2Z"/>';

    starOrbit.appendChild(star);
    document.querySelector('.star-rain').appendChild(starOrbit);

    starOrbit.style.left = `${Math.random() * 100}vw`;  // Posición aleatoria horizontal
    starOrbit.style.animationDuration = `${Math.random() * 3 + 5}s`;  // Variar la duración de la caída

    setTimeout(() => {
        starOrbit.remove();
    }, 10000);
}

setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 1;
    let audio = document.getElementById('coin-sound');
    audio.play();

    const starInterval = setInterval(createStar, 200);  // Crear una estrella cada 200ms

    setTimeout(() => {
        clearInterval(starInterval);
    }, 10000);  // Detener la creación de estrellas después de 10 segundos

}, 1000);

setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 0;
}, 50000);  // Mantener el texto hasta que caigan todas las estrellas
