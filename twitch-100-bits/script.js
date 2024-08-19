// Obtener configuraciones desde fields.json o definir manualmente para pruebas locales
const name = 'UsuarioEjemplo'; // '{{name}}'
const amount = '100'; // '{{amount}}'
const usernameColor = '#00ffff'; // '{{usernameColor}}'
const messageText = '¡Gracias por tus bits!'; // '{{messageText}}'
const fontChoice = 'Nunito'; // '{{fontChoice}}'
const starColor = '#ff00ff'; // '{{starColor}}'
const starImage = 'https://mrvictorcore.github.io/twitch-alerts/accets/img/star_image_normal.png'; // '{{starImage}}'
const soundFile = 'https://mrvictorcore.github.io/twitch-alerts/accets/Sounds/coin-donation-1-180437.mp3'; // '{{soundFile}}'

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
} else {
    starElement.src = 'https://mrvictorcore.github.io/twitch-alerts/accets/img/star_image_normal.png';  // Usar la predeterminada
}

// Configurar el archivo de sonido
if (soundFile && soundFile !== '') {
    audioElement.src = soundFile;
}

// Función para mostrar la alerta y reproducir el sonido
function showAlertAndPlaySound() {
    document.querySelector('.alert-container').style.opacity = 1;
    audioElement.volume = 1.0;
    audioElement.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
    });
}

// Esperar a la interacción del usuario para mostrar la alerta y reproducir el sonido
document.addEventListener('click', function() {
    // Iniciar la animación y sonido inmediatamente después de la interacción
    showAlertAndPlaySound();
});
