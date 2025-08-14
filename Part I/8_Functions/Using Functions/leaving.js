/* As soon as the JavaScript interpreter reaches return in a function, 
it leaves the function, even if more code remains in the
function body */

let fifthLetter = function (name) {
    if (name.length < 6  ) {
    return;
    }
    return "Пятая буква вашего имени: " + name[1] + ".";
    } 
    console.log(fifthLetter("Andrei"))


/* Using return Multiple Times Instead of if...else Statements */

let medalForScore = function (score) {
    if (score < 3) {
    return "Bronze";
    }
    if (score < 7) {
    return "Silver";
    }
    return "Gold";
    }
    console.log(medalForScore(5))