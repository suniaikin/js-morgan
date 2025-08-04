/* Let’s say you’ve decided to start a bank. You lend your friends
money, and you want to have a way to keep track of how much
money each of them owes you. */

let owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;

console.log(owedMoney["Jimmy"]); // 5

owedMoney["Jimmy"] = owedMoney["Jimmy"] + 3; // 8
owedMoney["Jimmy"] += 3;
console.log(owedMoney["Jimmy"]); // 11

console.log(owedMoney) // { Jimmy: 11, Anna: 7 }
