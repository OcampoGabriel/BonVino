import {siguiendos} from "./Siguiendo.js"
import {usuarios} from "./Usuario.js"

class Enofilo {
    constructor(id, nombre, apellido, imagenPefil) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagenPefil = imagenPefil
    }

    // Metodo con el cual el enofilo puede responder si sigue a una bodega en cuestion
    seguisBodega(bodega){
        // por cada siguiendo existente
        for(let siguiendo of siguiendos){
            // le delega la responsabilidad de responder si en ese siguiendo el enofilo sigue a la bodega
            if(siguiendo.sosDeBodega(bodega, this.id)){
                return true
            }
        }
    }

    // Metodo que le permite responder al enofilo con su nombre de usuario
    getNombreUsuario(){
        // por cada usuario existente
        for(let usuario of usuarios){
            // le delega la responsabilidad al usuario de responder si es del enofilo o no
            if(usuario.sosMiUser(this.id)){
                // le delega la responsabilidad al usuario de pasarle su username (nombre del usuario del enofilo)
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

