const divBodegas = document.getElementById("bodegasActualizables");

async function mostrarBodegasActualizables(){
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


function seleccionarOpcionActualizacionBodega(){
    habilitarVentana()
}


function habilitarVentana(){
    window.location.href = "./importarActualizaciones/importar.html";
}


