import {Varietal} from "./Varietal.js"

export class Vino {
    constructor(nombre, anada, imagenEtiqueta, notaDeCataBodega, precioARS, fehaActualizacion, maridaje = [], bodega, varietales = []) {
        this.nombre = nombre;
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioARS = precioARS;
        this.fehaActualizacion = fehaActualizacion;
        this.maridaje = maridaje;
        this.bodega = bodega;
        this.varietales = varietales;

        Vino.vinos.push(this);

        // Se crear el varietal del vino si es que no existe
        if (this.varietales[0] && typeof this.varietales[0] === 'object') {
            // Utiliza el caso especifico del EXPERTO RESPECTO DE LA CREACION (creador y experto), ya que, no solo es el encargado de crearlo, si no que tiene todos los datos necesarios para llevar a cabo la creacion
            new Varietal(this.varietales[0].descripcion, this.varietales[0].composicion, this.varietales[0].uva)

        }
    }

    sosEsteVino(vino){
        if(this.nombre === vino.nombre && this.anada === vino.anada){
                return true
            } else{
                return false
            }
        }

    esVinoPorActualizar(vino){
        if(this.nombre === vino.nombre && this.anada === vino.anada){
                return true
            } else{
                return false
            }
    }

    setPrecio(nuevoPrecio){
        this.precioARS = nuevoPrecio
    }

    setNotaDeCata(nuevaNota){
        this.notaDeCataBodega = nuevaNota
    }

    setEtiqueta(nuevaEtiqueta){
        this.imagenEtiqueta = nuevaEtiqueta
    }

    setFechaActualizacion(nuevaFecha){
        this.fehaActualizacion = nuevaFecha
    }
}

Vino.vinos = [];

new Vino('El Gaucho', 2020, '../Etiquetas/ElGaucho.jpeg', 'Frutas rojas maduras y un toque de chocolate amargo.', 5500, new Date(2024, 1, 23), ['Postre muy dulce', 'Pescado blanco'], 'Bodega Luna', ["Cabernet Ácido", "Pinot Dulce", "Sauvignon Fresco"]),
new Vino('Estancia 33', 2019, '../Etiquetas/Estancia33.jpeg', 'Aromas florales con un final de cacao.', 12000, new Date(2023, 4, 12), ['Tira de asado'], 'Finca La Selva', ["Chardonnay Ligero"]),
new Vino('La Pera', 2021, '../Etiquetas/LaPera.jpeg', 'Sabores afrutados con un toque de madera.', 7000, new Date(2022, 8, 7), ['Solomillo de cerdo'], 'Bodega Luna', ["Cabernet Intenso", "Cabernet Especiado"]),
new Vino('Morgan', 2022, '../Etiquetas/Morgan.jpeg', 'Notas de durazno y un final ácido.', 6800, new Date(2023, 10, 15), ['Lenguado a la plancha'], 'Bodega Lopez', ["Sauvignon Fresco", "Cabernet Suave", "Merlot Afrutado"]),
new Vino('Jilguero', 2021, '../Etiquetas/Jilguero.jpeg', 'Sabores de frutas del bosque con un toque de vainilla.', 4900, new Date(2023, 6, 29), ['Postre muy dulce', 'Ensalada de mariscos'], 'Los Jeroldos', ["Sauvignon Afrutado", "Pinot Noir Robusto"]),
new Vino('La Bengalla', 2020, '../Etiquetas/LaBengalla.jpeg', 'Notas de frutas negras y un final especiado.', 5550, new Date(2022, 2, 18), ['Tira de asado', 'Pescado blanco'], 'Costa Verde', ["Sauvignon Seductor", "Cabernet Elegante"]),
new Vino('Barro Tal Vez', 2019, '../Etiquetas/BarroTalVez.jpeg', 'Aromas terrosos con un toque de pimienta negra.', 6650, new Date(2023, 8, 5), ['Postre muy dulce'], 'Valle Central', ["Sauvignon Floral", "Riesling Refrescante", "Pinot Frutal"]),
new Vino('Twenty Cities', 2021, '../Etiquetas/TwentyCities.png', 'Sabores de frutas del bosque con un final de cuero.', 5720, new Date(2023, 1, 21), ['Salmón rosado'], 'Finca La Selva', ["Sauvignon Taninosos", "Cabernet Potente"]),
new Vino('El Mate', 2022, '../Etiquetas/ElMate.jpeg', 'Notas herbáceas y un final de tabaco.', 9820, new Date(2023, 11, 8), ['Solomillo de cerdo'], 'Rio de Janeiro', ["Cabernet Complejo", "Sauvignon Elegante", "Sauvignon Vibrante"]),
new Vino('La Guitera', 2021, '../Etiquetas/LaGuitera.jpeg', 'Sabores de cereza y un final de café.', 4920, new Date(2023, 7, 14), ['Postre muy dulce'], 'Santiago', ["Sauvignon Vibrante", "Sauvignon Robusto"]),
new Vino('The Bandoneon', 2020, '../Etiquetas/TheBandoneon.jpeg', 'Notas de frutas rojas y un final de vainilla.', 7520, new Date(2023, 3, 30), ['Postre de chocolate'], 'Valle Central', ["Cabernet Ácido", "Sauvignon Fresco"]),
new Vino('Punte', 2019, '../Etiquetas/Punte.jpeg', 'Aromas florales con un toque de chocolate.', 7620, new Date(2023, 0, 17), ['Champagne con ostras'], 'Finca La Selva', ["Sauvignon Seductor", "Sauvignon Floral"]),
new Vino('El Balcetto', 2021, '../Etiquetas/ElBalcetto.jpeg', 'Sabores afrutados con un final de madera.', 6720, new Date(2023, 9, 24), ['Carne roja a la parrilla'], 'Bodega Luna', ["Cabernet Especiado", "Cabernet Intenso"]),
new Vino('Oboi', 2022, '../Etiquetas/Oboi.jpeg', 'Notas de durazno y un final ácido.', 5820, new Date(2023, 5, 3), ['Pescado blanco'], 'Bodega Lopez', ["Cabernet Suave"]),
new Vino('Ganges', 2021, '../Etiquetas/Ganges.jpeg', 'Sabores de frutas del bosque con un toque de vainilla.', 4920, new Date(2023, 2, 27), ['Postre muy dulce'], 'Los Jeroldos', ["Cabernet Potente", "Sauvignon Seductor"])

export let vinos = Vino.vinos;




