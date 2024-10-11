const pointerElement = document.querySelector('.hero');

// Событие движения указателя
pointerElement.addEventListener('pointermove', function(event) {
    console.log(`Pointer moved at X: ${event.clientX}, Y: ${event.clientY}`);
});
