$(document).ready(function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    
    
    var render = function(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,400,400);
    
    drawPlayer(ctx);
    };
    
    
    function main(){
        update();
        render();
        requestAnimationFrame(main);
    }
    main();
                      }