let counter = 1;
let printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter + " сек");
    counter++;
    console.log(counter)
    if (counter > 10) {
        clearInterval(intervalId);
        console.log("Интервал остановлен!");
    }
};
let intervalId = setInterval(printMessage, 5000);
console.log(intervalId) 