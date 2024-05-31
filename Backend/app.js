import express from "express";
import cors from "cors";
import {GestorActualizacionBodega} from "./clases/GestorActualizacionBodega.js"
import {vinos} from "./clases/Vino.js"
import {usuarios} from "./clases/Usuario.js"

const PORT = 8080;
const app = express();
app.use(cors());

const gestor = new GestorActualizacionBodega

app.get("/bodegasActualizables", (request, response, next) =>{
    let bodegas = gestor.opcionActualizacionBodega()
    let jsonBodegas = JSON.stringify(bodegas);
    response.json(jsonBodegas);
})

app.get("/actualizacion/:bodega", async (request, response, next) => {
        const bodegaActualizar = request.params.bodega;
        const actualizacion = await gestor.tomarSeleccionBodega(bodegaActualizar);
        response.json(actualizacion);
        gestor.buscarSeguidoresDeBodega(bodegaActualizar)
})

app.get("/vinos", (request, response, next) => {
    response.json(vinos);
});

app.get("/usuarios", (request, response, next) => {
    response.json(usuarios)
});


// Puerto donde se escuchan las peticiones
app.listen(PORT, () => {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
});



