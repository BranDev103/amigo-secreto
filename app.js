
let amigos = [];


/********************************************************************************************************************/

//FUNCION PARA LIMPIAR CAJA DE TEXTO
function limpiar() {
    document.getElementById("amigo").value = '';
}

/*********************************************************************************************************************/

//FUNCION PARA AGREGAR AMIGOS
function agregaAmigo() {

    let amigoIngresado = document.getElementById("amigo").value; //Se obtiene el valor ingresado por el usuario

    //Validación del valor
    if (amigoIngresado == "") {
        alert("Ingrese un nombre");
    }
    else {
        amigos.push(amigoIngresado); //Ingresa el valor a la lista
        console.log(amigos); //ELIMINAR
    }
    actualizarLista();
    limpiar();
    return;
}

/*********************************************************************************************************************/

//FUNCION PARA MOSTRAR NOMBRES AGREGADOS (ACTUALIZAR LISTA)
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos"); //Se obtiene el elemento lista
    listaAmigos.innerHTML = ""; //Se limpia la lista 

    for (let i = 0; i < amigos.length; i++) { //Se recorre el arreglo y se crean los elementos de la lista
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);

    }

    return;
}

/*********************************************************************************************************************/

//FUNCION PARA SORTEAR AMIGO
function sortearAmigo() {

    listaAmigos.innerHTML = "";//Se limpia la lista

    if (amigos.length > 0) {//Ciclo para recorrer el arreglo

        let amigoAleatorio = Math.floor(Math.random() * amigos.length);//Se sortea el amigo
        let amigoSorteado = amigos[amigoAleatorio];
        document.getElementById("resultado").textContent = amigoSorteado;//Se muestra en pantalla el amigo sorteado

    } else {
        alert("No hay amigos para sortear");
    }
    return;
}
