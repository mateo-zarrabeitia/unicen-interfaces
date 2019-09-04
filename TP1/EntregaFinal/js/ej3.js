$(document).ready(function() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d"); 
    // ctx.clearRect(0,0, canvas.width, canvas.height);
    let imgData = ctx.createImageData(canvas.width, canvas.height);
    for ( x = 0; x < canvas.width; x++) {
        for ( y = 0; y < canvas.height; y++) {
            setPixel(imgData, x,y , 255, 177, 0, 255);
        }
    }
    ctx.putImageData(imgData, 0,0);
    
    
    function setPixel(imgData, x, y, r, g, b, a){
        index = (x + y * imgData.width) * 4;
        imgData.data[index+0]=r;
        imgData.data[index+1]=g;
        imgData.data[index+2]=b;
        imgData.data[index+3]=a;
    }
});