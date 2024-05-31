import {usuarios} from "./Usuario.js"

export class InterfazNotificacionPush{
    constructor(usuarioAsociado){
        this.usuarioAsociado = usuarioAsociado
    }

    // Metodo que le permite a la interfaz notificar a un enofilo sobre la actualizacion de una bodega
    notificarNovedadVinoParaBodega(bodega){
        // por cada usuario
        for(let usuario of usuarios){
            // se fija que el nombre del usuario sea el mismo que el usuario que hay que notificar
            if(usuario.username === this.usuarioAsociado){
                // le notifica al usuario
                usuario.notificacionPendiente.push(bodega)
            }
        }
    }
}
