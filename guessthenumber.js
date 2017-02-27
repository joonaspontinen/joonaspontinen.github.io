

function getRandomInt(min, max) {
    'use strict';
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var correctNumber = getRandomInt(1, 10);

function compareNumbers(first, second) {
    'use strict';
    return Boolean(first === second);
}