$(document).ready(function() {
let MAXCOL = 100;
let MAXFIL = 100;
let MAX = 500;
let MIN = 1;
let matriz = [];
for (var i = 0; i < MAXCOL; i++) {
	matriz[i] = new Array();
}

for (var i = 0; i < MAXCOL; i++) {
	for (var j = 0; j < MAXFIL; j++) {
		matriz[i][j] = Math.floor(Math.random() * MAX + 1);
	}
}

function returnMAx() {
	let maxvalor = 0;
	for (var i = 0; i < MAXCOL; i++) {
		for (var j = 0; j < MAXFIL; j++) {
			if (matriz[i][j] > maxvalor){
				maxvalor = matriz[i][j];
			}
		}
	}
	console.log("El valor maximo es: "+maxvalor);
}

function returnMaxFil(){
	let maxvalor = MIN;
	let minvalor = MAX;
	for (var i = 0; i < MAXFIL; i++) {
		if (i % 2 === 0){
			for (var j = 0; j < MAXCOL; j++) {
				if (matriz[i][j] > maxvalor){
					maxvalor = matriz[i][j];
				}
			} 
		} else {
				for (var j = 0; j < MAXCOL; j++) {
					if (matriz[i][j] < minvalor){
						minvalor = matriz[i][j];
					}
				}
			}
		}
		console.log("El valor maximo de la fila par es: "+maxvalor);
		console.log("El valor minimo de la fila impar es: "+minvalor);
}

function calcularProm(){
	let promedios =[]
	let suma = 0;
	for (var i = 0; i < MAXFIL; i++) {
		for (var j = 0; j < MAXCOL; j++) {
			suma += matriz[i][j];
		}
		promedios[i] = suma / MAXFIL;
		suma = 0;
	}
	console.log(promedios);
}

    console.table(matriz);
    console.log("Inciso a:");
    returnMAx();
    console.log("Inciso b:");
    returnMaxFil();
    console.log("Inciso c:");
    calcularProm();

});