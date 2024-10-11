document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    let fontSize = 24;
    let direction = 1;

    function changeFontSize() {
        fontSize += direction * 0.05;

        heroText.style.fontSize = `${fontSize}px`;

        if (fontSize >= 26 || fontSize <= 24) {
            direction *= -1;
        }
    }

    setInterval(changeFontSize, 10);
});
