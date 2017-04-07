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
    main();