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

// Mostrar el mensaje y reproducir el sonido
function showAlertAndPlaySound() {
    const audioElement = document.getElementById('coin-sound');
    document.querySelector('.alert-container').style.opacity = 1;
    audioElement.volume = 1.0;
    audioElement.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
    });
}

// Iniciar la animación y sonido inmediatamente después de la carga
setTimeout(showAlertAndPlaySound, 1000);
