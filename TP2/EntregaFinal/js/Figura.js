class Figura {
    
    constructor(radio, colorVertices, colorLineas, colorCentro){
        this.figuras = [];
        this.vertices = [];
        this.radio = radio;
        this.colorVertices = colorVertices;
        this.colorLineas = colorLineas;
        this.colorCentro = colorCentro;
        this.brillo = 100;
        this.poligono = false;
        this.centro = new Vertice(null,null,7,"#00ff00");
    }
    calcularCentro(){
        if (this.poligono){
            let x = 0;
            let y = 0;
            let resultado = [];
            for (let index = 0; index < this.vertices.length; index++) {
                x += this.vertices[index].getPosX();
                y += this.vertices[index].getPosY();
            }
            resultado[0] = x / (this.vertices.length);
            resultado[1] = y / (this.vertices.length);
            this.centro.setPosX(x / (this.vertices.length));
            this.centro.setPosY(y / (this.vertices.length));
            this.centro.drawVertice();
            return resultado;
        }
    }
    getCantVertices(){
        return this.vertices.length;
    }
    
    getPoligonoClose(){
        return this.poligono;
    }
    
    newVertice(x,y) {
        if(this.figuras.length = 0){
            this.figuras.push(new Figura(10, "hsl(0, 100%, 50%)","hsl(60, 100%, 50%)","hsl(120, 100%, 50%)"));
        }
        let dentro = false;
        if(this.centro.clickInside(x,y)){
        } else if (!this.poligono) {
            this.vertices.forEach(element => {
                if(element.clickInside(x,y)){
                    dentro = true;     
                }
            });
            if (!dentro) {
                this.vertices[this.vertices.length] = new Vertice(x, y, this.radio, this.colorVertices);
                this.vertices[this.vertices.length-1].drawVertice();
            } else {     
                this.poligono = true;
                this.calcularCentro();
            }
            this.drawFigura();
        }
        
        
    }
    
    
    clickCentro(x,y){
        return this.centro.clickInside(x,y)
    }
    
    clickVertice(x,y){
        
        for (let index = 0; index < this.vertices.length; index++) {
            const element = this.vertices[index];
            if(element.clickInside(x,y)){
                return element;
            }
        }
        return null;
    }
    
    closePoligono(){
        this.poligono = true;
        this.centro = new Vertice(this.calcularCentro()[0], this.calcularCentro()[1], 7 , this.colorCentro);
        this.centro.drawVertice();
    }
    
    redrawCircle(x,y){
        let tx = this.centro.getPosX() - x;
        let ty = this.centro.getPosY() - y;
        this.centro.setPosX(x)
        this.centro.setPosY(y);
        this.centro.drawVertice();
        for (let index = 0; index < this.vertices.length; index++) {
            const element = this.vertices[index];
            let difx = element.getPosX();
            let dify = element.getPosY();
            element.setPosX(difx-tx)
            element.setPosY(dify-ty);
            element.drawVertice();
            this.drawFigura();
        }
        this.calcularCentro();
    }
    
    redrawFigura(x,y,movercentro,moververtice){
        clear();
        let tx = this.centro.getPosX() - x;
        let ty = this.centro.getPosY() - y;
        if(movercentro){
            let tx = this.centro.getPosX() - x;
            let ty = this.centro.getPosY() - y;
            this.centro.setPosX(x)
            this.centro.setPosY(y);
            this.centro.drawVertice();
            for (let index = 0; index < this.vertices.length; index++) {
                const element = this.vertices[index];
                let difx = element.getPosX();
                let dify = element.getPosY();
                element.setPosX(difx-tx)
                element.setPosY(dify-ty);
                element.drawVertice();
                this.drawFigura();
            }
        } else if (moververtice != null){
            let element = moververtice;
            let tx = element.getPosX() - x;
            let ty = element.getPosY() - y;
            let difx = element.getPosX();
            let dify = element.getPosY();
            element.setPosX(difx-tx)
            element.setPosY(dify-ty);
            this.vertices.forEach(element => {
                element.drawVertice();
                this.drawFigura();
            })
            
            
        }
        this.calcularCentro();
    }
    
    borrarVertice(verticedrop){     
        for (let index = 0; index < this.vertices.length; index++) {
            const element = this.vertices[index];
            if(element === verticedrop){
                this.vertices.splice(index, 1);
            }
        }
        this.vertices.forEach(element => {
            element.drawVertice();
            this.drawFigura();
        })
        this.calcularCentro();
    }

    cambiarColor(valor){
        let brillo = this.brillo + valor;
        if (brillo<= 85 && brillo >25){
            this.brillo = brillo;
        }
        this.colorVertices = "hsl(0, 100%, "+this.brillo+"%)";
        this.colorLineas = "hsl(60, 100%, "+this.brillo+"%)";
        this.centro.setColor("hsl(120, 100%, "+this.brillo+"%)");
        clear();
        this.vertices.forEach(element => {
            element.setColor("hsl(0, 100%, "+this.brillo+"%)");
            element.drawVertice();
        })
        
        this.drawFigura();
        this.centro.drawVertice();
    }
    
    
    drawFigura(){
        for (let index = 0; index < this.vertices.length-1; index++) {
            const element = this.vertices[index];
            if (this.vertices[index+1] != null) {
                ctx.lineWidth = 3;
                ctx.strokeStyle = this.colorLineas;
                ctx.beginPath();
                ctx.moveTo(this.vertices[index].getPosX(), this.vertices[index].getPosY());
                ctx.lineTo(this.vertices[index+1].getPosX(), this.vertices[index+1].getPosY());
                ctx.stroke();
            }
            
        }
        if (this.poligono){
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.colorLineas;
            ctx.beginPath();
            ctx.moveTo(this.vertices[0].getPosX(), this.vertices[0].getPosY());
            ctx.lineTo(this.vertices[this.vertices.length-1].getPosX(), this.vertices[this.vertices.length-1].getPosY());
            ctx.stroke();
        }
        this.vertices.forEach(element => {
            element.drawVertice();
        })
        this.calcularCentro()
        
    }
}