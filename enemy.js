var enemyReady = false;
var enemyImage = new Image();
enemyImage.onload = function () {
    'use strict';
	enemyReady = true;
};
enemyImage.src = "enemy.png";


var enemy = {
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

