/*
Tomas Calvagno
DIV x
Enunciado
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let suma;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = num1 + num2;
	alert("la suma es " + suma);
}
function restar()
{
	let num1;
	let num2;
	let resta;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = num1 - num2;
	alert("la resta es " + resta); 
}

function multiplicar()
{ 
	let num1;
	let num2;
	let multiplicar;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	multiplicar = num1 * num2;
	alert("la multiplicación es " + multiplicar);
}

function dividir()
{
	let num1;
	let num2;
	let dividir;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	dividir = num1 / num2;
	alert("la división es " + dividir);
}

