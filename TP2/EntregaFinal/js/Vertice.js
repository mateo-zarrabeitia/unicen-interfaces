class Vertice {
    constructor(x,y, radio, color) {
        this.posX = x;
        this.posY = y;
        this.radio = radio;
        this.color = color;
    }
    
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    setPosX(x){
        this.posX = x;
    }
    setPosY(y){
        this.posY = y;
    }
    drawVertice(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX,this.posY,this.radio, 0, Math.PI *2 );
        ctx.fill();
        ctx.closePath();
    }
    
    clickInside(x,y){
        var dx = Math.abs(x - this.posX);
        var dy = Math.abs(y - this.posY);
        var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        if (distance <= this.radio) {
            return true;
        } else {
            return false;
        }
    }
    
    setColor(valor){
        this.color = valor;
    }
    
    
}