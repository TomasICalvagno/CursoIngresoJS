/* 
Tomas Calvagno
DIV x
Enunciado
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre = prompt();
	document.getElementById("txtIdNombre").value = nombre;
	//alert(nombre);
}

