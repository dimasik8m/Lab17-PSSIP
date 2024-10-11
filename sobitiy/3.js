// Элемент, который нужно перетаскивать
const draggableItem = document.querySelector('.model-item');
draggableItem.setAttribute('draggable', true);

// Начало перетаскивания
draggableItem.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'Model item dragged');
});

// Элемент, куда перетаскивают
const dropZone = document.querySelector('.services-container');
dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    alert('Элемент был успешно перенесён!');
});
