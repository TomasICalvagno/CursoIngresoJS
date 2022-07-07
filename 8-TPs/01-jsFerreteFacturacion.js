/*1.
Tomas Calvagno
DIV x
TP 1
Enunciado
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
let num1;
let num2;
let num3;
let suma;
let mensaje;

num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

suma = num1 + num2 + num3;

mensaje = "La suma es " + suma;
alert(mensaje);

}

function Promedio () 
{
    let num1;
    let num2;
    let num3;
    let suma;
    let promedio;
    let mensaje;
    
    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    suma = num1 + num2 + num3;
    promedio = suma / 3;
    
    mensaje = "El promedio es " + promedio;
    alert(mensaje);
    
}

function PrecioFinal () 
{
    let num1;
    let num2;
    let num3;
    let suma;
    let iva;
    let total;
    let mensaje;
    
    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    suma = num1 + num2 + num3;
    iva = suma*21/100;
    total = suma + iva
    
    mensaje = "El precio final es " + total;
    alert(mensaje);

}