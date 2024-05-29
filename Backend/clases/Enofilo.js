import * as Siguiendo from "./Siguiendo.js"
import * as Usuario from "./Usuario.js"

class Enofilo {
    constructor(id, nombre, apellido, imagenPefil) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagenPefil = imagenPefil
    }
}

export const enofilos = [
    new Enofilo(1, 'Juan', 'Pérez', ''),
    new Enofilo(2, 'María', 'Gómez', ''),
    new Enofilo(3, 'Carlos', 'López', ''),
    new Enofilo(4, 'Lucía', 'Fernández', ''),
    new Enofilo(5, 'Roberto', 'Martínez', ''),
    new Enofilo(6, 'Sofía', 'Hernández', ''),
    new Enofilo(7, 'Miguel', 'Rodríguez', ''),
];

export function seguisBodega(bodega, enofilo){
    let cantSiguiendo = Siguiendo.siguiendo.length
    for (let i = 0; i < cantSiguiendo; i++){
        if(Siguiendo.sosDeBodega(bodega, enofilo, i)){
            return Usuario.getNombre(enofilo)
        }
    }

}
