// Запуск таймера
setTimeout(function() {
    alert('Прошло 5 секунд!');
}, 5000);

// Запуск интервала
let counter = 0;
const intervalId = setInterval(function() {
    counter++;
    console.log(`Прошло ${counter} секунды`);
    if (counter === 5) {
        clearInterval(intervalId);
        console.log('Интервал остановлен');
    }
}, 1000);
