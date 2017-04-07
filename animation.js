$(document).ready(function(){
    var canvas = document.createElement('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    
    
    var render = function(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,400,400);
    
    drawPlayer(ctx);
    };
    
    function update(){
        if(38 in keysDown){
            movePlayer('up');
        }
        if(40 in keysDown){
            movePlayer('down');
        }
        if(37 in keysDown){
            movePlayer('left');
        }
        if(39 in keysDown){
            movePlayer('right');
        }
    };
    
    function main(){
        update();
        render();
        requestAnimationFrame(main);
    }
    main();
                      }