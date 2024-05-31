import {siguiendos} from "./Siguiendo.js"
import {usuarios} from "./Usuario.js"

class Enofilo {
    constructor(id, nombre, apellido, imagenPefil) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagenPefil = imagenPefil
    }

    seguisBodega(bodega){
        for(let siguiendo of siguiendos){
            if(siguiendo.sosDeBodega(bodega, this.id)){
                return true
            }
        }
    }

    getNombreUsuario(){
        for(let usuario of usuarios){
            if(usuario.sosMiUser(this.id)){
                return usuario.getNombre()
            }
        }
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

