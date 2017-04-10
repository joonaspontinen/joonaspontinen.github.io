var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);


var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    'use strict';
	bgReady = true;
};
bgImage.src = "pelibg.jpg";

var keysDown = {};

window.addEventListener('keydown', function (e) {
    'use strict';
    keysDown[e.keyCode] = true;
});
    
window.addEventListener('keyup', function (e) {
    'use strict';
    delete keysDown[e.keyCode];
});


var reset = function () {
    'use strict';
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

var update = function (modifier) {
    'use strict';
    moveEnemy(monster);
    
    if (65 in keysDown) {
        changeSpeed(true);
    }
    
    if (83 in keysDown) {
        changeSpeed(false);
    }
    
    if (38 in keysDown) {
        movePlayer('up');
            
    }
    if (40 in keysDown) {
        movePlayer('down');
            
    }
    if (37 in keysDown) {
        movePlayer('left');
    }
    if (39 in keysDown) {
        movePlayer('right');
    }
    
	if (monster.x <= (hero.x + 20) && monster.x > (hero.x - 20) && monster.y <= (hero.y + 20) && monster.y > (hero.y - 20))
		 {
             if (monster.suunta2) {
            monster.suunta1 = true;
            monster.suunta2 = false;
            
    }  else {
        
            monster.suunta1 = false;
            monster.suunta2 = true;
            
    }
    
        
	}
};

var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, (hero.x - 20), (hero.y - 20));
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, (monster.x - 20), (monster.y - 20));
	}


};
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
	requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


var then = Date.now();


reset();
main();