// Se capturan los elementos del DOM
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const entrar = document.getElementById('entrar');
const resultado = document.getElementById('resultado');
const resultadoNegativo = document.getElementById('resultadoNegativo');

// Se agrega un evento al botón "entrar"
entrar.addEventListener('click', function () {

    // Se obtiene el valor del nombre y se eliminan espacios al inicio/final
    const nombreIngresado = nombre.value.trim();

    // Se convierte la edad a un número entero
    const edadIngresada = parseInt(edad.value);
    // verificamos que solo ingresn letras 
    const soloLetras = /^[a-zA-Z]+$/;

    // Limpia los mensajes anteriores antes de mostrar uno nuevo
    resultado.textContent = "";
    resultadoNegativo.textContent = "";

    // Validación: si el nombre está vacío o la edad no es un número o el nombre es una letra 
    if (!soloLetras.test(nombreIngresado)|| isNaN(edadIngresada) ) {
        resultadoNegativo.textContent = "¡Por favor ingresa un nombre y una edad válidos!";
        return; // Sale de la función si hay error
    }

    // Si la edad es menor de 18, muestra mensaje de menor de edad
    if (edadIngresada < 18) {
        resultado.textContent = "Hola  " + nombreIngresado +" eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!";
    } else {
        // Si tiene 18 o más, mensaje para mayores de edad
        resultado.textContent = "Hola  "+ nombreIngresado+" eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!";
    }
});
