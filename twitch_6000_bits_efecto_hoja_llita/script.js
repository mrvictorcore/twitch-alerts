// Obtener configuraciones desde la inyección de StreamElements
const name = '{{name}}';
const amount = '{{amount}}'; 
const usernameColor = '{{usernameColor}}';
const fontChoice = '{{fontChoice}}';
const starImage = '{{starImage}}'; // Usar la URL de la estrella desde el JSON

// Obtener elementos del DOM
const alertUserName = document.querySelector('#alert-username');
const alertAmount = document.querySelector('#alert-amount');
const cheerAmountElement = document.querySelector('#cheer-amount');

// Función para establecer la cantidad de bits
function setAmount(amount) {
    return amount;
}

// Establecer la cantidad final
let finalAmount = setAmount(amount);

// Rellenar el contenido de la alerta con los datos
alertUserName.textContent = name;
alertAmount.textContent = finalAmount;
cheerAmountElement.textContent = finalAmount; // Aquí se actualiza el span con el ID cheer-amount

// Aplicar las configuraciones de estilo y texto
alertUserName.style.color = usernameColor;
document.querySelector('.alert-text').style.fontFamily = fontChoice;

function createStar() {
    const starOrbit = document.createElement('div');
    starOrbit.className = 'star-orbit';
    
    const star = document.createElement('img');
    star.src = starImage; // Asignar la imagen de la estrella desde la configuración
    star.className = 'star';

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

    const starInterval = setInterval(createStar, 200);  // Crear una estrella cada 200ms

    setTimeout(() => {
        clearInterval(starInterval);
    }, 10000);  // Detener la creación de estrellas después de 10 segundos

}, 1000);

setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 0;
}, 50000);  // Mantener el texto hasta que caigan todas las estrellas
