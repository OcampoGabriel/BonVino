import * as Usuario from "./Usuario.js"

export function notificarNovedadVinoParaBodega(username, bodega){
    let cantUsuario = Usuario.usuarios.length
    for(let i = 0; i < cantUsuario; i++){
        if(Usuario.usuarios[i].username === username){
            Usuario.usuarios[i].notificacionPendiente.push(bodega)

        }
    }
}