let div = document.getElementById('box');

div.addEventListener('click', ()=>{
    switch (Math.floor(Math.random() * 6)) {
        case 1:
            div.style.transform = "rotate(60deg)";
        break;
        case 2:
            div.style.transform = "translate(100px,100px)";
        break;
        case 3:
            div.style.transform = "scale(2)";
        break;
        case 4:
            div.style.transform = "translate(200px,200px)";
        break;
        case 5:
            div.style.transform = "skewX(25deg)";
        break;
        case 6:
            div.style.transform = "rotate(300deg)";
        break;

    }
});
