import express from "express";
import cors from "cors";
import * as Gestor from "./clases/GestorActualizacionBodega.js";
import * as Vino from "./clases/Vino.js"
import * as Usuario from "./clases/Usuario.js"

const PORT = 8080;
const app = express();
app.use(cors());

app.get("/bodegasActualizables", (request, response, next) =>{
    let bodegas = Gestor.opcionActualizacionBodega()
    let jsonBodegas = JSON.stringify(bodegas);
    response.json(jsonBodegas);
})

app.get("/actualizacion/:bodega", async (request, response, next) => {
        const bodegaActualizar = request.params.bodega;
        const actualizacion = await Gestor.tomarSeleccionBodega(bodegaActualizar);
        response.json(actualizacion);
        Gestor.buscarSeguidoresDeBodega(bodegaActualizar)
})

app.get("/vinos", (request, response, next) => {
    const vinos = Vino.vinos;
    response.json(vinos);
});

app.get("/usuarios", (request, response, next) => {
    const usuarios = Usuario.usuarios
    response.json(usuarios)
});


// Puerto donde se escuchan las peticiones
app.listen(PORT, () => {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
});



