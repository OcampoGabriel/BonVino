function seleccionarOpcionActualizacionBodega(){
    habilitarVentana()
}


function habilitarVentana(){
    window.location.href = "./importarActualizaciones/importar.html";
}

async function mostrarBodegasActualizables(){
    const divBodegas = document.getElementById("bodegasActualizables");
    if(divBodegas){
        const res = await fetch(`http://localhost:8080/bodegasActualizables`);
        const datos = await res.json();

        // Convertir la cadena JSON en un array de JavaScript
        const bodegasArray = JSON.parse(datos);

        let contenido = `<form id="formularioBodegas">`;

        bodegasArray.forEach((bodega, index) => {
            contenido += `
                <input type="radio" id="bodega${index}" name="bodega" value="${bodega}">
                <label for="bodega${index}">${bodega}</label><br>
            `;
        });

        // Verificar si contenido sigue siendo el mismo
        if (contenido === '<form id="formularioBodegas">') {
            contenido = "<h4>No hay bodegas con actualizaciones disponibles en este momento</h4>";
        } else {
            contenido += `</form>`;
        }

        divBodegas.innerHTML = contenido;
    }
}


// Función para manejar la selección de la bodega
async function tomarSeleccionBodega(){
    const divActulizable = document.getElementById("actualizable");
    // Obtener todos los elementos de radio con nombre "bodega"
    const radios = document.querySelectorAll('input[name="bodega"]');
    
    // Recorrer todos los elementos de radio
    radios.forEach(async radio => {
        // Verificar si el radio está seleccionado
        if(radio.checked){
            // Obtener el valor del radio seleccionado
            const valorSeleccionado = radio.value;
            
            const response = await fetch(`http://localhost:8080/actualizacion/${valorSeleccionado}`);
            const datos = await response.json();


            let contenido = `<a href="./importar.html"><button><i class="bi bi-arrow-left"></i>  Listo</button></a>
                             <h1> Resumen de Actualizacion </h1>`;

            for (let key in datos) {
                    // Verifica si el atributo es propio del objeto y no heredado
                    if (datos.hasOwnProperty(key)) {
                        // Agrega el nombre del vino al contenido HTML
                        if(key[4] == 'A'){
                                contenido += `
                                    <div class="contenedor-vino">
                                        <h3>Actualizado: ${datos[key].nombre}</h3>
                                        <div class="detalle-vino">
                                            <img src="${datos[key].imagenEtiqueta}" alt="Foto del vino ${datos[key].nombre}" class="imagen-vino">
                                            <div class="info-vino">
                                                <p class="titulo"> Añada </p>
                                                <p class="valor">${datos[key].anada}</p>
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

            contenido += ``;
            divActulizable.innerHTML = contenido;
            
            
            // Detener el bucle forEach
            return;
        }
    });
}


