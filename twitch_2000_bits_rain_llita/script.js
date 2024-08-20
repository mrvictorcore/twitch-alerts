// Obtener configuraciones desde la inyección de StreamElements
const name = '{{name}}';
const amount = '{{amount}}'; 
const usernameColor = '{{usernameColor}}';
const fontChoice = '{{fontChoice}}';

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
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    star.setAttribute("viewBox", "0 0 24 24");
    star.setAttribute("class", "star");
    star.innerHTML = '<path d="M12 2L14.09 8.26L20 9.27L15.5 13.97L16.91 20L12 16.77L7.09 20L8.5 13.97L4 9.27L9.91 8.26L12 2Z"/>';

    const starRain = document.querySelector('.star-rain');
    starRain.appendChild(star);

    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;

    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Mostrar el mensaje y crear la lluvia de estrellas
setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 1;

    const starInterval = setInterval(createStar, 200); // Crear una estrella cada 200ms

    setTimeout(() => {
        clearInterval(starInterval); // Detener la creación de estrellas después de 10 segundos
    }, 10000);

}, 1000);

setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 0;
}, 50000); // Mantener el texto hasta que caigan todas las estrellas
