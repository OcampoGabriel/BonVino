// Obtiene el elemento principal
let mainContent = document.getElementById('main-content');
async function mostrarVinos() {
    const res = await fetch(`http://localhost:8080/vinos`);
    const datos = await res.json();
    let contenido = ``;

    datos.forEach(vino => {
        contenido += `
        <div class="contenedor-vino">
            <h3>${vino.nombre}</h3>
            <div class="detalle-vino">
                <img src="${vino.imagenEtiqueta}" alt="Foto del vino ${vino.nombre}" class="imagen-vino">
                <div class="info-vino">
                    <p class="titulo"> Añada </p>
                    <p class="valor">${vino.anada}</p>
                    <p class="titulo"> Bodega </p>
                    <p class="valor">${vino.bodega}</p>
                    <p class="titulo"> Nota de Cata </p> 
                    <p class="valor">${vino.notaDeCataBodega}</p>
                    <p class="titulo"> Precio (ARS) </p>
                    <p class="valor">${vino.precioARS}</p>`;
                    
                    if (vino.maridaje) {
                        contenido += `<p class="titulo"> Maridajes Sugeridos </p>`;
                        vino.maridaje.forEach(maridaje => {
                            contenido += `<p class="valorVarietal">   · ${maridaje}</p>`;
                        });
                    }
                    if (typeof vino.varietales[0] === 'object') {
                        vino.varietales.forEach(varietal => {
                            contenido += `
                            <p class="titulo"> Descripción del Varietal </p> 
                            <p class="valorVarietal">   · ${varietal.descripcion}</p>`;
                        });
                    } else {
                        contenido += `<p class="titulo"> Composicion del Varietal </p>`;
                        vino.varietales.forEach(varietal => {
                            contenido += `<p class="valorVarietal">   · ${varietal}</p>`;
                        });
                    }
                    
                    contenido += `
                </div>
            </div>
        </div>`;
    });

    mainContent.innerHTML = contenido;
}

mostrarVinos()