// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    'use strict';
	bgReady = true;
};
bgImage.src = "pelibg.jpg";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    'use strict';
	heroReady = true;
};
heroImage.src = "pokemon.PNG";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    'use strict';
	monsterReady = true;
};
monsterImage.src = "pokemon.PNG";

// Game objects
var hero = {
	speed: 10
};
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

// Handle keyboard controls
var keysDown = {};

window.addEventListener('keydown', function (e) {
    'use strict';
        keysDown[e.keyCode] = true;
    });
    
    window.addEventListener('keyup', function (e) {
    'use strict';
        delete keysDown[e.keyCode];
    });

// Reset the game when the player catches a monster
var reset = function () {
    'use strict';
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};
 function movePlayer(direction) {
    'use strict';
        switch (direction) {
        case "left":
            hero.x -= hero.speed;
            if (hero.x < 20) {
                hero.x = 20;
            }
            break;
        case "right":
            hero.x += hero.speed;
            if (hero.x > 380) {
                hero.x = 380;
            }
            break;
        case "up":
            hero.y -= hero.speed;
            if (hero.y < 20) {
                hero.y = 20;
            }
                
            break;
        case "down":
            hero.y += hero.speed;
            if (hero.y > 380) {
                hero.y = 380;
            }
            break;
        }
    }

// Update game objects
var update = function (modifier) {
    'use strict';
    moveEnemy(monster);
    
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
	

	// Are they touching?
	if (monster.x <=(hero.x+20) && monster.x> (hero.x - 20) && monster.y <= (hero.y + 20)&&monster.y>(hero.y-20))
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

// Draw everything
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


    
    
}
    

ctx.attachEvent('onclick', function() {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    if ((x <=(hero.x+20) && x> (hero.x - 20) && y <= (hero.y + 20)y>(hero.y-20))){
        monsterReady = false;} });

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();


reset();
main();