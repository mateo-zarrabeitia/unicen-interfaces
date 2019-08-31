$(document).ready(function() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d"); 
    let width= canvas.width;
    let height= canvas.height;
    let imageData = ctx.createImageData(width, height);
    let mitad= width/2;
		
		for (let x = 0; x < mitad; x++) {
			for (let y = 0; y < height; y++) {
        let color = parseInt(x/mitad*255);
				setPixel(imageData,x,y,color,color,0,255);
			}
		}
		for (let x = mitad; x < width; x++) {
			for (let y = 0; y < height; y++) {
        let color = 255 - parseInt(x-mitad)/mitad*255;
				setPixel(imageData,x,y,255,color,0,255);
			}
		}
        ctx.putImageData(imageData, 0,0);
    
    function setPixel(imgData, x, y, r, g, b, a){
        index = (x + y * imgData.width) * 4;
        imgData.data[index+0]=r;
        imgData.data[index+1]=g;
        imgData.data[index+2]=b;
        imgData.data[index+3]=a;
    }
});