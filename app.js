//Este evento asegura que el código JavaScript se ejecute solo después de que todo el contenido del DOM se haya cargado completamente.
document.addEventListener("DOMContentLoaded", () => {
    //----------------cajas-------------------------
    // Selecciona el área de texto de entrada por su ID
    const areaTextoEntrada = document.getElementById("container");
    // Selecciona el área de texto de salida usando la clase .caja1
    const areaTextoSalida = document.querySelector(".caja1");
    //----------botones------------------------------
    // Selecciona el botón de cifrar por su ID
    const botonCifrar = document.getElementById("cifrar");
    // Selecciona el botón de descifrar por su ID
    const botonDescifrar = document.getElementById("descifrar");
    // Selecciona el botón de copiar por su ID
    const botonCopiar = document.getElementById("copiar");

    // Función para validar que el texto solo contenga letras minúsculas y espacios
    function esTextoValido(texto) {
        // Expresión regular que permite solo letras minúsculas y espacios
        const regex = /^[a-z\s]+$/;
        // Verifica si el texto cumple con la expresión regular
        return regex.test(texto);
    }

    // Función para cifrar el texto reemplazando letras por secuencias específicas
    function cifrarTexto(texto) {
        return texto
            .replace(/e/g, "enter")  // Reemplaza 'e' por 'enter'
            .replace(/i/g, "imes")   // Reemplaza 'i' por 'imes'
            .replace(/a/g, "ai")     // Reemplaza 'a' por 'ai'
            .replace(/o/g, "ober")   // Reemplaza 'o' por 'ober'
            .replace(/u/g, "ufat");  // Reemplaza 'u' por 'ufat'
    }

    // Función para descifrar el texto reemplazando secuencias por letras originales
    function descifrarTexto(texto) {
        return texto
            .replace(/enter/g, "e")  // Reemplaza 'enter' por 'e'
            .replace(/imes/g, "i")   // Reemplaza 'imes' por 'i'
            .replace(/ai/g, "a")     // Reemplaza 'ai' por 'a'
            .replace(/ober/g, "o")   // Reemplaza 'ober' por 'o'
            .replace(/ufat/g, "u");  // Reemplaza 'ufat' por 'u'
    }

    // Función para copiar el contenido del área de texto de salida al portapapeles
    function copiarAlPortapapeles() {
        areaTextoSalida.select();               // Selecciona el contenido del área de texto
        document.execCommand("copy");          // Copia el contenido seleccionado al portapapeles
        alert("Texto copiado al portapapeles"); // Muestra un mensaje de confirmación
    }

    // Función para mostrar un mensaje de error cuando el texto no es válido
    function mostrarError() {
        alert("¡Error! El texto no debe contener letras mayúsculas ni caracteres especiales");
    }

    // Evento que se activa al hacer clic en el botón de cifrar
    botonCifrar.addEventListener("click", () => {
        // Obtiene el texto del área de entrada
        const textoEntrada = areaTextoEntrada.value;
        // Verifica si el texto es válido
        if (esTextoValido(textoEntrada)) {
            // Cifra el texto y lo asigna al área de salida
            const textoCifrado = cifrarTexto(textoEntrada);
            areaTextoSalida.value = textoCifrado;
        } else {
            // Muestra un mensaje de error si el texto no es válido
            mostrarError();
        }
    });

    // Evento que se activa al hacer clic en el botón de descifrar
    botonDescifrar.addEventListener("click", () => {
        // Obtiene el texto del área de entrada
        const textoEntrada = areaTextoEntrada.value;
        // Verifica si el texto es válido
        if (esTextoValido(textoEntrada)) {
            // Descifra el texto y lo asigna al área de salida
            const textoDescifrado = descifrarTexto(textoEntrada);
            areaTextoSalida.value = textoDescifrado;
        } else {
            // Muestra un mensaje de error si el texto no es válido
            mostrarError();
        }
    });

    // Evento que se activa al hacer clic en el botón de copiar
    botonCopiar.addEventListener("click", () => {
        // Copia el contenido del área de texto de salida al portapapeles
        copiarAlPortapapeles();
    });
});


