(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"container m-5\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/busqueda/busqueda.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/busqueda/busqueda.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col\">\n        \n        <div class=\"input-group barra\">\n            <input\n            #termino\n            type=\"text\"\n            (keyup)=\"getPeliculas(termino.value)\"\n            class=\"form-control\"\n            placeholder=\"Buscar Peliculas o Series\"\n            />\n        </div>\n        \n        \n        <div class=\"btn-group genero\">\n            <button type=\"button\" class=\"btn btn-dark dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Generos\n            </button>\n            <div  class=\"dropdown-menu\">\n                <a *ngFor=\"let genero of generos\" (click)=\"getPeliculasGenero(genero.name, termino.value)\" class=\"dropdown-item\" >{{ genero.name }}</a>\n                \n            </div>\n        </div>\n        <div class=\"btn-group ano\">\n            <button type=\"button\" class=\"btn btn-dark dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Año\n            </button>\n            <div  class=\"dropdown-menu\">\n                <a *ngFor=\"let anio of anios\" (click)=\"getPeliculasAnio(anio)\" class=\"dropdown-item\" > {{ anio }}</a>\n                \n            </div>\n        </div>\n        \n        \n        \n        \n        \n        \n        \n        <!-- <div class=\"btn-group genero\">\n            <button\n            type=\"button\"\n            class=\"btn btn-dark dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            >\n            Genero\n        </button>\n    </div>\n    <div class=\"dropdown-menu\">\n        <button\n        *ngFor=\"let genero of generos\"\n        id=\"genero\"\n        type=\"button\"\n        class=\"btn btn-dark\"\n        (click)=\"getPeliculasGenero(genero.name, termino.value)\"\n        type=\"button\"\n        data-toggle=\"dropdown\"\n        aria-haspopup=\"true\"\n        aria-expanded=\"false\"\n        >\n        {{ genero.name }}\n    </button> -->\n    \n    \n</div>\n</div>\n\n<!-- <div class=\"card-columns m-5\">\n    <div *ngFor=\"let peli of peliculas\" class=\"card\">\n        <img\n        src=\"{{ peli | peliculaImagen }}\"\n        class=\"card-img-top\"\n        alt=\"{ peli.title }}\"\n        />\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ peli.title }}</h5>\n            <p class=\"card-text\">\n                {{ peli.overview }}\n            </p>\n        </div>\n    </div>\n</div> -->\n\n\n<div class=\"wrapper\">\n    <div class=\"container\" >\n        <div class=\"card\" *ngFor=\"let peli of peliculas\">\n            <section>\n                <div class=\"container2\">\n                    <h3 class=\"title\"></h3>\n                    <div class=\"content\">\n                        <a [routerLink]=\"'/'+peli.media_type+'/' + peli.id\">\n                            <!-- <img class=\"imagen\" src=\"{{ li | peliculaImagen }}\"/> -->\n                            <div class=\"content-overlay\"></div>\n                            <img class=\"content-image\" src=\"{{ peli | peliculaImagen }}\">\n                            <div class=\"content-details fadeIn-bottom\">\n                                <h3 *ngIf=\"peli.title\" class=\"content-title\">{{peli.title}}</h3>\n                                <h3 *ngIf=\"!peli.title\" class=\"content-title\">{{peli.name}}</h3>\n                                <p  class=\"content-text\">{{peli.vote_average}}</p>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </section>\n        </div>\n        <!-- <div class=\"phone-container\">\n            <div *ngFor=\"let list of milista\"  class=\"contenedor\">\n                \n                <div class=\"card-outer-container\">\n                    <div class=\"card-inner-container\">\n                        <div  *ngFor=\"let li of list.results\">\n                            <div  class=\"card\">\n                                <a [routerLink]=\"'/movie/' + li.id\"><img src=\"{{ li | peliculaImagen }}\"/></a>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n        </div>\n    </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cambiarplan/cambiarplan.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cambiarplan/cambiarplan.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedor\">\n<span id=\"e156_65\">CAMBIAR DE PLAN</span>\n<div id=\"e156_3\">\n    <div id=\"ei156_4_441216\"></div>\n    <div id=\"ei156_4_441217\"></div><span id=\"ei156_4_441218\">BRONCE</span>\n    <div id=\"ei156_4_441233\"></div>\n    <div id=\"ei156_4_441234\"></div>\n    <div id=\"ei156_4_441235\"></div><span id=\"ei156_4_441236\">Resolucion HD</span><span id=\"ei156_4_441237\">2 pantallas en simultaneo</span><span id=\"ei156_4_441238\">Ve en tu laptop y telefono</span><span id=\"e156_5\">$ 130 al mes </span>\n    <div id=\"e156_6\"></div>\n    <div id=\"e156_7\"></div>\n    <div id=\"e156_8\"></div>\n  </div>\n  <div id=\"e156_9\">\n    <div id=\"e275_1\"></div>\n    <div id=\"e275_2\"></div><span id=\"e275_3\">PLATA</span>\n    <div id=\"e275_4\"></div>\n    <div id=\"e275_5\"></div>\n    <div id=\"e275_6\"></div><span id=\"e275_7\">Resolucion Full HD</span><span id=\"e275_8\">4 pantallas en simultaneo</span><span id=\"e275_9\">Ve en tu laptop y telefono</span><span id=\"e156_19\">$ 250 al mes </span>\n    <div id=\"e156_11\"></div>\n    <div id=\"e156_12\"></div>\n    <div id=\"e156_13\"></div>\n  </div>\n\n  <div id=\"e156_20\">\n    <div class=\"plan\" id=\"e156_22\" (click)=\"agregarBorde()\">\n      <div id=\"e156_23\"></div><span id=\"e156_24\">ORO</span>\n    </div>\n    \n    <div id=\"e156_25\"></div>\n    <div id=\"e156_26\"></div>\n    <div id=\"e156_27\"></div><span id=\"e156_28\">Resolucion 4K</span><span id=\"e156_29\">6 pantallas en simultaneo</span><span id=\"e156_30\">Ve en tu laptop y telefono</span><span id=\"e156_39\">$ 370 al mes </span>\n    <div id=\"e156_31\"></div>\n    <div id=\"e156_32\"></div>\n    <div id=\"e156_33\"></div>\n  </div>\n\n  \n\n  <div  id=\"e157_20\" >\n    <div class=\"plan\" id=\"e157_22\" (click)=\"agregarBorde()\">\n      <div id=\"e157_23\"></div><span id=\"e157_24\">PLATINO</span>\n    </div>\n    <div id=\"e157_25\"></div>\n    <div id=\"e157_26\"></div>\n    <div id=\"e157_27\"></div><span id=\"e157_28\">Resolucion 4K</span><span id=\"e157_29\">10 pantallas en simultaneo</span><span id=\"e157_30\">Ve en tu laptop y telefono</span><span id=\"e157_39\">$ 450 al mes </span>\n    <div id=\"e157_31\"></div>\n    <div id=\"e157_32\"></div>\n    <div id=\"e157_33\"></div>\n  </div>\n  \n  <div id=\"botonvolver\">\n  <span id=\"textvolver\"> <a [routerLink]=\"['/cuenta']\"> VOLVER</a></span>\n</div>\n<div id=\"botoncontinuar\">\n  <span id=\"textcontinuar\"> <a [routerLink]=\"['/plan-seleccionado']\"> CONTINUAR </a></span>\n</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/categorias-peliculas/categorias-peliculas.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/categorias-peliculas/categorias-peliculas.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>categorias-peliculas works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/datoscuenta/datoscuenta.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/datoscuenta/datoscuenta.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fondo\">\n        <span id=\"e257_2\">DATOS DE LA CUENTA</span>\n        <div class=\"micuenta\">\n            <p class=\"nombreusuario\">jose.perez@gmail.com</p>\n            <div id=\"e257_44\">\n                <div id=\"e257_18\"></div><span id=\"e257_19\">EDITAR EMAIL</span>\n            </div>\n            <span id=\"e257_12\">********</span>\n        </div>\n        <div id=\"e257_27\">\n            <span id=\"e257_28\">CAMBIAR CONTRASEÑA</span>\n        </div>\n        <span id=\"e257_29\">Plan actual : Plata</span>\n        <div id=\"e257_21\">\n            <span id=\"e257_22\"><a [routerLink]=\"['/cambiar-plan']\"> CAMBIAR PLAN</a></span>\n        </div>\n        <div id=\"e257_24\">\n            <span id=\"e257_25\">CANCELAR MEMBRESIA</span>\n        </div>\n        <div id=\"e182_1593\">\n            <span id=\"e182_1594\"> <a href=\"cambiarmetododepago\">CAMBIAR METODO DE PAGO</a></span>\n        </div>\n        <img class=\"chico\"src=\"../../../assets/chico.svg\" alt=\"avatar\">\n        <div id=\"e265_304\">\n            <span id=\"e265_305\">CAMBIAR AVATAR</span>\n            <img class=\"sobreblanco\"src=\"../../../assets/forma-de-sobre-cerrado-blanco.svg\" alt=\"sobreblanco\">\n            <img class=\"llave\"src=\"../../../assets/clave.svg\" alt=\"llave\">\n            <img class=\"organizar\"src=\"../../../assets/organizar.svg\" alt=\"organizar\">\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/detalle-pelicula/detalle-pelicula.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/detalle-pelicula/detalle-pelicula.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"movie\">\n    \n    <div class=\"parrallax-content\" [ngStyle]=\"{'background-image': ' url('+'https://image.tmdb.org/t/p/w1280'+movie.backdrop_path+')'}\">\n        <img class=\"play\" src=\"./assets/images/play.svg\" alt=\"\">\n    </div>\n    <div class=\"parallax-left-content\">\n        <section class=\"parallax-position\">\n            \n            <div class=\"parallax-right-content\">\n                <p class=\"tituloPelicula\">{{movie.title}}</p>\n                <p class=\"items\">Sinopsis</p>\n                <p style=\"padding-right: 8px\">{{movie.overview}}</p>\n                <div>\n                    <a  (click)=\"openTrailer()\" > <img class=\"play-trailer\" src=\"./assets/images/play.svg\" alt=\"\"> Mirar Trailer</a>\n                    <a  (click)=\"addMiLista(movie.id)\"  [ngClass]=\"{'hidden': !agregarLista}\"> <img class=\"play-trailer\" src=\"./assets/images/agregar.svg\" alt=\"\"> Agregar a Mi Lista</a>\n                    <a  (click)=\"removeMiLista(movie.id)\" [ngClass]=\"{'hidden': agregarLista}\"> <img class=\"play-trailer\" src=\"./assets/images/remove.svg\" alt=\"\"> Remover de Mi Lista</a>\n                </div>\n                <p class=\"items\">Categorias</p>\n                <div>\n                    <a *ngFor=\"let genre of movie.genres\" routerLink=\"/genres/{{genre.id}}/{{genre.name}}\">\n                        {{genre.name}}\n                    </a>\n                </div>\n                <p class=\"items\">Puntuacion</p>\n                <p style=\"padding-right: 10px; left: 15px; position: relative;\">{{movie.vote_average}}</p>\n                <p class=\"items\">Calificacion</p>\n                <form>\n                    <p class=\"clasificacion\">\n                        <input [(ngModel)]=\"l1\" (ngModelChange)=\"onChange($event,5,movie.id)\" id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\"><!--\n                        --><label for=\"radio1\">★</label><!--\n                        --><input [(ngModel)]=\"l2\" (ngModelChange)=\"onChange($event,4,movie.id)\" id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\"><!--\n                        --><label for=\"radio2\">★</label><!--\n                        --><input [(ngModel)]=\"l3\" (ngModelChange)=\"onChange($event,3,movie.id)\" id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\"><!--\n                        --><label for=\"radio3\">★</label><!--\n                        --><input [(ngModel)]=\"l4\" (ngModelChange)=\"onChange($event,2,movie.id)\" id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\"><!--\n                        --><label for=\"radio4\">★</label><!--\n                        --><input [(ngModel)]=\"l5\" (ngModelChange)=\"onChange($event,1,movie.id)\" id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\"><!--\n                        --><label for=\"radio5\">★</label>\n                    </p>\n                </form>\n                <p style=\"padding-right: 12px; left: 15px; position: relative;\" [ngClass]=\"{'hidden': calificacion}\" >Gracias por calificar esta Pelicula!!</p>\n            </div>\n            \n            <div class=\"parallax-img-container\">\n                <img  src=\"https://image.tmdb.org/t/p/w500/{{movie?.poster_path}}\" alt=\"\">\n            </div>\n        </section>\n        \n        <section class=\"top-billed-cast\" [ngClass]=\"{'hidden': videoShow}\">\n            <img class=\"close\" (click)=\"openTrailer()\" src=\"./assets/images/close.svg\" alt=\"\">\n            <p>\n                <iframe width=\"560\" height=\"315\" [src]=\"getVideoIframe(video.url)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            </p>\n            \n        </section>\n        \n    </div>\n    \n    \n    \n    \n    \n    \n</div>\n<!-- <div *ngIf=\"isLoading\" style=\"margin-top: 30%\">\n    <div class=\"loading\">\n        <h4>Loading</h4>\n    </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/detalle-serie/detalle-serie.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/detalle-serie/detalle-serie.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"movie\">\n    \n    <div class=\"parrallax-content\" [ngStyle]=\"{'background-image': ' url('+'https://image.tmdb.org/t/p/w1280'+movie.backdrop_path+')'}\">\n        <img class=\"play\" src=\"./assets/images/play.svg\" alt=\"\">\n    </div>\n    <div class=\"parallax-left-content\">\n        <section class=\"parallax-position\">\n            \n            <div class=\"parallax-right-content\">\n                <p class=\"tituloPelicula\">{{movie.title}}</p>\n                <p class=\"items\">Sinopsis</p>\n                <p style=\"padding-right: 8px\">{{movie.overview}}</p>\n                <div>\n                    <a  (click)=\"addMiLista(movie.id)\"  [ngClass]=\"{'hidden': !agregarLista}\"> <img class=\"play-trailer\" src=\"./assets/images/agregar.svg\" alt=\"\"> Agregar a Mi Lista</a>\n                    <a  (click)=\"removeMiLista(movie.id)\" [ngClass]=\"{'hidden': agregarLista}\"> <img class=\"play-trailer\" src=\"./assets/images/remove.svg\" alt=\"\"> Remover de Mi Lista</a>\n                </div>\n                <p class=\"items\">Categorias</p>\n                <div>\n                    <a *ngFor=\"let genre of movie.genres\" routerLink=\"/genres/{{genre.id}}/{{genre.name}}\">\n                        {{genre.name}}\n                    </a>\n                </div>\n            </div>\n            \n            <div class=\"parallax-img-container\">\n                <img  src=\"https://image.tmdb.org/t/p/w500/{{movie?.poster_path}}\" alt=\"\">\n            </div>\n        </section>\n        \n        <section class=\"top-billed-cast\" [ngClass]=\"{'hidden': videoShow}\">\n            <img class=\"close\" (click)=\"openTrailer()\" src=\"./assets/images/close.svg\" alt=\"\">\n            <p>\n                <iframe width=\"560\" height=\"315\" [src]=\"getVideoIframe(video.url)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            </p>\n            \n        </section>\n    </div>\n</div>\n\n\n\n\n<!-- <div *ngIf=\"isLoading\" style=\"margin-top: 30%\">\n    <div class=\"loading\">\n        <h4>Loading</h4>\n    </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error404/error404.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error404/error404.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>error404 works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navegacion\"> \r\n  <div class=\"contenedorLogo\">\r\n    <a class=\"textLogo\" href=\"#\"><img src=\"./assets/images/iconLogo.svg\" class=\"d-inline-block align-top iconImage\" alt=\"\"></a>\r\n  </div>\r\n  <button  [routerLink]=\"['/login']\" class=\"botonLogin\">Iniciar Sesion</button>\r\n  <p class=\"letra\">¿Ya tenes cuenta?</p>\r\n</div>\r\n<div class=\"fondo\">\r\n    \r\n</div>\r\n<div class=\"promocion\">\r\n    <p class=\"promociontext\">Disfrutá de las mejores películas de todos los tiempos, online en HD.</p>\r\n    <p class=\"promociontext2\">Probá Netflics durante 7 días gratis.\r\n        Cancelá cuando quieras.</p>\r\n    <button class=\"botonSuscribir\">Comenzar 7 dias gratis</button>\r\n  </div>\r\n\r\n<footer>\r\n  <p class=\"copyr\">NETFLICS © 2019 - Todos los derechos reservados.</p>\r\n  <div class=\"redes\">\r\n    <img  class=\"iconosRedes\" src=\"./assets/images/facebook.svg\" alt=\"\">\r\n    <img  class=\"iconosRedes\" src=\"./assets/images/instagram.svg\" alt=\"\">\r\n    <img  class=\"iconosRedes\" src=\"./assets/images/gorjeo.svg\" alt=\"\">\r\n    <img  class=\"iconosRedes\" src=\"./assets/images/youtube.svg\" alt=\"\">\r\n  </div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/inicio/inicio.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/inicio/inicio.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"promocion\" >\n    <img class=\"promoImg\" src=\"./assets/images/promocion.jpg\" alt=\"\">\n    <div class=\"text\">\n        <p class=\"estreno\">estreno de la semana</p>\n        <p class=\"tituloPromocion\">jocker</p>\n        <a  class=\"ancord\" (click)=\"openTrailer()\" > <img class=\"play-trailer\" src=\"./assets/images/play.svg\" alt=\"\"> Mirar Trailer</a>\n        <a class=\"ancord\"  (click)=\"addMiLista(movie.id)\" > <img class=\"play-trailer\" src=\"./assets/images/agregar.svg\" alt=\"\"> Agregar a Mi Lista</a>\n    </div>\n</div>\n<div class=\"wrapper\">\n    <div class=\"phone-container\">\n        <div *ngFor=\"let peli of recomendadas\"  class=\"contenedor\">\n            <p class=\"titulo\">{{peli.genero}}    </p>\n            <div class=\"card-outer-container\">\n                <div class=\"card-inner-container\">\n                    <div  *ngFor=\"let list of peli.lista\">\n                        <div  *ngFor=\"let res of list.results\" class=\"card\">\n                            <div *ngIf=\"res.media_type\">\n                                <a [routerLink]=\"'/'+res.media_type+'/' + res.id\"><img src=\"{{ res | peliculaImagen }}\"/></a>\n                            </div>    \n                            <div *ngIf=\"!res.media_type\">\n                                    <a [routerLink]=\"'/movie/' + res.id\"><img src=\"{{ res | peliculaImagen }}\"/></a>\n                                </div>  \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>    \n<!-- <app-peliculas class=\"app\"></app-peliculas> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"navegacion\">\n        <div class=\"contenedorLogo\">\n            <a class=\"textLogo\" href=\"#\"><img src=\"./assets/images/iconLogo.svg\" class=\"d-inline-block align-top iconImage\" alt=\"\"></a>\n        </div>\n        <button class=\"botonLogin\">Iniciar Sesion</button>\n        <p class=\"letra\">¿Ya tenes cuenta?</p>\n    </div>\n    <div class=\"fondo\">\n        \n    </div>\n    <div class=\"promocion\">\n        <a [routerLink]=\"['/home']\"><img src=\"./assets/images/close.svg\" alt=\"\"></a>\n        <p class=\"promociontext\">INICIAR SESION</p>\n        <div class=\"formulario\">\n            <p class=\"textform\">EMAIL:</p>\n            <input class=\"form\" [(ngModel)]=\"email\" (ngModelChange)=\"onChange($event)\" type=\"text\" name=\"\" id=\"\">\n            <p class=\"textform\">CONTRASEÑA:</p>\n            <input class=\"form\" [(ngModel)]=\"pass\" (ngModelChange)=\"onChange($event)\" type=\"password\" name=\"\" id=\"\">\n            <input type=\"checkbox\">\n            <p class=\"textcheck\">Recordarme</p>\n            <button [routerLink]=\"['/inicio']\" [disabled]=\"login\" class=\"botonSesion\">iniciar sesion</button>\n        </div>\n        \n    </div>\n    \n    <footer>\n        <p class=\"copyr\">NETFLICS © 2019 - Todos los derechos reservados.</p>\n        <div class=\"redes\">\n            <img  class=\"iconosRedes\" src=\"./assets/images/facebook.svg\" alt=\"\">\n            <img  class=\"iconosRedes\" src=\"./assets/images/instagram.svg\" alt=\"\">\n            <img  class=\"iconosRedes\" src=\"./assets/images/gorjeo.svg\" alt=\"\">\n            <img  class=\"iconosRedes\" src=\"./assets/images/youtube.svg\" alt=\"\">\n        </div>\n    </footer>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mi-lista/mi-lista.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mi-lista/mi-lista.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"container\" *ngFor=\"let list of milista\">\n        <!-- <p class=\"titulo\"> {{list.name}}</p> -->\n        <div class=\"card\" *ngFor=\"let li of list.results\">\n            <section>\n                <div class=\"container2\">\n                    <h3 class=\"title\"></h3>\n                    <div class=\"content\">\n                            <a [routerLink]=\"'/'+li.media_type+'/' + li.id\">\n                                <!-- <img class=\"imagen\" src=\"{{ li | peliculaImagen }}\"/> -->\n                                <div class=\"content-overlay\"></div>\n                                <img class=\"content-image\" src=\"{{ li | peliculaImagen }}\">\n                                <div class=\"content-details fadeIn-bottom\">\n                                    <h3 *ngIf=\"li.title\" class=\"content-title\">{{li.title}}</h3>\n                                    <h3 *ngIf=\"!li.title\" class=\"content-title\">{{li.name}}</h3>\n                                    <p  class=\"content-text\">{{li.vote_average}}</p>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                </section>\n            </div>\n            <!-- <div class=\"phone-container\">\n                <div *ngFor=\"let list of milista\"  class=\"contenedor\">\n                    \n                    <div class=\"card-outer-container\">\n                        <div class=\"card-inner-container\">\n                            <div  *ngFor=\"let li of list.results\">\n                                <div  class=\"card\">\n                                    <a [routerLink]=\"'/movie/' + li.id\"><img src=\"{{ li | peliculaImagen }}\"/></a>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        \n        \n        \n        \n        \n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"contenedor navbar navbar-expand-lg navbar-light\" [ngClass]=\"{'hidden': onActiveNav()}\">\r\n  <div class=\"contenedorLogo\">\r\n    <a class=\"textLogo\" href=\"#\"><img src=\"./assets/images/iconLogo.svg\" class=\"d-inline-block align-top iconImage\" alt=\"\"></a>\r\n  </div>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse menu\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto botones\">\r\n      <li class=\"nav-item btnnav\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{ exact: true }\"> \r\n        <a class=\"nav-link\"(click)=\"onActive('/peliculas')\" [routerLink]=\"['/inicio']\" >INICIO </a>\r\n      </li>\r\n      <li class=\"nav-item btnnav\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <a class=\"nav-link\" (click)=\"onActive('/peliculas')\" [routerLink]=\"['/peliculas']\"  >PELICULAS </a>\r\n      </li>\r\n      <li class=\"nav-item btnnav\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"onActive('/peliculas')\" [routerLink]=\"['/series']\" >SERIES </a>\r\n      </li>\r\n      <li class=\"nav-item btnnav\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <a class=\"nav-link\" href=\"#\"(click)=\"onActive('/peliculas')\" [routerLink]=\"['/milista']\" >MI LISTA </a>\r\n      </li>\r\n      <li class=\"nav-item btncat\" >\r\n        <a class=\"nav-link\" (click)=\"buttonCategoria()\" [ngClass]=\"{'hidden': onActivePe('/peliculas')}\">CATEGORIAS <img class=\"imgCategoria\"   [ngClass]=\"{'hidden': !isCategorias}\" routerLinkActive=\"hidden\" src=\"./assets/images/flechaAbajo.svg\" alt=\"\">\r\n          <img class=\"imgCategoria \"  [ngClass]=\"{'hidden':  isCategorias}\" src=\"./assets/images/flechaArriba.svg\" alt=\"\"> </a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto iconosNavMenu\" >\r\n      <li class=\"nav-item\"><a [routerLink]=\"['/busqueda']\" ><img  class=\"iconosNav\" src=\"./assets/images/lupa.svg\" alt=\"\"></a></li>\r\n      <li class=\"nav-item\"> <a href=\"\"><img  class=\"iconosNav\" src=\"./assets/images/notificacion.svg\" alt=\"\"></a></li>\r\n      <li class=\"nav-item\"> <a [routerLink]=\"['/cuenta']\"><img  class=\"iconosNav\" src=\"./assets/images/chico.svg\" alt=\"\"></a></li>\r\n    </ul>\r\n    \r\n    \r\n    \r\n  </div>  \r\n</nav>\r\n<div class=\"categorias\" [ngClass]=\"{'hidden': isCategorias}\">\r\n    <a *ngFor=\"let genre of generos\" routerLink=\"/generos/{{genre.id}}/{{genre.name}}\">\r\n      <button class=\"buttonGenero\">{{genre.name}} </button>\r\n    </a>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"logoMenu\">\r\n    <a class=\"letraLogo\" href=\"#\">\r\n      <img src=\"./assets/images/iconLogo.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top iconImage\" alt=\"\">\r\n      ECFLICS\r\n    </a>\r\n  </div>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  \r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto botones\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Link</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/peliculas/peliculas.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/peliculas/peliculas.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"phone-container\">\n        <div *ngFor=\"let peli of peliculas\"  class=\"contenedor\">\n            <p class=\"titulo\">{{peli.genero}}    </p>\n            <div class=\"card-outer-container\">\n                <div class=\"card-inner-container\">\n                    <div  *ngFor=\"let list of peli.lista\">\n                        <div  *ngFor=\"let res of list.results\" class=\"card\">\n                            <a [routerLink]=\"'/movie/' + res.id\"><img src=\"{{ res | peliculaImagen }}\"/></a>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/planseleccionado/planseleccionado.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/planseleccionado/planseleccionado.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenedor\">\n<h3 class=\"cambioplan\">CAMBIO DE PLAN</h3>\n\n<h5>Desea cambiar el plan PLATA por el plan ORO?</h5>\n\n<div id=\"e156_9\">\n    <div id=\"e275_1\"></div>\n    <div id=\"e275_2\"></div><span id=\"e275_3\">PLATA</span>\n    <div id=\"e275_4\"></div>\n    <div id=\"e275_5\"></div>\n    <div id=\"e275_6\"></div><span id=\"e275_7\">Resolucion Full HD</span><span id=\"e275_8\">4 pantallas en simultaneo</span><span id=\"e275_9\">Ve en tu laptop y telefono</span><span id=\"e156_19\">$ 250 al mes </span>\n    <div id=\"e156_11\"></div>\n    <div id=\"e156_12\"></div>\n    <div id=\"e156_13\"></div>\n  </div>\n\n  <div id=\"e156_20\">\n    <div class=\"plan\" id=\"e156_22\" (click)=\"agregarBorde()\">\n      <div id=\"e156_23\"></div><span id=\"e156_24\">ORO</span>\n    </div>\n    \n    <div id=\"e156_25\"></div>\n    <div id=\"e156_26\"></div>\n    <div id=\"e156_27\"></div><span id=\"e156_28\">Resolucion 4K</span><span id=\"e156_29\">6 pantallas en simultaneo</span><span id=\"e156_30\">Ve en tu laptop y telefono</span><span id=\"e156_39\">$ 370 al mes </span>\n    <div id=\"e156_31\"></div>\n    <div id=\"e156_32\"></div>\n    <div id=\"e156_33\"></div>\n  </div>\n  <img class=\"flecha\"src=\"../../../assets/flecha.svg\" alt=\"flecha\">\n  \n  <div id=\"botonvolver\">\n    <span id=\"textvolver\"> <a [routerLink]=\"['/cambiar-plan']\"> VOLVER</a></span>\n  </div>\n\n  <div id=\"botoncambiarplan\">\n    <span id=\"textcambiarplan\"> <a [routerLink]=\"['/cuenta']\"> CAMBIAR PLAN</a></span>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/series/series.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/series/series.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n        <div class=\"phone-container\">\n            <div *ngFor=\"let serie of series\"  class=\"contenedor\">\n                <p class=\"titulo\">{{serie.genero}}    </p>\n                <div class=\"card-outer-container\">\n                    <div class=\"card-inner-container\">\n                        <div  *ngFor=\"let list of serie.lista\">\n                            <div  *ngFor=\"let res of list.results\" class=\"card\">\n                                <a [routerLink]=\"'/tv/' + res.id\"><img src=\"{{ res | peliculaImagen }}\"/></a>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n    \n    \n    \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tarjeta/tarjeta.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tarjeta/tarjeta.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tarjeta works!</p>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
/* harmony import */ var _componentes_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/peliculas/peliculas.component */ "./src/app/componentes/peliculas/peliculas.component.ts");
/* harmony import */ var _componentes_categorias_peliculas_categorias_peliculas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/categorias-peliculas/categorias-peliculas.component */ "./src/app/componentes/categorias-peliculas/categorias-peliculas.component.ts");
/* harmony import */ var _componentes_detalle_pelicula_detalle_pelicula_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/detalle-pelicula/detalle-pelicula.component */ "./src/app/componentes/detalle-pelicula/detalle-pelicula.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_mi_lista_mi_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/mi-lista/mi-lista.component */ "./src/app/componentes/mi-lista/mi-lista.component.ts");
/* harmony import */ var _componentes_series_series_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/series/series.component */ "./src/app/componentes/series/series.component.ts");
/* harmony import */ var _componentes_detalle_serie_detalle_serie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/detalle-serie/detalle-serie.component */ "./src/app/componentes/detalle-serie/detalle-serie.component.ts");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _componentes_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/busqueda/busqueda.component */ "./src/app/componentes/busqueda/busqueda.component.ts");
/* harmony import */ var _componentes_datoscuenta_datoscuenta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/datoscuenta/datoscuenta.component */ "./src/app/componentes/datoscuenta/datoscuenta.component.ts");
/* harmony import */ var _componentes_cambiarplan_cambiarplan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/cambiarplan/cambiarplan.component */ "./src/app/componentes/cambiarplan/cambiarplan.component.ts");
/* harmony import */ var _componentes_planseleccionado_planseleccionado_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/planseleccionado/planseleccionado.component */ "./src/app/componentes/planseleccionado/planseleccionado.component.ts");
/* harmony import */ var _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/error404/error404.component */ "./src/app/componentes/error404/error404.component.ts");

















const routes = [
    { path: "home", component: _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "peliculas", component: _componentes_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_4__["PeliculasComponent"] },
    { path: "categorias_peliculas", component: _componentes_categorias_peliculas_categorias_peliculas_component__WEBPACK_IMPORTED_MODULE_5__["CategoriasPeliculasComponent"] },
    { path: "movie/:id", component: _componentes_detalle_pelicula_detalle_pelicula_component__WEBPACK_IMPORTED_MODULE_6__["DetallePeliculaComponent"] },
    { path: "tv/:id", component: _componentes_detalle_serie_detalle_serie_component__WEBPACK_IMPORTED_MODULE_10__["DetalleSerieComponent"] },
    { path: "login", component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "inicio", component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__["InicioComponent"] },
    { path: "milista", component: _componentes_mi_lista_mi_lista_component__WEBPACK_IMPORTED_MODULE_8__["MiListaComponent"] },
    { path: "series", component: _componentes_series_series_component__WEBPACK_IMPORTED_MODULE_9__["SeriesComponent"] },
    { path: "busqueda", component: _componentes_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_12__["BusquedaComponent"] },
    { path: "cuenta", component: _componentes_datoscuenta_datoscuenta_component__WEBPACK_IMPORTED_MODULE_13__["DatoscuentaComponent"] },
    { path: "cambiar-plan", component: _componentes_cambiarplan_cambiarplan_component__WEBPACK_IMPORTED_MODULE_14__["CambiarplanComponent"] },
    { path: "plan-seleccionado", component: _componentes_planseleccionado_planseleccionado_component__WEBPACK_IMPORTED_MODULE_15__["PlanseleccionadoComponent"] },
    { path: "", pathMatch: "full", component: _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_16__["Error404Component"] },
    { path: "**", pathMatch: "full", component: _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_16__["Error404Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tp5';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
/* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ "./src/app/componentes/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _componentes_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/tarjeta/tarjeta.component */ "./src/app/componentes/tarjeta/tarjeta.component.ts");
/* harmony import */ var _pipes_pelicula_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/pelicula-imagen.pipe */ "./src/app/pipes/pelicula-imagen.pipe.ts");
/* harmony import */ var _componentes_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/peliculas/peliculas.component */ "./src/app/componentes/peliculas/peliculas.component.ts");
/* harmony import */ var _componentes_categorias_peliculas_categorias_peliculas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/categorias-peliculas/categorias-peliculas.component */ "./src/app/componentes/categorias-peliculas/categorias-peliculas.component.ts");
/* harmony import */ var _componentes_detalle_pelicula_detalle_pelicula_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/detalle-pelicula/detalle-pelicula.component */ "./src/app/componentes/detalle-pelicula/detalle-pelicula.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _componentes_mi_lista_mi_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/mi-lista/mi-lista.component */ "./src/app/componentes/mi-lista/mi-lista.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _componentes_series_series_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/series/series.component */ "./src/app/componentes/series/series.component.ts");
/* harmony import */ var _componentes_detalle_serie_detalle_serie_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/detalle-serie/detalle-serie.component */ "./src/app/componentes/detalle-serie/detalle-serie.component.ts");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _componentes_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/busqueda/busqueda.component */ "./src/app/componentes/busqueda/busqueda.component.ts");
/* harmony import */ var _componentes_datoscuenta_datoscuenta_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/datoscuenta/datoscuenta.component */ "./src/app/componentes/datoscuenta/datoscuenta.component.ts");
/* harmony import */ var _componentes_cambiarplan_cambiarplan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/cambiarplan/cambiarplan.component */ "./src/app/componentes/cambiarplan/cambiarplan.component.ts");
/* harmony import */ var _componentes_planseleccionado_planseleccionado_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/planseleccionado/planseleccionado.component */ "./src/app/componentes/planseleccionado/planseleccionado.component.ts");
/* harmony import */ var _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/error404/error404.component */ "./src/app/componentes/error404/error404.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _componentes_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_8__["TarjetaComponent"],
            _pipes_pelicula_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__["PeliculaImagenPipe"],
            _componentes_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_10__["PeliculasComponent"],
            _componentes_categorias_peliculas_categorias_peliculas_component__WEBPACK_IMPORTED_MODULE_11__["CategoriasPeliculasComponent"],
            _componentes_detalle_pelicula_detalle_pelicula_component__WEBPACK_IMPORTED_MODULE_12__["DetallePeliculaComponent"],
            _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _componentes_mi_lista_mi_lista_component__WEBPACK_IMPORTED_MODULE_16__["MiListaComponent"],
            _componentes_series_series_component__WEBPACK_IMPORTED_MODULE_18__["SeriesComponent"],
            _componentes_detalle_serie_detalle_serie_component__WEBPACK_IMPORTED_MODULE_19__["DetalleSerieComponent"],
            _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_20__["InicioComponent"],
            _componentes_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_21__["BusquedaComponent"],
            _componentes_datoscuenta_datoscuenta_component__WEBPACK_IMPORTED_MODULE_22__["DatoscuentaComponent"],
            _componentes_cambiarplan_cambiarplan_component__WEBPACK_IMPORTED_MODULE_23__["CambiarplanComponent"],
            _componentes_planseleccionado_planseleccionado_component__WEBPACK_IMPORTED_MODULE_24__["PlanseleccionadoComponent"],
            _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_25__["Error404Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientJsonpModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _componentes_detalle_pelicula_detalle_pelicula_component__WEBPACK_IMPORTED_MODULE_12__["DetallePeliculaComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/componentes/busqueda/busqueda.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/busqueda/busqueda.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\ninput[type='text'] {\r\n    position: absolute;\r\n    width: 784px;\r\n    height: 57px;\r\n    left: 40%;\r\n    top: 84px;\r\n    \r\n    background: rgba(255, 255, 255, 0.15);\r\n    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n\r\n.genero{\r\n    width: 186px;\r\n    height: 33px;\r\n    \r\n    left: 50%;\r\n    top: 160px;\r\n    \r\n}\r\n\r\n\r\n.ano{\r\n    width: 186px;\r\n    height: 33px;\r\n    \r\n    left: 60%;\r\n    top: 160px;\r\n    \r\n}\r\n\r\n\r\n*, *:before, *:after{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.main-title{\r\n  color: #2d2d2d;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  padding: 0.7em 0;\r\n}\r\n\r\n\r\n.container{\r\n  padding: 1em 0;\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n\r\n/* @media screen and (max-width: 640px){\r\n  .container{\r\n    display: block;\r\n    width: 100vw;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px){\r\n  .container{\r\n    width: 33.33333vw;\r\n  }\r\n} */\r\n\r\n\r\n.container .title{\r\n  color: #1a1a1a;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n.content {\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.content .content-overlay {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n\r\n.content:hover .content-overlay{\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.content-image{\r\n  width: 100%;\r\n}\r\n\r\n\r\n.content-details {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n\r\n.content:hover .content-details{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.content-details h3{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n\r\n.content-details p{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n}\r\n\r\n\r\n.fadeIn-bottom{\r\n  top: 80%;\r\n}\r\n\r\n\r\n.fadeIn-top{\r\n  top: 20%;\r\n}\r\n\r\n\r\n.fadeIn-left{\r\n  left: 20%;\r\n}\r\n\r\n\r\n.fadeIn-right{\r\n  left: 80%;\r\n}\r\n\r\n\r\n.titulo{\r\n    position: absolute;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    display: inline-block;\r\n    border-bottom: 2px solid rgb(255, 255, 255);\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n    top: 15%;\r\n    left: 10%;\r\n}\r\n\r\n\r\n.container {\r\n    left: 15%;\r\n    position: absolute;\r\n    top: 24%;   \r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 100px));\r\n    grid-template-rows: repeat(auto, 180px);\r\n    padding: 50px;\r\n}\r\n\r\n\r\n.card {\r\n    /* padding: 20px; */\r\n    position: relative;\r\n    /* border: 1px solid #CCCCCC; */\r\n    /* border-radius: 5px; */\r\n    background-color: #000000;\r\n    cursor: pointer;\r\n    transition: all 150ms ease;\r\n}\r\n\r\n\r\n.card:hover{\r\n    background: #000000;\r\n}\r\n\r\n\r\n.card img{\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%; \r\n    z-index: 100;\r\n}\r\n\r\n\r\n.card:focus,\r\n.card:hover {\r\n    /* box-shadow: 3px 3px 3px #BFBFBF; */\r\n}\r\n\r\n\r\n.avatar {\r\n    /* fill: #CCCCCC; */\r\n}\r\n\r\n\r\n.status {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 45px;\r\n    left: 45px;\r\n    width: 20px;\r\n    height: 20px;\r\n    /* border: 3px solid #FFFFFF; */\r\n    border-radius: 25px;\r\n}\r\n\r\n\r\n.online {\r\n    background-color: #00FF21;\r\n}\r\n\r\n\r\n.offline {\r\n    background-color: #FF0000;\r\n}\r\n\r\n\r\n.user-name {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.user-role {\r\n    font-size: 18px;\r\n    /* color: #4C4C4C; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYnVzcXVlZGEvYnVzcXVlZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFNBQVM7O0lBRVQscUNBQXFDO0lBQ3JDLGlEQUFpRDtBQUNyRDs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osWUFBWTs7SUFFWixTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTs7SUFFWixTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7O0FBTUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUdWLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0FBQ1o7OztBQUNBOzs7Ozs7Ozs7OztHQVdHOzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBR1YsbUNBQW1DO0FBQ3JDOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFHVixnQ0FBZ0M7RUFHaEMsbUNBQW1DO0FBQ3JDOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7OztBQUVBO0VBQ0UsUUFBUTtBQUNWOzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7OztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsU0FBUztBQUNiOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELHVDQUF1QztJQUN2QyxhQUFhO0FBQ2pCOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBRUE7O0lBRUkscUNBQXFDO0FBQ3pDOzs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOzs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYnVzcXVlZGEvYnVzcXVlZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3ODRweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHRvcDogODRweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcblxyXG4uZ2VuZXJve1xyXG4gICAgd2lkdGg6IDE4NnB4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDE2MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5hbm97XHJcbiAgICB3aWR0aDogMTg2cHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICBcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIHRvcDogMTYwcHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheSk7XHJcblxyXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5tYWluLXRpdGxle1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwYWRkaW5nOiAwLjdlbSAwO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDFlbSAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMzLjMzMzMzdnc7XHJcbiAgfVxyXG59ICovXHJcblxyXG4uY29udGFpbmVyIC50aXRsZXtcclxuICBjb2xvcjogIzFhMWExYTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250ZW50IC5jb250ZW50LW92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtb3ZlcmxheXtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGVudC1pbWFnZXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlsc3tcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyBoM3tcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyBwe1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi5mYWRlSW4tYm90dG9te1xyXG4gIHRvcDogODAlO1xyXG59XHJcblxyXG4uZmFkZUluLXRvcHtcclxuICB0b3A6IDIwJTtcclxufVxyXG5cclxuLmZhZGVJbi1sZWZ0e1xyXG4gIGxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmZhZGVJbi1yaWdodHtcclxuICBsZWZ0OiA4MCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi50aXR1bG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbGVmdDogMTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjQlOyAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMTAwcHgpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDE4MHB4KTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7ICovXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuLmNhcmQgaW1ne1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNhcmQ6Zm9jdXMsXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIC8qIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICNCRkJGQkY7ICovXHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICAvKiBmaWxsOiAjQ0NDQ0NDOyAqL1xyXG59XHJcbi5zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI0ZGRkZGRjsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLm9ubGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjIxO1xyXG59XHJcbi5vZmZsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuLnVzZXItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi51c2VyLXJvbGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogY29sb3I6ICM0QzRDNEM7ICovXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/componentes/busqueda/busqueda.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/busqueda/busqueda.component.ts ***!
  \************************************************************/
/*! exports provided: BusquedaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaComponent", function() { return BusquedaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");



let BusquedaComponent = class BusquedaComponent {
    constructor(tmdb) {
        this.tmdb = tmdb;
        this.peliculas = [];
        this.generos = [];
        this.peliculasGenero = [];
        this.anios = [2010, 2011, 2012, 2013, 2014, 2015];
        this.generoAnterior = -1;
        this.getGeneros();
        console.log(this.anios);
    }
    ngOnInit() { }
    getPeliculas(termino) {
        this.tmdb.getBusquedaPeliculas(termino).subscribe((data) => {
            console.log(data);
            this.peliculas = data;
        });
    }
    getGeneros() {
        this.tmdb.getGeneros().subscribe((data) => {
            console.log(data);
            this.generos = data.genres;
        });
    }
    getPeliculasGenero(genero, termino) {
        this.tmdb.getPeliculasGenero(genero, termino).subscribe((data) => {
            this.peliculas = [];
            console.log("data", data);
            let aux = data.results;
            this.peliculas = this.peliculas.concat(aux);
            console.log(this.peliculas);
        });
    }
    getPeliculasAnio(año) {
        this.tmdb.getPeliculasAño(año).subscribe((data) => {
            this.peliculas = [];
            console.log("data", data);
            let aux = data.results;
            this.peliculas = this.peliculas.concat(aux);
            console.log(this.peliculas);
        });
    }
};
BusquedaComponent.ctorParameters = () => [
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] }
];
BusquedaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-busqueda",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./busqueda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/busqueda/busqueda.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./busqueda.component.css */ "./src/app/componentes/busqueda/busqueda.component.css")).default]
    })
], BusquedaComponent);



/***/ }),

/***/ "./src/app/componentes/cambiarplan/cambiarplan.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/cambiarplan/cambiarplan.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor{\r\n    position: absolute;\r\n    left: 20%;\r\n    top: 100px;\r\n}\r\n\r\n\r\n#e156_65 {\r\n    box-shadow:0px 2px 46px rgba(0, 0, 0, 0.8743990659713745);\r\n    color:rgba(255, 255, 255, 1);\r\n    opacity:1;\r\n    width:391px;\r\n    height:32px;\r\n    font-family:Lato;\r\n    text-align:left;\r\n    font-size:32px;\r\n    letter-spacing:5;\r\n    line-height:undefined;\r\n    }\r\n\r\n\r\n#e156_3 {\r\n        position:relative;\r\n        opacity:1;\r\n        width:1034px;\r\n        height:205px;\r\n        padding: 110px;\r\n        }\r\n\r\n\r\n#e156_4 {\r\n        opacity:1;\r\n        width:1034px;\r\n        height:205px;\r\n        position:absolute;\r\n        left:0px;\r\n        top:0px;\r\n        }\r\n\r\n\r\n#ei156_4_441216 {\r\n        background-color:rgba(255, 255, 255, 1);\r\n        opacity:1;\r\n        width:1034px;\r\n        height:205px;\r\n        position:absolute;\r\n        left:0px;\r\n        top:0px;\r\n        border-top-left-radius:10px;\r\n        border-top-right-radius:10px;\r\n        border-bottom-left-radius:10px;\r\n        border-bottom-right-radius:10px;\r\n        }\r\n\r\n\r\n#ei156_4_441217 {\r\n        background-color:rgba(118.00000056624413, 60.00000022351742, 40.00000141561031, 1);\r\n        opacity:1;\r\n        width:1034px;\r\n        height:60.56818389892578px;\r\n        position:absolute;\r\n        left:0px;\r\n        top:0px;\r\n        border-top-left-radius:10px;\r\n        border-top-right-radius:10px;\r\n        border-bottom-left-radius:10px;\r\n        border-bottom-right-radius:10px;\r\n        }\r\n\r\n\r\n#ei156_4_441218 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:123px;\r\n        height:36px;\r\n        position:absolute;\r\n        left:457.45648193359375px;\r\n        top:9.318181991577148px;\r\n        font-family:Lato;\r\n        text-align:center;\r\n        font-size:30px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#ei156_4_441236 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:131px;\r\n        height:24px;\r\n        position:absolute;\r\n        left:204.9369354248047px;\r\n        top:145.59658813476562px;\r\n        font-family:Lato;\r\n        text-align:left;\r\n        font-size:20px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#ei156_4_441237 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:222px;\r\n        height:24px;\r\n        position:absolute;\r\n        left:204.9369354248047px;\r\n        top:85.02840423583984px;\r\n        font-family:Lato;\r\n        text-align:left;\r\n        font-size:20px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#ei156_4_441238 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:227px;\r\n        height:24px;\r\n        position:absolute;\r\n        left:204.9369354248047px;\r\n        top:116.4772720336914px;\r\n        font-family:Lato;\r\n        text-align:left;\r\n        font-size:20px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#e156_5 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:169px;\r\n        height:36px;\r\n        position:absolute;\r\n        left:699px;\r\n        top:108px;\r\n        font-family:Lato;\r\n        text-align:left;\r\n        font-size:30px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#e182_1877 {\r\n        opacity:1;\r\n        width:14.958328247070312px;\r\n        height:71.08639526367188px;\r\n        position:absolute;\r\n        left:159px;\r\n        top:93.300537109375px;\r\n        }\r\n\r\n\r\n#e156_6 {\r\n        position: absolute;\r\n        border-radius:10px;\r\n        background-color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:14.958328247070312px;\r\n        height:15.018234252929688px;\r\n        position:absolute;\r\n        left:175px;\r\n        top:94px;\r\n        }\r\n\r\n\r\n#e156_7 {\r\n            position: absolute;\r\n        border-radius:10px;\r\n        background-color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:14.958328247070312px;\r\n        height:15.01824951171875px;\r\n        position:absolute;\r\n        left:0px;\r\n        top:28.033935546875px;\r\n        left:175px;\r\n        top: 125px;\r\n        }\r\n\r\n\r\n#e156_8 {\r\n        position: absolute;\r\n        border-radius:10px;\r\n        background-color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:14.958328247070312px;\r\n        height:15.018280029296875px;\r\n        position:absolute;\r\n        left:175px;\r\n        top:153px;\r\n        }\r\n\r\n\r\n#e156_9 {\r\n            position:relative;\r\n            opacity:1;\r\n            width:1034px;\r\n            height:205px;\r\n            padding: 110px;\r\n            }\r\n\r\n\r\n#e275_1 {\r\n            background-color:rgba(255, 255, 255, 1);\r\n            opacity:1;\r\n            width:1034px;\r\n            height:205px;\r\n            position:absolute;\r\n            left:0px;\r\n            top:0px;\r\n            border-top-left-radius:10px;\r\n            border-top-right-radius:10px;\r\n            border-bottom-left-radius:10px;\r\n            border-bottom-right-radius:10px;\r\n            }\r\n\r\n\r\n#e275_2 {\r\n            background-color:rgba(196.00000351667404, 196.00000351667404, 196.00000351667404, 1);\r\n            opacity:1;\r\n            width:1034px;\r\n            height:60.56818389892578px;\r\n            position:absolute;\r\n            left:0px;\r\n            top:0px;\r\n            border-top-left-radius:10px;\r\n            border-top-right-radius:10px;\r\n            border-bottom-left-radius:10px;\r\n            border-bottom-right-radius:10px;\r\n            }\r\n\r\n\r\n#e275_3 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:88px;\r\n            height:36px;\r\n            position:absolute;\r\n            left:474.45648193359375px;\r\n            top:9.318181991577148px;\r\n            font-family:Lato;\r\n            text-align:center;\r\n            font-size:30px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e275_7 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:168px;\r\n            height:24px;\r\n            position:absolute;\r\n            left:204.9369354248047px;\r\n            top:145.59658813476562px;\r\n            font-family:Lato;\r\n            text-align:left;\r\n            font-size:20px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e275_8 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:222px;\r\n            height:24px;\r\n            position:absolute;\r\n            left:204.9369354248047px;\r\n            top:85.02840423583984px;\r\n            font-family:Lato;\r\n            text-align:left;\r\n            font-size:20px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e275_9 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:227px;\r\n            height:24px;\r\n            position:absolute;\r\n            left:204.9369354248047px;\r\n            top:116.4772720336914px;\r\n            font-family:Lato;\r\n            text-align:left;\r\n            font-size:20px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e182_1878 {\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:71.0863037109375px;\r\n            position:absolute;\r\n            left:160px;\r\n            top:92px;\r\n            }\r\n\r\n\r\n#e156_11 {\r\n                position: absolute;\r\n            border-radius:10px;\r\n            background-color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:15.018280029296875px;\r\n            position:absolute;\r\n            left:175px;\r\n            top:94px;\r\n            }\r\n\r\n\r\n#e156_12 {\r\n                position: absolute;\r\n            border-radius:10px;\r\n            background-color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:15.018218994140625px;\r\n            position:absolute;\r\n            left:175px;\r\n            top: 125px;\r\n            }\r\n\r\n\r\n#e156_13 {\r\n                position: absolute;\r\n            border-radius:10px;\r\n            background-color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:15.0181884765625px;\r\n            position:absolute;\r\n            left:175px;\r\n            top:153px;\r\n            }\r\n\r\n\r\n#e156_19{\r\n                color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:169px;\r\n                height:36px;\r\n                position:absolute;\r\n                left:699px;\r\n                top:108px;\r\n                font-family:Lato;\r\n                text-align:left;\r\n                font-size:30px;\r\n                letter-spacing:0;\r\n                line-height:undefined; \r\n            }\r\n\r\n\r\n#e156_20 {\r\n                position:relative;\r\n                opacity:1;\r\n                width:1034px;\r\n                height:205px;\r\n                padding: 110px;\r\n                }\r\n\r\n\r\n#e156_22 {\r\n                background-color:rgba(255, 255, 255, 1);\r\n                opacity:1;\r\n                width:1034px;\r\n                height:205px;\r\n                position:absolute;\r\n                left:0px;\r\n                top:0px;\r\n                border-top-left-radius:10px;\r\n                border-top-right-radius:10px;\r\n                border-bottom-left-radius:10px;\r\n                border-bottom-right-radius:10px;\r\n                }\r\n\r\n\r\n#e156_23 {\r\n                background-color:rgba(234.00000125169754, 193.00000369548798, 2.000000118277967, 1);\r\n                opacity:1;\r\n                width:1034px;\r\n                height:60.56818389892578px;\r\n                position:absolute;\r\n                left:0px;\r\n                top:0px;\r\n                border-top-left-radius:10px;\r\n                border-top-right-radius:10px;\r\n                border-bottom-left-radius:10px;\r\n                border-bottom-right-radius:10px;\r\n                margin: auto;\r\n                }\r\n\r\n\r\n#e156_24 {\r\n                color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:67px;\r\n                height:36px;\r\n                position:absolute;\r\n                left:485.45648193359375px;\r\n                top:9.318181991577148px;\r\n                font-family:Lato;\r\n                text-align:center;\r\n                font-size:30px;\r\n                letter-spacing:0;\r\n                line-height:undefined;\r\n                }\r\n\r\n\r\n#e156_28 {\r\n                color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:126px;\r\n                height:24px;\r\n                position:absolute;\r\n                left:204.9369354248047px;\r\n                top:145.59658813476562px;\r\n                font-family:Lato;\r\n                text-align:left;\r\n                font-size:20px;\r\n                letter-spacing:0;\r\n                line-height:undefined;\r\n                }\r\n\r\n\r\n#e156_29 {\r\n                color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:222px;\r\n                height:24px;\r\n                position:absolute;\r\n                left:204.9369354248047px;\r\n                top:85.02840423583984px;\r\n                font-family:Lato;\r\n                text-align:left;\r\n                font-size:20px;\r\n                letter-spacing:0;\r\n                line-height:undefined;\r\n                }\r\n\r\n\r\n#e156_30 {\r\n                color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:227px;\r\n                height:24px;\r\n                position:absolute;\r\n                left:204.9369354248047px;\r\n                top:116.4772720336914px;\r\n                font-family:Lato;\r\n                text-align:left;\r\n                font-size:20px;\r\n                letter-spacing:0;\r\n                line-height:undefined;\r\n                }\r\n\r\n\r\n#e182_1879 {\r\n                opacity:1;\r\n                width:14.958343505859375px;\r\n                height:71.0863037109375px;\r\n                position:absolute;\r\n                left:160px;\r\n                top:93px;\r\n                }\r\n\r\n\r\n#e156_31 {\r\n                    position: absolute;\r\n                border-radius:10px;\r\n                background-color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:14.958343505859375px;\r\n                height:15.0181884765625px;\r\n                position:absolute;\r\n                left:175px;\r\n                top:94px;\r\n                }\r\n\r\n\r\n#e156_32 {\r\n                    position: absolute;\r\n                border-radius:10px;\r\n                background-color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:14.958343505859375px;\r\n                height:15.018310546875px;\r\n                position:absolute;\r\n                left:175px;\r\n                top: 125px;    \r\n                }\r\n\r\n\r\n#e156_33 {\r\n                border-radius:10px;\r\n                background-color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:14.958343505859375px;\r\n                height:15.0181884765625px;\r\n                position:absolute;\r\n                left:175px;\r\n                top:153px;\r\n                }\r\n\r\n\r\n#e156_39{\r\n                    color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:169px;\r\n                    height:36px;\r\n                    position:absolute;\r\n                    left:699px;\r\n                    top:108px;\r\n                    font-family:Lato;\r\n                    text-align:left;\r\n                    font-size:30px;\r\n                    letter-spacing:0;\r\n                    line-height:undefined;    \r\n                }\r\n\r\n\r\n#e157_20 {\r\n                    position:relative;\r\n                    opacity:1;\r\n                    width:1034px;\r\n                    height:205px;\r\n                    padding: 110px;\r\n                    }\r\n\r\n\r\n#e157_22 {\r\n                    background-color:rgba(255, 255, 255, 1);\r\n                    opacity:1;\r\n                    width:1034px;\r\n                    height:205px;\r\n                    position:absolute;\r\n                    left:0px;\r\n                    top:0px;\r\n                    border-top-left-radius:10px;\r\n                    border-top-right-radius:10px;\r\n                    border-bottom-left-radius:10px;\r\n                    border-bottom-right-radius:10px;\r\n                    }\r\n\r\n\r\n#e157_23 {\r\n                    background-color:rgba(127, 118, 121, 1);\r\n                    opacity:1;\r\n                    width:1034px;\r\n                    height:60.56818389892578px;\r\n                    position:absolute;\r\n                    left:0px;\r\n                    top:0px;\r\n                    border-top-left-radius:10px;\r\n                    border-top-right-radius:10px;\r\n                    border-bottom-left-radius:10px;\r\n                    border-bottom-right-radius:10px;\r\n                    }\r\n\r\n\r\n#e157_24 {\r\n                    color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:67px;\r\n                    height:36px;\r\n                    position:absolute;\r\n                    left:485.45648193359375px;\r\n                    top:9.318181991577148px;\r\n                    font-family:Lato;\r\n                    text-align:center;\r\n                    font-size:30px;\r\n                    letter-spacing:0;\r\n                    line-height:undefined;\r\n                    }\r\n\r\n\r\n#e157_28 {\r\n                    color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:126px;\r\n                    height:24px;\r\n                    position:absolute;\r\n                    left:204.9369354248047px;\r\n                    top:145.59658813476562px;\r\n                    font-family:Lato;\r\n                    text-align:left;\r\n                    font-size:20px;\r\n                    letter-spacing:0;\r\n                    line-height:undefined;\r\n                    }\r\n\r\n\r\n#e157_29 {\r\n                    color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:222px;\r\n                    height:24px;\r\n                    position:absolute;\r\n                    left:204.9369354248047px;\r\n                    top:85.02840423583984px;\r\n                    font-family:Lato;\r\n                    text-align:left;\r\n                    font-size:20px;\r\n                    letter-spacing:0;\r\n                    line-height:undefined;\r\n                    }\r\n\r\n\r\n#e157_30 {\r\n                    color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:227px;\r\n                    height:24px;\r\n                    position:absolute;\r\n                    left:204.9369354248047px;\r\n                    top:116.4772720336914px;\r\n                    font-family:Lato;\r\n                    text-align:left;\r\n                    font-size:20px;\r\n                    letter-spacing:0;\r\n                    line-height:undefined;\r\n                    }\r\n\r\n\r\n#e183_1879 {\r\n                    opacity:1;\r\n                    width:14.958343505859375px;\r\n                    height:71.0863037109375px;\r\n                    position:absolute;\r\n                    left:160px;\r\n                    top:93px;\r\n                    }\r\n\r\n\r\n#e157_31 {\r\n                        position: absolute;\r\n                    border-radius:10px;\r\n                    background-color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:14.958343505859375px;\r\n                    height:15.0181884765625px;\r\n                    position:absolute;\r\n                    left:175px;\r\n                    top:94px;\r\n                    }\r\n\r\n\r\n#e157_32 {\r\n                        position: absolute;\r\n                    border-radius:10px;\r\n                    background-color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:14.958343505859375px;\r\n                    height:15.018310546875px;\r\n                    position:absolute;\r\n                    left:175px;\r\n                    top: 125px;    \r\n                    }\r\n\r\n\r\n#e157_33 {\r\n                    border-radius:10px;\r\n                    background-color:rgba(0, 0, 0, 1);\r\n                    opacity:1;\r\n                    width:14.958343505859375px;\r\n                    height:15.0181884765625px;\r\n                    position:absolute;\r\n                    left:175px;\r\n                    top:153px;\r\n                    }\r\n\r\n\r\n#e157_39{\r\n                        color:rgba(0, 0, 0, 1);\r\n                        opacity:1;\r\n                        width:169px;\r\n                        height:36px;\r\n                        position:absolute;\r\n                        left:699px;\r\n                        top:108px;\r\n                        font-family:Lato;\r\n                        text-align:left;\r\n                        font-size:30px;\r\n                        letter-spacing:0;\r\n                        line-height:undefined;    \r\n                    }\r\n\r\n\r\n#botonvolver {\r\n                        position: absolute;\r\n                        background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 0.7400000095367432);\r\n                        opacity:1;\r\n                        border:1px solid rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                        width:147px;\r\n                        height:45px;\r\n                        border-top-left-radius:10px;\r\n                        border-top-right-radius:10px;\r\n                        border-bottom-left-radius:10px;\r\n                        border-bottom-right-radius:10px;\r\n                        left: 10%;\r\n                        top: 1050px;\r\n                        }\r\n\r\n\r\n#textvolver {\r\n                        position: absolute;\r\n                        color:rgba(255, 255, 255, 1);\r\n                        opacity:0.5001395344734192;\r\n                        width:80px;\r\n                        height:24px;\r\n                        font-family:Lato;\r\n                        text-align:left;\r\n                        font-size:20px;\r\n                        letter-spacing:0;\r\n                        line-height:undefined;\r\n                        left: 30px;\r\n                        top: 10px;                        \r\n                        }\r\n\r\n\r\n#botoncontinuar{\r\n                        position: absolute;\r\n                        width: 147px;\r\n                        height: 45px;   \r\n                        left: 0px;\r\n                        top: 0px;\r\n                        background: rgba(151, 151, 151, 0.74);\r\n                        border: 1px solid #979797;\r\n                        box-sizing: border-box;\r\n                        border-radius: 10px;\r\n                        left: 70%;\r\n                        top: 1050px;\r\n                        }\r\n\r\n\r\n#textcontinuar{\r\n                            position: absolute;\r\n                            height: 24px;\r\n                            left: 8.16%;\r\n                            right: 8.16%;\r\n                            top: calc(50% - 24px/2 + 0.5px);\r\n                            font-family: Lato;\r\n                            font-style: normal;\r\n                            font-weight: normal;\r\n                            font-size: 20px;\r\n                            line-height: 24px;\r\n                            text-transform: uppercase;\r\n                            color: #FFFFFF;\r\n                            mix-blend-mode: normal;\r\n                            opacity: 0.5;\r\n                            border-radius: 10px;\r\n                        }\r\n\r\n\r\n.bordeCeleste{\r\n                            box-sizing: border-box;\r\n                            border: 5px solid aqua;\r\n                            border-radius: 5px;\r\n                        }\r\n\r\n\r\na:visited, a{\r\n                            text-decoration: none;\r\n                            color: white;\r\n                            \r\n                        }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FtYmlhcnBsYW4vY2FtYmlhcnBsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLHlEQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQjs7O0FBQ0E7UUFDSSxpQkFBaUI7UUFDakIsU0FBUztRQUNULFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkOzs7QUFDQTtRQUNBLFNBQVM7UUFDVCxZQUFZO1FBQ1osWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsT0FBTztRQUNQOzs7QUFDQTtRQUNBLHVDQUF1QztRQUN2QyxTQUFTO1FBQ1QsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsUUFBUTtRQUNSLE9BQU87UUFDUCwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0I7OztBQUNBO1FBQ0Esa0ZBQWtGO1FBQ2xGLFNBQVM7UUFDVCxZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsT0FBTztRQUNQLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQjs7O0FBQ0E7UUFDQSxzQkFBc0I7UUFDdEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQjs7O0FBQ0E7UUFDQSxzQkFBc0I7UUFDdEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQjs7O0FBQ0E7UUFDQSxzQkFBc0I7UUFDdEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQjs7O0FBQ0E7UUFDQSxzQkFBc0I7UUFDdEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQjs7O0FBQ0E7UUFDQSxzQkFBc0I7UUFDdEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQjs7O0FBQ0E7UUFDQSxTQUFTO1FBQ1QsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLHFCQUFxQjtRQUNyQjs7O0FBQ0E7UUFDQSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFFBQVE7UUFDUjs7O0FBQ0E7WUFDSSxrQkFBa0I7UUFDdEIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixVQUFVO1FBQ1YsVUFBVTtRQUNWOzs7QUFDQTtRQUNBLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLFNBQVM7UUFDVCwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsU0FBUztRQUNUOzs7QUFDQTtZQUNJLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2Q7OztBQUNBO1lBQ0EsdUNBQXVDO1lBQ3ZDLFNBQVM7WUFDVCxZQUFZO1lBQ1osWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixRQUFRO1lBQ1IsT0FBTztZQUNQLDJCQUEyQjtZQUMzQiw0QkFBNEI7WUFDNUIsOEJBQThCO1lBQzlCLCtCQUErQjtZQUMvQjs7O0FBQ0E7WUFDQSxvRkFBb0Y7WUFDcEYsU0FBUztZQUNULFlBQVk7WUFDWiwwQkFBMEI7WUFDMUIsaUJBQWlCO1lBQ2pCLFFBQVE7WUFDUixPQUFPO1lBQ1AsMkJBQTJCO1lBQzNCLDRCQUE0QjtZQUM1Qiw4QkFBOEI7WUFDOUIsK0JBQStCO1lBQy9COzs7QUFDQTtZQUNBLHNCQUFzQjtZQUN0QixTQUFTO1lBQ1QsVUFBVTtZQUNWLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCOzs7QUFDQTtZQUNBLHNCQUFzQjtZQUN0QixTQUFTO1lBQ1QsV0FBVztZQUNYLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCOzs7QUFDQTtZQUNBLHNCQUFzQjtZQUN0QixTQUFTO1lBQ1QsV0FBVztZQUNYLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCOzs7QUFDQTtZQUNBLHNCQUFzQjtZQUN0QixTQUFTO1lBQ1QsV0FBVztZQUNYLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCOzs7QUFDQTtZQUNBLFNBQVM7WUFDVCwwQkFBMEI7WUFDMUIseUJBQXlCO1lBQ3pCLGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsUUFBUTtZQUNSOzs7QUFDQTtnQkFDSSxrQkFBa0I7WUFDdEIsa0JBQWtCO1lBQ2xCLGlDQUFpQztZQUNqQyxTQUFTO1lBQ1QsMEJBQTBCO1lBQzFCLDJCQUEyQjtZQUMzQixpQkFBaUI7WUFDakIsVUFBVTtZQUNWLFFBQVE7WUFDUjs7O0FBQ0E7Z0JBQ0ksa0JBQWtCO1lBQ3RCLGtCQUFrQjtZQUNsQixpQ0FBaUM7WUFDakMsU0FBUztZQUNULDBCQUEwQjtZQUMxQiwyQkFBMkI7WUFDM0IsaUJBQWlCO1lBQ2pCLFVBQVU7WUFDVixVQUFVO1lBQ1Y7OztBQUNBO2dCQUNJLGtCQUFrQjtZQUN0QixrQkFBa0I7WUFDbEIsaUNBQWlDO1lBQ2pDLFNBQVM7WUFDVCwwQkFBMEI7WUFDMUIseUJBQXlCO1lBQ3pCLGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsU0FBUztZQUNUOzs7QUFDQTtnQkFDSSxzQkFBc0I7Z0JBQ3RCLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIscUJBQXFCO1lBQ3pCOzs7QUFDQTtnQkFDSSxpQkFBaUI7Z0JBQ2pCLFNBQVM7Z0JBQ1QsWUFBWTtnQkFDWixZQUFZO2dCQUNaLGNBQWM7Z0JBQ2Q7OztBQUNBO2dCQUNBLHVDQUF1QztnQkFDdkMsU0FBUztnQkFDVCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osaUJBQWlCO2dCQUNqQixRQUFRO2dCQUNSLE9BQU87Z0JBQ1AsMkJBQTJCO2dCQUMzQiw0QkFBNEI7Z0JBQzVCLDhCQUE4QjtnQkFDOUIsK0JBQStCO2dCQUMvQjs7O0FBQ0E7Z0JBQ0EsbUZBQW1GO2dCQUNuRixTQUFTO2dCQUNULFlBQVk7Z0JBQ1osMEJBQTBCO2dCQUMxQixpQkFBaUI7Z0JBQ2pCLFFBQVE7Z0JBQ1IsT0FBTztnQkFDUCwyQkFBMkI7Z0JBQzNCLDRCQUE0QjtnQkFDNUIsOEJBQThCO2dCQUM5QiwrQkFBK0I7Z0JBQy9CLFlBQVk7Z0JBQ1o7OztBQUNBO2dCQUNBLHNCQUFzQjtnQkFDdEIsU0FBUztnQkFDVCxVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLHVCQUF1QjtnQkFDdkIsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixxQkFBcUI7Z0JBQ3JCOzs7QUFDQTtnQkFDQSxzQkFBc0I7Z0JBQ3RCLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGlCQUFpQjtnQkFDakIsd0JBQXdCO2dCQUN4Qix3QkFBd0I7Z0JBQ3hCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQjs7O0FBQ0E7Z0JBQ0Esc0JBQXNCO2dCQUN0QixTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLHFCQUFxQjtnQkFDckI7OztBQUNBO2dCQUNBLHNCQUFzQjtnQkFDdEIsU0FBUztnQkFDVCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixxQkFBcUI7Z0JBQ3JCOzs7QUFDQTtnQkFDQSxTQUFTO2dCQUNULDBCQUEwQjtnQkFDMUIseUJBQXlCO2dCQUN6QixpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBQ1YsUUFBUTtnQkFDUjs7O0FBQ0E7b0JBQ0ksa0JBQWtCO2dCQUN0QixrQkFBa0I7Z0JBQ2xCLGlDQUFpQztnQkFDakMsU0FBUztnQkFDVCwwQkFBMEI7Z0JBQzFCLHlCQUF5QjtnQkFDekIsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLFFBQVE7Z0JBQ1I7OztBQUNBO29CQUNJLGtCQUFrQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixpQ0FBaUM7Z0JBQ2pDLFNBQVM7Z0JBQ1QsMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixVQUFVO2dCQUNWOzs7QUFDQTtnQkFDQSxrQkFBa0I7Z0JBQ2xCLGlDQUFpQztnQkFDakMsU0FBUztnQkFDVCwwQkFBMEI7Z0JBQzFCLHlCQUF5QjtnQkFDekIsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLFNBQVM7Z0JBQ1Q7OztBQUNBO29CQUNJLHNCQUFzQjtvQkFDdEIsU0FBUztvQkFDVCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQixVQUFVO29CQUNWLFNBQVM7b0JBQ1QsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixxQkFBcUI7Z0JBQ3pCOzs7QUFFQTtvQkFDSSxpQkFBaUI7b0JBQ2pCLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2Q7OztBQUNBO29CQUNBLHVDQUF1QztvQkFDdkMsU0FBUztvQkFDVCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixRQUFRO29CQUNSLE9BQU87b0JBQ1AsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsK0JBQStCO29CQUMvQjs7O0FBQ0E7b0JBQ0EsdUNBQXVDO29CQUN2QyxTQUFTO29CQUNULFlBQVk7b0JBQ1osMEJBQTBCO29CQUMxQixpQkFBaUI7b0JBQ2pCLFFBQVE7b0JBQ1IsT0FBTztvQkFDUCwyQkFBMkI7b0JBQzNCLDRCQUE0QjtvQkFDNUIsOEJBQThCO29CQUM5QiwrQkFBK0I7b0JBQy9COzs7QUFDQTtvQkFDQSxzQkFBc0I7b0JBQ3RCLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQjs7O0FBQ0E7b0JBQ0Esc0JBQXNCO29CQUN0QixTQUFTO29CQUNULFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckI7OztBQUNBO29CQUNBLHNCQUFzQjtvQkFDdEIsU0FBUztvQkFDVCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQix3QkFBd0I7b0JBQ3hCLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCOzs7QUFDQTtvQkFDQSxzQkFBc0I7b0JBQ3RCLFNBQVM7b0JBQ1QsV0FBVztvQkFDWCxXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsd0JBQXdCO29CQUN4Qix1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQjs7O0FBQ0E7b0JBQ0EsU0FBUztvQkFDVCwwQkFBMEI7b0JBQzFCLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixVQUFVO29CQUNWLFFBQVE7b0JBQ1I7OztBQUNBO3dCQUNJLGtCQUFrQjtvQkFDdEIsa0JBQWtCO29CQUNsQixpQ0FBaUM7b0JBQ2pDLFNBQVM7b0JBQ1QsMEJBQTBCO29CQUMxQix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsVUFBVTtvQkFDVixRQUFRO29CQUNSOzs7QUFDQTt3QkFDSSxrQkFBa0I7b0JBQ3RCLGtCQUFrQjtvQkFDbEIsaUNBQWlDO29CQUNqQyxTQUFTO29CQUNULDBCQUEwQjtvQkFDMUIsd0JBQXdCO29CQUN4QixpQkFBaUI7b0JBQ2pCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVjs7O0FBQ0E7b0JBQ0Esa0JBQWtCO29CQUNsQixpQ0FBaUM7b0JBQ2pDLFNBQVM7b0JBQ1QsMEJBQTBCO29CQUMxQix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsVUFBVTtvQkFDVixTQUFTO29CQUNUOzs7QUFDQTt3QkFDSSxzQkFBc0I7d0JBQ3RCLFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsVUFBVTt3QkFDVixTQUFTO3dCQUNULGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIscUJBQXFCO29CQUN6Qjs7O0FBQ0E7d0JBQ0ksa0JBQWtCO3dCQUNsQixrR0FBa0c7d0JBQ2xHLFNBQVM7d0JBQ1QsaUZBQWlGO3dCQUNqRixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsMkJBQTJCO3dCQUMzQiw0QkFBNEI7d0JBQzVCLDhCQUE4Qjt3QkFDOUIsK0JBQStCO3dCQUMvQixTQUFTO3dCQUNULFdBQVc7d0JBQ1g7OztBQUNKO3dCQUNJLGtCQUFrQjt3QkFDbEIsNEJBQTRCO3dCQUM1QiwwQkFBMEI7d0JBQzFCLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsVUFBVTt3QkFDVixTQUFTO3dCQUNUOzs7QUFHQTt3QkFDQSxrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixTQUFTO3dCQUNULFFBQVE7d0JBQ1IscUNBQXFDO3dCQUNyQyx5QkFBeUI7d0JBQ3pCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixTQUFTO3dCQUNULFdBQVc7d0JBQ1g7OztBQUVBOzRCQUNJLGtCQUFrQjs0QkFDbEIsWUFBWTs0QkFDWixXQUFXOzRCQUNYLFlBQVk7NEJBQ1osK0JBQStCOzRCQUMvQixpQkFBaUI7NEJBQ2pCLGtCQUFrQjs0QkFDbEIsbUJBQW1COzRCQUNuQixlQUFlOzRCQUNmLGlCQUFpQjs0QkFDakIseUJBQXlCOzRCQUN6QixjQUFjOzRCQUNkLHNCQUFzQjs0QkFDdEIsWUFBWTs0QkFDWixtQkFBbUI7d0JBQ3ZCOzs7QUFDQTs0QkFDSSxzQkFBc0I7NEJBQ3RCLHNCQUFzQjs0QkFDdEIsa0JBQWtCO3dCQUN0Qjs7O0FBQ0E7NEJBQ0kscUJBQXFCOzRCQUNyQixZQUFZOzt3QkFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYW1iaWFycGxhbi9jYW1iaWFycGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuI2UxNTZfNjUge1xyXG4gICAgYm94LXNoYWRvdzowcHggMnB4IDQ2cHggcmdiYSgwLCAwLCAwLCAwLjg3NDM5OTA2NTk3MTM3NDUpO1xyXG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIHdpZHRoOjM5MXB4O1xyXG4gICAgaGVpZ2h0OjMycHg7XHJcbiAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgZm9udC1zaXplOjMycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzo1O1xyXG4gICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgI2UxNTZfMyB7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICBoZWlnaHQ6MjA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlMTU2XzQge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB3aWR0aDoxMDM0cHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlaTE1Nl80XzQ0MTIxNiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB3aWR0aDoxMDM0cHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlaTE1Nl80XzQ0MTIxNyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDExOC4wMDAwMDA1NjYyNDQxMywgNjAuMDAwMDAwMjIzNTE3NDIsIDQwLjAwMDAwMTQxNTYxMDMxLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MTAzNHB4O1xyXG4gICAgICAgIGhlaWdodDo2MC41NjgxODM4OTg5MjU3OHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlaTE1Nl80XzQ0MTIxOCB7XHJcbiAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MTIzcHg7XHJcbiAgICAgICAgaGVpZ2h0OjM2cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDo0NTcuNDU2NDgxOTMzNTkzNzVweDtcclxuICAgICAgICB0b3A6OS4zMTgxODE5OTE1NzcxNDhweDtcclxuICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZWkxNTZfNF80NDEyMzYge1xyXG4gICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjEzMXB4O1xyXG4gICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICB0b3A6MTQ1LjU5NjU4ODEzNDc2NTYycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlaTE1Nl80XzQ0MTIzNyB7XHJcbiAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MjIycHg7XHJcbiAgICAgICAgaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDoyMDQuOTM2OTM1NDI0ODA0N3B4O1xyXG4gICAgICAgIHRvcDo4NS4wMjg0MDQyMzU4Mzk4NHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZWkxNTZfNF80NDEyMzgge1xyXG4gICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjIyN3B4O1xyXG4gICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICB0b3A6MTE2LjQ3NzI3MjAzMzY5MTRweDtcclxuICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UxNTZfNSB7XHJcbiAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MTY5cHg7XHJcbiAgICAgICAgaGVpZ2h0OjM2cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDo2OTlweDtcclxuICAgICAgICB0b3A6MTA4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlMTgyXzE4Nzcge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB3aWR0aDoxNC45NTgzMjgyNDcwNzAzMTJweDtcclxuICAgICAgICBoZWlnaHQ6NzEuMDg2Mzk1MjYzNjcxODhweDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjE1OXB4O1xyXG4gICAgICAgIHRvcDo5My4zMDA1MzcxMDkzNzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UxNTZfNiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjE0Ljk1ODMyODI0NzA3MDMxMnB4O1xyXG4gICAgICAgIGhlaWdodDoxNS4wMTgyMzQyNTI5Mjk2ODhweDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjE3NXB4O1xyXG4gICAgICAgIHRvcDo5NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZTE1Nl83IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjE0Ljk1ODMyODI0NzA3MDMxMnB4O1xyXG4gICAgICAgIGhlaWdodDoxNS4wMTgyNDk1MTE3MTg3NXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHRvcDoyOC4wMzM5MzU1NDY4NzVweDtcclxuICAgICAgICBsZWZ0OjE3NXB4O1xyXG4gICAgICAgIHRvcDogMTI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlMTU2Xzgge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB3aWR0aDoxNC45NTgzMjgyNDcwNzAzMTJweDtcclxuICAgICAgICBoZWlnaHQ6MTUuMDE4MjgwMDI5Mjk2ODc1cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDoxNzVweDtcclxuICAgICAgICB0b3A6MTUzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlMTU2Xzkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDM0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyMDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UyNzVfMSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDM0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyMDVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTI3NV8yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5Ni4wMDAwMDM1MTY2NzQwNCwgMTk2LjAwMDAwMzUxNjY3NDA0LCAxOTYuMDAwMDAzNTE2Njc0MDQsIDEpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjYwLjU2ODE4Mzg5ODkyNTc4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgdG9wOjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UyNzVfMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6ODhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjM2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjQ3NC40NTY0ODE5MzM1OTM3NXB4O1xyXG4gICAgICAgICAgICB0b3A6OS4zMTgxODE5OTE1NzcxNDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UyNzVfNyB7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6MTY4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoyMDQuOTM2OTM1NDI0ODA0N3B4O1xyXG4gICAgICAgICAgICB0b3A6MTQ1LjU5NjU4ODEzNDc2NTYycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTI3NV84IHtcclxuICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoyMjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjIwNC45MzY5MzU0MjQ4MDQ3cHg7XHJcbiAgICAgICAgICAgIHRvcDo4NS4wMjg0MDQyMzU4Mzk4NHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UyNzVfOSB7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6MjI3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoyMDQuOTM2OTM1NDI0ODA0N3B4O1xyXG4gICAgICAgICAgICB0b3A6MTE2LjQ3NzI3MjAzMzY5MTRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlMTgyXzE4Nzgge1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjE0Ljk1ODM0MzUwNTg1OTM3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NzEuMDg2MzAzNzEwOTM3NXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoxNjBweDtcclxuICAgICAgICAgICAgdG9wOjkycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UxNTZfMTEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoxNC45NTgzNDM1MDU4NTkzNzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE1LjAxODI4MDAyOTI5Njg3NXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoxNzVweDtcclxuICAgICAgICAgICAgdG9wOjk0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UxNTZfMTIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoxNC45NTgzNDM1MDU4NTkzNzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE1LjAxODIxODk5NDE0MDYyNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoxNzVweDtcclxuICAgICAgICAgICAgdG9wOiAxMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTE1Nl8xMyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjE0Ljk1ODM0MzUwNTg1OTM3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTUuMDE4MTg4NDc2NTYyNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoxNzVweDtcclxuICAgICAgICAgICAgdG9wOjE1M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlMTU2XzE5e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjE2OXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjM2cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6Njk5cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6MTA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTE1Nl8yMCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2UxNTZfMjIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAzNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNlMTU2XzIzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzQuMDAwMDAxMjUxNjk3NTQsIDE5My4wMDAwMDM2OTU0ODc5OCwgMi4wMDAwMDAxMTgyNzc5NjcsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAzNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjYwLjU2ODE4Mzg5ODkyNTc4cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2UxNTZfMjQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjY3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDo0ODUuNDU2NDgxOTMzNTkzNzVweDtcclxuICAgICAgICAgICAgICAgIHRvcDo5LjMxODE4MTk5MTU3NzE0OHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2UxNTZfMjgge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEyNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICAgICAgICAgIHRvcDoxNDUuNTk2NTg4MTM0NzY1NjJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjZTE1Nl8yOSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjIycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDoyMDQuOTM2OTM1NDI0ODA0N3B4O1xyXG4gICAgICAgICAgICAgICAgdG9wOjg1LjAyODQwNDIzNTgzOTg0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2UxNTZfMzAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjIyN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICAgICAgICAgIHRvcDoxMTYuNDc3MjcyMDMzNjkxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNlMTgyXzE4Nzkge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NzEuMDg2MzAzNzEwOTM3NXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjE2MHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOjkzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjZTE1Nl8zMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTUuMDE4MTg4NDc2NTYyNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjE3NXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOjk0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjZTE1Nl8zMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTUuMDE4MzEwNTQ2ODc1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MTc1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEyNXB4OyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNlMTU2XzMzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjE0Ljk1ODM0MzUwNTg1OTM3NXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjE1LjAxODE4ODQ3NjU2MjVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDoxNzVweDtcclxuICAgICAgICAgICAgICAgIHRvcDoxNTNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNlMTU2XzM5e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE2OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDozNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6Njk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjEwOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkOyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjZTE1N18yMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNlMTU3XzIyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2UxNTdfMjMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMjcsIDExOCwgMTIxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo2MC41NjgxODM4OTg5MjU3OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNlMTU3XzI0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo2N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDozNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6NDg1LjQ1NjQ4MTkzMzU5Mzc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjkuMzE4MTgxOTkxNTc3MTQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2UxNTdfMjgge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6MTQ1LjU5NjU4ODEzNDc2NTYycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNlMTU3XzI5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OjIwNC45MzY5MzU0MjQ4MDQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjg1LjAyODQwNDIzNTgzOTg0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNlMTU3XzMwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMjdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OjIwNC45MzY5MzU0MjQ4MDQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjExNi40NzcyNzIwMzM2OTE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNlMTgzXzE4Nzkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNC45NTgzNDM1MDU4NTkzNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NzEuMDg2MzAzNzEwOTM3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjkzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNlMTU3XzMxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE0Ljk1ODM0MzUwNTg1OTM3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNS4wMTgxODg0NzY1NjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDoxNzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6OTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2UxNTdfMzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjE1LjAxODMxMDU0Njg3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMjVweDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNlMTU3XzMzIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNC45NTgzNDM1MDU4NTkzNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTUuMDE4MTg4NDc2NTYyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjE1M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjZTE1N18zOXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNjlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjY5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6MTA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNib3RvbnZvbHZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDAuNzQwMDAwMDA5NTM2NzQzMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3RleHR2b2x2ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC41MDAxMzk1MzQ0NzM0MTkyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjYm90b25jb250aW51YXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC43NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN0ZXh0Y29udGludWFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOC4xNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogOC4xNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMjRweC8yICsgMC41cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9yZGVDZWxlc3Rle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIGFxdWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYTp2aXNpdGVkLCBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/cambiarplan/cambiarplan.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/cambiarplan/cambiarplan.component.ts ***!
  \******************************************************************/
/*! exports provided: CambiarplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiarplanComponent", function() { return CambiarplanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CambiarplanComponent = class CambiarplanComponent {
    constructor() { }
    ngOnInit() {
    }
    agregarBorde() {
        let div = document.getElementsByClassName('plan')[0];
        div.classList.remove("bordeCeleste");
        div.classList.add("bordeCeleste");
    }
};
CambiarplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cambiarplan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cambiarplan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cambiarplan/cambiarplan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cambiarplan.component.css */ "./src/app/componentes/cambiarplan/cambiarplan.component.css")).default]
    })
], CambiarplanComponent);



/***/ }),

/***/ "./src/app/componentes/categorias-peliculas/categorias-peliculas.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/categorias-peliculas/categorias-peliculas.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NhdGVnb3JpYXMtcGVsaWN1bGFzL2NhdGVnb3JpYXMtcGVsaWN1bGFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/categorias-peliculas/categorias-peliculas.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/categorias-peliculas/categorias-peliculas.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoriasPeliculasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPeliculasComponent", function() { return CategoriasPeliculasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriasPeliculasComponent = class CategoriasPeliculasComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoriasPeliculasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias-peliculas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categorias-peliculas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/categorias-peliculas/categorias-peliculas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categorias-peliculas.component.css */ "./src/app/componentes/categorias-peliculas/categorias-peliculas.component.css")).default]
    })
], CategoriasPeliculasComponent);



/***/ }),

/***/ "./src/app/componentes/datoscuenta/datoscuenta.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/datoscuenta/datoscuenta.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".h1{\r\n    position: absolute;\r\nleft: 0%;\r\nright: 39.32%;\r\ntop: 0%;\r\nbottom: 62.59%;\r\n\r\nfont-family: Lato;\r\nfont-style: normal;\r\nfont-weight: bold;\r\nfont-size: 32px;\r\nline-height: 38px;\r\ntext-align: center;\r\nletter-spacing: 5px;\r\n\r\ncolor: #FFFFFF;\r\n}\r\n.fondo{\r\n    position: absolute;\r\nwidth: 1440px;\r\nheight: 343px;\r\nleft: 10%;\r\ntop: 239px;\r\n\r\nbackground: rgba(255, 255, 255, 0.07);\r\nbox-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n.micuenta{\r\n\r\nposition: absolute;\r\nleft: 0%;\r\nright: 13.61%;\r\ntop: 50.34%;\r\nbottom: -63.27%;\r\n}\r\n.nombreusuario{\r\n        position: absolute;\r\n        color:rgba(255, 255, 255, 1);\r\n        opacity:1;\r\n        width:254px;\r\n        height:23px;\r\n        font-family:Lato;\r\n        text-align:center;\r\n        font-size:20px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        left: 450px;\r\n        top:-90px;\r\n        \r\n        }\r\n#e257_44 {\r\n            position:absolute;\r\n            opacity:1;\r\n            width:125px;\r\n            height:26px;\r\n            left: 700px;\r\n            top: -88px;\r\n            }\r\n#e257_18 {\r\n            background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n            opacity:1;\r\n            width:125px;\r\n            height:26px;\r\n            position:absolute;\r\n            left:0px;\r\n            top:0px;\r\n            border-top-left-radius:30px;\r\n            border-top-right-radius:30px;\r\n            border-bottom-left-radius:30px;\r\n            border-bottom-right-radius:30px;\r\n            }\r\n#e257_19 {\r\n            color:rgba(255, 255, 255, 1);\r\n            opacity:1;\r\n            width:125px;\r\n            height:17.58823013305664px;\r\n            position:absolute;\r\n            left:0px;\r\n            top:3.999974012374878px;\r\n            font-family:Lato;\r\n            text-align:center;\r\n            font-size:11px;\r\n            letter-spacing:1.155555009841919;\r\n            line-height:undefined;\r\n            }\r\n#e257_2 {\r\n                position: absolute;\r\n                color:rgba(255, 255, 255, 1);\r\n                opacity:1;\r\n                width:446px;\r\n                height:55px;\r\n                font-family:Lato;\r\n                text-align:center;\r\n                font-size:32px;\r\n                letter-spacing:5;\r\n                line-height:undefined;\r\n                left: 30%;\r\n                }\r\n#e257_12 {\r\n                    position: absolute;\r\n                    color:rgba(255, 255, 255, 1);\r\n                    opacity:1;\r\n                    width:69px;\r\n                    height:23px;\r\n                    font-family:Roboto;\r\n                    text-align:center;\r\n                    font-size:20px;\r\n                    letter-spacing:0;\r\n                    line-height:undefined;\r\n                    left: 482px;\r\n                    top:-40px;\r\n                    }\r\n#e257_27 {\r\n                        position: absolute;\r\n                        background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                        opacity:1;\r\n                        width:178.59378051757812px;\r\n                        height:26px;\r\n                        border-top-left-radius:30px;\r\n                        border-top-right-radius:30px;\r\n                        border-bottom-left-radius:30px;\r\n                        border-bottom-right-radius:30px;\r\n                        left: 700px;\r\n                        top: 133px;\r\n                        }\r\n#e257_28 {\r\n                        position: absolute;\r\n                        color:rgba(255, 255, 255, 1);\r\n                        opacity:1;\r\n                        width:178.59378051757812px;\r\n                        height:17.588228225708008px;\r\n                        font-family:Lato;\r\n                        text-align:center;\r\n                        font-size:11px;\r\n                        letter-spacing:1.155555009841919;\r\n                        line-height:undefined;\r\n                        left: 0px;\r\n                        top: 5px;\r\n                        }\r\n#e257_29 {\r\n                            position: absolute;\r\n                            color:rgba(255, 255, 255, 1);\r\n                            opacity:1;\r\n                            width:160px;\r\n                            height:23px;\r\n                            font-family:Roboto;\r\n                            text-align:center;\r\n                            font-size:20px;\r\n                            letter-spacing:0;\r\n                            line-height:undefined;\r\n                            left: 470px;\r\n                            top:180px;\r\n                            }\r\n#e257_21 {\r\n                                position: absolute;\r\n                                background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                                opacity:1;\r\n                                width:151.74630737304688px;\r\n                                height:26px;\r\n                                border-top-left-radius:30px;\r\n                                border-top-right-radius:30px;\r\n                                border-bottom-left-radius:30px;\r\n                                border-bottom-right-radius:30px;\r\n                                left: 700px;\r\n                                top: 180px;\r\n                                }\r\n#e257_22 {\r\n                                    position: absolute;\r\n                                    color:rgba(255, 255, 255, 1);\r\n                                    opacity:1;\r\n                                    width:151.74630737304688px;\r\n                                    height:17.588228225708008px;\r\n                                    font-family:Lato;\r\n                                    text-align:center;\r\n                                    font-size:11px;\r\n                                    letter-spacing:1.155555009841919;\r\n                                    line-height:undefined;\r\n                                    left: 0px;\r\n                                    top: 5px;\r\n                                    }\r\n#e257_24 {\r\n                                        position: absolute;\r\n                                        background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                                        opacity:1;\r\n                                        width:159px;\r\n                                        height:26px;\r\n                                        border-top-left-radius:30px;\r\n                                        border-top-right-radius:30px;\r\n                                        border-bottom-left-radius:30px;\r\n                                        border-bottom-right-radius:30px;\r\n                                        left: 870px;\r\n                                        top: 180px;\r\n                                        }\r\n#e257_25 {\r\n                                            position: absolute;\r\n                                            color:rgba(255, 255, 255, 1);\r\n                                            opacity:1;\r\n                                            width:159px;\r\n                                            height:17.58823013305664px;\r\n                                            font-family:Lato;\r\n                                            text-align:center;\r\n                                            font-size:11px;\r\n                                            letter-spacing:1.155555009841919;\r\n                                            line-height:undefined;\r\n                                            left: 0px;\r\n                                            top: 5px\r\n                                            }\r\n#e182_1593 {\r\n                                                position: absolute;\r\n                                                background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                                                opacity:1;\r\n                                                width:196.32766723632812px;\r\n                                                height:26px;\r\n                                                border-top-left-radius:30px;\r\n                                                border-top-right-radius:30px;\r\n                                                border-bottom-left-radius:30px;\r\n                                                border-bottom-right-radius:30px;\r\n                                                left: 700px;\r\n                                                top: 230px;\r\n                                                }\r\n#e182_1594 {\r\n                                                    position: absolute;\r\n                                                    color:rgba(255, 255, 255, 1);\r\n                                                    opacity:1;\r\n                                                    width:178px;\r\n                                                    height:13px;\r\n                                                    font-family:Lato;\r\n                                                    text-align:center;\r\n                                                    font-size:11px;\r\n                                                    letter-spacing:1.155555009841919;\r\n                                                    line-height:undefined;\r\n                                                    left: 0px;\r\n                                                    top: 5px;\r\n                                                    }\r\n.chico{\r\n                                                        position: absolute;\r\n                                                        width: 105.79px;\r\n                                                        height: 135px;\r\n                                                        left: 280px;\r\n                                                        top: 30px;\r\n                                                    }\r\n#e265_304 {\r\n                                                        position: absolute;\r\n                                                        background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                                                        opacity:1;\r\n                                                        width:179px;\r\n                                                        height:26px;\r\n                                                        border-top-left-radius:30px;\r\n                                                        border-top-right-radius:30px;\r\n                                                        border-bottom-left-radius:30px;\r\n                                                        border-bottom-right-radius:30px;\r\n                                                        top: 180px;\r\n                                                        left: 240px;\r\n                                                        }\r\n#e265_305 {\r\n                                                            position: absolute;\r\n                                                            color:rgba(255, 255, 255, 1);\r\n                                                            opacity:1;\r\n                                                            width:179px;\r\n                                                            height:10.301885604858398px;\r\n                                                            font-family:Lato;\r\n                                                            text-align:center;\r\n                                                            font-size:16px;\r\n                                                            letter-spacing:1.155555009841919;\r\n                                                            line-height:undefined;\r\n                                                            top: 2px;\r\n                                                            left: 2px;\r\n                                                            }\r\n.sobreblanco{\r\n                                                                position: absolute;\r\n                                                                width: 32px;\r\n                                                                height: 32px;\r\n                                                                left: 195px;\r\n                                                                top: -100px\r\n                                                            }\r\n.llave{\r\n                                                                position: absolute;\r\n                                                                width: 32px;\r\n                                                                height: 32px;\r\n                                                                left: 195px;\r\n                                                                top: -50px\r\n                                                            }\r\n.organizar{\r\n                                                                position: absolute;\r\n                                                                width: 32px;\r\n                                                                height: 32px;\r\n                                                                left: 195px;\r\n                                                                top: 0px\r\n                                                            }\r\na:visited, a{\r\n                                                                text-decoration: none;\r\n                                                                color: white;\r\n                                                                \r\n                                                            }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZGF0b3NjdWVudGEvZGF0b3NjdWVudGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QixRQUFRO0FBQ1IsYUFBYTtBQUNiLE9BQU87QUFDUCxjQUFjOztBQUVkLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjs7QUFFbkIsY0FBYztBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIsYUFBYTtBQUNiLGFBQWE7QUFDYixTQUFTO0FBQ1QsVUFBVTs7QUFFVixxQ0FBcUM7QUFDckMsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixhQUFhO0FBQ2IsV0FBVztBQUNYLGVBQWU7QUFDZjtBQUNBO1FBQ1Esa0JBQWtCO1FBQ2xCLDRCQUE0QjtRQUM1QixTQUFTO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxTQUFTOztRQUVUO0FBRUE7WUFDSSxpQkFBaUI7WUFDakIsU0FBUztZQUNULFdBQVc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLFVBQVU7WUFDVjtBQUNBO1lBQ0EsaUZBQWlGO1lBQ2pGLFNBQVM7WUFDVCxXQUFXO1lBQ1gsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixRQUFRO1lBQ1IsT0FBTztZQUNQLDJCQUEyQjtZQUMzQiw0QkFBNEI7WUFDNUIsOEJBQThCO1lBQzlCLCtCQUErQjtZQUMvQjtBQUNBO1lBQ0EsNEJBQTRCO1lBQzVCLFNBQVM7WUFDVCxXQUFXO1lBQ1gsMEJBQTBCO1lBQzFCLGlCQUFpQjtZQUNqQixRQUFRO1lBQ1IsdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFD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QUFlO3dEQUNmLGFBQWE7d0RBQ2IsV0FBVzt3REFDWCxTQUFTO29EQUNiO0FBQ0E7d0RBQ0ksa0JBQWtCO3dEQUNsQixpRkFBaUY7d0RBQ2pGLFNBQVM7d0RBQ1QsV0FBVzt3REFDWCxXQUFXO3dEQUNYLDJCQUEyQjt3REFDM0IsNEJBQTRCO3dEQUM1Qiw4QkFBOEI7d0RBQzlCLCtCQUErQjt3REFDL0IsVUFBVTt3REFDVixXQUFXO3dEQUNYO0FBQ0E7NERBQ0ksa0JBQWtCOzREQUNsQiw0QkFBNEI7NERBQzVCLFNBQVM7NERBQ1QsV0FBVzs0REFDWCwyQkFBMkI7NERBQzNCLGdCQUFnQjs0REFDaEIsaUJBQWlCOzREQUNqQixjQUFjOzREQUNkLGdDQUFnQzs0REFDaEMscUJBQXFCOzREQUNyQixRQUFROzREQUNSLFNBQVM7NERBQ1Q7QUFDQTtnRUFDSSxrQkFBa0I7Z0VBQ2xCLFdBQVc7Z0VBQ1gsWUFBWTtnRUFDWixXQUFXO2dFQUNYOzREQUNKO0FBQ0E7Z0VBQ0ksa0JBQWtCO2dFQUNsQixXQUFXO2dFQUNYLFlBQVk7Z0VBQ1osV0FBVztnRUFDWDs0REFDSjtBQUNBO2dFQUNJLGtCQUFrQjtnRUFDbEIsV0FBVztnRUFDWCxZQUFZO2dFQUNaLFdBQVc7Z0VBQ1g7NERBQ0o7QUFDQTtnRUFDSSxxQkFBcUI7Z0VBQ3JCLFlBQVk7OzREQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RhdG9zY3VlbnRhL2RhdG9zY3VlbnRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDAlO1xyXG5yaWdodDogMzkuMzIlO1xyXG50b3A6IDAlO1xyXG5ib3R0b206IDYyLjU5JTtcclxuXHJcbmZvbnQtZmFtaWx5OiBMYXRvO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDMycHg7XHJcbmxpbmUtaGVpZ2h0OiAzOHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmxldHRlci1zcGFjaW5nOiA1cHg7XHJcblxyXG5jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uZm9uZG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbndpZHRoOiAxNDQwcHg7XHJcbmhlaWdodDogMzQzcHg7XHJcbmxlZnQ6IDEwJTtcclxudG9wOiAyMzlweDtcclxuXHJcbmJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XHJcbmJveC1zaGFkb3c6IGluc2V0IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuLm1pY3VlbnRhe1xyXG5cclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiAwJTtcclxucmlnaHQ6IDEzLjYxJTtcclxudG9wOiA1MC4zNCU7XHJcbmJvdHRvbTogLTYzLjI3JTtcclxufVxyXG4ubm9tYnJldXN1YXJpb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MjU0cHg7XHJcbiAgICAgICAgaGVpZ2h0OjIzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICBsZWZ0OiA0NTBweDtcclxuICAgICAgICB0b3A6LTkwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZTI1N180NCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjEyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjZweDtcclxuICAgICAgICAgICAgbGVmdDogNzAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogLTg4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UyNTdfMTgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTUwLjk2MDAwMTk0NTQ5NTYsIDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6MTI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlMjU3XzE5IHtcclxuICAgICAgICAgICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoxMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE3LjU4ODIzMDEzMzA1NjY0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgdG9wOjMuOTk5OTc0MDEyMzc0ODc4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MS4xNTU1NTUwMDk4NDE5MTk7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTI1N18yIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo0NDZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo1NXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjMycHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzo1O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2UyNTdfMTIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo2OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OlJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0ODJweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6LTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjZTI1N18yNyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE3OC41OTM3ODA1MTc1NzgxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEzM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2UyNTdfMjgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTc4LjU5Mzc4MDUxNzU3ODEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNy41ODgyMjgyMjU3MDgwMDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzoxLjE1NTU1NTAwOTg0MTkxOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNlMjU3XzI5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6Um9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0NzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoxODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlMjU3XzIxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTEuNzQ2MzA3MzczMDQ2ODhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZTI1N18yMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTEuNzQ2MzA3MzczMDQ2ODhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjE3LjU4ODIyODIyNTcwODAwOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjEuMTU1NTU1MDA5ODQxOTE5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2UyNTdfMjQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTU5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogODcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2UyNTdfMjUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTcuNTg4MjMwMTMzMDU2NjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjEuMTU1NTU1MDA5ODQxOTE5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2UxODJfMTU5MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE5Ni4zMjc2NjcyMzYzMjgxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlMTgyXzE1OTQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE3OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjEuMTU1NTU1MDA5ODQxOTE5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGljb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNS43OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2UyNjVfMzA0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNzlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZTI2NV8zMDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTc5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMC4zMDE4ODU2MDQ4NTgzOThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzoxLjE1NTU1NTAwOTg0MTkxOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb2JyZWJsYW5jb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMDBweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sbGF2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01MHB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9yZ2FuaXphcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6dmlzaXRlZCwgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/datoscuenta/datoscuenta.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/datoscuenta/datoscuenta.component.ts ***!
  \******************************************************************/
/*! exports provided: DatoscuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoscuentaComponent", function() { return DatoscuentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatoscuentaComponent = class DatoscuentaComponent {
    constructor() { }
    ngOnInit() {
    }
};
DatoscuentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datoscuenta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datoscuenta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/datoscuenta/datoscuenta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datoscuenta.component.css */ "./src/app/componentes/datoscuenta/datoscuenta.component.css")).default]
    })
], DatoscuentaComponent);



/***/ }),

/***/ "./src/app/componentes/detalle-pelicula/detalle-pelicula.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/detalle-pelicula/detalle-pelicula.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Parallax and Content*/\r\n.parallax-left-content{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding-top: 80px;\r\n    z-index: 0;\r\n    top: 50px;\r\n    position: relative;\r\n}\r\n.hidden {\r\n    display: none!important;\r\n}\r\n.parallax-left-content .parallax-position {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n}\r\n.tituloPelicula{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n}\r\np {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n}\r\na {\r\n    margin-left: 10px;\r\n    white-space: nowrap;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n\r\n}\r\n.items{\r\n    margin-top: 2%; \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    letter-spacing: 5px;\r\n    /* display: inline-block; */\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n}\r\n.play{\r\n    position: relative;\r\n    height: 8%;\r\n    left: 50%;\r\n    top: 50%;\r\n}\r\n.play-trailer{\r\n    position: relative;\r\n    height: 24px;\r\n    margin-right: 8px;\r\n}\r\n.parallax-img-container img {\r\n    left: 50%;\r\n    position: relative;\r\n    width: 250px;\r\n    height: 350px;\r\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\r\n    border-radius: 4px;\r\n}\r\n.parallax-right-content {\r\n    width: 100%; margin-bottom: 20px; text-align: left;  padding-left: 40px;\r\n}\r\n.parallax-right-content h2 {  font-size: 3.5em; font-weight: 700;  }\r\n.parallax-btn-container {  margin-bottom: 20px  }\r\n.parallax-btn-container button {\r\n    background: rgba(0, 0, 0, 0.5); border: 2px solid white; margin-right: 10px\r\n}\r\n.parallax-btn-container button mat-icon {\r\n    color: white; font-size: medium;\r\n}\r\n.parallax-subtitle {\r\n    width: 100%; margin: 0 0 10px 0; font-weight: 600; line-height: 1.3em; font-size: 1.3em;\r\n}\r\n.mat-mini-fab .mat-icon, .mat-mini-fab i {\r\n    line-height: 20px;\r\n}\r\n.parrallax-content {\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    width: 80vw;\r\n    height: 300px;\r\n    left: 10%;\r\n    top: 87px;\r\n    \r\n}\r\n.mat-card-actions{\r\n    padding: 0 !important;\r\n}\r\n.mat-card-content {\r\n    margin-bottom: 0;\r\n}\r\n.card-content{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n}\r\n.card-content strong{  font-size: 1.2em;  }\r\n.card-content span{  font-size: 1em;  }\r\n.movie-content-card {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: 15px 5px;\r\n    text-align: left;\r\n    width: 90%;\r\n}\r\n.video-movie-main{\r\n    margin: auto;\r\n}\r\n.video-movie-main iframe{\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.top-billed-cast {\r\n    left: 35%;\r\n    top: 20%;\r\n    position: fixed;\r\n    background-color: black; \r\n}\r\n.top-billed-cast .title-billed {\r\n    text-align: left; margin-left: 45px;\r\n}\r\n.top-billed-cast img {\r\n    height: 24px;\r\n    width: 24px;\r\n    border-radius: 50%;\r\n    margin: 0 8px 0 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    \r\n}\r\n/* =============\r\nResponsive\r\n=============== */\r\n/* Large desktops and laptops */\r\n@media (min-width: 1201px) {\r\n    .parrallax-content{ height: 450px }\r\n    .cast-actor-card{  width: 13%;  }\r\n    .video-movie-main{  width: 50%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 22%; margin: 10px 10px 20px 10px; }\r\n    .recommended-poster::ng-deep .movie-card .mat-card-title{  font-size: 20px !important  }\r\n}\r\n/* Landscape tablets and medium desktops */\r\n@media (min-width: 992px) and (max-width: 1200px) {\r\n    .parrallax-content{ height: 520px }\r\n    .cast-actor-card{  width: 22%;  }\r\n    .video-movie-main{  width: 60%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 23%; margin: 10px 5px 20px 5px; }\r\n}\r\n/* Portrait tablets and small desktops */\r\n@media (min-width: 768px) and (max-width: 992px) {\r\n    .parrallax-content{ height: 530px }\r\n    .genders-cat button{  margin-bottom: 5px;  }\r\n    .cast-actor-card{  width: 23%;  }\r\n    .video-movie-main{  width: 70%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 37%; margin: 10px 5px 20px 5px; }\r\n}\r\n/* Landscape phones and portrait tablets */\r\n@media (max-width: 768px) {\r\n    .parrallax-content{ height: 520px }\r\n    .parallax-subtitle, p{ display: none}\r\n    .cast-actor-card{  width: 25%;  }\r\n    .genders-cat button{  margin-bottom: 5px;  }\r\n    .video-movie-main{  width: 80%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 31%; margin: 10px 5px 20px 5px; }\r\n    .recommended-poster::ng-deep .movie-card .mat-card-title{  font-size: 17px  }\r\n}\r\n/* Portrait phones and smaller */\r\n@media (max-width: 480px) {\r\n    .cast-actor-card{  width: 39%;  }\r\n    .genders-cat button{  margin-bottom: 5px;  }\r\n    .video-movie-main{  width: 90%;  }\r\n    .parallax-img-container img {width: 150px; height: 250px}\r\n    .parallax-subtitle, p{ display: none}\r\n    .similar-movies { display: none}\r\n    .recommended-poster::ng-deep .movie-card{  width: 88%; margin: 10px 5px 20px 5px; }\r\n}\r\n/* estrellas */\r\n#form {\r\n    left: 30px;\r\n    width: 300px;\r\n    margin: 0 auto;\r\n    height: 100px;\r\n  }\r\n#form p {\r\n    text-align: center;\r\n  }\r\n#form label {\r\n    font-size: 40px;\r\n  }\r\ninput[type=\"radio\"] {\r\n    display: none;\r\n  }\r\nlabel {\r\n    color: grey;\r\n  }\r\n.hidden {\r\n    display: none!important;\r\n}\r\n.clasificacion {\r\n    margin-left: 10px;\r\n    direction: rtl;\r\n    unicode-bidi: bidi-override;\r\n  }\r\n.clasificacion label {\r\n    font-size: xx-large;\r\n  }\r\nlabel:hover,\r\n  label:hover ~ label {\r\n    color: orange;\r\n  }\r\ninput[type=\"radio\"]:checked ~ label {\r\n    color: orange;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZGV0YWxsZS1wZWxpY3VsYS9kZXRhbGxlLXBlbGljdWxhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBQ3hCO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBQzNFO0FBRUEs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Q3JCO0FBQ0E7O0lBRUUsYUFBYTtFQUNmO0FBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9kZXRhbGxlLXBlbGljdWxhL2RldGFsbGUtcGVsaWN1bGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhcmFsbGF4IGFuZCBDb250ZW50Ki9cclxuLnBhcmFsbGF4LWxlZnQtY29udGVudHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhcmFsbGF4LWxlZnQtY29udGVudCAucGFyYWxsYXgtcG9zaXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi50aXR1bG9QZWxpY3VsYXtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG59XHJcbi5pdGVtc3tcclxuICAgIG1hcmdpbi10b3A6IDIlOyBcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXHJcbi5wbGF5e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcbi5wbGF5LXRyYWlsZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnBhcmFsbGF4LWltZy1jb250YWluZXIgaW1nIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnBhcmFsbGF4LXJpZ2h0LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDIwcHg7IHRleHQtYWxpZ246IGxlZnQ7ICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5wYXJhbGxheC1yaWdodC1jb250ZW50IGgyIHsgIGZvbnQtc2l6ZTogMy41ZW07IGZvbnQtd2VpZ2h0OiA3MDA7ICB9XHJcblxyXG4ucGFyYWxsYXgtYnRuLWNvbnRhaW5lciB7ICBtYXJnaW4tYm90dG9tOiAyMHB4ICB9XHJcblxyXG4ucGFyYWxsYXgtYnRuLWNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcbi5wYXJhbGxheC1idG4tY29udGFpbmVyIGJ1dHRvbiBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4ucGFyYWxsYXgtc3VidGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7IG1hcmdpbjogMCAwIDEwcHggMDsgZm9udC13ZWlnaHQ6IDYwMDsgbGluZS1oZWlnaHQ6IDEuM2VtOyBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4ubWF0LW1pbmktZmFiIC5tYXQtaWNvbiwgLm1hdC1taW5pLWZhYiBpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucGFycmFsbGF4LWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB0b3A6IDg3cHg7XHJcbiAgICBcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCBzdHJvbmd7ICBmb250LXNpemU6IDEuMmVtOyAgfVxyXG4uY2FyZC1jb250ZW50IHNwYW57ICBmb250LXNpemU6IDFlbTsgIH1cclxuXHJcbi5tb3ZpZS1jb250ZW50LWNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMTVweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnZpZGVvLW1vdmllLW1haW57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi52aWRlby1tb3ZpZS1tYWluIGlmcmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnRvcC1iaWxsZWQtY2FzdCB7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxufVxyXG4udG9wLWJpbGxlZC1jYXN0IC50aXRsZS1iaWxsZWQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbn1cclxuLnRvcC1iaWxsZWQtY2FzdCBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgOHB4IDAgMDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT1cclxuUmVzcG9uc2l2ZVxyXG49PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qIExhcmdlIGRlc2t0b3BzIGFuZCBsYXB0b3BzICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIC5wYXJyYWxsYXgtY29udGVudHsgaGVpZ2h0OiA0NTBweCB9XHJcbiAgICAuY2FzdC1hY3Rvci1jYXJkeyAgd2lkdGg6IDEzJTsgIH1cclxuICAgIC52aWRlby1tb3ZpZS1tYWlueyAgd2lkdGg6IDUwJTsgIH1cclxuICAgIC5yZWNvbW1lbmRlZC1wb3N0ZXI6Om5nLWRlZXAgLm1vdmllLWNhcmR7ICB3aWR0aDogMjIlOyBtYXJnaW46IDEwcHggMTBweCAyMHB4IDEwcHg7IH1cclxuICAgIC5yZWNvbW1lbmRlZC1wb3N0ZXI6Om5nLWRlZXAgLm1vdmllLWNhcmQgLm1hdC1jYXJkLXRpdGxleyAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQgIH1cclxufVxyXG5cclxuLyogTGFuZHNjYXBlIHRhYmxldHMgYW5kIG1lZGl1bSBkZXNrdG9wcyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5wYXJyYWxsYXgtY29udGVudHsgaGVpZ2h0OiA1MjBweCB9XHJcbiAgICAuY2FzdC1hY3Rvci1jYXJkeyAgd2lkdGg6IDIyJTsgIH1cclxuICAgIC52aWRlby1tb3ZpZS1tYWlueyAgd2lkdGg6IDYwJTsgIH1cclxuICAgIC5yZWNvbW1lbmRlZC1wb3N0ZXI6Om5nLWRlZXAgLm1vdmllLWNhcmR7ICB3aWR0aDogMjMlOyBtYXJnaW46IDEwcHggNXB4IDIwcHggNXB4OyB9XHJcbn1cclxuXHJcbi8qIFBvcnRyYWl0IHRhYmxldHMgYW5kIHNtYWxsIGRlc2t0b3BzICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucGFycmFsbGF4LWNvbnRlbnR7IGhlaWdodDogNTMwcHggfVxyXG4gICAgLmdlbmRlcnMtY2F0IGJ1dHRvbnsgIG1hcmdpbi1ib3R0b206IDVweDsgIH1cclxuICAgIC5jYXN0LWFjdG9yLWNhcmR7ICB3aWR0aDogMjMlOyAgfVxyXG4gICAgLnZpZGVvLW1vdmllLW1haW57ICB3aWR0aDogNzAlOyAgfVxyXG4gICAgLnJlY29tbWVuZGVkLXBvc3Rlcjo6bmctZGVlcCAubW92aWUtY2FyZHsgIHdpZHRoOiAzNyU7IG1hcmdpbjogMTBweCA1cHggMjBweCA1cHg7IH1cclxufVxyXG5cclxuLyogTGFuZHNjYXBlIHBob25lcyBhbmQgcG9ydHJhaXQgdGFibGV0cyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wYXJyYWxsYXgtY29udGVudHsgaGVpZ2h0OiA1MjBweCB9XHJcbiAgICAucGFyYWxsYXgtc3VidGl0bGUsIHB7IGRpc3BsYXk6IG5vbmV9XHJcbiAgICAuY2FzdC1hY3Rvci1jYXJkeyAgd2lkdGg6IDI1JTsgIH1cclxuICAgIC5nZW5kZXJzLWNhdCBidXR0b257ICBtYXJnaW4tYm90dG9tOiA1cHg7ICB9XHJcbiAgICAudmlkZW8tbW92aWUtbWFpbnsgIHdpZHRoOiA4MCU7ICB9XHJcbiAgICAucmVjb21tZW5kZWQtcG9zdGVyOjpuZy1kZWVwIC5tb3ZpZS1jYXJkeyAgd2lkdGg6IDMxJTsgbWFyZ2luOiAxMHB4IDVweCAyMHB4IDVweDsgfVxyXG4gICAgLnJlY29tbWVuZGVkLXBvc3Rlcjo6bmctZGVlcCAubW92aWUtY2FyZCAubWF0LWNhcmQtdGl0bGV7ICBmb250LXNpemU6IDE3cHggIH1cclxufVxyXG5cclxuLyogUG9ydHJhaXQgcGhvbmVzIGFuZCBzbWFsbGVyICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNhc3QtYWN0b3ItY2FyZHsgIHdpZHRoOiAzOSU7ICB9XHJcbiAgICAuZ2VuZGVycy1jYXQgYnV0dG9ueyAgbWFyZ2luLWJvdHRvbTogNXB4OyAgfVxyXG4gICAgLnZpZGVvLW1vdmllLW1haW57ICB3aWR0aDogOTAlOyAgfVxyXG4gICAgLnBhcmFsbGF4LWltZy1jb250YWluZXIgaW1nIHt3aWR0aDogMTUwcHg7IGhlaWdodDogMjUwcHh9XHJcbiAgICAucGFyYWxsYXgtc3VidGl0bGUsIHB7IGRpc3BsYXk6IG5vbmV9XHJcbiAgICAuc2ltaWxhci1tb3ZpZXMgeyBkaXNwbGF5OiBub25lfVxyXG4gICAgLnJlY29tbWVuZGVkLXBvc3Rlcjo6bmctZGVlcCAubW92aWUtY2FyZHsgIHdpZHRoOiA4OCU7IG1hcmdpbjogMTBweCA1cHggMjBweCA1cHg7IH1cclxufVxyXG5cclxuXHJcbi8qIGVzdHJlbGxhcyAqL1xyXG4jZm9ybSB7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAjZm9ybSBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm0gbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuICAuY2xhc2lmaWNhY2lvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgdW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlO1xyXG4gIH1cclxuICBcclxuICAuY2xhc2lmaWNhY2lvbiBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBsYWJlbDpob3ZlcixcclxuICBsYWJlbDpob3ZlciB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/detalle-pelicula/detalle-pelicula.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/detalle-pelicula/detalle-pelicula.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetallePeliculaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePeliculaComponent", function() { return DetallePeliculaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let DetallePeliculaComponent = class DetallePeliculaComponent {
    constructor(route, tmdb, _sanitizer, modalService) {
        this.route = route;
        this.tmdb = tmdb;
        this._sanitizer = _sanitizer;
        this.modalService = modalService;
        this.videoShow = true;
        this.calificacion = true;
        this.agregarLista = true;
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.getMovie(id);
            this.getMovieVideo(id);
            this.isAddList(id);
        });
    }
    openTrailer() {
        this.videoShow = !this.videoShow;
    }
    addMiLista(id) {
        var data = JSON.stringify({
            "items": [
                {
                    "media_type": "movie",
                    "media_id": id
                }
            ]
        });
        const movieAdd = this.tmdb.addMovieList(data).subscribe(movie => {
            console.log(movie);
            this.agregarLista = false;
        }, () => { }, () => { });
    }
    removeMiLista(id) {
        var data = JSON.stringify({
            "items": [
                {
                    "media_type": "movie",
                    "media_id": id
                }
            ]
        });
        const movieAdd = this.tmdb.removeMovieList(data).subscribe(movie => {
            console.log(movie);
            this.agregarLista = true;
        }, () => { }, () => { });
    }
    isAddList(id) {
        const movieSubs = this.tmdb.isItemList(id, 'movie').subscribe(movie => {
            console.log(movie);
            if (movie) {
                this.agregarLista = false;
            }
        }, () => { }, () => { });
    }
    getMovie(id) {
        const movieSubs = this.tmdb.getMovie(id).subscribe(movie => {
            this.movie = movie;
            console.log(movie);
        }, () => { }, () => { });
    }
    getMovieVideo(id) {
        const movieVideosSubs = this.tmdb.getMovieVideos(id).subscribe(res => {
            if (res.results && res.results.length) {
                this.video = res.results[0];
                this.video['url'] = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
            }
        }, () => { }, () => { if (movieVideosSubs) {
            movieVideosSubs.unsubscribe();
        } });
    }
    getVideoIframe(url) {
        return this.video['url'];
    }
    onChange(event, valor, id) {
        this.calificacion = false;
    }
};
DetallePeliculaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TmdbService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
DetallePeliculaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-pelicula',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-pelicula.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/detalle-pelicula/detalle-pelicula.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-pelicula.component.css */ "./src/app/componentes/detalle-pelicula/detalle-pelicula.component.css")).default]
    })
], DetallePeliculaComponent);



/***/ }),

/***/ "./src/app/componentes/detalle-serie/detalle-serie.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/detalle-serie/detalle-serie.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Parallax and Content*/\r\n.parallax-left-content{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding-top: 80px;\r\n    z-index: 0;\r\n    top: 50px;\r\n    position: relative;\r\n}\r\n.hidden {\r\n    display: none!important;\r\n}\r\n.parallax-left-content .parallax-position {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n}\r\n.tituloPelicula{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n}\r\np {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n}\r\na {\r\n    margin-left: 10px;\r\n    white-space: nowrap;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n\r\n}\r\n.items{\r\n    margin-top: 2%; \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    letter-spacing: 5px;\r\n    /* display: inline-block; */\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n}\r\n.play{\r\n    position: relative;\r\n    height: 8%;\r\n    left: 50%;\r\n    top: 50%;\r\n}\r\n.play-trailer{\r\n    position: relative;\r\n    height: 24px;\r\n    margin-right: 8px;\r\n}\r\n.parallax-img-container img {\r\n    left: 50%;\r\n    position: relative;\r\n    width: 250px;\r\n    height: 350px;\r\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\r\n    border-radius: 4px;\r\n}\r\n.parallax-right-content {\r\n    width: 100%; margin-bottom: 20px; text-align: left;  padding-left: 40px;\r\n}\r\n.parallax-right-content h2 {  font-size: 3.5em; font-weight: 700;  }\r\n.parallax-btn-container {  margin-bottom: 20px  }\r\n.parallax-btn-container button {\r\n    background: rgba(0, 0, 0, 0.5); border: 2px solid white; margin-right: 10px\r\n}\r\n.parallax-btn-container button mat-icon {\r\n    color: white; font-size: medium;\r\n}\r\n.parallax-subtitle {\r\n    width: 100%; margin: 0 0 10px 0; font-weight: 600; line-height: 1.3em; font-size: 1.3em;\r\n}\r\n.mat-mini-fab .mat-icon, .mat-mini-fab i {\r\n    line-height: 20px;\r\n}\r\n.parrallax-content {\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    width: 80vw;\r\n    height: 300px;\r\n    left: 10%;\r\n    top: 87px;\r\n    \r\n}\r\n.mat-card-actions{\r\n    padding: 0 !important;\r\n}\r\n.mat-card-content {\r\n    margin-bottom: 0;\r\n}\r\n.card-content{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n}\r\n.card-content strong{  font-size: 1.2em;  }\r\n.card-content span{  font-size: 1em;  }\r\n.movie-content-card {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: 15px 5px;\r\n    text-align: left;\r\n    width: 90%;\r\n}\r\n.video-movie-main{\r\n    margin: auto;\r\n}\r\n.video-movie-main iframe{\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.top-billed-cast {\r\n    left: 35%;\r\n    top: 20%;\r\n    position: fixed;\r\n    background-color: black; \r\n}\r\n.top-billed-cast .title-billed {\r\n    text-align: left; margin-left: 45px;\r\n}\r\n.top-billed-cast img {\r\n    height: 24px;\r\n    width: 24px;\r\n    border-radius: 50%;\r\n    margin: 0 8px 0 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    \r\n}\r\n/* =============\r\nResponsive\r\n=============== */\r\n/* Large desktops and laptops */\r\n@media (min-width: 1201px) {\r\n    .parrallax-content{ height: 450px }\r\n    .cast-actor-card{  width: 13%;  }\r\n    .video-movie-main{  width: 50%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 22%; margin: 10px 10px 20px 10px; }\r\n    .recommended-poster::ng-deep .movie-card .mat-card-title{  font-size: 20px !important  }\r\n}\r\n/* Landscape tablets and medium desktops */\r\n@media (min-width: 992px) and (max-width: 1200px) {\r\n    .parrallax-content{ height: 520px }\r\n    .cast-actor-card{  width: 22%;  }\r\n    .video-movie-main{  width: 60%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 23%; margin: 10px 5px 20px 5px; }\r\n}\r\n/* Portrait tablets and small desktops */\r\n@media (min-width: 768px) and (max-width: 992px) {\r\n    .parrallax-content{ height: 530px }\r\n    .genders-cat button{  margin-bottom: 5px;  }\r\n    .cast-actor-card{  width: 23%;  }\r\n    .video-movie-main{  width: 70%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 37%; margin: 10px 5px 20px 5px; }\r\n}\r\n/* Landscape phones and portrait tablets */\r\n@media (max-width: 768px) {\r\n    .parrallax-content{ height: 520px }\r\n    .parallax-subtitle, p{ display: none}\r\n    .cast-actor-card{  width: 25%;  }\r\n    .genders-cat button{  margin-bottom: 5px;  }\r\n    .video-movie-main{  width: 80%;  }\r\n    .recommended-poster::ng-deep .movie-card{  width: 31%; margin: 10px 5px 20px 5px; }\r\n    .recommended-poster::ng-deep .movie-card .mat-card-title{  font-size: 17px  }\r\n}\r\n/* Portrait phones and smaller */\r\n@media (max-width: 480px) {\r\n    .cast-actor-card{  width: 39%;  }\r\n    .genders-cat button{  margin-bottom: 5px;  }\r\n    .video-movie-main{  width: 90%;  }\r\n    .parallax-img-container img {width: 150px; height: 250px}\r\n    .parallax-subtitle, p{ display: none}\r\n    .similar-movies { display: none}\r\n    .recommended-poster::ng-deep .movie-card{  width: 88%; margin: 10px 5px 20px 5px; }\r\n}\r\n/* LISTA DE TEMPORADAS */\r\n.clearfix{\r\n    position: relative;\r\n    top: 58px;\r\n    left: 13%;\r\n    width: 55%;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZGV0YWxsZS1zZXJpZS9kZXRhbGxlLXNlcmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBQ3hCO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBQzNFO0FBRUEsOEJBQThCLGdCQUFnQixFQUFFLGdCQUFnQixHQUFHO0FBRW5FLDJCQUEyQixxQkFBcUI7QUFFaEQ7SUFDSSw4QkFBOEIsRUFBRSx1QkFBdUIsRUFBRTtBQUM3RDtBQUVBO0lBQ0ksWUFBWSxFQUFFLGlCQUFpQjtBQUNuQztBQUVBO0lBQ0ksV0FBVyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQjtBQUMzRjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsU0FBUzs7QUFFYjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUVBLHVCQUF1QixnQkFBZ0IsR0FBRztBQUMxQyxxQkFBcUIsY0FBYyxHQUFHO0FBRXRDO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCLEVBQUUsaUJBQWlCO0FBQ3ZDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQWlCO09BQWpCLGlCQUFpQjs7QUFFckI7QUFFQTs7aUJBRWlCO0FBRWpCLCtCQUErQjtBQUMvQjtJQUNJLG9CQUFvQixjQUFjO0lBQ2xDLG1CQUFtQixVQUFVLEdBQUc7SUFDaEMsb0JBQW9CLFVBQVUsR0FBRztJQUNqQywyQ0FBMkMsVUFBVSxFQUFFLDJCQUEyQixFQUFFO0lBQ3BGLDJEQUEyRCw0QkFBNEI7QUFDM0Y7QUFFQSwwQ0FBMEM7QUFDMUM7SUFDSSxvQkFBb0IsY0FBYztJQUNsQyxtQkFBbUIsVUFBVSxHQUFHO0lBQ2hDLG9CQUFvQixVQUFVLEdBQUc7SUFDakMsMkNBQTJDLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtBQUN0RjtBQUVBLHdDQUF3QztBQUN4QztJQUNJLG9CQUFvQixjQUFjO0lBQ2xDLHNCQUFzQixrQkFBa0IsR0FBRztJQUMzQyxtQkFBbUIsVUFBVSxHQUFHO0lBQ2hDLG9CQUFvQixVQUFVLEdBQUc7SUFDakMsMkNBQTJDLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtBQUN0RjtBQUVBLDBDQUEwQztBQUMxQztJQUNJLG9CQUFvQixjQUFjO0lBQ2xDLHVCQUF1QixhQUFhO0lBQ3BDLG1CQUFtQixVQUFVLEdBQUc7SUFDaEMsc0JBQXNCLGtCQUFrQixHQUFHO0lBQzNDLG9CQUFvQixVQUFVLEdBQUc7SUFDakMsMkNBQTJDLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtJQUNsRiwyREFBMkQsaUJBQWlCO0FBQ2hGO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksbUJBQW1CLFVBQVUsR0FBRztJQUNoQyxzQkFBc0Isa0JBQWtCLEdBQUc7SUFDM0Msb0JBQW9CLFVBQVUsR0FBRztJQUNqQyw2QkFBNkIsWUFBWSxFQUFFLGFBQWE7SUFDeEQsdUJBQXVCLGFBQWE7SUFDcEMsa0JBQWtCLGFBQWE7SUFDL0IsMkNBQTJDLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtBQUN0RjtBQUdBLHdCQUF3QjtBQUN4QjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RldGFsbGUtc2VyaWUvZGV0YWxsZS1zZXJpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFyYWxsYXggYW5kIENvbnRlbnQqL1xyXG4ucGFyYWxsYXgtbGVmdC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFyYWxsYXgtbGVmdC1jb250ZW50IC5wYXJhbGxheC1wb3NpdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLnRpdHVsb1BlbGljdWxhe1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5hIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbn1cclxuLml0ZW1ze1xyXG4gICAgbWFyZ2luLXRvcDogMiU7IFxyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcblxyXG5cclxuLnBsYXl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbn1cclxuLnBsYXktdHJhaWxlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ucGFyYWxsYXgtaW1nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ucGFyYWxsYXgtcmlnaHQtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTsgbWFyZ2luLWJvdHRvbTogMjBweDsgdGV4dC1hbGlnbjogbGVmdDsgIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLnBhcmFsbGF4LXJpZ2h0LWNvbnRlbnQgaDIgeyAgZm9udC1zaXplOiAzLjVlbTsgZm9udC13ZWlnaHQ6IDcwMDsgIH1cclxuXHJcbi5wYXJhbGxheC1idG4tY29udGFpbmVyIHsgIG1hcmdpbi1ib3R0b206IDIwcHggIH1cclxuXHJcbi5wYXJhbGxheC1idG4tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlOyBtYXJnaW4tcmlnaHQ6IDEwcHhcclxufVxyXG5cclxuLnBhcmFsbGF4LWJ0bi1jb250YWluZXIgYnV0dG9uIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5wYXJhbGxheC1zdWJ0aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTsgbWFyZ2luOiAwIDAgMTBweCAwOyBmb250LXdlaWdodDogNjAwOyBsaW5lLWhlaWdodDogMS4zZW07IGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuXHJcbi5tYXQtbWluaS1mYWIgLm1hdC1pY29uLCAubWF0LW1pbmktZmFiIGkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wYXJyYWxsYXgtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogODdweDtcclxuICAgIFxyXG59XHJcblxyXG4ubWF0LWNhcmQtYWN0aW9uc3tcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHN0cm9uZ3sgIGZvbnQtc2l6ZTogMS4yZW07ICB9XHJcbi5jYXJkLWNvbnRlbnQgc3BhbnsgIGZvbnQtc2l6ZTogMWVtOyAgfVxyXG5cclxuLm1vdmllLWNvbnRlbnQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luOiAxNXB4IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4udmlkZW8tbW92aWUtbWFpbntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnZpZGVvLW1vdmllLW1haW4gaWZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4udG9wLWJpbGxlZC1jYXN0IHtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG59XHJcbi50b3AtYmlsbGVkLWNhc3QgLnRpdGxlLWJpbGxlZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBtYXJnaW4tbGVmdDogNDVweDtcclxufVxyXG4udG9wLWJpbGxlZC1jYXN0IGltZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PVxyXG5SZXNwb25zaXZlXHJcbj09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogTGFyZ2UgZGVza3RvcHMgYW5kIGxhcHRvcHMgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xyXG4gICAgLnBhcnJhbGxheC1jb250ZW50eyBoZWlnaHQ6IDQ1MHB4IH1cclxuICAgIC5jYXN0LWFjdG9yLWNhcmR7ICB3aWR0aDogMTMlOyAgfVxyXG4gICAgLnZpZGVvLW1vdmllLW1haW57ICB3aWR0aDogNTAlOyAgfVxyXG4gICAgLnJlY29tbWVuZGVkLXBvc3Rlcjo6bmctZGVlcCAubW92aWUtY2FyZHsgIHdpZHRoOiAyMiU7IG1hcmdpbjogMTBweCAxMHB4IDIwcHggMTBweDsgfVxyXG4gICAgLnJlY29tbWVuZGVkLXBvc3Rlcjo6bmctZGVlcCAubW92aWUtY2FyZCAubWF0LWNhcmQtdGl0bGV7ICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudCAgfVxyXG59XHJcblxyXG4vKiBMYW5kc2NhcGUgdGFibGV0cyBhbmQgbWVkaXVtIGRlc2t0b3BzICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnBhcnJhbGxheC1jb250ZW50eyBoZWlnaHQ6IDUyMHB4IH1cclxuICAgIC5jYXN0LWFjdG9yLWNhcmR7ICB3aWR0aDogMjIlOyAgfVxyXG4gICAgLnZpZGVvLW1vdmllLW1haW57ICB3aWR0aDogNjAlOyAgfVxyXG4gICAgLnJlY29tbWVuZGVkLXBvc3Rlcjo6bmctZGVlcCAubW92aWUtY2FyZHsgIHdpZHRoOiAyMyU7IG1hcmdpbjogMTBweCA1cHggMjBweCA1cHg7IH1cclxufVxyXG5cclxuLyogUG9ydHJhaXQgdGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHMgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5wYXJyYWxsYXgtY29udGVudHsgaGVpZ2h0OiA1MzBweCB9XHJcbiAgICAuZ2VuZGVycy1jYXQgYnV0dG9ueyAgbWFyZ2luLWJvdHRvbTogNXB4OyAgfVxyXG4gICAgLmNhc3QtYWN0b3ItY2FyZHsgIHdpZHRoOiAyMyU7ICB9XHJcbiAgICAudmlkZW8tbW92aWUtbWFpbnsgIHdpZHRoOiA3MCU7ICB9XHJcbiAgICAucmVjb21tZW5kZWQtcG9zdGVyOjpuZy1kZWVwIC5tb3ZpZS1jYXJkeyAgd2lkdGg6IDM3JTsgbWFyZ2luOiAxMHB4IDVweCAyMHB4IDVweDsgfVxyXG59XHJcblxyXG4vKiBMYW5kc2NhcGUgcGhvbmVzIGFuZCBwb3J0cmFpdCB0YWJsZXRzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnBhcnJhbGxheC1jb250ZW50eyBoZWlnaHQ6IDUyMHB4IH1cclxuICAgIC5wYXJhbGxheC1zdWJ0aXRsZSwgcHsgZGlzcGxheTogbm9uZX1cclxuICAgIC5jYXN0LWFjdG9yLWNhcmR7ICB3aWR0aDogMjUlOyAgfVxyXG4gICAgLmdlbmRlcnMtY2F0IGJ1dHRvbnsgIG1hcmdpbi1ib3R0b206IDVweDsgIH1cclxuICAgIC52aWRlby1tb3ZpZS1tYWlueyAgd2lkdGg6IDgwJTsgIH1cclxuICAgIC5yZWNvbW1lbmRlZC1wb3N0ZXI6Om5nLWRlZXAgLm1vdmllLWNhcmR7ICB3aWR0aDogMzElOyBtYXJnaW46IDEwcHggNXB4IDIwcHggNXB4OyB9XHJcbiAgICAucmVjb21tZW5kZWQtcG9zdGVyOjpuZy1kZWVwIC5tb3ZpZS1jYXJkIC5tYXQtY2FyZC10aXRsZXsgIGZvbnQtc2l6ZTogMTdweCAgfVxyXG59XHJcblxyXG4vKiBQb3J0cmFpdCBwaG9uZXMgYW5kIHNtYWxsZXIgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY2FzdC1hY3Rvci1jYXJkeyAgd2lkdGg6IDM5JTsgIH1cclxuICAgIC5nZW5kZXJzLWNhdCBidXR0b257ICBtYXJnaW4tYm90dG9tOiA1cHg7ICB9XHJcbiAgICAudmlkZW8tbW92aWUtbWFpbnsgIHdpZHRoOiA5MCU7ICB9XHJcbiAgICAucGFyYWxsYXgtaW1nLWNvbnRhaW5lciBpbWcge3dpZHRoOiAxNTBweDsgaGVpZ2h0OiAyNTBweH1cclxuICAgIC5wYXJhbGxheC1zdWJ0aXRsZSwgcHsgZGlzcGxheTogbm9uZX1cclxuICAgIC5zaW1pbGFyLW1vdmllcyB7IGRpc3BsYXk6IG5vbmV9XHJcbiAgICAucmVjb21tZW5kZWQtcG9zdGVyOjpuZy1kZWVwIC5tb3ZpZS1jYXJkeyAgd2lkdGg6IDg4JTsgbWFyZ2luOiAxMHB4IDVweCAyMHB4IDVweDsgfVxyXG59XHJcblxyXG5cclxuLyogTElTVEEgREUgVEVNUE9SQURBUyAqL1xyXG4uY2xlYXJmaXh7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDU4cHg7XHJcbiAgICBsZWZ0OiAxMyU7XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/componentes/detalle-serie/detalle-serie.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/detalle-serie/detalle-serie.component.ts ***!
  \**********************************************************************/
/*! exports provided: DetalleSerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleSerieComponent", function() { return DetalleSerieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let DetalleSerieComponent = class DetalleSerieComponent {
    constructor(route, tmdb, _sanitizer, modalService) {
        this.route = route;
        this.tmdb = tmdb;
        this._sanitizer = _sanitizer;
        this.modalService = modalService;
        this.videoShow = true;
        this.agregarLista = true;
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.getMovie(id);
            this.getMovieVideo(id);
        });
        console.log(this.movie);
    }
    openTrailer() {
        this.videoShow = !this.videoShow;
    }
    addMiLista(id) {
        var data = JSON.stringify({
            "items": [
                {
                    "media_type": "movie",
                    "media_id": id
                }
            ]
        });
        const movieAdd = this.tmdb.addMovieList(data).subscribe(movie => {
            console.log(movie);
            this.agregarLista = false;
        }, () => { }, () => { });
    }
    removeMiLista(id) {
        var data = JSON.stringify({
            "items": [
                {
                    "media_type": "movie",
                    "media_id": id
                }
            ]
        });
        const movieAdd = this.tmdb.removeMovieList(data).subscribe(movie => {
            console.log(movie);
            this.agregarLista = true;
        }, () => { }, () => { });
    }
    isAddList(id) {
        const movieSubs = this.tmdb.isItemList(id, 'tv').subscribe(movie => {
            console.log(movie);
            if (movie) {
                this.agregarLista = false;
            }
        }, () => { }, () => { });
    }
    getMovie(id) {
        const movieSubs = this.tmdb.getTv(id).subscribe(movie => {
            this.movie = movie;
        }, () => { }, () => { });
    }
    getMovieVideo(id) {
        const movieVideosSubs = this.tmdb.getMovieVideosTv(id).subscribe(res => {
            if (res.results && res.results.length) {
                this.video = res.results[0];
                this.video['url'] = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
            }
        }, () => { }, () => { if (movieVideosSubs) {
            movieVideosSubs.unsubscribe();
        } });
    }
    getVideoIframe(url) {
        return this.video['url'];
    }
};
DetalleSerieComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TmdbService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
DetalleSerieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-serie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-serie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/detalle-serie/detalle-serie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-serie.component.css */ "./src/app/componentes/detalle-serie/detalle-serie.component.css")).default]
    })
], DetalleSerieComponent);



/***/ }),

/***/ "./src/app/componentes/error404/error404.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/error404/error404.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/error404/error404.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/error404/error404.component.ts ***!
  \************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() {
        window.location.href = 'https://mateo-zarrabeitia.github.io/unicen-interfaces/TP3/EntregaFinal/';
    }
};
Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error404/error404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error404.component.css */ "./src/app/componentes/error404/error404.component.css")).default]
    })
], Error404Component);



/***/ }),

/***/ "./src/app/componentes/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/home/home.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo{\r\n    position: absolute;\r\n    width: 98vw;;\r\n    height: 74vh;\r\n    left: 0px;\r\n    top: 15%;\r\n    background-size: contain;\r\n    background: url(\"/assets/images/fondo.jpg\");\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n}\r\n\r\n.iconosRedes{\r\n    height: 35px;\r\n    width: 35px;\r\n    margin-right: 20px; \r\n}\r\n\r\n.navegacion{\r\n    position: absolute;\r\n    width: 98vw;\r\n    height: 200px;\r\n    left: 0px;\r\n    top: 0px;\r\n}\r\n\r\n.botonLogin{\r\n    position: relative;\r\n    width: 160px;\r\n    height: 32px;\r\n    float: right;\r\n    margin-right: 8%;\r\n    top: 15%;\r\n    background: rgba(151, 151, 151, 0.44);\r\n    border-radius: 8px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    /* identical to box height */\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n    \r\n    mix-blend-mode: normal;\r\n    opacity: 0.5;\r\n}\r\n\r\n.letra{\r\n    position: relative;\r\n    width: 143px;\r\n    height: 18px;\r\n    float: right;\r\n    top: 18%;\r\n    margin-right: 15px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    text-transform: uppercase;\r\n    \r\n    color: #979797;\r\n    \r\n}\r\n\r\n.copyr {\r\n    position:absolute;\r\n    bottom:5px;\r\n    \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    /* identical to box height */\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n}\r\n\r\n.promociontext{\r\n    position: relative;\r\n    width: 865px;\r\n    left: 66px;\r\n    top: 54px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    font-size: 45px;\r\n    line-height: 54px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: #FFFFFF;\r\n    \r\n    /* border: 1px solid #000000; */\r\n}\r\n\r\n.promociontext2 {\r\n    position: relative;\r\n    width: 528px;\r\n    height: 89px;\r\n    left: 234px;\r\n    top: 80px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n    \r\n    border-radius: 10px;\r\n}\r\n\r\n.promocion{\r\n    position: absolute;\r\n    width: 989px;\r\n    height: 515px;\r\n    left: 25vw;\r\n    top: 200px;\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 19.79%, rgba(0, 0, 0, 0.334375) 52.65%, rgba(0, 0, 0, 0) 93.62%);\r\n    background-blend-mode: overlay;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 10px;\r\n}\r\n\r\n.botonSuscribir{\r\n    position: absolute;\r\n    height: 32px;\r\n    top: 60%;\r\n    left: 35%;\r\n    background: rgba(151, 151, 151, 0.44);\r\n    border-radius: 8px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    /* identical to box height */\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n    \r\n    mix-blend-mode: normal;\r\n    opacity: 0.5;\r\n}\r\n\r\n.redes{\r\n    left: 45%;\r\n    margin: auto;\r\n    position:absolute;\r\n    bottom:10px;\r\n}\r\n\r\n.contenedorLogo{\r\n    position: relative;\r\n    width: 119px;\r\n    height: 38px;\r\n    left: 15%;\r\n    top: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLHdCQUF3QjtJQUN4QiwyQ0FBMkM7SUFDM0MseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIseUJBQXlCOztJQUV6QixjQUFjOztJQUVkLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7O0lBRXpCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7O0lBRVYsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIseUJBQXlCOztJQUV6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjOztJQUVkLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCOztJQUV6QixjQUFjOztJQUVkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsdUhBQXVIO0lBQ3ZILDhCQUE4QjtJQUM5QiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIseUJBQXlCOztJQUV6QixjQUFjOztJQUVkLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk4dnc7O1xyXG4gICAgaGVpZ2h0OiA3NHZoO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9mb25kby5qcGdcIik7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcclxufVxyXG5cclxuLmljb25vc1JlZGVze1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IFxyXG59XHJcbi5uYXZlZ2FjaW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk4dnc7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uYm90b25Mb2dpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogOCU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC40NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIFxyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmxldHJhe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0M3B4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOiAxOCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb3B5ciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvdHRvbTo1cHg7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4ucHJvbW9jaW9udGV4dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4NjVweDtcclxuICAgIGxlZnQ6IDY2cHg7XHJcbiAgICB0b3A6IDU0cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIFxyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDsgKi9cclxufVxyXG4ucHJvbW9jaW9udGV4dDIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUyOHB4O1xyXG4gICAgaGVpZ2h0OiA4OXB4O1xyXG4gICAgbGVmdDogMjM0cHg7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvbW9jaW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk4OXB4O1xyXG4gICAgaGVpZ2h0OiA1MTVweDtcclxuICAgIGxlZnQ6IDI1dnc7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjYpIDE5Ljc5JSwgcmdiYSgwLCAwLCAwLCAwLjMzNDM3NSkgNTIuNjUlLCByZ2JhKDAsIDAsIDAsIDApIDkzLjYyJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJvdG9uU3VzY3JpYmlye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuNDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5yZWRlc3tcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcblxyXG4uY29udGVuZWRvckxvZ297XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTE5cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICB0b3A6IDMwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");



let HomeComponent = class HomeComponent {
    constructor(tmdb) {
        this.tmdb = tmdb;
        this.peliculas = [];
        this.tmdb.getDiscoverMovies().subscribe((data) => {
            console.log(data);
            this.peliculas = data;
        });
    }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/componentes/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".promocion {\r\n    position: absolute;\r\n    width: 98vw;\r\n    height: 500px;\r\n    left: 0px;\r\n    top: 87px;\r\n    /* background-size: cover; */\r\n    z-index: 100;\r\n    /* background: linear-gradient(208.41deg, rgba(0, 0, 0, 0.42) 7.78%, rgba(0, 0, 0, 0.24) 61.26%, rgba(0, 0, 0, 0.916139) 70.81%, rgba(0, 0, 0, 0.881342) 88.59%, #000000 99.46%); */\r\n}\r\n\r\n.promoImg{\r\n    position: absolute;\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    width: 80vw;\r\n    height: 500px;\r\n    left: 10%;\r\n    z-index: 0;\r\n    /* top: 87px; */\r\n}\r\n\r\n.text {\r\n    \r\n    width: 624px;\r\n    height: 326px;\r\n    left: 20%;\r\n    top: 25%;\r\n    position: absolute;\r\n}\r\n\r\n.app{\r\n    top: 54%;\r\n    left: 0%;\r\n    position: absolute; \r\n}\r\n\r\n.estreno {\r\n    position: absolute;\r\n    height: 22px;\r\n    left: -0.16%;\r\n    right: 59.5%;\r\n    top: calc(50% - 22px/2 - 27px);\r\n    \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-transform: uppercase;\r\n    /* identical to box height */\r\n    \r\n    color: #FFFFFF;\r\n    \r\n}\r\n\r\n.ancord{\r\n    position: relative;\r\n    display: block;\r\n    \r\n    height: 22px;\r\n    left: 2.5%;\r\n    right: 74.13%;\r\n    top: 60%;\r\n    margin-top: 15px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    /* font-weight: bold; */\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    /* identical to box height */\r\n    letter-spacing: 1.3px;\r\n    \r\n    color: #FFFFFF;\r\n}\r\n\r\n.play-trailer{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.tituloPromocion{\r\n    position: absolute;\r\n    height: 38px;\r\n    left: -0.16%;\r\n    right: 0.16%;\r\n    top: calc(50% - 38px/2 + 6px);\r\n    \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 10px;\r\n    text-transform: uppercase;\r\n    color: #FFFFFF;\r\n    \r\n    text-shadow: 0px 2px 46px rgba(0, 0, 0, 0.874399);\r\n}\r\n\r\n/* PELICULAS */\r\n\r\n.wrapper{\r\n    position: absolute;\r\n    top: 55%\r\n}\r\n\r\n.contenedor{\r\n    position: relative;\r\n    width: 80%;\r\n    height: 501px;\r\n    left: 10%;\r\n    top: 150px;\r\n}\r\n\r\n.titulo{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    display: inline-block;\r\n    border-bottom: 2px solid rgb(255, 255, 255);\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.phone-container {\r\n    width: 95vw;\r\n    margin: 0 auto;\r\n    height: 667px;\r\n}\r\n\r\n.phone-container .intro {\r\n    padding: 0 20px;\r\n}\r\n\r\n.phone-container .intro dd {\r\n    margin-left: 20px;\r\n}\r\n\r\n.phone-container .title {\r\n    text-align: center;\r\n    padding: 5px 5px;\r\n    margin: 15px 20px;\r\n}\r\n\r\n.phone-container .title h3 {\r\n    margin: 0;\r\n}\r\n\r\n.phone-container .card-outer-container {\r\n    width: 100%;\r\n    padding: 0;\r\n    height: 547px;\r\n    overflow: hidden;\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container {\r\n    width: auto;\r\n    height: 800px;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    -webkit-overflow-scrolling: auto;\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card {\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: 0 5px 5px 5px;\r\n    width: 325px;\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card img {\r\n    width: 100%;\r\n    height: 400px;\r\n    background-size: cover; \r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description {\r\n    height: 110px;\r\n    overflow: hidden;\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl {\r\n    padding: 0 5px;\r\n    margin: 0;\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl dt {\r\n    font-weight: bold;\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl dd {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    margin-left: 10px;\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .bot-tool {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n}\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .bot-tool .like {\r\n    text-align: right;\r\n    width: 100px;\r\n    float: right;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1MQUFtTDtBQUN2TDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4Qjs7SUFFOUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsNEJBQTRCOztJQUU1QixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjOztJQUVkLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIscUJBQXFCOztJQUVyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCOztJQUU3QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYzs7SUFFZCxpREFBaUQ7QUFDckQ7O0FBUUEsY0FBYzs7QUFFZDtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvbW9jaW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5OHZ3O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogODdweDtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjA4LjQxZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDcuNzglLCByZ2JhKDAsIDAsIDAsIDAuMjQpIDYxLjI2JSwgcmdiYSgwLCAwLCAwLCAwLjkxNjEzOSkgNzAuODElLCByZ2JhKDAsIDAsIDAsIDAuODgxMzQyKSA4OC41OSUsICMwMDAwMDAgOTkuNDYlKTsgKi9cclxufVxyXG5cclxuLnByb21vSW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgLyogdG9wOiA4N3B4OyAqL1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBcclxuICAgIHdpZHRoOiA2MjRweDtcclxuICAgIGhlaWdodDogMzI2cHg7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmFwcHtcclxuICAgIHRvcDogNTQlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59XHJcblxyXG4uZXN0cmVubyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBsZWZ0OiAtMC4xNiU7XHJcbiAgICByaWdodDogNTkuNSU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjJweC8yIC0gMjdweCk7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hbmNvcmR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGVmdDogMi41JTtcclxuICAgIHJpZ2h0OiA3NC4xMyU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLnBsYXktdHJhaWxlcntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udGl0dWxvUHJvbW9jaW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGVmdDogLTAuMTYlO1xyXG4gICAgcmlnaHQ6IDAuMTYlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDM4cHgvMiArIDZweCk7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0NnB4IHJnYmEoMCwgMCwgMCwgMC44NzQzOTkpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBQRUxJQ1VMQVMgKi9cclxuXHJcbi53cmFwcGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NSVcclxufVxyXG4uY29udGVuZWRvcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwMXB4O1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgdG9wOiAxNTBweDtcclxufVxyXG5cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnBob25lLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2NjdweDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5pbnRybyB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAuaW50cm8gZGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIG1hcmdpbjogMTVweCAyMHB4O1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLnRpdGxlIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDU0N3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMCA1cHggNXB4IDVweDtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAuY2FyZC1vdXRlci1jb250YWluZXIgLmNhcmQtaW5uZXItY29udGFpbmVyIC5jYXJkIC5kZXNjcmlwdGlvbiBkbCB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgLmRlc2NyaXB0aW9uIGRsIGR0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuZGVzY3JpcHRpb24gZGwgZGQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuYm90LXRvb2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgLmJvdC10b29sIC5saWtlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.ts ***!
  \********************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");



let InicioComponent = class InicioComponent {
    constructor(tmdb) {
        this.tmdb = tmdb;
        this.recomendadas = [];
        this.tmdb.getTendenciasSemana().subscribe((data) => {
            this.recomendadas.push({
                "genero": "tendencias de la semana",
                "lista": [data]
            });
        });
        this.tmdb.getPopulares().subscribe((data) => {
            this.recomendadas.push({
                "genero": "populares en netflics",
                "lista": [data]
            });
        });
        this.tmdb.getProxEstrenos().subscribe((data) => {
            this.recomendadas.push({
                "genero": "Proximos estrenos",
                "lista": [data]
            });
        });
        this.tmdb.getTendenciasDia().subscribe((data) => {
            this.recomendadas.push({
                "genero": "tendencias de hoy",
                "lista": [data]
            });
        });
        console.log(this.recomendadas);
    }
    ngOnInit() {
    }
};
InicioComponent.ctorParameters = () => [
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] }
];
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/inicio/inicio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.component.css */ "./src/app/componentes/inicio/inicio.component.css")).default]
    })
], InicioComponent);



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo{\r\n    position: absolute;\r\n    width: 98vw;;\r\n    height: 74vh;\r\n    left: 0px;\r\n    top: 15%;\r\n    background-size: contain;\r\n    background: url(\"/assets/images/fondo.jpg\");\r\n    -webkit-filter: blur(8px);\r\n            filter: blur(8px);\r\n    z-index: -100;\r\n    \r\n}\r\n\r\n.iconosRedes{\r\n    height: 35px;\r\n    width: 35px;\r\n    margin-right: 20px; \r\n    z-index: -100;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n    \r\n}\r\n\r\n.navegacion{\r\n    position: absolute;\r\n    width: 98vw;\r\n    height: 200px;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -100;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n    \r\n}\r\n\r\n.botonLogin{\r\n    position: relative;\r\n    width: 160px;\r\n    height: 32px;\r\n    float: right;\r\n    margin-right: 8%;\r\n    top: 15%;\r\n    background: rgba(151, 151, 151, 0.44);\r\n    border-radius: 8px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    /* identical to box height */\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n    \r\n    mix-blend-mode: normal;\r\n    opacity: 0.5;\r\n    z-index: -100;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n}\r\n\r\n.letra{\r\n    position: relative;\r\n    width: 143px;\r\n    height: 18px;\r\n    float: right;\r\n    top: 18%;\r\n    margin-right: 15px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    text-transform: uppercase;\r\n    \r\n    color: #979797;\r\n    z-index: -100;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n}\r\n\r\n.copyr {\r\n    position:absolute;\r\n    bottom:5px;\r\n    \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    /* identical to box height */\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n    z-index: -100;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n}\r\n\r\n.promociontext{\r\n    position: relative;\r\n    width: 300px;\r\n    height: 42px;\r\n    left: 80px;\r\n    top: 69px;\r\n    \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 36px;\r\n    line-height: 42px;\r\n    /* identical to box height, or 117% */\r\n    text-transform: uppercase;\r\n    color: #D8D8D8;\r\n    border-radius: 8px;\r\n}\r\n\r\n.promocion img {\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    left: 393px;\r\n    top: 20px;\r\n}\r\n\r\n.textform {\r\n    position: relative;\r\n    width: 71px;\r\n    height: 42px;\r\n    left: 68px;\r\n    /* top: 172px; */\r\n    \r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 22px;\r\n    line-height: 42px;\r\n    /* identical to box height, or 191% */\r\n    text-transform: uppercase;\r\n    \r\n    color: #D8D8D8;\r\n}\r\n\r\n.formulario{\r\n    position: relative;\r\n    top: 15%;\r\n}\r\n\r\ninput[type='text'],input[type='password'] { \r\n    font-size: 24px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    color: #D8D8D8;\r\n}\r\n\r\ninput[type='checkbox']{\r\n    position: absolute;\r\n    width: 24px;\r\n    height: 24px;\r\n    left: 100px;\r\n    top: 230px;\r\n}\r\n\r\n.textcheck {\r\n    position: relative;\r\n    width: 97px;\r\nheight: 42px;\r\nleft: 124px;\r\ntop: 18px;\r\nmargin-left: 8px;\r\n\r\nfont-family: Roboto;\r\nfont-style: normal;\r\nfont-weight: 300;\r\nfont-size: 18px;\r\nline-height: 42px;\r\n/* identical to box height, or 233% */\r\n\r\ncolor: #D8D8D8;\r\n}\r\n\r\n.form {\r\n    position: relative;\r\n    width: 292px;\r\n    height: 44px;\r\n    left: 74px;\r\n    \r\n    background: rgba(216, 216, 216, 0.25);\r\n    border-radius: 10px;\r\n}\r\n\r\n.promociontext2 {\r\n    position: relative;\r\n    width: 528px;\r\n    height: 89px;\r\n    left: 234px;\r\n    top: 80px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n    color: #FFFFFF;\r\n    \r\n    border-radius: 10px;\r\n    z-index: -100;\r\n    \r\n}\r\n\r\n.promocion{\r\n    position: absolute;\r\n    width: 441px;\r\n    height: 694px;\r\n    left: 38%;\r\n    margin: auto;\r\n    top: 18%;\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 19.79%, rgba(0, 0, 0, 0.334375) 52.65%, rgba(0, 0, 0, 0) 93.62%);\r\n    background-blend-mode: overlay;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 10px;\r\n    z-index: 100;\r\n    \r\n}\r\n\r\n.botonSuscribir{\r\n    position: absolute;\r\n    height: 32px;\r\n    top: 60%;\r\n    left: 35%;\r\n    background: rgba(151, 151, 151, 0.44);\r\n    border-radius: 8px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    /* identical to box height */\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n    mix-blend-mode: normal;\r\n    opacity: 0.5;\r\n    z-index: -100;\r\n    \r\n}\r\n\r\n.botonSesion{\r\n    position: relative;\r\n    height: 32px;\r\n    top: 40px;\r\n    left: 35%;\r\n    background: rgba(151, 151, 151, 0.44);\r\n    border-radius: 8px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    /* identical to box height */\r\n    text-transform: uppercase;\r\n    \r\n    color: #FFFFFF;\r\n    \r\n    mix-blend-mode: normal;\r\n    opacity: 0.5;\r\n    \r\n}\r\n\r\n.redes{\r\n    left: 45%;\r\n    margin: auto;\r\n    position:absolute;\r\n    bottom:10px;\r\n    z-index: -100;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n}\r\n\r\n.contenedorLogo{\r\n    position: relative;\r\n    width: 119px;\r\n    height: 38px;\r\n    left: 15%;\r\n    top: 30%;\r\n    z-index: -100;\r\n    -webkit-filter: blur(6px);\r\n            filter: blur(6px);\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLDJDQUEyQztJQUMzQyx5QkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUFpQjtZQUFqQixpQkFBaUI7OztBQUdyQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHlCQUFpQjtZQUFqQixpQkFBaUI7OztBQUdyQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIseUJBQXlCOztJQUV6QixjQUFjOztJQUVkLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUFpQjtZQUFqQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7O0lBRXpCLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQWlCO1lBQWpCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTs7SUFFVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1Qix5QkFBeUI7O0lBRXpCLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQWlCO1lBQWpCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUzs7SUFFVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCOztJQUVoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyx5QkFBeUI7O0lBRXpCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZixZQUFZO0FBQ1osV0FBVztBQUNYLFNBQVM7QUFDVCxnQkFBZ0I7O0FBRWhCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIscUNBQXFDOztBQUVyQyxjQUFjO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVOztJQUVWLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBaUI7WUFBakIsaUJBQWlCOztJQUVqQixjQUFjOztJQUVkLG1CQUFtQjtJQUNuQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osUUFBUTtJQUNSLHVIQUF1SDtJQUN2SCw4QkFBOEI7SUFDOUIsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHlCQUF5Qjs7SUFFekIsY0FBYztJQUNkLHlCQUFpQjtZQUFqQixpQkFBaUI7O0lBRWpCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1Qix5QkFBeUI7O0lBRXpCLGNBQWM7O0lBRWQsc0JBQXNCO0lBQ3RCLFlBQVk7O0FBRWhCOztBQUNBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBaUI7WUFBakIsaUJBQWlCOztBQUVyQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHlCQUFpQjtZQUFqQixpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5OHZ3OztcclxuICAgIGhlaWdodDogNzR2aDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZm9uZG8uanBnXCIpO1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi5pY29ub3NSZWRlc3tcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLm5hdmVnYWNpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTh2dztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uYm90b25Mb2dpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogOCU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC40NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIFxyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcclxuICAgIFxyXG59XHJcblxyXG4ubGV0cmF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTQzcHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0b3A6IDE4JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG4gICAgY29sb3I6ICM5Nzk3OTc7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgICBcclxufVxyXG5cclxuLmNvcHlyIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjVweDtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgICBcclxufVxyXG5cclxuLnByb21vY2lvbnRleHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdG9wOiA2OXB4O1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMTclICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNEOEQ4RDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5wcm9tb2Npb24gaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGVmdDogMzkzcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0Zm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNzFweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxlZnQ6IDY4cHg7XHJcbiAgICAvKiB0b3A6IDE3MnB4OyAqL1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxOTElICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0Q4RDhEODtcclxufVxyXG5cclxuLmZvcm11bGFyaW97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1JTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ndGV4dCddLGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10geyBcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRDhEOEQ4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdjaGVja2JveCdde1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHRvcDogMjMwcHg7XHJcbn1cclxuXHJcbi50ZXh0Y2hlY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDk3cHg7XHJcbmhlaWdodDogNDJweDtcclxubGVmdDogMTI0cHg7XHJcbnRvcDogMThweDtcclxubWFyZ2luLWxlZnQ6IDhweDtcclxuXHJcbmZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDMwMDtcclxuZm9udC1zaXplOiAxOHB4O1xyXG5saW5lLWhlaWdodDogNDJweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDIzMyUgKi9cclxuXHJcbmNvbG9yOiAjRDhEOEQ4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjkycHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBsZWZ0OiA3NHB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNiwgMjE2LCAyMTYsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnByb21vY2lvbnRleHQyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MjhweDtcclxuICAgIGhlaWdodDogODlweDtcclxuICAgIGxlZnQ6IDIzNHB4O1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIFxyXG59XHJcblxyXG4ucHJvbW9jaW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ0MXB4O1xyXG4gICAgaGVpZ2h0OiA2OTRweDtcclxuICAgIGxlZnQ6IDM4JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMTglO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjYpIDE5Ljc5JSwgcmdiYSgwLCAwLCAwLCAwLjMzNDM3NSkgNTIuNjUlLCByZ2JhKDAsIDAsIDAsIDApIDkzLjYyJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIFxyXG59XHJcblxyXG4uYm90b25TdXNjcmliaXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMC40NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xyXG4gICAgXHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIFxyXG59XHJcblxyXG4uYm90b25TZXNpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuNDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBcclxufVxyXG4ucmVkZXN7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvdHRvbToxMHB4O1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uY29udGVuZWRvckxvZ297XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTE5cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() {
        this.login = false;
    }
    ngOnInit() {
    }
    onChange(event) {
        if (this.email === "mateo@gmail.com" && this.pass === "1234") {
            this.login = false;
        }
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/componentes/mi-lista/mi-lista.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/mi-lista/mi-lista.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.titulo{\r\n    position: absolute;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    display: inline-block;\r\n    border-bottom: 2px solid rgb(255, 255, 255);\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n    top: 15%;\r\n    left: 10%;\r\n}\r\n\r\n.container {\r\n    left: 15%;\r\n    position: absolute;\r\n    top: 10%;   \r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 100px));\r\n    grid-template-rows: repeat(auto, 180px);\r\n    padding: 50px;\r\n}\r\n\r\n.card {\r\n    /* padding: 20px; */\r\n    position: relative;\r\n    /* border: 1px solid #CCCCCC; */\r\n    /* border-radius: 5px; */\r\n    background-color: #000000;\r\n    cursor: pointer;\r\n    transition: all 150ms ease;\r\n}\r\n\r\n.card:hover{\r\n    background: #000000;\r\n}\r\n\r\n.card img{\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%; \r\n    z-index: 100;\r\n}\r\n\r\n.card:focus,\r\n.card:hover {\r\n    /* box-shadow: 3px 3px 3px #BFBFBF; */\r\n}\r\n\r\n.avatar {\r\n    /* fill: #CCCCCC; */\r\n}\r\n\r\n.status {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 45px;\r\n    left: 45px;\r\n    width: 20px;\r\n    height: 20px;\r\n    /* border: 3px solid #FFFFFF; */\r\n    border-radius: 25px;\r\n}\r\n\r\n.online {\r\n    background-color: #00FF21;\r\n}\r\n\r\n.offline {\r\n    background-color: #FF0000;\r\n}\r\n\r\n.user-name {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n\r\n.user-role {\r\n    font-size: 18px;\r\n    /* color: #4C4C4C; */\r\n}\r\n\r\n*, *:before, *:after{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.main-title{\r\n  color: #2d2d2d;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  padding: 0.7em 0;\r\n}\r\n\r\n.container{\r\n  padding: 1em 0;\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n/* @media screen and (max-width: 640px){\r\n  .container{\r\n    display: block;\r\n    width: 100vw;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px){\r\n  .container{\r\n    width: 33.33333vw;\r\n  }\r\n} */\r\n\r\n.container .title{\r\n  color: #1a1a1a;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.content {\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.content .content-overlay {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content:hover .content-overlay{\r\n  opacity: 1;\r\n}\r\n\r\n.content-image{\r\n  width: 100%;\r\n}\r\n\r\n.content-details {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content:hover .content-details{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content-details h3{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content-details p{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.fadeIn-bottom{\r\n  top: 80%;\r\n}\r\n\r\n.fadeIn-top{\r\n  top: 20%;\r\n}\r\n\r\n.fadeIn-left{\r\n  left: 20%;\r\n}\r\n\r\n.fadeIn-right{\r\n  left: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWktbGlzdGEvbWktbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDJDQUEyQztJQUMzQyxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsY0FBYztJQUNkLDZEQUE2RDtJQUM3RCx1Q0FBdUM7SUFDdkMsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkscUNBQXFDO0FBQ3pDOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQVNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFHVixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFDQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUdWLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBR1YsZ0NBQWdDO0VBR2hDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9taS1saXN0YS9taS1saXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXR1bG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbGVmdDogMTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlOyAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMTAwcHgpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDE4MHB4KTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7ICovXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuLmNhcmQgaW1ne1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNhcmQ6Zm9jdXMsXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIC8qIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICNCRkJGQkY7ICovXHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICAvKiBmaWxsOiAjQ0NDQ0NDOyAqL1xyXG59XHJcbi5zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI0ZGRkZGRjsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLm9ubGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjIxO1xyXG59XHJcbi5vZmZsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuLnVzZXItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi51c2VyLXJvbGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogY29sb3I6ICM0QzRDNEM7ICovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkpO1xyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXJ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4ubWFpbi10aXRsZXtcclxuICBjb2xvcjogIzJkMmQyZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcGFkZGluZzogMC43ZW0gMDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAzMy4zMzMzM3Z3O1xyXG4gIH1cclxufSAqL1xyXG5cclxuLmNvbnRhaW5lciAudGl0bGV7XHJcbiAgY29sb3I6ICMxYTFhMWE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudCAuY29udGVudC1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LWRldGFpbHN7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgaDN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgcHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uZmFkZUluLWJvdHRvbXtcclxuICB0b3A6IDgwJTtcclxufVxyXG5cclxuLmZhZGVJbi10b3B7XHJcbiAgdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5mYWRlSW4tbGVmdHtcclxuICBsZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5mYWRlSW4tcmlnaHR7XHJcbiAgbGVmdDogODAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/mi-lista/mi-lista.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/mi-lista/mi-lista.component.ts ***!
  \************************************************************/
/*! exports provided: MiListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiListaComponent", function() { return MiListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");



let MiListaComponent = class MiListaComponent {
    constructor(tmdb) {
        this.tmdb = tmdb;
        this.milista = [];
        this.tmdb.getList().subscribe((data) => {
            this.milista.push(data);
            console.log(this.milista);
        });
    }
    ngOnInit() {
    }
};
MiListaComponent.ctorParameters = () => [
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] }
];
MiListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mi-lista',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mi-lista.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mi-lista/mi-lista.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mi-lista.component.css */ "./src/app/componentes/mi-lista/mi-lista.component.css")).default]
    })
], MiListaComponent);



/***/ }),

/***/ "./src/app/componentes/navbar/navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/navbar/navbar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.contenedor{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 87px;\r\n    left: 0px;\r\n    top: 0px;\r\n}\r\n\r\n.contenedorLogo{\r\n    position: absolute;\r\n    width: 119px;\r\n    height: 38px;\r\n    left: 15%;\r\n    top: 30%;\r\n}\r\n\r\n.imgCategoria{\r\n    margin-left: 5px;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.hidden {\r\n    display: none!important;\r\n}\r\n\r\n.categorias{\r\n    position: relative;\r\n    top: 100px;\r\n    left: 15%;\r\n    height: 45px;\r\n    width: 78vw;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    /* overflow: hidden; */\r\n    -webkit-overflow-scrolling: auto;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.buttonGenero{\r\n    /* margin-top: 5%; */\r\n    width: auto;\r\n    height: 39px;\r\n    left: 0px;\r\n    top: 0px;\r\n    background: rgba(216, 216, 216, 0.17);\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    /* font-size: 18px; */\r\n    margin-block: 5px;\r\n    line-height: 22px;\r\n    text-transform: uppercase;\r\n    color: #FFFFFF;    \r\n    mix-blend-mode: normal;\r\n    opacity: 0.8;\r\n    border-radius: 30px;\r\n}\r\n\r\n.show {\r\n    display: initial!important;\r\n}\r\n\r\n.botones{\r\n    margin-left: 5%;\r\n    position: absolute;\r\n    width: 383px;\r\n    height: 23px;\r\n    left: 386px;\r\n    top: 40%;\r\n    \r\n}\r\n\r\n.botones a{\r\n    white-space: nowrap;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 22px;   \r\n    color: #969696;\r\n}\r\n\r\n.navbar-light .btncat.active  .nav-link{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    font-size: 18px;\r\n    line-height: 22px;    \r\n}\r\n\r\n.navbar-light .btnnav.active  .nav-link{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    font-size: 18px;\r\n    line-height: 22px;    \r\n    color: #FFFFFF;\r\n    border-bottom: 2px solid rgb(255, 255, 255);\r\n}\r\n\r\n.navbar-light .nav-item:hover .nav-link{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    font-size: 18px;\r\n    line-height: 22px;    \r\n    color: #FFFFFF;\r\n}\r\n\r\n.menu{\r\n    display: flex;\r\n}\r\n\r\n.iconosNavMenu{\r\n    margin-top: 15px;\r\n    margin-right: 10%;\r\n}\r\n\r\n.iconosNav{\r\n    height: 35px;\r\n    width: 35px;\r\n    margin-right: 20px; \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBSUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7O0FBRVo7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLDJDQUEyQztBQUMvQzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbmVkb3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODdweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvckxvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTE5cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICB0b3A6IDMwJTtcclxufVxyXG5cclxuLmltZ0NhdGVnb3JpYXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhdGVnb3JpYXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDc4dnc7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbkdlbmVyb3tcclxuICAgIC8qIG1hcmdpbi10b3A6IDUlOyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE2LCAyMTYsIDIxNiwgMC4xNyk7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAvKiBmb250LXNpemU6IDE4cHg7ICovXHJcbiAgICBtYXJnaW4tYmxvY2s6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjRkZGRkZGOyAgICBcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5zaG93IHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWwhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm90b25lc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzODNweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIGxlZnQ6IDM4NnB4O1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBcclxufVxyXG5cclxuLmJvdG9uZXMgYXtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDsgICBcclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5idG5jYXQuYWN0aXZlICAubmF2LWxpbmt7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDsgICAgXHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLmJ0bm5hdi5hY3RpdmUgIC5uYXYtbGlua3tcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGlua3tcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyAgICBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5cclxuLm1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaWNvbm9zTmF2TWVudXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmljb25vc05hdntcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(tmdb, router) {
        this.tmdb = tmdb;
        this.router = router;
        this.IsHidden = true;
        this.isCategorias = true;
        this.bottonCategorias = true;
        this.generos = [];
        this.tmdb.getGenres().subscribe((data) => {
            this.generos = data.genres;
            console.log(this.generos);
        });
    }
    ngOnInit() {
    }
    onActive(valor) {
        if (this.router.isActive(valor, true)) {
            this.isCategorias = true;
            return false;
        }
        else {
            this.isCategorias = true;
            return true;
        }
    }
    onActivePe(valor) {
        if (this.router.isActive(valor, true)) {
            return false;
        }
        else {
            return true;
        }
    }
    onActiveNav() {
        if (this.router.isActive("/home", true) || this.router.isActive("/login", true)) {
            return true;
        }
        else {
            return false;
        }
    }
    onSelect() {
        this.IsHidden = !this.IsHidden;
        console.log(this.IsHidden);
    }
    buttonCategoria() {
        this.isCategorias = !this.isCategorias;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/componentes/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/componentes/peliculas/peliculas.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/peliculas/peliculas.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor{\r\n    position: relative;\r\n    width: 80%;\r\n    height: 501px;\r\n    left: 10%;\r\n    top: 80px;\r\n}\r\n\r\n\r\n.titulo{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    display: inline-block;\r\n    border-bottom: 2px solid rgb(255, 255, 255);\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.phone-container {\r\n    width: 95vw;\r\n    margin: 0 auto;\r\n    height: 667px;\r\n}\r\n\r\n\r\n.phone-container .intro {\r\n    padding: 0 20px;\r\n}\r\n\r\n\r\n.phone-container .intro dd {\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n.phone-container .title {\r\n    text-align: center;\r\n    padding: 5px 5px;\r\n    margin: 15px 20px;\r\n}\r\n\r\n\r\n.phone-container .title h3 {\r\n    margin: 0;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container {\r\n    width: 100%;\r\n    padding: 0;\r\n    height: 547px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container {\r\n    width: auto;\r\n    height: 800px;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    -webkit-overflow-scrolling: auto;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card {\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: 0 5px 5px 5px;\r\n    width: 325px;\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card img {\r\n    width: 100%;\r\n    height: 400px;\r\n    background-size: cover; \r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description {\r\n    height: 110px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl {\r\n    padding: 0 5px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl dt {\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl dd {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .bot-tool {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .bot-tool .like {\r\n    text-align: right;\r\n    width: 100px;\r\n    float: right;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGVsaWN1bGFzL3BlbGljdWxhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztJQUNULFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOzs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7OztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7OztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsU0FBUztBQUNiOzs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcGVsaWN1bGFzL3BlbGljdWxhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA1MDFweDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogODBweDtcclxufVxyXG5cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnBob25lLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2NjdweDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5pbnRybyB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAuaW50cm8gZGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIG1hcmdpbjogMTVweCAyMHB4O1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLnRpdGxlIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDU0N3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMCA1cHggNXB4IDVweDtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAuY2FyZC1vdXRlci1jb250YWluZXIgLmNhcmQtaW5uZXItY29udGFpbmVyIC5jYXJkIC5kZXNjcmlwdGlvbiBkbCB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgLmRlc2NyaXB0aW9uIGRsIGR0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuZGVzY3JpcHRpb24gZGwgZGQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuYm90LXRvb2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgLmJvdC10b29sIC5saWtlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/peliculas/peliculas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/peliculas/peliculas.component.ts ***!
  \**************************************************************/
/*! exports provided: PeliculasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasComponent", function() { return PeliculasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");



let PeliculasComponent = class PeliculasComponent {
    constructor(tmdb) {
        this.tmdb = tmdb;
        this.peliculas = [];
        this.tmdb.getMoviesByGenre('28').subscribe((data) => {
            this.peliculas.push({
                "genero": "accion",
                "lista": [data]
            });
        });
        this.tmdb.getMoviesByGenre('12').subscribe((data) => {
            this.peliculas.push({
                "genero": "aventura",
                "lista": [data]
            });
        });
        this.tmdb.getMoviesByGenre('16').subscribe((data) => {
            this.peliculas.push({
                "genero": "animacion",
                "lista": [data]
            });
            this.tmdb.getMoviesByGenre('35').subscribe((data) => {
                this.peliculas.push({
                    "genero": "comedia",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('80').subscribe((data) => {
                this.peliculas.push({
                    "genero": "crimen",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('99').subscribe((data) => {
                this.peliculas.push({
                    "genero": "documental",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('18').subscribe((data) => {
                this.peliculas.push({
                    "genero": "drama",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('10751').subscribe((data) => {
                this.peliculas.push({
                    "genero": "familia",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('36').subscribe((data) => {
                this.peliculas.push({
                    "genero": "historia",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('36').subscribe((data) => {
                this.peliculas.push({
                    "genero": "terror",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('10402').subscribe((data) => {
                this.peliculas.push({
                    "genero": "musica",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('9648').subscribe((data) => {
                this.peliculas.push({
                    "genero": "misterio",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('10749').subscribe((data) => {
                this.peliculas.push({
                    "genero": "romance",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('878').subscribe((data) => {
                this.peliculas.push({
                    "genero": "ciencia ficcion",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('10770').subscribe((data) => {
                this.peliculas.push({
                    "genero": "peliculas de tv",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('53').subscribe((data) => {
                this.peliculas.push({
                    "genero": "suspenso",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('10752').subscribe((data) => {
                this.peliculas.push({
                    "genero": "belica",
                    "lista": [data]
                });
            });
            this.tmdb.getMoviesByGenre('37').subscribe((data) => {
                this.peliculas.push({
                    "genero": "western",
                    "lista": [data]
                });
            });
        });
        console.log(this.peliculas);
    }
    ngOnInit() {
    }
};
PeliculasComponent.ctorParameters = () => [
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] }
];
PeliculasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-peliculas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./peliculas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/peliculas/peliculas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./peliculas.component.css */ "./src/app/componentes/peliculas/peliculas.component.css")).default]
    })
], PeliculasComponent);



/***/ }),

/***/ "./src/app/componentes/planseleccionado/planseleccionado.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/planseleccionado/planseleccionado.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor{\r\n    position: relative;\r\n    top:    0px;\r\n    left: 20%;\r\n}\r\n\r\n\r\n.cambioplan{\r\n    position: relative;\r\n    height: 38px;\r\n    left: 10.07%;\r\n    right: 62.78%;\r\n    top: 100px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    color: #FFFFFF;\r\n    }\r\n\r\n\r\nh5{\r\n     position: relative;\r\n    width: 838px;\r\n    height: 45px;\r\n    left: 280px;\r\n    top: 170px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 28px;\r\n    line-height: 34px;\r\n    color: rgba(255, 253, 253, 0.83);\r\n    }\r\n\r\n\r\n#e156_9 {\r\n        position:relative;\r\n        opacity:1;\r\n        width:1034px;\r\n        height:205px;\r\n        padding: 110px;\r\n        top: 200px;\r\n        left: 120px;\r\n        }\r\n\r\n\r\n#e275_1 {\r\n        background-color:rgba(255, 255, 255, 1);\r\n        opacity:1;\r\n        width:1034px;\r\n        height:205px;\r\n        position:absolute;\r\n        left:0px;\r\n        top:0px;\r\n        border-top-left-radius:10px;\r\n        border-top-right-radius:10px;\r\n        border-bottom-left-radius:10px;\r\n        border-bottom-right-radius:10px;\r\n        }\r\n\r\n\r\n#e275_2 {\r\n        background-color:rgba(196.00000351667404, 196.00000351667404, 196.00000351667404, 1);\r\n        opacity:1;\r\n        width:1034px;\r\n        height:60.56818389892578px;\r\n        position:absolute;\r\n        left:0px;\r\n        top:0px;\r\n        border-top-left-radius:10px;\r\n        border-top-right-radius:10px;\r\n        border-bottom-left-radius:10px;\r\n        border-bottom-right-radius:10px;\r\n        }\r\n\r\n\r\n#e275_3 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:88px;\r\n        height:36px;\r\n        position:absolute;\r\n        left:474.45648193359375px;\r\n        top:9.318181991577148px;\r\n        font-family:Lato;\r\n        text-align:center;\r\n        font-size:30px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#e275_7 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:168px;\r\n        height:24px;\r\n        position:absolute;\r\n        left:204.9369354248047px;\r\n        top:145.59658813476562px;\r\n        font-family:Lato;\r\n        text-align:left;\r\n        font-size:20px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#e275_8 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:222px;\r\n        height:24px;\r\n        position:absolute;\r\n        left:204.9369354248047px;\r\n        top:85.02840423583984px;\r\n        font-family:Lato;\r\n        text-align:left;\r\n        font-size:20px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#e275_9 {\r\n        color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:227px;\r\n        height:24px;\r\n        position:absolute;\r\n        left:204.9369354248047px;\r\n        top:116.4772720336914px;\r\n        font-family:Lato;\r\n        text-align:left;\r\n        font-size:20px;\r\n        letter-spacing:0;\r\n        line-height:undefined;\r\n        }\r\n\r\n\r\n#e182_1878 {\r\n        opacity:1;\r\n        width:14.958343505859375px;\r\n        height:71.0863037109375px;\r\n        position:absolute;\r\n        left:160px;\r\n        top:92px;\r\n        }\r\n\r\n\r\n#e156_11 {\r\n            position: absolute;\r\n        border-radius:10px;\r\n        background-color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:14.958343505859375px;\r\n        height:15.018280029296875px;\r\n        position:absolute;\r\n        left:175px;\r\n        top:94px;\r\n        }\r\n\r\n\r\n#e156_12 {\r\n            position: absolute;\r\n        border-radius:10px;\r\n        background-color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:14.958343505859375px;\r\n        height:15.018218994140625px;\r\n        position:absolute;\r\n        left:175px;\r\n        top: 125px;\r\n        }\r\n\r\n\r\n#e156_13 {\r\n            position: absolute;\r\n        border-radius:10px;\r\n        background-color:rgba(0, 0, 0, 1);\r\n        opacity:1;\r\n        width:14.958343505859375px;\r\n        height:15.0181884765625px;\r\n        position:absolute;\r\n        left:175px;\r\n        top:153px;\r\n        }\r\n\r\n\r\n#e156_19{\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:169px;\r\n            height:36px;\r\n            position:absolute;\r\n            left:699px;\r\n            top:108px;\r\n            font-family:Lato;\r\n            text-align:left;\r\n            font-size:30px;\r\n            letter-spacing:0;\r\n            line-height:undefined; \r\n        }\r\n\r\n\r\n#e156_20 {\r\n            position:relative;\r\n            opacity:1;\r\n            width:1034px;\r\n            height:205px;\r\n            padding: 110px;\r\n            top:400px;\r\n            left: 120px;\r\n            }\r\n\r\n\r\n#e156_22 {\r\n            background-color:rgba(255, 255, 255, 1);\r\n            opacity:1;\r\n            width:1034px;\r\n            height:205px;\r\n            position:absolute;\r\n            left:0px;\r\n            top:0px;\r\n            border-top-left-radius:10px;\r\n            border-top-right-radius:10px;\r\n            border-bottom-left-radius:10px;\r\n            border-bottom-right-radius:10px;\r\n            }\r\n\r\n\r\n#e156_23 {\r\n            background-color:rgba(234.00000125169754, 193.00000369548798, 2.000000118277967, 1);\r\n            opacity:1;\r\n            width:1034px;\r\n            height:60.56818389892578px;\r\n            position:absolute;\r\n            left:0px;\r\n            top:0px;\r\n            border-top-left-radius:10px;\r\n            border-top-right-radius:10px;\r\n            border-bottom-left-radius:10px;\r\n            border-bottom-right-radius:10px;\r\n            margin: auto;\r\n            }\r\n\r\n\r\n#e156_24 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:67px;\r\n            height:36px;\r\n            position:absolute;\r\n            left:485.45648193359375px;\r\n            top:9.318181991577148px;\r\n            font-family:Lato;\r\n            text-align:center;\r\n            font-size:30px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e156_28 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:126px;\r\n            height:24px;\r\n            position:absolute;\r\n            left:204.9369354248047px;\r\n            top:145.59658813476562px;\r\n            font-family:Lato;\r\n            text-align:left;\r\n            font-size:20px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e156_29 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:222px;\r\n            height:24px;\r\n            position:absolute;\r\n            left:204.9369354248047px;\r\n            top:85.02840423583984px;\r\n            font-family:Lato;\r\n            text-align:left;\r\n            font-size:20px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e156_30 {\r\n            color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:227px;\r\n            height:24px;\r\n            position:absolute;\r\n            left:204.9369354248047px;\r\n            top:116.4772720336914px;\r\n            font-family:Lato;\r\n            text-align:left;\r\n            font-size:20px;\r\n            letter-spacing:0;\r\n            line-height:undefined;\r\n            }\r\n\r\n\r\n#e182_1879 {\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:71.0863037109375px;\r\n            position:absolute;\r\n            left:160px;\r\n            top:93px;\r\n            }\r\n\r\n\r\n#e156_31 {\r\n                position: absolute;\r\n            border-radius:10px;\r\n            background-color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:15.0181884765625px;\r\n            position:absolute;\r\n            left:175px;\r\n            top:94px;\r\n            }\r\n\r\n\r\n#e156_32 {\r\n                position: absolute;\r\n            border-radius:10px;\r\n            background-color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:15.018310546875px;\r\n            position:absolute;\r\n            left:175px;\r\n            top: 125px;    \r\n            }\r\n\r\n\r\n#e156_33 {\r\n            border-radius:10px;\r\n            background-color:rgba(0, 0, 0, 1);\r\n            opacity:1;\r\n            width:14.958343505859375px;\r\n            height:15.0181884765625px;\r\n            position:absolute;\r\n            left:175px;\r\n            top:153px;\r\n            }\r\n\r\n\r\n#e156_39{\r\n                color:rgba(0, 0, 0, 1);\r\n                opacity:1;\r\n                width:169px;\r\n                height:36px;\r\n                position:absolute;\r\n                left:699px;\r\n                top:108px;\r\n                font-family:Lato;\r\n                text-align:left;\r\n                font-size:30px;\r\n                letter-spacing:0;\r\n                line-height:undefined;    \r\n            }\r\n\r\n\r\n.flecha{\r\n                position: absolute;\r\n                width: 100px;\r\n                height: 100px;\r\n                left: 53%;\r\n                top: 565px;\r\n            }\r\n\r\n\r\n#botonvolver {\r\n                position: absolute;\r\n                background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 0.7400000095367432);\r\n                opacity:1;\r\n                border:1px solid rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                width:147px;\r\n                height:45px;\r\n                border-top-left-radius:10px;\r\n                border-top-right-radius:10px;\r\n                border-bottom-left-radius:10px;\r\n                border-bottom-right-radius:10px;\r\n                left: 20%;\r\n                top: 980px;\r\n                }\r\n\r\n\r\n#textvolver {\r\n                position: absolute;\r\n                color:rgba(255, 255, 255, 1);\r\n                opacity:0.5001395344734192;\r\n                width:80px;\r\n                height:24px;\r\n                font-family:Lato;\r\n                text-align:left;\r\n                font-size:20px;\r\n                letter-spacing:0;\r\n                line-height:undefined;\r\n                left: 30px;\r\n                top: 10px;                        \r\n                }\r\n\r\n\r\n#botoncambiarplan{\r\n                    position: absolute;\r\n                    background-color:rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 0.7400000095367432);\r\n                    opacity:1;\r\n                    border:1px solid rgba(150.9600019454956, 150.9600019454956, 150.9600019454956, 1);\r\n                    width:230px;\r\n                    height:45px;\r\n                    border-top-left-radius:10px;\r\n                    border-top-right-radius:10px;\r\n                    border-bottom-left-radius:10px;\r\n                    border-bottom-right-radius:10px;\r\n                    left: 70%;\r\n                    top: 980px;\r\n                }\r\n\r\n\r\n#textcambiarplan{\r\n                    position: absolute;\r\n                    height: 24px;\r\n                    left: 15%;\r\n                    right: 0%;\r\n                    top: calc(50% - 24px/2 + 0.5px);\r\n                    font-family: Lato;\r\n                    font-style: normal;\r\n                    font-weight: normal;\r\n                    font-size: 20px;\r\n                    line-height: 24px;\r\n                    text-transform: uppercase;\r\n                    color: #FFFFFF;\r\n                    mix-blend-mode: normal;\r\n                    opacity: 0.5;\r\n                    border-radius: 10px;\r\n                }\r\n\r\n\r\na:visited, a{\r\n                    text-decoration: none;\r\n                    color: white;\r\n                    \r\n                }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGxhbnNlbGVjY2lvbmFkby9wbGFuc2VsZWNjaW9uYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZDs7O0FBQ0E7S0FDQyxrQkFBa0I7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDOzs7QUFDQTtRQUNJLGlCQUFpQjtRQUNqQixTQUFTO1FBQ1QsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsVUFBVTtRQUNWLFdBQVc7UUFDWDs7O0FBQ0E7UUFDQSx1Q0FBdUM7UUFDdkMsU0FBUztRQUNULFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixPQUFPO1FBQ1AsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9COzs7QUFDQTtRQUNBLG9GQUFvRjtRQUNwRixTQUFTO1FBQ1QsWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsUUFBUTtRQUNSLE9BQU87UUFDUCwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0I7OztBQUNBO1FBQ0Esc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIs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Q3pCOzs7QUFDQTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixTQUFTO2dCQUNULFVBQVU7WUFDZDs7O0FBQ0E7Z0JBQ0ksa0JBQWtCO2dCQUNsQixrR0FBa0c7Z0JBQ2xHLFNBQVM7Z0JBQ1QsaUZBQWlGO2dCQUNqRixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsMkJBQTJCO2dCQUMzQiw0QkFBNEI7Z0JBQzVCLDhCQUE4QjtnQkFDOUIsK0JBQStCO2dCQUMvQixTQUFTO2dCQUNULFVBQVU7Z0JBQ1Y7OztBQUNKO2dCQUNJLGtCQUFrQjtnQkFDbEIsNEJBQTRCO2dCQUM1QiwwQkFBMEI7Z0JBQzFCLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLHFCQUFxQjtnQkFDckIsVUFBVTtnQkFDVixTQUFTO2dCQUNUOzs7QUFFQTtvQkFDSSxrQkFBa0I7b0JBQ2xCLGtHQUFrRztvQkFDbEcsU0FBUztvQkFDVCxpRkFBaUY7b0JBQ2pGLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCwyQkFBMkI7b0JBQzNCLDRCQUE0QjtvQkFDNUIsOEJBQThCO29CQUM5QiwrQkFBK0I7b0JBQy9CLFNBQVM7b0JBQ1QsVUFBVTtnQkFDZDs7O0FBQ0E7b0JBQ0ksa0JBQWtCO29CQUNsQixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsU0FBUztvQkFDVCwrQkFBK0I7b0JBQy9CLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQix5QkFBeUI7b0JBQ3pCLGNBQWM7b0JBQ2Qsc0JBQXNCO29CQUN0QixZQUFZO29CQUNaLG1CQUFtQjtnQkFDdkI7OztBQUVBO29CQUNJLHFCQUFxQjtvQkFDckIsWUFBWTs7Z0JBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcGxhbnNlbGVjY2lvbmFkby9wbGFuc2VsZWNjaW9uYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogICAgMHB4O1xyXG4gICAgbGVmdDogMjAlO1xyXG59XHJcblxyXG5cclxuLmNhbWJpb3BsYW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsZWZ0OiAxMC4wNyU7XHJcbiAgICByaWdodDogNjIuNzglO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MzhweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGxlZnQ6IDI4MHB4O1xyXG4gICAgdG9wOiAxNzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC44Myk7XHJcbiAgICB9XHJcbiAgICAjZTE1Nl85IHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MTAzNHB4O1xyXG4gICAgICAgIGhlaWdodDoyMDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMTBweDtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZTI3NV8xIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICBoZWlnaHQ6MjA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UyNzVfMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5Ni4wMDAwMDM1MTY2NzQwNCwgMTk2LjAwMDAwMzUxNjY3NDA0LCAxOTYuMDAwMDAzNTE2Njc0MDQsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB3aWR0aDoxMDM0cHg7XHJcbiAgICAgICAgaGVpZ2h0OjYwLjU2ODE4Mzg5ODkyNTc4cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UyNzVfMyB7XHJcbiAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6ODhweDtcclxuICAgICAgICBoZWlnaHQ6MzZweDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjQ3NC40NTY0ODE5MzM1OTM3NXB4O1xyXG4gICAgICAgIHRvcDo5LjMxODE4MTk5MTU3NzE0OHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlMjc1Xzcge1xyXG4gICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjE2OHB4O1xyXG4gICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICB0b3A6MTQ1LjU5NjU4ODEzNDc2NTYycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNlMjc1Xzgge1xyXG4gICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHdpZHRoOjIyMnB4O1xyXG4gICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICB0b3A6ODUuMDI4NDA0MjM1ODM5ODRweDtcclxuICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UyNzVfOSB7XHJcbiAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MjI3cHg7XHJcbiAgICAgICAgaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDoyMDQuOTM2OTM1NDI0ODA0N3B4O1xyXG4gICAgICAgIHRvcDoxMTYuNDc3MjcyMDMzNjkxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZTE4Ml8xODc4IHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OjcxLjA4NjMwMzcxMDkzNzVweDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjE2MHB4O1xyXG4gICAgICAgIHRvcDo5MnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZTE1Nl8xMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB3aWR0aDoxNC45NTgzNDM1MDU4NTkzNzVweDtcclxuICAgICAgICBoZWlnaHQ6MTUuMDE4MjgwMDI5Mjk2ODc1cHg7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDoxNzVweDtcclxuICAgICAgICB0b3A6OTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UxNTZfMTIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OjE1LjAxODIxODk5NDE0MDYyNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MTc1cHg7XHJcbiAgICAgICAgdG9wOiAxMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UxNTZfMTMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OjE1LjAxODE4ODQ3NjU2MjVweDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjE3NXB4O1xyXG4gICAgICAgIHRvcDoxNTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2UxNTZfMTl7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6MTY5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDozNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDo2OTlweDtcclxuICAgICAgICAgICAgdG9wOjEwOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAjZTE1Nl8yMCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMTBweDtcclxuICAgICAgICAgICAgdG9wOjQwMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTE1Nl8yMiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDM0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyMDVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTE1Nl8yMyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzQuMDAwMDAxMjUxNjk3NTQsIDE5My4wMDAwMDM2OTU0ODc5OCwgMi4wMDAwMDAxMTgyNzc5NjcsIDEpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMzRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjYwLjU2ODE4Mzg5ODkyNTc4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgdG9wOjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTE1Nl8yNCB7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6NjdweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjM2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjQ4NS40NTY0ODE5MzM1OTM3NXB4O1xyXG4gICAgICAgICAgICB0b3A6OS4zMTgxODE5OTE1NzcxNDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UxNTZfMjgge1xyXG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjEyNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICAgICAgdG9wOjE0NS41OTY1ODgxMzQ3NjU2MnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UxNTZfMjkge1xyXG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjIyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MjA0LjkzNjkzNTQyNDgwNDdweDtcclxuICAgICAgICAgICAgdG9wOjg1LjAyODQwNDIzNTgzOTg0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OnVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZTE1Nl8zMCB7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6MjI3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoyMDQuOTM2OTM1NDI0ODA0N3B4O1xyXG4gICAgICAgICAgICB0b3A6MTE2LjQ3NzI3MjAzMzY5MTRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6TGF0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlMTgyXzE4Nzkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIHdpZHRoOjE0Ljk1ODM0MzUwNTg1OTM3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NzEuMDg2MzAzNzEwOTM3NXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDoxNjBweDtcclxuICAgICAgICAgICAgdG9wOjkzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UxNTZfMzEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDoxNC45NTgzNDM1MDU4NTkzNzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE1LjAxODE4ODQ3NjU2MjVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MTc1cHg7XHJcbiAgICAgICAgICAgIHRvcDo5NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlMTU2XzMyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxNS4wMTgzMTA1NDY4NzVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6MTc1cHg7XHJcbiAgICAgICAgICAgIHRvcDogMTI1cHg7ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNlMTU2XzMzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgd2lkdGg6MTQuOTU4MzQzNTA1ODU5Mzc1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxNS4wMTgxODg0NzY1NjI1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjE3NXB4O1xyXG4gICAgICAgICAgICB0b3A6MTUzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2UxNTZfMzl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTY5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDo2OTlweDtcclxuICAgICAgICAgICAgICAgIHRvcDoxMDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OkxhdG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDp1bmRlZmluZWQ7ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGVjaGF7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTMlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1NjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjYm90b252b2x2ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDAuNzQwMDAwMDA5NTM2NzQzMik7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTUwLjk2MDAwMTk0NTQ5NTYsIDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxNDdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo0NXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDk4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGV4dHZvbHZlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTowLjUwMDEzOTUzNDQ3MzQxOTI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpMYXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgI2JvdG9uY2FtYmlhcnBsYW57XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNTAuOTYwMDAxOTQ1NDk1NiwgMTUwLjk2MDAwMTk0NTQ5NTYsIDE1MC45NjAwMDE5NDU0OTU2LCAwLjc0MDAwMDAwOTUzNjc0MzIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTUwLjk2MDAwMTk0NTQ5NTYsIDE1MC45NjAwMDE5NDU0OTU2LCAxNTAuOTYwMDAxOTQ1NDk1NiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogOTgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjdGV4dGNhbWJpYXJwbGFue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMjRweC8yICsgMC41cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGE6dmlzaXRlZCwgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/planseleccionado/planseleccionado.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/planseleccionado/planseleccionado.component.ts ***!
  \****************************************************************************/
/*! exports provided: PlanseleccionadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanseleccionadoComponent", function() { return PlanseleccionadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlanseleccionadoComponent = class PlanseleccionadoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlanseleccionadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-planseleccionado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./planseleccionado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/planseleccionado/planseleccionado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./planseleccionado.component.css */ "./src/app/componentes/planseleccionado/planseleccionado.component.css")).default]
    })
], PlanseleccionadoComponent);



/***/ }),

/***/ "./src/app/componentes/series/series.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/series/series.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor{\r\n    position: relative;\r\n    width: 80%;\r\n    height: 501px;\r\n    left: 10%;\r\n    top: 80px;\r\n}\r\n\r\n\r\n.titulo{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    line-height: 38px;\r\n    letter-spacing: 5px;\r\n    display: inline-block;\r\n    border-bottom: 2px solid rgb(255, 255, 255);\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.phone-container {\r\n    width: 95vw;\r\n    margin: 0 auto;\r\n    height: 667px;\r\n}\r\n\r\n\r\n.phone-container .intro {\r\n    padding: 0 20px;\r\n}\r\n\r\n\r\n.phone-container .intro dd {\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n.phone-container .title {\r\n    text-align: center;\r\n    padding: 5px 5px;\r\n    margin: 15px 20px;\r\n}\r\n\r\n\r\n.phone-container .title h3 {\r\n    margin: 0;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container {\r\n    width: 100%;\r\n    padding: 0;\r\n    height: 547px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container {\r\n    width: auto;\r\n    height: 800px;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    -webkit-overflow-scrolling: auto;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card {\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: 0 5px 5px 5px;\r\n    width: 325px;\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card img {\r\n    width: 100%;\r\n    height: 400px;\r\n    background-size: cover; \r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description {\r\n    height: 110px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl {\r\n    padding: 0 5px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl dt {\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .description dl dd {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .bot-tool {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.phone-container .card-outer-container .card-inner-container .card .bot-tool .like {\r\n    text-align: right;\r\n    width: 100px;\r\n    float: right;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc2VyaWVzL3Nlcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztJQUNULFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOzs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7OztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7OztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsU0FBUztBQUNiOzs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvc2VyaWVzL3Nlcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA1MDFweDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogODBweDtcclxufVxyXG5cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnBob25lLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2NjdweDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5pbnRybyB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAuaW50cm8gZGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIG1hcmdpbjogMTVweCAyMHB4O1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLnRpdGxlIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDU0N3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMCA1cHggNXB4IDVweDtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnBob25lLWNvbnRhaW5lciAuY2FyZC1vdXRlci1jb250YWluZXIgLmNhcmQtaW5uZXItY29udGFpbmVyIC5jYXJkIC5kZXNjcmlwdGlvbiBkbCB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgLmRlc2NyaXB0aW9uIGRsIGR0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuZGVzY3JpcHRpb24gZGwgZGQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5waG9uZS1jb250YWluZXIgLmNhcmQtb3V0ZXItY29udGFpbmVyIC5jYXJkLWlubmVyLWNvbnRhaW5lciAuY2FyZCAuYm90LXRvb2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucGhvbmUtY29udGFpbmVyIC5jYXJkLW91dGVyLWNvbnRhaW5lciAuY2FyZC1pbm5lci1jb250YWluZXIgLmNhcmQgLmJvdC10b29sIC5saWtlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/series/series.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/series/series.component.ts ***!
  \********************************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/tmdb.service */ "./src/app/servicios/tmdb.service.ts");



let SeriesComponent = class SeriesComponent {
    constructor(tmdb) {
        this.tmdb = tmdb;
        this.series = [];
        this.tmdb.getTvByGenre('10759').subscribe((data) => {
            this.series.push({
                "genero": "action & adventure",
                "lista": [data]
            });
        });
        this.tmdb.getTvByGenre('16').subscribe((data) => {
            this.series.push({
                "genero": "animacion",
                "lista": [data]
            });
        });
        this.tmdb.getTvByGenre('35').subscribe((data) => {
            this.series.push({
                "genero": "comedia",
                "lista": [data]
            });
            this.tmdb.getTvByGenre('80').subscribe((data) => {
                this.series.push({
                    "genero": "crimen",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('99').subscribe((data) => {
                this.series.push({
                    "genero": "documental",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('18').subscribe((data) => {
                this.series.push({
                    "genero": "drama",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10751').subscribe((data) => {
                this.series.push({
                    "genero": "familia",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10762').subscribe((data) => {
                this.series.push({
                    "genero": "kids",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('9648').subscribe((data) => {
                this.series.push({
                    "genero": "misterio",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10763').subscribe((data) => {
                this.series.push({
                    "genero": "news",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10764').subscribe((data) => {
                this.series.push({
                    "genero": "Reality",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10765').subscribe((data) => {
                this.series.push({
                    "genero": "Sci-Fi & Fantasy",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10766').subscribe((data) => {
                this.series.push({
                    "genero": "Soap",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10767').subscribe((data) => {
                this.series.push({
                    "genero": "Talk",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('10768').subscribe((data) => {
                this.series.push({
                    "genero": "War & Politics",
                    "lista": [data]
                });
            });
            this.tmdb.getTvByGenre('37').subscribe((data) => {
                this.series.push({
                    "genero": "western",
                    "lista": [data]
                });
            });
        });
        console.log(this.series);
    }
    ngOnInit() {
    }
};
SeriesComponent.ctorParameters = () => [
    { type: src_app_servicios_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] }
];
SeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./series.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/series/series.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./series.component.css */ "./src/app/componentes/series/series.component.css")).default]
    })
], SeriesComponent);



/***/ }),

/***/ "./src/app/componentes/tarjeta/tarjeta.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/tarjeta/tarjeta.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RhcmpldGEvdGFyamV0YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/tarjeta/tarjeta.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/tarjeta/tarjeta.component.ts ***!
  \**********************************************************/
/*! exports provided: TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaComponent", function() { return TarjetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TarjetaComponent = class TarjetaComponent {
    constructor() { }
    ngOnInit() {
    }
};
TarjetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tarjeta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tarjeta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tarjeta/tarjeta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tarjeta.component.css */ "./src/app/componentes/tarjeta/tarjeta.component.css")).default]
    })
], TarjetaComponent);



/***/ }),

/***/ "./src/app/pipes/pelicula-imagen.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/pelicula-imagen.pipe.ts ***!
  \***********************************************/
/*! exports provided: PeliculaImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculaImagenPipe", function() { return PeliculaImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PeliculaImagenPipe = class PeliculaImagenPipe {
    transform(pelicula) {
        // path url generica para obtener imagenes
        let url = "http://image.tmdb.org/t/p/w400";
        if (pelicula.poster_path) {
            return url + pelicula.poster_path;
        }
        else {
            if (pelicula.backdrop_path) {
                return url + pelicula.backdrop_path;
            }
            else {
                // Si la pelicula no tiene imagenes disponibles retorna una generica
                return "assets/images/noimage.jpg";
            }
        }
    }
};
PeliculaImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "peliculaImagen"
    })
], PeliculaImagenPipe);



/***/ }),

/***/ "./src/app/servicios/tmdb.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/tmdb.service.ts ***!
  \*******************************************/
/*! exports provided: TmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function() { return TmdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// Importo map reactive extentions

let TmdbService = class TmdbService {
    constructor(http) {
        this.http = http;
        this.generos = [];
        this.baseUrl = 'https://api.themoviedb.org/3/';
        this.baseUrl4 = 'https://api.themoviedb.org/4/';
        this.apiKey = '53fcc6dbd3fcdd530b0a3600f7defb8e';
        this.language = 'es';
        this.region = 'AR;';
        this.access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzI5NjIxNTIsInN1YiI6IjVkYjRlNGVjZjA1NmQ1MDAxODBmOWFmNiIsImp0aSI6IjE2NDkwMzYiLCJhdWQiOiI1M2ZjYzZkYmQzZmNkZDUzMGIwYTM2MDBmN2RlZmI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.ipSyf9Wqk0G_3vOtZl7cBSNzYSRsK5k2hLMjZRd6gDE';
        this.account_id = '5db4e4ecf056d500180f9af6';
        this.list_id = '125490';
        this.getGeneros().subscribe((data) => {
            this.generos = data;
        });
    }
    //Metodo para pasar URL para peticion
    getQuery(query) {
        const url = `https://api.themoviedb.org/3${query}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
        // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
        //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
        return this.http.jsonp(url, "");
    }
    getQueryforPelicula(query) {
        const url = `https://api.themoviedb.org/3${query}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
        // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
        //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
        return this.http.jsonp(url, "");
    }
    getDiscoverMovies() {
        return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.results));
    }
    getBusquedaPeliculas(termino) {
        return this.getQuery(`/search/movie?query=${termino}&sort_by=popularity.desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.results));
    }
    getGeneros() {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=6a54aba1bb3979e2f60eec5276bc6d25&language=es&callback=JSONP_CALLBACK`;
        // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
        //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
        return this.http.jsonp(url, "");
    }
    getPeliculasGenero(genero, termino) {
        let generoFiltrado;
        console.log(this.generos);
        this.generos.genres.forEach(generoArr => {
            if (generoArr.name === genero)
                generoFiltrado = generoArr.id;
        });
        const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${generoFiltrado}&query=${termino}&api_key=6a54aba1bb3979e2f60eec5276bc6d25&language=es&callback=JSONP_CALLBACK`;
        // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
        //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
        return this.http.jsonp(url, "");
        `https://api.themoviedb.org/3/discover/movie?with_genres=28&query=ter&api_key=6a54aba1bb3979e2f60eec5276bc6d25&language=es&callback=ng_jsonp_callback_2&=JSONP_CALLBACK `;
    }
    getPelicula(id) {
        return this.getQueryforPelicula(`/movie/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
    }
    getPeliculasAño(anio) {
        const url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${anio}&sort_by=vote_average.desc&api_key=6a54aba1bb3979e2f60eec5276bc6d25&language=es&callback=JSONP_CALLBACK`;
        // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
        //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
        return this.http.jsonp(url, "");
    }
    getGenres() {
        return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
    }
    getGenresTv() {
        return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`);
    }
    getMoviesByGenre(id) {
        return this.http.get(`${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`);
    }
    getTvByGenre(id) {
        return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&language=${this.language}&with_genres=${id}&include_null_first_air_dates=false&sort_by=popularity.desc`);
    }
    getMovie(id) {
        return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=${this.language}`);
    }
    getTv(id) {
        return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`);
    }
    getMovieVideos(id) {
        return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`);
    }
    getMovieVideosTv(id) {
        return this.http.get(`${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}`);
    }
    getList() {
        return this.http.get(`${this.baseUrl4}list/${this.list_id}?page=1&api_key=${this.apiKey}`);
    }
    getTendenciasSemana() {
        return this.http.get(`${this.baseUrl}trending/all/week?api_key=${this.apiKey}&language=${this.language}`);
    }
    getTendenciasDia() {
        return this.http.get(`${this.baseUrl}trending/all/day?api_key=${this.apiKey}&language=${this.language}`);
    }
    getPopulares() {
        return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=${this.language}&page=1`);
    }
    getProxEstrenos() {
        return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&language=${this.language}&page=1`);
    }
    isItemList(id, type) {
        return this.http.get(`${this.baseUrl4}list/${this.list_id}/item_status?media_id=${id}&media_type=${type}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "content-type": "application/json;charset=utf-8",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzI5NjIxNTIsInN1YiI6IjVkYjRlNGVjZjA1NmQ1MDAxODBmOWFmNiIsImp0aSI6IjE2NDkwMzYiLCJhdWQiOiI1M2ZjYzZkYmQzZmNkZDUzMGIwYTM2MDBmN2RlZmI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.ipSyf9Wqk0G_3vOtZl7cBSNzYSRsK5k2hLMjZRd6gDE"
            })
        });
    }
    addMovieList(movie) {
        return this.http.post(`${this.baseUrl4}list/${this.list_id}/items`, movie, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "content-type": "application/json;charset=utf-8",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzI5NjIxNTIsInN1YiI6IjVkYjRlNGVjZjA1NmQ1MDAxODBmOWFmNiIsImp0aSI6IjE2NDkwMzYiLCJhdWQiOiI1M2ZjYzZkYmQzZmNkZDUzMGIwYTM2MDBmN2RlZmI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.ipSyf9Wqk0G_3vOtZl7cBSNzYSRsK5k2hLMjZRd6gDE"
            })
        });
    }
    calificar(movie, id) {
        return this.http.post(`${this.baseUrl}movie/${id}/rating?api_key=${this.apiKey}`, movie, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "content-type": "application/json;charset=utf-8"
            })
        });
    }
    removeMovieList(movie) {
        return this.http.request('DELETE', `${this.baseUrl4}list/${this.list_id}/items`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "content-type": "application/json;charset=utf-8",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzI5NjIxNTIsInN1YiI6IjVkYjRlNGVjZjA1NmQ1MDAxODBmOWFmNiIsImp0aSI6IjE2NDkwMzYiLCJhdWQiOiI1M2ZjYzZkYmQzZmNkZDUzMGIwYTM2MDBmN2RlZmI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.ipSyf9Wqk0G_3vOtZl7cBSNzYSRsK5k2hLMjZRd6gDE"
            }),
            body: movie
        });
    }
};
TmdbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TmdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TmdbService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC-xWn1J9_74b8gEf41qDfsg2HcMTdyKro",
        authDomain: "netflics-c5812.firebaseapp.com",
        databaseURL: "https://netflics-c5812.firebaseio.com",
        projectId: "netflics-c5812",
        storageBucket: "netflics-c5812.appspot.com",
        messagingSenderId: "1014563009000",
        appId: "1:1014563009000:web:3972887dcb7215d159345d"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mateo\Documents\angular\Netflics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map