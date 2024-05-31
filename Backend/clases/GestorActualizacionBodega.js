import {bodegas} from "./Bodega.js"
import {maridajes} from "./Maridaje.js"
import {varietales} from "./Varietal.js"
import {Vino} from "./Vino.js"
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
        // llama al metodo para obtener la fecha actual
        this.getFechaActual()
        this.bodegasActualizables = []
        // llama al metodo que busca la bodegas con actualizaciones disponibles
        this.buscarBodegasActualizables()
        // Le devuelve un array con los nombres de las bodegas que tienen actualizaciones disponibles
        return this.bodegasActualizables
    }

    getFechaActual(){
        // Cambia el atributo fechaActual del gestor por la fecha actual
        this.fechaActual = new Date
    }

    buscarBodegasActualizables(){
        // Por cada bodega
        for(let bodega of bodegas){
            // Le delega el trabajo a la bodega de responder si tiene una actualizacion disponible
            if(bodega.estaParaActualizar(this.fechaActual)){ // Patron Experto en Informacion, le delega la responsabilidad de hacer al que tiene los datos (esto con lleva un bajo acoplamiento y una alta cohesion)
                // En el caso de que tenga la actualizacion disponible, le pide el nombre para asi guardarlo
                this.bodegasActualizables.push(bodega.getNombre())
            }
        }
    }

    async tomarSeleccionBodega(bodegaSelect) {
        // Obtiene el puntero hacia la bodega a actualizar
        this.obtenerBodegaAActualizar(bodegaSelect)
        // Obtiene los vinos a actualizar o crear
        this.vinosAActualizar = await this.obtenerActualizacion(this.bodegaSelect.nombre);
        // Una vez que tiene la actualizacion, tiene que determinar cuales vinos hay que actualizar y cuales crear
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
        // Se conectara con la API de la bodega para recibir la actualizacion
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
        // Para cada vino contenido en la actualizacion
        for (let vino in this.vinosAActualizar) {
            if (this.vinosAActualizar.hasOwnProperty(vino)) {
                // Le delega la responsabilidad a la bodega de responderle si tiene el vino en cuestion
                // Se llama al metodo del gestor el cual se va a encargar de actualizar o crear el vino en cuestion, segun la respuesta de la bodega
                this.actualizarOCrearVino(this.bodegaSelect.tenesEsteVino(this.vinosAActualizar[vino]), this.vinosAActualizar[vino])
            } 
        }
        // Una vez que se llevo a cabo la actualizacion/creacion de vinos, se le delega la responsabilidad a la bodega de cambiar su fecha de actualizacion
        this.bodegaSelect.setFechaUltimaActualizacion(this.fechaActual)
    }

    actualizarOCrearVino(desicion, vino){
        // Se generan 2 alternativas segun si la bodega tenia o no tenia el vino (actulizar o crear)
        if(desicion){
            // Se llama al metodo del gestor con el fin de llevar a cabo la actualizacion del vino
            this.actualizarCaracteristicasVinoEnBodega(vino)
        } else {
            // Se llama al metodo del gestor con el fin de llevar a cabo la creacion del vino
            this.crearNuevoVino(vino)
        }
    }

    actualizarCaracteristicasVinoEnBodega(vino){
        // Le delega la responsabilidad de actualizar la caracteristicas del vino a la bodega
        this.bodegaSelect.actualizarDatosVino(vino, this.fechaActual)
    }

    crearNuevoVino(vino){
        // Se llama al metodo del gestor encargado de controlar si el maridaje del nuevo vino existe
        if(this.buscarMaridaje(vino)){
            // Se llama al metodo del gestor encargado de controlar si el varietal del nuevo vino existe
            if(this.determinarExistenciaVarietal(vino)){
                // Se llama al metodo del gestor encargado de crear el nuevo vino y no su varietal (ya que existe)
                this.crearVino(vino, false)
            } else {
                // Se llama al metodo del gestor encargado de crear el nuevo vino y su varietal (ya que no existe)
                this.crearVino(vino, true)
            }
        };
         
    }

    buscarMaridaje(vino){
        let encontrado = false
        // por cada maridaje del vino a crear
        for(let maridajeVino of vino.maridaje){
            // por cada maridaje existente
            for(let maridaje of maridajes){
                // Se le delega la responsabilidad al maridaje del responder si es el mismo que el maridaje del vino a crear
                if(maridaje.sosMaridaje(maridajeVino)){
                    encontrado = true
                }
            }
            // si no lo encontro, devuelve que no lo encontro
            if(! encontrado){
                return false
            }
            }
        return true
    }

    determinarExistenciaVarietal(vino){
        let encontrado = false
        // por cada varietal del vino a crear
        for(let varietalVino of vino.varietales){
            // por cada varietal existente
            for(let varietal of varietales){
                // Se le delega la responsabilidad al varietal del responder si es el mismo que el varietal del vino a crear
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

    // Crea el vino
    crearVino(vinoCrear){
        // Utiliza el caso especifico del EXPERTO RESPECTO DE LA CREACION (creador y experto), ya que, no solo es el encargado de crearlo, si no que tiene todos los datos necesarios para llevar a cabo la creacion
        new Vino(vinoCrear.nombre, vinoCrear.anada, vinoCrear.imagenEtiqueta, vinoCrear.notaDeCataBodega, vinoCrear.precioARS, vinoCrear.fehaActualizacion, vinoCrear.maridaje, vinoCrear.bodega, vinoCrear.varietales)
    }

    buscarSeguidoresDeBodega(){
        // por cada enofilo existente
        for(let enofilo of enofilos){
            // Le delega la responsabilidad al enofilo de responder si sigue a la bodega
            if(enofilo.seguisBodega(this.bodegaSelect.nombre)){
                // Si el enofilo sigue a la bodega, el gestor se guardara su username, solicitandole al enofilo que le de su nombre de usuario
                this.username = enofilo.getNombreUsuario()
                // se crea una notificacion
                let notificacion = new InterfazNotificacionPush(this.username)
                // se le delega la responsabilidad a la notificacion (instancia de la clase de InterfazNotificacionPush) de informarle a la cuenta del enofilo
                notificacion.notificarNovedadVinoParaBodega(this.bodegaSelect.nombre)
            }
        }
        // Finaliza el caso de uso
        this.finCU()
    }

    // Avisamos por consola que se llevo a cabo un ciclo del CU
    finCU(){
        console.log("Caso de uso finalizado");
    }

}

