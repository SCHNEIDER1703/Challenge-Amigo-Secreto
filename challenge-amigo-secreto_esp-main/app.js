// Lista vacía para almacenar los nombres

let amigos = [];

// Agregar amigo/nombres
function agregarAmigo(){
    // capturamos el valor del campo de entrada /input
    let nombre = document.getElementById("amigo").value; //amigo es id del input

    // validamos la entrada del input
    if (nombre === ""){
        alert("Por favor, inserte un nombre válido.");
        return;
    }
    //actualiza el array de amigos
    amigos.push(nombre);

    //Limpiar ek campo de entrada
    document.getElementById("amigo").value = "";
    mostrarLista();
}

function mostrarLista(){
    let listaAmigos = document.getElementById("listaAmigos"); // id del UL
    listaAmigos.innerHTML = "";

    // 
    for (let i=0; i<amigos.length; i++){
        listaAmigos.innerHTML = listaAmigos.innerHTML + "<li>" + amigos[i] + "</li>";
    }

}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Registre minimo 2 nombres para el sorteo.");
        return;
    }

    if (amigos.length === 1){
        alert("Registre un nombre más para el sorteo.");
        return;
    }
// genera aleatorio de los nombres registrados
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    document.getElementById("resultado").innerText = "El amigo seleccionado es: " + amigoSorteado;

    amigos=[];
    mostrarLista();

   
}



















