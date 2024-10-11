const touchElement = document.querySelector('.service-item');

// Начало сенсорного события
touchElement.addEventListener('touchstart', function(event) {
    console.log('Сенсорное касание началось');
});

// Конец сенсорного события
touchElement.addEventListener('touchend', function(event) {
    console.log('Сенсорное касание завершено');
});
