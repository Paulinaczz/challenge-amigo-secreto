// Array para almacenar los nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim(); // Eliminar espacios en blanco

    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Detiene la función si el input está vacío
    }

    if (amigos.includes(amigo)) {
        alert("Este nombre ya está en la lista.");
        return; // Detiene la función si el nombre ya existe
    }

    amigos.push(amigo); // Agregar solo si pasó las validaciones
    limpiarInput();
    actualizarListaDeAmigos();
}

// Función para actualizar lista de amigos
function actualizarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

// Función para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

// Función para limpiar input
function limpiarInput() {
    document.getElementById("amigo").value = "";
}

// Función para reiniciar lista
function reiniciarLista() {
    let confirmacion = confirm("¿Seguro que deseas reiniciar la lista y borrar el sorteo?");
    if (confirmacion) {
        amigos = []; // Vaciar el array de amigos
        localStorage.removeItem("amigos"); // Borrar del almacenamiento local
        document.getElementById("listaAmigos").innerHTML = ""; // Vaciar la lista en HTML
        document.getElementById("resultado").innerHTML = ""; // Borrar el resultado del sorteo
    }
}

