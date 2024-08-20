// Obtener configuraciones desde la inyección de StreamElements
const name = '{{name}}';
const amount = '{{amount}}'; 
const usernameColor = '{{usernameColor}}';
const fontChoice = '{{fontChoice}}';
const starImage = '{{starImage}}';

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
alertUserName.style.fontFamily = fontChoice;
alertAmount.style.fontFamily = fontChoice;

function createStar(direction) {
    const star = document.createElement("img");
    star.setAttribute("src", starImage);
    star.setAttribute("class", "star");

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
