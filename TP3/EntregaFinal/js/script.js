
let zombie = new Zombie();
let enemy =  document.getElementById("enemy");
let live = document.getElementById("live");
let livenew = false;
let posicionEnemy = 1000;
let posicionLive = 1200;
let gameOver = false;
let jump = false;
let puntaje = 0;
let colision = false;
let colisionVida = false;
let idFrame;
let velocidad = 8;



function enemyMove(distance){
    if (posicionEnemy > -80) {
        posicionEnemy -= distance;
        enemy.style.left = posicionEnemy + "px"
    } else {
        posicionEnemy = 1000;
        colision = false;
        
    }
}

function liveMove(distance){
    if (posicionLive > -80) {
        if(posicionLive == 1200){
            live.style.top =  Math.random() * (180 - 140) + 140 +"px";
        }
        posicionLive -= distance;
        live.style.left = posicionLive + "px"
    } else {
        posicionLive = 1200;
        colisionVida = false;
        livenew = false;
        
    }
}

function isCollision(){
    let zombie_y = zombie.getTop();
    let zombie_x = zombie.getLeft();
    let zombie_h = zombie.getHeight();
    let zombie_w = zombie.getWidth();
    
    let enemy_y = enemy.offsetTop;
    let enemy_x = enemy.offsetLeft + document.getElementById("back-1").offsetLeft;
    let enemy_h = enemy.offsetHeight;
    let enemy_w = enemy.offsetWidth;
    return!(
        ((zombie_y + zombie_h) < (enemy_y)) ||
        (zombie_y > (enemy_y + enemy_h)) ||
        ((zombie_x + zombie_w) < enemy_x) ||
        (zombie_x > (enemy_x + enemy_w)));
    }

    function grabLive(){
        let zombie_y = zombie.getTop();
        let zombie_x = zombie.getLeft();
        let zombie_h = zombie.getHeight();
        let zombie_w = zombie.getWidth();
        
        let live_y = live.offsetTop;
        let live_x = live.offsetLeft + document.getElementById("back-1").offsetLeft;
        let live_h = live.offsetHeight;
        let live_w = live.offsetWidth;
        return!(
            ((zombie_y + zombie_h) < (live_y)) ||
            (zombie_y > (live_y + live_h)) ||
            ((zombie_x + zombie_w) < live_x) ||
            (zombie_x > (live_x + live_w)));
        }
    loop = function() {
        puntaje += 1;
        document.getElementById('scoreIngame').innerHTML = puntaje;
        enemyMove(velocidad);
        if(this.isCollision()&&(zombie.vidas >= 1)&&(!colision)){
            colision = true;
            zombie.hurt();
            document.getElementById('heart'+zombie.vidas).src='images/brokenheart.png';
            zombie.vidas= zombie.vidas-1;  
            if (zombie.vidas<3 && !livenew){
                setTimeout(function() { 
                    livenew = true;
                    console.log("vida");
                    
                }, (Math.random() * (20000 - 10000) + 10000));
            }
            if(zombie.vidas == 0){
                zombie.dead();
                setTimeout(function() { 
                    this.finish();
                }, 1800); 
            }
        }
        if(this.grabLive()&&(zombie.vidas < 3)&&(!colisionVida)){
            colisionVida = true;
            document.getElementById('heart'+(zombie.vidas+1)).src='images/heart.png';
            zombie.vidas= zombie.vidas+1;  
            posicionLive = 1200;
            console.log(zombie.vidas);
            
        }
       
        if (livenew) {
            liveMove(velocidad);            
        }
        switch (puntaje) {
            case 1000:
            velocidad += 1;
            break;
            case 2000:
            velocidad += 1;
            break;
            case 3000:
            velocidad += 1;
            break;
            case 4000:
            velocidad += 1;
            break;
            case 5000:
            velocidad += 1;
            break;
            case 6000:
            velocidad += 1;
            break;
        }
        
        idFrame = window.requestAnimationFrame(loop);
    };
    
    
    function finish(){
        document.getElementById('enemy').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-1').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-2').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-3').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-4').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-5').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-6').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-7').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-8').style.webkitAnimationPlayState = 'paused';
        document.getElementById('back-9').style.webkitAnimationPlayState = 'paused';
        document.getElementById('zombie').style.webkitAnimationPlayState = 'paused';
        window.cancelAnimationFrame(idFrame);
        document.getElementById("game").style.webkitFilter = "blur(5px)";
        document.getElementById('scoreEndGame').innerHTML = puntaje;
        document.getElementById('gameOver').style.visibility = 'visible';
        document.getElementById('imgover').style.visibility = 'visible';
        document.getElementById('gameOver').style.zIndex = '1200';
    }
    
    
    window.addEventListener("keydown",  function(e) {
        if (e.keyCode === 87 || e.keyCode === 38 || e.keyCode === 32 && !jump) {
            if (!jump) {
                zombie.jump();
            }
            jump = true;
            
        }
    })
    
    window.addEventListener("keyup", function(e) {
        jump = false;
    })
    window.requestAnimationFrame(loop);