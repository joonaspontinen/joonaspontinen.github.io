$(document).ready(function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    
    
    
      function main(){
        update();
        drawPlayer(ctx);
        requestAnimationFrame(main);
    }
    var player = {
        x: 200,
        y: 200,
        w: 40,
        h: 40,
        speed: 10
    };
function move(direction) {
    'use strict';
    switch (direction) {
    case "left":
        player.x -= player.speed;
        if (player.x < 20) {
            player.x = 20;
        }
        break;
    case "right":
        player.x += player.speed;
        if (player.x > 380) {
            player.x = 380;
        }
        break;
    case "up":
        player.y -= player.speed;
        if (player.y < 20) {
            player.y = 20;
        }
        break;
    case "down":
        player.y += player.speed;
        if (player.y > 380) {
            player.y = 380;
        }
        break;
    }
}

function changeSpeed(direction) {
    'use strict';
    switch (direction) {
    case "up":
        player.speed += 20;
        break;
    case "down":
        player.speed -= 20;
        break;
    }
}
function reset() {
    'use strict';
    player.x = 200;
    player.y = 200;
    player.w = 40;
    player.h = 40;
    player.speed = 10;
}
function drawPlayer(context) {
    'use strict';
    var a = player.x - (player.w / 2);
    var b = player.y - (player.h / 2);
    context.fillStyle = '#ff0000';
    context.fillRect(a, b, player.w, player.h);
}
    main();