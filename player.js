var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    'use strict';
	heroReady = true;
};
heroImage.src = "pokemon.PNG";

var hero = {
	speed: 10
};

function changeSpeed(positive) {
    if(positive)
    {hero.speed = (1.1 * hero.speed);
     console.log("toimii")
}else{
    hero.speed = (0.9 * hero.speed);
    console.log("nope")
}
}
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