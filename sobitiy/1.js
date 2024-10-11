// Наведение мыши на элемент
document.querySelector('.service-item').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#f0f0f0';
});

// Щелчок мыши по элементу
document.querySelector('.callback-button').addEventListener('click', function() {
    alert('Кнопка обратного звонка нажата!');
});
