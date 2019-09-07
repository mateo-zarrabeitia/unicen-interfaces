let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width= canvas.width;
let height= canvas.height;




//PUNTO 1
let figuras = [];
figuras.push(new Figura(10, "hsl(0, 100%, 50%)","hsl(60, 100%, 50%)","hsl(120, 100%, 50%)"));

document.getElementById("botoncerrar").addEventListener("click", function(){
    for (let index = 0; index < figuras.length; index++) {
        const element = figuras[index];
        if(!element.getPoligonoClose()){
            element.closePoligono();
            element.drawFigura();
        } 
        
    }
});

let down = false;
let dx = 0, dy = 0;
let movercentro = null;
let moververtice = [];
canvas.addEventListener("mousedown", function() {
    down = true;
    var punto_de_agarre = oMousePos(canvas, event);
    dx -= punto_de_agarre.x;
    dy -= punto_de_agarre.y;
    console.log("POSICION X: "+punto_de_agarre.x+"POSICION Y: "+punto_de_agarre.y)
    
},
false
);

canvas.addEventListener("mouseup", function() {
    down = false;
    m = oMousePos(canvas, event);
    dx += m.x;
    dy += m.y;
    if(movercentro == null && moververtice.length == 0){
        for (let index = 0; index < figuras.length; index++) {
            const element = figuras[index];
            if(!element.getPoligonoClose()){
                element.newVertice(m.x,m.y);
                element.drawFigura();
            } else if(figuras[index+1] == null){
                figuras.push(new Figura(10, "hsl(0, 100%, 50%)","hsl(60, 100%, 50%)","hsl(120, 100%, 50%)"));
            }
            
        }
    }
    movercentro = null;
    moververtice = [];
},
false
);
canvas.addEventListener("mousemove",function(event) {
    if (down) {
        
        m = oMousePos(canvas, event);
        if(movercentro == null){
            for (let index = 0; index < figuras.length; index++) {
                const element = figuras[index];
                if(element.clickCentro(m.x, m.y)){
                    movercentro = element;
                }
            }
        }
        if(moververtice.length == 0){
            for (let index = 0; index < figuras.length; index++) {
                const element = figuras[index];
                if(element.clickVertice(m.x, m.y)){
                    moververtice[0] = element;
                    moververtice[1] = element.clickVertice(m.x, m.y);
                }
            }
        }
        if(movercentro != null) {
            clear();
            movercentro.redrawFigura( m.x, m.y, movercentro, moververtice);
            figuras.forEach(element => {
                element.drawFigura();
            });
        }
        if(moververtice.length > 0) {
            clear();
            moververtice[0].redrawFigura( m.x, m.y, movercentro, moververtice[1]);
            figuras.forEach(element => {
                element.drawFigura();
            });
        }
    }
    
},
false
);

canvas.addEventListener("dblclick", function(event) {
    m = oMousePos(canvas, event);
    let entro = false
    for (let index = 0; index < figuras.length; index++) {
        const element = figuras[index];
        
        if(element.clickVertice(m.x, m.y) && !entro){
            entro = true;
            clear();
            element.borrarVertice(element.clickVertice(m.x, m.y));                        
        }
        if(element.getCantVertices() == 1 ){
            figuras.pop();
        }
        
    }
    figuras.forEach(element => {
        element.drawFigura();
    });
    
},
false
);

let teclapulsada = false;
window.addEventListener("keydown",function (event) {
    if(event.key == "c"){
        teclapulsada = true
    }
    
},false);
window.addEventListener("keyup", function (event) {
    if(event.key == "c"){
        teclapulsada = false
    }            
},false);

canvas.addEventListener("mousewheel",function(event) {
    if (teclapulsada){
        figuras.forEach(element => {
            element.cambiarColor(event.deltaY)   
        });
        figuras.forEach(element => {
            element.drawFigura(); 
        });
    }
},
false
);



function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    };
}
