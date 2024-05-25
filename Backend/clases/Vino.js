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


let vinos = [
    new Vino('El Gaucho', 2020, '../Etiquetas/ElGaucho.jpeg', 'Frutas rojas maduras y un toque de chocolate amargo.', 5500, 'Bodega Luna', ["Cabernet Ácido", "Pinot Dulce", "Sauvignon Fresco"]),
    new Vino('Estancia 33', 2019, '../Etiquetas/Estancia33.jpeg', 'Aromas florales con un final de cacao.', 12000, 'Finca La Selva', ["Chardonnay Ligero"]),
    new Vino('La Pera', 2021, '../Etiquetas/LaPera.jpeg', 'Sabores afrutados con un toque de madera.', 7000, 'Bodega Luna', ["Cabernet Intenso", "Cabernet Especiado"]),
    new Vino('Morgan', 2022, '../Etiquetas/Morgan.jpeg', 'Notas de durazno y un final ácido.', 6800, 'Bodega Lopez', ["Sauvignon Fresco", "Cabernet Suave", "Merlot Afrutado"]),
    new Vino('Jilguero', 2021, '../Etiquetas/Jilguero.jpeg', 'Sabores de frutas del bosque con un toque de vainilla.', 4900, 'Los Jeroldos', ["Sauvignon Afrutado", "Pinot Noir Robusto"]),
    new Vino('La Bengalla', 2020, '../Etiquetas/LaBengalla.jpeg', 'Notas de frutas negras y un final especiado.', 5550, 'Costa Verde', ["Sauvignon Seductor", "Cabernet Elegante"]),
    new Vino('Barro Tal Vez', 2019, '../Etiquetas/BarroTalVez.jpeg', 'Aromas terrosos con un toque de pimienta negra.', 6650, 'Valle Central', ["Sauvignon Floral", "Riesling Refrescante", "Pinot Frutal"]),
    new Vino('Twenty Cities', 2021, '../Etiquetas/TwentyCities.png', 'Sabores de frutas del bosque con un final de cuero.', 5720, 'Finca La Selva', ["Sauvignon Taninosos", "Cabernet Potente"]),
    new Vino('El Mate', 2022, '../Etiquetas/ElMate.jpeg', 'Notas herbáceas y un final de tabaco.', 9820, 'Rio de Janeiro', ["Cabernet Complejo", "Sauvignon Elegante", "Sauvignon Vibrante"]),
    new Vino('La Guitera', 2021, '../Etiquetas/LaGuitera.jpeg', 'Sabores de cereza y un final de café.', 4920, 'Santiago', ["Sauvignon Vibrante", "Sauvignon Robusto"]),
    new Vino('The Bandoneon', 2020, '../Etiquetas/TheBandoneon.jpeg', 'Notas de frutas rojas y un final de vainilla.', 7520, 'Valle Central', ["Cabernet Ácido", "Sauvignon Fresco"]),
    new Vino('Punte', 2019, '../Etiquetas/Punte.jpeg', 'Aromas florales con un toque de chocolate.', 7620, 'Finca La Selva', ["Sauvignon Seductor", "Sauvignon Floral"]),
    new Vino('El Balcetto', 2021, '../Etiquetas/ElBalcetto.jpeg', 'Sabores afrutados con un final de madera.', 6720, 'Bodega Luna', ["Cabernet Especiado", "Cabernet Intenso"]),
    new Vino('Oboi', 2022, '../Etiquetas/Oboi.jpeg', 'Notas de durazno y un final ácido.', 5820, 'Bodega Lopez', ["Cabernet Suave"]),
    new Vino('Ganges', 2021, '../Etiquetas/Ganges.jpeg', 'Sabores de frutas del bosque con un toque de vainilla.', 4920, 'Los Jeroldos', ["Cabernet Potente", "Sauvignon Seductor"])
];



