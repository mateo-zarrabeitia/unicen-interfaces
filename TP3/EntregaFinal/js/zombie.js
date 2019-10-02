class Zombie{
  constructor(){
    this.vidas=3;
    this.zombie = document.getElementById("zombie");
  }
  
  run(){
    this.zombie.classList.remove('zombie-dead2');
    this.zombie.classList.add('zombie-run');
  }
  
  
  jump(){
    this.zombie.classList.remove('zombie-run');
    this.zombie.classList.add('zombie-jump');;
    setTimeout(function() { 
      this.zombie.classList.remove('zombie-jump');
      this.zombie.classList.add('zombie-run');
    }, 800);
  }
  
  dead(){
    setTimeout(function() { 
      this.zombie.classList.remove('zombie-run');
      this.zombie.classList.add('zombie-dead');
    }, 800);
    setTimeout(function() { 
      this.zombie.classList.remove('zombie-dead');
      this.zombie.classList.add('zombie-dead2');
    }, 1600);

    
  };
  
  hurt(){
    this.zombie.classList.add('zombie-hurt')
    this.zombie.classList.remove('zombie-run')
    setTimeout(function() { 
      this.zombie.classList.remove('zombie-hurt')
      this.zombie.classList.add('zombie-run');
    }, 800);
  }
  
  getTop(){
    return this.zombie.offsetTop;
  }

  getLeft(){
    return this.zombie.offsetLeft;
  }

  getHeight(){
    return this.zombie.offsetHeight;
  }

  getWidth(){
    return this.zombie.offsetWidth;
  }
}