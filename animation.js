$(document).ready(function () {
    'use strict';
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    
    var a = 20;
    
    var player = {
        x: 200,
        y: 200,
        w: 40,
        h: 40,
        speed: 10
       
    };
    
    var enemy = {
		x: 130,
		y: 130,
        w: 40,
        h: 40,
        speed: 3,
		suunta1: true,
		suunta2: false

    };
    
    var newEnemy = {
		x: a,
		y: a,
        w: 40,
        h: 40,
        speed: 3,
		suunta1: true,
		suunta2: false

    };
    
    var enemies = [enemy];
    
    function createEnemy() {
        enemies.push(newEnemy);
        a += 20;
    }
    
    var img = new Image();
    img.src = 'pokemon.PNG';
    
    var keysDown = {};
    
    function movePlayer(direction) {
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
    
    function moveEnemy(target) {
                
    if (target.suunta1) {
        enemy.x += 20;
        if (enemy.x > 380) {
            target.suunta1 = false;
            target.suunta2 = true;
            }
    }
    if (target.suunta2) {
        enemy.x -= 20;
        if (enemy.x < 20) {
            target.suunta1 = true;
            target.suunta2 = false;
            }
    }
    }
    window.addEventListener('keydown', function (e) {
        keysDown[e.keyCode] = true;
    });
    
    window.addEventListener('keyup', function (e) {
        delete keysDown[e.keyCode];
    });
    
    function drawPlayer(context) {
        var x = player.x - (player.w / 2);
        var y = player.y - (player.h / 2);
        context.drawImage(img, x, y);
    }
        
    function drawEnemy(context, vihu) {
    
        var x = vihu.x - (vihu.w / 2);
        var y = vihu.y - (vihu.h / 2);
        context.drawImage(img, x, y);
        
    }
    
    var render = function () {
            ctx.fillStyle = '#FF0000';
            ctx.fillRect(0, 0, 400, 400);
    
            drawPlayer(ctx);
            enemies.forEach((b) - > drawEnemy(ctx,b);
        };
    
    function update() {
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
        enemies.forEach((b) - > moveEnemy(b);
    }
    
    function main() {
        update();
        render();
        requestAnimationFrame(main);
    }
    main();
});