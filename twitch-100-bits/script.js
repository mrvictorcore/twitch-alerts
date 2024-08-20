// Obtener configuraciones desde la inyección de StreamElements
const name = '{{name}}';
const amount = '{{amount}}'; // Mantenerlo como cadena de texto simple
const usernameColor = '{{usernameColor}}';
const fontChoice = '{{fontChoice}}';

// Obtener elementos del DOM
const alertUserName = document.querySelector('#alert-username');
const alertAmount = document.querySelector('#alert-amount');
const cheerAmountElement = document.querySelector('#cheer-amount');
const userMessageElement = document.querySelector('#user-message');

// Capturar el mensaje insertado por StreamElements
let rawMessage = userMessageElement.textContent || '';

// Función para establecer la cantidad de bits
function setAmount(amount) {
    // Simplemente retorna la cantidad tal como viene sin modificación
    return amount;
}

// Establecer la cantidad final
let finalAmount = setAmount(amount);

// Rellenar el contenido de la alerta con los datos
alertUserName.textContent = name;
alertAmount.textContent = amount;
cheerAmountElement.textContent = finalAmount;

// Aplicar las configuraciones de estilo y texto
alertUserName.style.color = usernameColor;
userMessageElement.style.fontFamily = fontChoice;

// Mostrar el mensaje
userMessageElement.style.display = 'block';

// Función para reproducir el sonido
function showAlertAndPlaySound() {
    const audioElement = document.getElementById('coin-sound');
    audioElement.volume = 1.0;
    audioElement.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
    });
}

// Iniciar la animación y sonido inmediatamente después de la carga
showAlertAndPlaySound();
