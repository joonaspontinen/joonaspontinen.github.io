

function getRandomInt(min, max) {
    'use strict';
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var correctNumber = 5;

function setRandomnumber() {
    'use strict';
    correctNumber = getRandomInt(1, 10);
}
window.onload = setRandomnumber();

function compareNumbers(first, second) {
    'use strict';
    return Boolean(first == second);
}



function Guess() {
    'use strict';
    if (compareNumbers(document.getElementById("numero").value, correctNumber)) {
        window.alert("You win");
        setRandomnumber();
    } else {
        
        if (document.getElementById("numero").value > 0 && document.getElementById("numero").value < 11) {
            window.alert("Wrong");
        } else {
            window.alert("Please choose a number between 1 and 10");
        }
    }
}
