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

        contenido += `</form>`;
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
            // Convertir la cadena JSON en un array de JavaScript
            const vinoArray = JSON.parse(datos);


            let contenido = ``;

            for(let vino in vinoArray){
                console.log(vino);
                    contenido += `
                                                <h3>${vino.nombre}</h3>
                                            `;
            }

            contenido += ``;
            divActulizable.innerHTML = contenido;
            
            
            // Detener el bucle forEach
            return;
        }
    });
}


