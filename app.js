//Menu lateral
var menu_visible=false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display ="block";
        menu_visible= true;
    }
    else{
      menu.style.display = "none";
      menu_visible = false;  
    }
}
//oculto el menu una vez que selecciono una opcion
let links =document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
  links[x].onclick = function(){
    menu.style.display = "none";
    menu_visible=false;
  } 
}
//creo las barras
function crearBarra(id_barra){
  for(i=0;i<=16;i++){
    let div = document.createElement("div")
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//selecciono todas las barras generales
let html =document.getElementById("html");
crearBarra(html);
let javascript =document.getElementById("javascript");
crearBarra(javascript);
let wordpress =document.getElementById("wordpress");
crearBarra(wordpress);
let pothoshop =document.getElementById("pothoshop");
crearBarra(pothoshop);
let php =document.getElementById("php");
crearBarra(php);
let ilustrator =document.getElementById("ilustrator");
crearBarra(ilustrator);

//gusradar la cantidad de barras que se van a pintar
//usando un arreglo cada posicion pertenece a un elemento
let contadores =[-1,-1,-1,-1,-1,-1]
//variable de aviso para saber si ya se ejecuto la operacion
let entro = false;

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
  var habilidades = document.getElementById("habilidades");
  var distancia_skills= window.innerHeight - habilidades.getBoundingClientRect().top;
  if(distancia_skills>=300 && entro==false){
    entro=true;
    const intervalHtml =setInterval(function(){
      pintarBarra(html, 12, 0, intervalHtml);
    },100);
    const intervaljavascript =setInterval(function(){
      pintarBarra(javascript, 9, 1, intervaljavascript);
    },100);
    const intervalwordpress =setInterval(function(){
      pintarBarra(wordpress, 2, 2, intervalwordpress);
    },100);
    const intervalpothoshop =setInterval(function(){
      pintarBarra(pothoshop, 6, 3, intervalpothoshop);
    },100);
    const intervalphp =setInterval(function(){
      pintarBarra(php, 4, 4, intervalphp);
    },100);
    const intervalilustrator =setInterval(function(){
      pintarBarra(ilustrator, 8, 5, intervalilustrator);
    },100);
  }
}
//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
  contadores[indice]++;
  x = contadores[indice];
  if(x < cantidad){
    let elemento = id_barra.getElementsByClassName("e");
    elemento[x].style.backgroundColor= "#f11a138a";
  }else{
    clearInterval(interval)
  }
}
//detecto el movimiento del mouse para aplicar la animacion de la barra
window.onscroll = function(){
  efectoHabilidades();
}

