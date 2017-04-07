var enemy = {
		x: 130,
		y: 130,
        w: 40,
        h: 40,
        speed: 10,
		suunta1: true,
		suunta2: false

    };





function moveEnemy(enemy) {
                
    if (this.suunta1) {
        enemy.x += 20;
        enemy.y += 20;
    }
    if (this.suunta2) {
        enemy.x -= 20;
        enemy.y -= 20;
    }


													// suunnanmuuttos
}

function create() {
                
    var newEnemy = new enemy;
    newEnemy.x = rand.nextInt((380+1) - 20) + 20;							// satunnaisuus
    newEnemy.y = rand.nextInt((380+1) - 20) + 20;							// satunnaisuus
    enemies += newEnemy;  
    }

function move{
                
          for (enemies) {
    			moveEnemy(this);
			}
    }

