import * as Bodega from "./Bodega.js";

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
    } 
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
        actualizarCaracteristicasVinoEnBodega(vino)
    }

    if (trabajo === 'crear'){

    }
}

function actualizarCaracteristicasVinoEnBodega(vino){
    Bodega.actualizarDatosVino(vino)
}

tomarSeleccionBodega("Bodega Luna")