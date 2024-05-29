// El usuario selecciono la opcion para actualizar bodegas
function seleccionarOpcionActualizacionBodega(){
    // Habilita una nueva ventana
    habilitarVentana()
}


function habilitarVentana(){
    window.location.href = "./importarActualizaciones/importar.html";
}

// Accede al API que devuelve las bodegas con actualizacion disponible y las muestra
async function mostrarBodegasActualizables(){
    const divBodegas = document.getElementById("bodegasActualizables");
    if(divBodegas){
        const res = await fetch(`http://localhost:8080/bodegasActualizables`);
        const datos = await res.json();

        
        const bodegasArray = JSON.parse(datos);

        let contenido = `<form id="formularioBodegas">`;

        bodegasArray.forEach((bodega, index) => {
            contenido += `
                <input type="checkbox" id="bodega${index}" name="bodega" value="${bodega}">
                <label for="bodega${index}">${bodega}</label><br>
            `;
        });

        
        if (contenido === '<form id="formularioBodegas">') {
            contenido = "<h4>No hay bodegas con actualizaciones disponibles en este momento</h4>";
        } else {
            contenido += `</form>`;
        }

        divBodegas.innerHTML = contenido;
    }
}


// Toma la bodega seleccionada por el usuario
async function tomarSeleccionBodega(){
    const radios = document.querySelectorAll('input[name="bodega"]');
    let contenido = `<a href="./importar.html"><button><i class="bi bi-arrow-left"></i>  Listo</button></a>
                    <h1> Resumen de Actualizacion </h1>`;
    radios.forEach(async radio => {
        if(radio.checked){
            const valorSeleccionado = radio.value;
            // Llama al gestor para que este actualice los datos de la bodega seleccionada
            const response = await fetch(`http://localhost:8080/actualizacion/${valorSeleccionado}`);
            const datos = await response.json();

            for (let key in datos) {
                    if (datos.hasOwnProperty(key)) {
                        if(key[4] == 'A'){
                                contenido += `
                                    <div class="contenedor-vino">
                                        <h3>Actualizado: ${datos[key].nombre}</h3>
                                        <div class="detalle-vino">
                                            <img src="${datos[key].imagenEtiqueta}" alt="Foto del vino ${datos[key].nombre}" class="imagen-vino">
                                            <div class="info-vino">
                                                <p class="titulo"> Añada </p>
                                                <p class="valor">${datos[key].anada}</p>
                                                <p class="titulo"> Bodega </p>
                                                <p class="valor">${datos[key].bodega}</p>
                                                <p class="titulo"> Nota de Cata </p> 
                                                <p class="valor">${datos[key].notaDeCataBodega}</p>
                                                <p class="titulo"> Precio (ARS) </p>
                                                <p class="valor">${datos[key].precioARS}</p>
                                                <p class="titulo"> Varietales </p>
                                                <p class="valor">${datos[key].varietales}</p>
                                            </div>
                                        </div>
                                    </div>`;
                        }
                        else{
                                contenido += `
                                    <div class="contenedor-vino">
                                        <h3>Nuevo: ${datos[key].nombre}</h3>
                                        <div class="detalle-vino">
                                            <img src="${datos[key].imagenEtiqueta}" alt="Foto del vino ${datos[key].nombre}" class="imagen-vino">
                                            <div class="info-vino">
                                                <p class="titulo"> Añada </p>
                                                <p class="valor">${datos[key].anada}</p>
                                                <p class="titulo"> Bodega </p>
                                                <p class="valor">${datos[key].bodega}</p>
                                                <p class="titulo"> Nota de Cata </p> 
                                                <p class="valor">${datos[key].notaDeCataBodega}</p>
                                                <p class="titulo"> Precio (ARS) </p>
                                                <p class="valor">${datos[key].precioARS}</p>`;
                                                if (typeof datos[key].varietales[0] === 'object') {
                                                    datos[key].varietales.forEach(varietal => {
                                                    // Accede a las propiedades del objeto 'varietal'
                                                    contenido += `
                                                        <p class="titulo"> Descripción del Varietal </p> 
                                                        <p class="valor">${varietal.descripcion}</p>
                                                        </div>
                                                    </div>
                                                </div>`;
                                                })
                                                } else {
                                                    contenido += `<p class="titulo"> Descripción del Varietal </p> 
                                                    <p class="valor">${datos[key].varietales}</p>
                                                    </div>
                                                </div>
                                            </div>`
                                        };
                        }
                    }
                }
            mostrarResumenActualizacion(contenido)
        }
    });
}

function mostrarResumenActualizacion(contenido){
    const divActulizable = document.getElementById("actualizable");
    divActulizable.innerHTML = contenido
}

