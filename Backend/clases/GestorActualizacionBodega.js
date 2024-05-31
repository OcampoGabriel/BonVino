import {bodegas} from "./Bodega.js"
import {maridajes} from "./Maridaje.js"
import {varietales} from "./Varietal.js"
import {Vino, vinos} from "./Vino.js"
import {enofilos} from "./Enofilo.js"
import {InterfazNotificacionPush} from "./InterfazNotificacionPush.js"

export class GestorActualizacionBodega{
    constructor(fechaActual, bodegasActualizables = [], bodegaSelect, vinosAActualizar, username){
        this.fechaActual = fechaActual;
        this.bodegasActualizables = bodegasActualizables;
        this.bodegaSelect = bodegaSelect;
        this.vinosAActualizar = vinosAActualizar;
        this.username = username
    }

    opcionActualizacionBodega(){
        this.getFechaActual()
        this.bodegasActualizables = []
        this.buscarBodegasActualizables()
        return this.bodegasActualizables
    }

    getFechaActual(){
        this.fechaActual = new Date
    }

    buscarBodegasActualizables(){
        for(let bodega of bodegas){
            if(bodega.estaParaActualizar(this.fechaActual)){
                this.bodegasActualizables.push(bodega.getNombre())
            }
        }
    }

    async tomarSeleccionBodega(bodegaSelect) {
        this.obtenerBodegaAActualizar(bodegaSelect)
        this.vinosAActualizar = await this.obtenerActualizacion(this.bodegaSelect.nombre);
        this.determinarVinosAActualizar()
        return this.vinosAActualizar
    }

    obtenerBodegaAActualizar(bodegaSelect){
        for (let bodega of bodegas) {
            if (bodega.nombre === bodegaSelect) {
                this.bodegaSelect = bodega;
                break; 
            }
        }
    }

    async obtenerActualizacion(bodegaSelect) {
        const url = `http://localhost:8081/actualizacion/${bodegaSelect}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`No se pudo obtener los datos de la API. Estado: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    determinarVinosAActualizar(){
        for (let vino in this.vinosAActualizar) {
            if (this.vinosAActualizar.hasOwnProperty(vino)) {
                this.actualizarOCrearVino(this.bodegaSelect.tenesEsteVino(this.vinosAActualizar[vino]), this.vinosAActualizar[vino])
            } 
        }
        this.bodegaSelect.setFechaUltimaActualizacion(this.fechaActual)
    }

    actualizarOCrearVino(desicion, vino){
        if(desicion){
            this.actualizarCaracteristicasVinoEnBodega(vino)
        } else {
            this.crearNuevoVino(vino)
        }
    }

    actualizarCaracteristicasVinoEnBodega(vino){
        this.bodegaSelect.actualizarDatosVino(vino, this.fechaActual)
    }

    crearNuevoVino(vino){
        if(this.buscarMaridaje(vino)){
            if(this.determinarExistenciaVarietal(vino)){
                this.crearVino(vino, false)
            } else {
                this.crearVino(vino, true)
            }
        };
         
    }

    buscarMaridaje(vino){
        let encontrado = false
        for(let maridajeVino of vino.maridaje){
            for(let maridaje of maridajes){
                if(maridaje.sosMaridaje(maridajeVino)){
                    encontrado = true
                }
            }
            if(! encontrado){
                return false
            }
            }
        return true
    }

    determinarExistenciaVarietal(vino){
        let encontrado = false
        for(let varietalVino of vino.varietales){
            for(let varietal of varietales){
                if(varietal.sosEsteVarietal(varietalVino)){
                    encontrado = true
                }
            }
            if(! encontrado){
                return false
            }
            }
        return true
    }

    crearVino(vinoCrear, crearVarietal){
        let nuevoVino = new Vino(vinoCrear.nombre, vinoCrear.anada, vinoCrear.imagenEtiqueta, vinoCrear.notaDeCataBodega, vinoCrear.precioARS, vinoCrear.fehaActualizacion, vinoCrear.maridaje, vinoCrear.bodega, vinoCrear.varietales)
        nuevoVino.new(crearVarietal)
    }

    buscarSeguidoresDeBodega(){
        for(let enofilo of enofilos){
            if(enofilo.seguisBodega(this.bodegaSelect.nombre)){
                this.username = enofilo.getNombreUsuario()
                let notificacion = new InterfazNotificacionPush(this.username)
                notificacion.notificarNovedadVinoParaBodega(this.bodegaSelect.nombre)
            }
        }
        this.finCU()
    }

    finCU(){
        console.log("Caso de uso finalizado");
    }

}

