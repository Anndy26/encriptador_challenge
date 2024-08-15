//Este evento asegura que el código JavaScript se ejecute solo después de que todo el contenido del DOM se haya cargado completamente.
document.addEventListener("DOMContentLoaded", () => {
    //----------------cajas-------------------------
    const areaTextoEntrada = document.getElementById("container");
    const areaTextoSalida = document.querySelector(".caja1");
    //----------botones------------------------------
    const botonCifrar = document.getElementById("cifrar");
    const botonDescifrar = document.getElementById("descifrar");
    const botonCopiar = document.getElementById("copiar");

    // Función para validar que el texto solo contenga letras minúsculas y espacios
    function esTextoValido(texto) {
        const regex = /^[a-z\s]+$/;
        return regex.test(texto);
    }

    // Función para cifrar el texto reemplazando letras por secuencias específicas
    function cifrarTexto(texto) {
        return texto
            .replace(/e/g, "enter")  
            .replace(/i/g, "imes")   
            .replace(/a/g, "ai")     
            .replace(/o/g, "ober")   
            .replace(/u/g, "ufat");  
    }

    // Función para descifrar el texto reemplazando secuencias por letras originales
    function descifrarTexto(texto) {
        return texto
            .replace(/enter/g, "e")  
            .replace(/imes/g, "i")   
            .replace(/ai/g, "a")     
            .replace(/ober/g, "o")   
            .replace(/ufat/g, "u");  
    }

    // Función para copiar el contenido del área de texto de salida al portapapeles
    function copiarAlPortapapeles() {
        areaTextoSalida.select();               
        document.execCommand("copy");          
        alert("Texto copiado al portapapeles"); 
    }

    // Función para mostrar un mensaje de error cuando el texto no es válido
    function mostrarError() {
        alert("¡Error! El texto no debe contener letras mayúsculas ni caracteres especiales");
    }

    // Evento que se activa al hacer clic en el botón de cifrar
    botonCifrar.addEventListener("click", () => {
        const textoEntrada = areaTextoEntrada.value;
        if (esTextoValido(textoEntrada)) {
            const textoCifrado = cifrarTexto(textoEntrada);
            areaTextoSalida.value = textoCifrado;
        } else {
            mostrarError();
        }
    });

    // Evento que se activa al hacer clic en el botón de descifrar
    botonDescifrar.addEventListener("click", () => {
        const textoEntrada = areaTextoEntrada.value;
        if (esTextoValido(textoEntrada)) {
            const textoDescifrado = descifrarTexto(textoEntrada);
            areaTextoSalida.value = textoDescifrado;
        } else {
            mostrarError();
        }
    });

    // Evento que se activa al hacer clic en el botón de copiar
    botonCopiar.addEventListener("click", () => {
        copiarAlPortapapeles();
    });
});


