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

	
	enemy.x = 32 + (Math.random() * (canvas.width - 64));
	enemy.y = 32 + (Math.random() * (canvas.height - 64));
};

var update = function (modifier) {
    'use strict';
    moveEnemy(enemy);
    
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
    
	if (enemy.x <= (hero.x + 20) && enemy.x > (hero.x - 20) && enemy.y <= (hero.y + 20) && enemy.y > (hero.y - 20))
		 {
             if (enemy.suunta2) {
            enemy.suunta1 = true;
            enemy.suunta2 = false;
            
    }  else {
        
            enemy.suunta1 = false;
            enemy.suunta2 = true;
            
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

	if (enemyReady) {
		ctx.drawImage(enemyImage, (enemy.x - 20), (enemy.y - 20));
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

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var click = function (X, Y) {
    if (X >= enemy.x  && X <= enemy.x + 20 && Y <= enemy.y + 20) {
       enemyReady = false;

}

canvas.addEventListener("mousedown", function(e){
     click(getMousePos(canvas,e).x, getMousePos(canvas,e).y);
  });


reset();
main();