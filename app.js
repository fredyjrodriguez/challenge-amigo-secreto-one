// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    let nuevoAmigo = document.getElementById('amigo').value;

    // Validar si el campo está vacío
    if (nuevoAmigo === '') {
        alert('El campo está vacío, ingresa un nombre');
        return; // Detener la ejecución si el campo está vacío
    }

    // Si el campo no está vacío, agregar el nombre al array
    amigos.push(nuevoAmigo);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos(amigos);
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos(array) {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < array.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        const elementoLista = document.createElement('li');
        // Asignar el nombre del amigo como contenido del <li>
        elementoLista.textContent = array[i];

        // Agregar el elemento <li> a la lista
        lista.appendChild(elementoLista);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si hay suficientes amigos para sortear
    if (amigos.length > 1) {
        // Generar un índice aleatorio entre 0 y la longitud del array
        let indice = Math.floor(Math.random() * amigos.length);
        // Obtener el nombre del amigo sorteado
        let resultado = amigos[indice];
        // Mostrar el resultado en el HTML
        const lista = document.getElementById('resultado');
        lista.innerHTML = `El amigo secreto es: ${resultado}`;
    } else {
        // Mostrar un mensaje si no hay suficientes amigos
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
    }
}