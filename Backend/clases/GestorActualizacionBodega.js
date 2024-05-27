import * as Bodega from "./Bodega.js";
import * as Maridaje from "./Maridaje.js";
import * as Varietal from "./Varietal.js";
import * as Vino from "./Vino.js"

export function opcionActualizacionBodega() {
    let fecha = getFechaActual()
    let bodegasActualizables = buscarBodegasActualizables(fecha) 
    return bodegasActualizables;
}

export function getFechaActual() {
    return new Date();
}

export function buscarBodegasActualizables(fechaActual) {
    let arrayNombre = [];
    let cantBodegas = Bodega.bodegas.length;
    for (let i = 0; i < cantBodegas; i++) {
        let paraActualizar = Bodega.estaParaActualizar(fechaActual, i);
        if (paraActualizar) {
            let nombre = Bodega.getNombre(i);
            arrayNombre.push(nombre);
        }
    }
    return arrayNombre;
}


export async function tomarSeleccionBodega(bodegaSelect) {
    let vinos = await obtenerActualizacion(bodegaSelect);
    // Verificar si 'vinos' es un objeto
    if (vinos && typeof vinos === 'object') {
        for (let key in vinos) {
            if (vinos.hasOwnProperty(key)) {
                let queHacer = determinarVinosAActualizar(bodegaSelect, vinos[key]);
                actualizarOCrearVino(bodegaSelect, vinos[key], queHacer)
            }
        }
        let fechaActual = new Date
        Bodega.setFechaUltimaActualizacion(fechaActual, bodegaSelect)
    }
    return vinos
}


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

export function determinarVinosAActualizar(bodega, vino){
    return Bodega.tenesEsteVino(bodega, vino)
}

function actualizarOCrearVino(bodega, vino, trabajo){
    if (trabajo === 'actualizar'){
        actualizarCaracteristicasVinoEnBodega(vino, bodega)
    }

    if (trabajo === 'crear'){
        if(buscarMaridaje(vino.maridaje)){
            let varietalExiste = determinarExistenciaDeVarietal(vino.varietales)
            crearVino(vino, varietalExiste)
        }
    }
}

function actualizarCaracteristicasVinoEnBodega(vino, bodega){
    Bodega.actualizarDatosVino(vino, bodega)
}

function buscarMaridaje(maridaje){
    return Maridaje.sosMaridaje(maridaje)
}

function determinarExistenciaDeVarietal(varietal){
    let cantVarietales = varietal.length
    for(let i = 0; i < cantVarietales; i++){
        return Varietal.sosEsteVarietal(varietal, i)
    }
}

function crearVino(vino, varietalExiste){
    Vino.neW(vino, varietalExiste)
}
