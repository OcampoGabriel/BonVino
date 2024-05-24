import {estaParaActualizar, getNombre} from "./Bodega.js"
function opcionActualizacionBodega(){

}

function getFechaActual(){
    return new Date ()  
}


function buscarBodegasActualizables(fechaActual){
    let arrayNombre = []
    for (let i = 1; i < 11; i++){
        let paraActualizar = estaParaActualizar(fechaActual, i)
        if (paraActualizar){
            let nombre = getNombre(i)
            arrayNombre.push(nombre)
        }
    }
    console.log(arrayNombre);
}



let fecha = getFechaActual()

buscarBodegasActualizables(fecha)