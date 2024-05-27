import express from "express";
import cors from "cors";
import * as Gestor from "./clases/GestorActualizacionBodega.js";

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
        let actualizacionString = JSON.stringify(actualizacion)
        response.json(actualizacionString);
})

// Puerto donde se escuchan las peticiones
app.listen(PORT, () => {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
});



