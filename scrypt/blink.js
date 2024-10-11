document.addEventListener('DOMContentLoaded', () => {
    const blinkElement = document.querySelector('.blink');

    setInterval(() => {
        blinkElement.style.visibility = (blinkElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 400); 
});
