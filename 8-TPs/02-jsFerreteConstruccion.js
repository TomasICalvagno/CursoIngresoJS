/*2.
Tomas Calvagno
DIV x
TP 2
Enunciado
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let total;
let mensaje;

largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);
  
total = (largo + ancho) * 3;

mensaje = "La cantidad de alambre a comprar es " + total;
alert(mensaje);

}

function Circulo () 
{
let radio;
let total;
let mensaje;
let pi;

pi = 3.14;
radio = parseInt(document.getElementById("txtIdRadio").value);

total = 2*pi*radio * 3;

mensaje = "La cantidad de alambre a comprar es " + total;
alert(mensaje);   

}

function Materiales () 
{
let largo;
let ancho;
let area;
let bolsaCemento;
let bolsaCal;
let totalCemento;
let totalCal;
let mensaje;

bolsaCemento = 2;
bolsaCal = 3;

largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);
      
area = largo * ancho;
totalCemento = bolsaCemento * area 
totalCal = bolsaCal * area 

mensaje = "Por cada m2 hay " + totalCemento + " bolsas de cemento " + "y " + totalCal + " de cal";
alert(mensaje)

}