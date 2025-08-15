// let timeUp = function () {
// 	alert("Время вышло!");
// };
// setTimeout(timeUp, 3000);


let doHomeworkAlarm = function () {
	alert("Эй! Пора делать домашку!");
};
let timeoutId = setTimeout(doHomeworkAlarm, 300);
clearTimeout(timeoutId);


