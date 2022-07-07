/*3.	
Tomas Calvagno
DIV x
TP 3
Enunciado
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let conversion;
	fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    conversion = (fahrenheit - 32) *5/9
    
    alert(conversion);

}

function CentigradosFahrenheit () 
{
	let centigrados;
    let conversion;
	centigrados = parseInt(document.getElementById("txtIdTemperatura").value);

    conversion = centigrados *9/5 + 32;
    
    alert(conversion);



}
