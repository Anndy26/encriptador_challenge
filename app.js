
   //----------------cajas-------------------------
let areaTextoEntrada = document.getElementById("container");
let areaTextoSalida = document.querySelector(".caja1");

//----------botones------------------------------
let botonCifrar = document.getElementById("cifrar");
let botonDescifrar = document.getElementById("descifrar");
let botonCopiar = document.getElementById("copiar");

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
//funcion para copiar al portapapeles
function copiarAlPortapapeles() {
    navigator.clipboard.writeText(areaTextoSalida.value);
    alert("Texto copiado al portapapeles");
}

// Función para mostrar un mensaje de error cuando el texto no es válido
function mostrarError() {
    alert("¡Error! El texto no debe contener letras mayúsculas ni caracteres especiales");
}

// Evento que se activa al hacer clic en el botón de cifrar
botonCifrar.addEventListener("click", () => {
    let textoEntrada = areaTextoEntrada.value;
    if (esTextoValido(textoEntrada)) {
        let textoCifrado = cifrarTexto(textoEntrada);
        areaTextoSalida.value = textoCifrado;
    } else {
        mostrarError();
    }
});

// Evento que se activa al hacer clic en el botón de descifrar
botonDescifrar.addEventListener("click", () => {
    let textoEntrada = areaTextoEntrada.value;
    if (esTextoValido(textoEntrada)) {
        let textoDescifrado = descifrarTexto(textoEntrada);
        areaTextoSalida.value = textoDescifrado;
    } else {
        mostrarError();
    }
});

// Evento que se activa al hacer clic en el botón de copiar
botonCopiar.addEventListener("click", () => {
    copiarAlPortapapeles();
});
