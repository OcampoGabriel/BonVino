import express from "express";
import cors from "cors";

const PORT = 8081;
const app = express();
app.use(cors());

class Vino {
    constructor(nombre, anada, imagenEtiqueta, notaDeCataBodega, precioARS, bodega, varietales = []) {
        this.nombre = nombre;
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioARS = precioARS;
        this.bodega = bodega;
        this.varietales = varietales
    }
}

export function obtenerActualizacionBodega(bodega){
    if(bodega === 'Bodega Luna'){
        return {
            vinoActualizar: new Vino('El Gaucho', 2020, '../Etiquetas/ElGauchoNuevaImagen.jpeg', 'Frutas rojas maduras y un toque de chocolate amargo.', 7500, 'Bodega Luna', ["Cabernet Ácido", "Pinot Dulce", "Sauvignon Fresco"]),
            vinoNuevo: new Vino('Mansion Blanca', 2024, '../Etiquetas/MansionBlanca.jpeg', 'Aromas florales con un final de cacao.', 16000, 'Bodega Luna', ["Cabernet Ácido", "Sauvignon Fresco"])
        };
    }

    if(bodega === 'Finca La Selva'){
        return {
            vinoActualizar: new Vino('Estancia 33', 2019, '../Etiquetas/Estancia33.jpeg', 'Aromas florales con un final de cacao.', 12500, 'Finca La Selva', ["Chardonnay Ligero"]),
            vinoNuevo: new Vino('Arbol Dorado', 2024, '../Etiquetas/ArbolDorado.jpeg', 'Notas de frutas rojas y un final de vainilla.', 15000, 'Finca La Selva', ["Sauvignon Vibrante", "Sauvignon Robusto"]),
        }
    }

    if(bodega === 'Santiago'){
        return {
            vinoActualizar: new Vino('La Guitera', 2021, '../Etiquetas/LaGuitera.jpeg', 'Sabores de cereza y un final de café.', 8900, 'Santiago', ["Sauvignon Vibrante", "Sauvignon Robusto"]),
            vinoNuevo: new Vino('Hotel Demolido', 2024, '../Etiquetas/HotelDemolido.jpeg', 'Sabores afrutados con un final de madera.', 7600, 'Santiago', ["Sauvignon Robusto"])
        }
    }

    if(bodega === 'Valle Central'){
        return {
            vinoActualizar: new Vino('The Bandoneon', 2020, '../Etiquetas/TheBandoneon.jpeg', 'Notas de frutas rojas y un final de vainilla.', 13200, 'Valle Central', ["Cabernet Ácido", "Sauvignon Fresco"]),
            vinoActualizar: new Vino('Barro Tal Vez', 2019, '../Etiquetas/BarroTalVez.jpeg', 'Aromas terrosos con un toque de pimienta negra.', 9650, 'Valle Central', ["Sauvignon Floral", "Riesling Refrescante", "Pinot Frutal"]),
        }
    }
}

app.get("/actualizacion/:bodega", async (request, response, next) => {
        const bodegaActualizar = request.params.bodega;
        const actualizacion = obtenerActualizacionBodega(bodegaActualizar);
        response.json(actualizacion);
})

// Puerto donde se escuchan las peticiones
app.listen(PORT, () => {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
});
