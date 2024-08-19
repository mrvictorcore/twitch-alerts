// Obtener configuraciones desde fields.json
const name = '{{name}}';
const amount = '{{amount}}';
const usernameColor = '{{usernameColor}}';
const messageText = '{{messageText}}';
const fontChoice = '{{fontChoice}}';
const starColor = '{{starColor}}';
const soundFile = '{{soundFile}}';
const starImage = '{{starImage}}';  // URL de la imagen de la estrella personalizada

// Obtener elementos del DOM
const alertUserName = document.querySelector('#alert-username');
const alertAmount = document.querySelector('#alert-amount');
const alertMessage = document.querySelector('.alert-text');
const starElement = document.querySelector('.star');
const audioElement = document.getElementById('coin-sound');

// Rellenar el contenido de la alerta con los datos
alertUserName.textContent = name;
alertAmount.textContent = amount;

// Aplicar las configuraciones de estilo y texto
alertUserName.style.color = usernameColor;
alertMessage.style.fontFamily = fontChoice;
alertMessage.textContent = `¡Gracias, ${name}, por tus ${amount} bits!`;

// Configurar la imagen de la estrella
if (starImage && starImage !== '') {
    starElement.src = starImage;  // Reemplazar con la URL proporcionada
}

// Configurar el archivo de sonido
audioElement.src = soundFile;

// Agregar un listener de clic para forzar la reproducción del audio
document.addEventListener('click', function() {
    audioElement.volume = 1.0;
    audioElement.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
    });
});

// Mostrar la alerta y reproducir el sonido
setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 1;
    audioElement.volume = 1.0;  // Asegúrate de que el volumen esté al máximo
    audioElement.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
    });
}, 1000);
