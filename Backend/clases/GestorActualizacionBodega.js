import { estaParaActualizar, getNombre, bodegas } from "./Bodega.js";

export function opcionActualizacionBodega() {
    let fecha = getFechaActual()
    let bodegasActualizables = buscarBodegasActualizables(fecha) // Cambiar el nombre de la variable
    return bodegasActualizables;
}

export function getFechaActual() {
    return new Date();
}

export function buscarBodegasActualizables(fechaActual) {
    let arrayNombre = [];
    let cantBodegas = bodegas.length;
    for (let i = 0; i < cantBodegas; i++) {
        let paraActualizar = estaParaActualizar(fechaActual, i);
        if (paraActualizar) {
            let nombre = getNombre(i);
            arrayNombre.push(nombre);
        }
        console.log(i)
    }
    return arrayNombre;
}
