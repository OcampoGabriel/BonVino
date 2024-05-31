class PantallaActualizacionBodega {
    constructor() {
        this.botonImportarActualizacionDeVinoDeBodega = null;
        this.botonImportar = null;
        this.bodegasActualizables = null;
        this.divBodegas = null;
        this.grillaBodegasActualizables = null;
        this.actulizacion = null;
        this.resumenActualizacion = null;
    }

    seleccionarOpcionActualizacionBodega() {
        // Llama al metodo habilitar ventana
        this.habilitarVentana();
    }

    habilitarVentana() {
        // Habilita la ventana con las bodegas actualizables
        window.location.href = "./importarActualizaciones/importar.html";
    }

    async mostrarBodegasActualizables() {
        console.log("Ejecutando mostrarBodegasActualizables");
        this.divBodegas = document.getElementById("bodegasActualizables");
        if (this.divBodegas) {
            try {
                this.grillaBodegasActualizables = `<form id="formularioBodegas">`;
                // recorre las bodegas actualizables
                this.bodegasActualizables.forEach((bodega, index) => {
                    this.grillaBodegasActualizables += `
                        <input type="checkbox" id="bodega${index}" name="bodega" value="${bodega}">
                        <label for="bodega${index}">${bodega}</label><br>
                    `;
                });

                if (this.grillaBodegasActualizables === '<form id="formularioBodegas">') {
                    this.grillaBodegasActualizables = "<h4>No hay bodegas con actualizaciones disponibles en este momento</h4>";
                } else {
                    this.grillaBodegasActualizables += `</form>`;
                }

                this.divBodegas.innerHTML = this.grillaBodegasActualizables;
            } catch (error) {
                console.error("Error al obtener las bodegas actualizables:", error);
            }
        } else {
            console.error("El div bodegasActualizables no se encontró en el DOM");
        }
    }

    async tomarSeleccionBodega() {
        const radios = document.querySelectorAll('input[name="bodega"]');
        this.resumenActulizacion = `<a href="./importar.html"><button><i class="bi bi-arrow-left"></i>  Listo</button></a>
                        <h1> Resumen de Actualizacion </h1>`;
        for (const radio of radios) {
            if (radio.checked) {
                const valorSeleccionado = radio.value;
                // La pantalla le pasa la bodega que se quiere actualizar al gestor
                const response = await fetch(`http://localhost:8080/actualizacion/${valorSeleccionado}`);
                this.actualizacion = await response.json();
                
                for (let key in this.actualizacion) {
                    if (this.actualizacion.hasOwnProperty(key)) {
                        if (key[4] === 'A') {
                            this.resumenActulizacion += `
                                <div class="contenedor-vino">
                                    <h3>Actualizado: ${this.actualizacion[key].nombre}</h3>
                                    <div class="detalle-vino">
                                        <img src="${this.actualizacion[key].imagenEtiqueta}" alt="Foto del vino ${this.actualizacion[key].nombre}" class="imagen-vino">
                                        <div class="info-vino">
                                            <p class="titulo"> Añada </p>
                                            <p class="valor">${this.actualizacion[key].anada}</p>
                                            <p class="titulo"> Bodega </p>
                                            <p class="valor">${this.actualizacion[key].bodega}</p>
                                            <p class="titulo"> Nota de Cata </p>
                                            <p class="valor">${this.actualizacion[key].notaDeCataBodega}</p>
                                            <p class="titulo"> Precio (ARS) </p>
                                            <p class="valor">${this.actualizacion[key].precioARS}</p>`;
                            if (this.actualizacion[key].maridaje) {
                                this.resumenActulizacion += `<p class="titulo"> Maridajes Sugeridos </p>`;
                                this.actualizacion[key].maridaje.forEach(maridaje => {
                                    this.resumenActulizacion += `<p class="valorVarietal">   · ${maridaje}</p>`;
                                });
                            }
                            if (this.actualizacion[key].varietales) {
                                this.resumenActulizacion += `<p class="titulo"> Composicion del Varietal </p>`;
                                this.actualizacion[key].varietales.forEach(varietal => {
                                    this.resumenActulizacion += `<p class="valorVarietal">   · ${varietal}</p>`;
                                });
                            }
                            this.resumenActulizacion += `
                                        </div>
                                    </div>
                                </div>`;
                        } else {
                            this.resumenActulizacion += `
                                <div class="contenedor-vino">
                                    <h3>Nuevo: ${this.actualizacion[key].nombre}</h3>
                                    <div class="detalle-vino">
                                        <img src="${this.actualizacion[key].imagenEtiqueta}" alt="Foto del vino ${this.actualizacion[key].nombre}" class="imagen-vino">
                                        <div class="info-vino">
                                            <p class="titulo"> Añada </p>
                                            <p class="valor">${this.actualizacion[key].anada}</p>
                                            <p class="titulo"> Bodega </p>
                                            <p class="valor">${this.actualizacion[key].bodega}</p>
                                            <p class="titulo"> Nota de Cata </p>
                                            <p class="valor">${this.actualizacion[key].notaDeCataBodega}</p>
                                            <p class="titulo"> Precio (ARS) </p>
                                            <p class="valor">${this.actualizacion[key].precioARS}</p>`;
                            if (this.actualizacion[key].maridaje) {
                                this.resumenActulizacion += `<p class="titulo"> Maridajes Sugeridos </p>`;
                                this.actualizacion[key].maridaje.forEach(maridaje => {
                                    this.resumenActulizacion += `<p class="valorVarietal">   · ${maridaje}</p>`;
                                });
                            }
                            if (typeof this.actualizacion[key].varietales[0] === 'object') {
                                this.actualizacion[key].varietales.forEach(varietal => {
                                    this.resumenActulizacion += `
                                        <p class="titulo"> Descripción del Varietal </p>
                                        <p class="valorVarietal">   · ${varietal.descripcion}</p>`;
                                });
                            } else {
                                if (this.actualizacion[key].varietales) {
                                this.resumenActulizacion += `<p class="titulo"> Composicion del Varietal </p>`;
                                this.actualizacion[key].varietales.forEach(varietal => {
                                    this.resumenActulizacion += `<p class="valorVarietal">   · ${varietal}</p>`;
                                });
                            }
                            }
                            this.resumenActulizacion += `</div>
                                    </div>
                                </div>`;
                        }
                    }
                }

                this.mostrarResumenActualizacion(this.resumenActulizacion);
            }
        };
    }

    mostrarResumenActualizacion(contenido){
        const divActulizable = document.getElementById("actualizable");
        divActulizable.innerHTML = contenido
    }
}


