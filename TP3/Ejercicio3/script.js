setInterval(function(){ 
	let reloj = new Date();
	document.querySelector(".hora").style.transform = 'rotate('+ 30 * reloj.getHours()+'deg)';;
	document.querySelector(".minutos").style.transform = 'rotate('+ 6 * reloj.getMinutes()+'deg)';;
	document.querySelector(".segundos").style.transform = 'rotate('+ 6 * reloj.getSeconds()+'deg)';;
}, 1000);