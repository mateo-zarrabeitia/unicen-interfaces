$(document).ready(function() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    var image = new Image();
    image.onload = function(){
        canvas.width = image.naturalWidth
        canvas.height = image.naturalHeight
        ctx.drawImage(this, 0, 0);
        
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        for ( x = 0; x < canvas.width; x++) {
            for ( y = 0; y < canvas.height; y++) {
                setPixel(imageData, x, y);
            }
        }
        ctx.putImageData(imageData, 0,0);
    }
    function setPixel(imageData, x, y, r, g, b, a){
        index=(x+y*imageData.width)*4;
        var blackAndWhite = (getRed(imageData, x, y)+getGreen(imageData, x, y)+getBlue(imageData, x, y))/3;
        imageData.data[index+0]=blackAndWhite;
        imageData.data[index+1]=blackAndWhite;
        imageData.data[index+2]=blackAndWhite;
        imageData.data[index+3]=255;
    }
    function getRed(imageData, x, y){
        index=(x+y*imageData.width)*4;
        return imageData.data[index+0];
    }
    function getGreen(imageData, x, y){
        index=(x+y*imageData.width)*4;
        return imageData.data[index+1];
    }
    function getBlue(imageData, x, y){
        index=(x+y*imageData.width)*4;
        return imageData.data[index+2];
    }


    $('#file-input').change(function(e) {
        addImage(e); 
       });
  
       function addImage(e){
        var file = e.target.files[0],
        imageType = /image.*/;
      
        if (!file.type.match(imageType))
         return;
    
        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);
       }
    
       function fileOnload(e) {
        var result=e.target.result;
        image.src = result;
       }
    
});