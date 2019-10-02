
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

function isCollision(objeto){
    obj = document.getElementById(objeto);
    let zombie_y = zombie.getTop();
    let zombie_x = zombie.getLeft();
    let zombie_h = zombie.getHeight();
    let zombie_w = zombie.getWidth();
    
    let enemy_y = obj.offsetTop;
    let enemy_x = obj.offsetLeft + document.getElementById("back-1").offsetLeft;
    let enemy_h = obj.offsetHeight;
    let enemy_w = obj.offsetWidth;
    return!(
        ((zombie_y + zombie_h) < (enemy_y)) ||
        (zombie_y > (enemy_y + enemy_h)) ||
        ((zombie_x + zombie_w) < enemy_x) ||
        (zombie_x > (enemy_x + enemy_w)));
    }
    
    
    loop = function() {
        puntaje += 1;
        document.getElementById('scoreIngame').innerHTML = puntaje;
        enemyMove(velocidad);
        if(this.isCollision("enemy")&&(zombie.vidas >= 1)&&(!colision)){
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
        
        if(this.isCollision("live")&&(zombie.vidas < 3)&&(!colisionVida)){
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
    
    function start(){
        zombie.vidas = 3;
        zombie.run();
        posicionEnemy = 1000;
        puntaje = 0;    
        document.getElementById('heart1').src='images/heart.png';
        document.getElementById('heart2').src='images/heart.png';
        document.getElementById('heart3').src='images/heart.png';
        document.getElementById('enemy').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-1').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-2').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-3').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-4').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-5').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-6').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-7').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-8').style.webkitAnimationPlayState = 'running';
        document.getElementById('back-9').style.webkitAnimationPlayState = 'running';
        document.getElementById('zombie').style.webkitAnimationPlayState = 'running';
        document.getElementById("game").style.webkitFilter = "";
        window.requestAnimationFrame(loop);
    }
    
    document.getElementById("play").addEventListener("click", function(e) {
        document.getElementById('inicio').style.visibility = 'hidden';
        e.preventDefault(); 
        start();
    })
    
    document.getElementById("reiniciar").addEventListener("click", function(e) {
        document.getElementById('gameOver').style.visibility = 'hidden';
        document.getElementById('imgover').style.visibility = 'hidden';
        e.preventDefault(); 
        start();
    })
    
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
    document.getElementById("game").style.webkitFilter = "blur(5px)";