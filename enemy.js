var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    'use strict';
	monsterReady = true;
};
monsterImage.src = "enemy.png";


var monster = {
    suunta1: true,
    suunta2: false
};

function moveEnemy(target) {
    'use strict';
    if (target.suunta1) {
        target.x += 10;
        if (target.x > 380) {
            target.suunta1 = false;
            target.suunta2 = true;
        }
    }
    if (target.suunta2) {
        target.x -= 10;
        if (target.x < 20) {
            target.suunta1 = true;
            target.suunta2 = false;
        }
        
    }
}

