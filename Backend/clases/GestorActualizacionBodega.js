import * as Bodega from "./Bodega.js";
import * as Maridaje from "./Maridaje.js";
import * as Varietal from "./Varietal.js";
import * as Vino from "./Vino.js"
import * as Enofilo from "./Enofilo.js"
import * as InterfazPush from "./InterfazNotificacionPush.js"


// Comienza con el proceso de buscar aquellas bodegas que tienen una actualizacion disponible
export function opcionActualizacionBodega() {
    // Consigue la fecha actual para poder contrastar con la fecha de ultima actualizacion de las bodegas
    let fecha = getFechaActual()
    // Llama a la funcion que va a buscar las bodegas actualizables
    let bodegasActualizables = buscarBodegasActualizables(fecha) 
    // Devuelve el array de bodegas con actualizacion disponible
    return bodegasActualizables;
}

export function getFechaActual() {
    return new Date();
}

export function buscarBodegasActualizables(fechaActual) {
    let arrayBodegas = [];
    let cantBodegas = Bodega.bodegas.length;
    for (let i = 0; i < cantBodegas; i++) {
        // Se va a comunicar con las Bodegas para que las mismas chequeen si estan para actualizar
        let paraActualizar = Bodega.estaParaActualizar(fechaActual, i);
        if (paraActualizar) {
            // Si estan para actualizar, les va a solicitar el nombre
            let nombre = Bodega.getNombre(i);
            arrayBodegas.push(nombre);
        }
    }
    // Devuelve el array de bodegas con actualizacion disponible
    return arrayBodegas;
}

// El gestor toma la bodega que le mando la pantalla
export async function tomarSeleccionBodega(bodegaSelect) {
    // El gestor se encarga de buscar la actualizacion para la bodega
    let vinos = await obtenerActualizacion(bodegaSelect);
    if (vinos && typeof vinos === 'object') {
            // Esta funcion se encarga de separar aquellos vinos que hay que actualizar y aquellos que hay que crear
            determinarVinosAActualizar(vinos, bodegaSelect);
        }
        let fechaActual = new Date
        // Una vez creados y actualizados los vinos, el gestor le delega la responsabilidad a bodega de actualizar su fecha de actualizacion.
        Bodega.setFechaUltimaActualizacion(fechaActual, bodegaSelect)

    // Devuelve los vinos que se actualizaron/crearon para que la pantalla los pueda procesar
    return vinos
}

// El gestor se comunica con la API de la bodega seleccionada para obtener los datos de la actualizacion
export async function obtenerActualizacion(bodegaSelect){
    const url = `http://localhost:8081/actualizacion/${bodegaSelect}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo obtener los datos de la API. Estado: ${response.status}`);
            }
            return response.json();
        })
}

export function determinarVinosAActualizar(vinos, bodega){
    // Hace un loop para cada vino que pertenezca a la actualizacion
    for (let key in vinos) {
    if (vinos.hasOwnProperty(key)) {
        // Llama a la bodega para preguntarle si tiene el vino (esta le respondera si hay que crearlo o actualizarlo)
        let queHacer = Bodega.tenesEsteVino(bodega, vinos[key]);
        // El gestor se encargara de realizar la creacion o la actualizacion
        actualizarOCrearVino(bodega, vinos[key], queHacer)
    }
}
}

function actualizarOCrearVino(bodega, vino, trabajo){
    if (trabajo === 'actualizar'){
        // Si el trabajo es actualizar el vino de la bodega
        actualizarCaracteristicasVinoEnBodega(vino, bodega)
    }

    if (trabajo === 'crear'){
        // El gestor se llama a si mismo para buscar si el maridaje existe
        if(buscarMaridaje(vino.maridaje)){
            let varietalExiste = determinarExistenciaDeVarietal(vino.varietales)
            // El gestor se llama a si mismo para crear el vino
            crearVino(vino, varietalExiste)
        }
    }
}

function actualizarCaracteristicasVinoEnBodega(vino, bodega){
    // Le delega el trabajo a la bodega de actualizar su vino
    Bodega.actualizarDatosVino(vino, bodega)
}

function buscarMaridaje(maridajes){
    // Le delega la responsabilidad al Maridaje de responder si es el solicitado
    for(let maridaje of maridajes){
        if(!Maridaje.sosMaridaje(maridaje)){
            return false
        }
    }
    return true
}

function determinarExistenciaDeVarietal(varietal){
    let cantVarietales = varietal.length
    // Hace un ciclo donde para cada varietal le delega la responsabilidad de responder si es el solicitado
    for(let i = 0; i < cantVarietales; i++){
        return Varietal.sosEsteVarietal(varietal, i)
    }
}

function crearVino(vino, varietalExiste){
    // Le delega la responabilidad al vino de crearse
    Vino.neW(vino, varietalExiste)
}

export function buscarSeguidoresDeBodega(bodegaSelect){
    let cantEnofilos = Enofilo.enofilos.length + 1
    for(let idEno = 1; idEno < cantEnofilos; idEno++){
        let username = Enofilo.seguisBodega(bodegaSelect, idEno)
        if(username){
            InterfazPush.notificarNovedadVinoParaBodega(username, bodegaSelect)
        }
    }
    finCU()
}

function finCU(){
    // Terminamos el CU
}