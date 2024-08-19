setTimeout(function() {
    document.querySelector('.alert-container').style.opacity = 1;
    let audio = document.getElementById('coin-sound');
    audio.play();
}, 1000);
