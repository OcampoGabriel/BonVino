import express from "express";
import cors from "cors";

const PORT = 8081;
const app = express();
app.use(cors());

class Vino {
    constructor(nombre, anada, imagenEtiqueta, notaDeCataBodega, precioARS, fehaActualizacion, maridaje, bodega, varietales = []) {
        this.nombre = nombre;
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioARS = precioARS;
        this.fehaActualizacion = fehaActualizacion;
        this.maridaje = maridaje;
        this.bodega = bodega;
        this.varietales = varietales;
    }
}

class Varietal {
    constructor(descripcion, composicion, uva) {
        this.descripcion = descripcion;
        this.composicion = composicion;
        this.uva = uva;
    }
}

export function obtenerActualizacionBodega(bodega){
    if(bodega === 'Bodega Luna'){
        return {
            vinoActualizar: new Vino('El Gaucho', 2020, '../Etiquetas/ElGauchoNuevaImagen.jpeg', 'Frutas rojas maduras y un toque de chocolate amargo', 7500, new Date(2024, 1, 23), 3, 'Bodega Luna', ["Cabernet Ácido", "Pinot Dulce", "Sauvignon Fresco"]),
            vinoNuevo: new Vino('Mansion Blanca', 2024, '../Etiquetas/MansionBlanca.jpeg', 'Aromas florales con un final de cacao. (Nuevo Varietal)', 16000, new Date(), 6, 'Bodega Luna', [new Varietal("Cabernet Salado", 99, "Cabernet Sauvignon")])
        };
    }

    if(bodega === 'Finca La Selva'){
        return {
            vinoActualizar: new Vino('Estancia 33', 2019, '../Etiquetas/Estancia33.jpeg', 'Aromas florales con un final de cacao.', 12500, new Date(2023, 4, 12), 7, 'Finca La Selva', ["Chardonnay Ligero"]),
            vinoNuevo: new Vino('Arbol Dorado', 2024, '../Etiquetas/ArbolDorado.jpeg', 'Notas de frutas rojas y un final de vainilla.', 15000, new Date(), 2, 'Finca La Selva', ["Sauvignon Vibrante", "Sauvignon Robusto"]),
        };
    }

    if(bodega === 'Santiago'){
        return {
            vinoActualizar: new Vino('La Guitera', 2021, '../Etiquetas/LaGuitera.jpeg', 'Sabores de cereza y un final de café.', 8900, new Date(2023, 7, 14), 1, 'Santiago', ["Sauvignon Vibrante", "Sauvignon Robusto"]),
            vinoNuevo: new Vino('Hotel Demolido', 2024, '../Etiquetas/HotelDemolido.jpeg', 'Sabores afrutados con un final de madera.', 7600, new Date(), 3, 'Santiago', ["Sauvignon Robusto"])
        };
    }

    if(bodega === 'Valle Central'){
        return {
            vinoActualizar: new Vino('The Bandoneon', 2020, '../Etiquetas/TheBandoneon.jpeg', 'Notas de frutas rojas y un final de vainilla.', 13200, new Date(2023, 3, 30), 7, 'Valle Central', ["Cabernet Ácido", "Sauvignon Fresco"]),
            vinoActualizar2: new Vino('Barro Tal Vez', 2019, '../Etiquetas/BarroTalVez.jpeg', 'Aromas terrosos con un toque de pimienta negra.', 9650, new Date(2023, 8, 5), 8, 'Valle Central', ["Sauvignon Floral", "Riesling Refrescante", "Pinot Frutal"]),
        };
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
