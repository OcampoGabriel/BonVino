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


export function tomarSeleccionBodega(bodegaSelect){
    return obtenerActualizacion(bodegaSelect)
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