// Obtener configuraciones desde la inyección de StreamElements
const name = '{{name}}';
const amount = '{{amount}}'; 
const usernameColor = '{{usernameColor}}';
const fontChoice = '{{fontChoice}}';
const starImage = '{{starImage}}'; // Usar la URL de la estrella desde el JSON
const sharkImage = '{{sharkImage}}'; // Usar la URL del tiburón desde el JSON

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
    const star = document.createElement("img");
    star.setAttribute("src", starImage); // Asignar la imagen de la estrella desde la configuración
    star.setAttribute("class", "star");

    const starRain = document.querySelector('.star-rain');
    starRain.appendChild(star);

    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;

    setTimeout(() => {
        star.remove();
    }, 5000);
}

function createShark() {
    const shark = document.createElement("img");
    shark.setAttribute("src", sharkImage); // Asignar la imagen del tiburón desde la configuración
    shark.setAttribute("class", "shark");

    const starRain = document.querySelector('.star-rain');
    starRain.appendChild(shark);

    shark.style.left = `${Math.random() * 100}vw`;
    shark.style.animationDuration = `${Math.random() * 2 + 3}s`;

    setTimeout(() => {
        shark.remove();
    }, 5000);
}

// Mostrar el mensaje y crear la lluvia de estrellas y tiburones
setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 1;

    const starInterval = setInterval(createStar, 200); // Crear una estrella cada 200ms
    const sharkInterval = setInterval(createShark, 1000); // Crear un tiburón cada 1000ms

    setTimeout(() => {
        clearInterval(starInterval); // Detener la creación de estrellas después de 10 segundos
        clearInterval(sharkInterval); // Detener la creación de tiburones después de 10 segundos
    }, 10000);

}, 1000);

setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 0;
}, 50000); // Mantener el texto hasta que caigan todas las estrellas y tiburones
