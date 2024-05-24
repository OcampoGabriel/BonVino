import express from "express";
import cors from "cors";
import * as Gestor from "./clases/GestorActualizacionBodega.js"

const PORT = 8080;
const app = express();
app.use(cors());

app.get("/bodegasActualizables", (request, response, next) =>{
    let bodegas = Gestor.opcionActualizacionBodega()
    let jsonBodegas = JSON.stringify(bodegas);
    response.json(jsonBodegas);
})

// Puerto donde se escuchan las peticiones
app.listen(PORT, console.log(`El servidor inicio correctamente en el puerto ${PORT}`))


