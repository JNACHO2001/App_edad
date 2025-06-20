const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const entrar = document.getElementById('entrar');
const resultado = document.getElementById('resultado');

entrar.addEventListener('click', function () {
    const edadIngresada = edad.value;
    const nombreIngresado = nombre.value;

    let mensaje;

    if (nombreIngresado.length == 0 || edadIngresada.length == 0) {

        mensaje = "!Por favor ingreesar un campo valido!"



    } else if (edadIngresada < 18) {
        mensaje = "Hola " + nombreIngresado + " eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"

    } else {
        mensaje = "Hola " + nombreIngresado + " eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"

    }





    resultado.textContent = mensaje;
});