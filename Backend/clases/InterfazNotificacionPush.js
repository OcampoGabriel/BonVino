import {usuarios} from "./Usuario.js"

export class InterfazNotificacionPush{
    constructor(usuarioAsociado){
        this.usuarioAsociado = usuarioAsociado
    }

    notificarNovedadVinoParaBodega(bodega){
        for(let usuario of usuarios){
            if(usuario.username === this.usuarioAsociado){
                usuario.notificacionPendiente.push(bodega)
            }
        }
    }
}
