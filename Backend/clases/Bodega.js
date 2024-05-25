class Bodega {
    constructor(coordenadas, nombre, descripcion, historia, periodoActualizacion, fechaUltimaActualizacion) {
        this.coordenadas = coordenadas;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.historia = historia;
        this.periodoActualizacion = periodoActualizacion;
        this.fechaUltimaActualizacion = fechaUltimaActualizacion;
    }
}

export let bodegas = [
    new Bodega('-32.890183,-68.844050', 'Bodega Luna', 'Una bodega boutique situada en el corazón de Mendoza.', 'Fundada en 1920 por la familia Luna, ha sido reconocida por su dedicación a la producción de vinos de alta calidad.', 3, new Date(2024, 0, 1)),
    new Bodega('-29.953764,-51.093750', 'Bodega Lopez', 'Ubicada en Rio Grande do Sul, es conocida por sus vinos espumosos.', 'La bodega fue establecida en 1898 por la familia Lopez, inmigrantes italianos con una pasión por el vino.', 4, new Date(2024, 1, 14)),
    new Bodega('-33.047238,-71.612688', 'Finca La Selva', 'Una finca vinícola que se especializa en vinos tintos y blancos.', 'La Finca La Selva fue fundada en 1885 por la familia Selva, que emigró desde Italia.', 2, new Date(2024, 2, 10)),
    new Bodega('-31.424014,-64.497780', 'Los Jeroldos', 'Una bodega familiar en Córdoba, conocida por sus vinos de excelente calidad', 'Los Jeroldos fue fundada en 1950 por Jeroldo Basso, un inmigrante italiano que soñaba con hacer el mejor vino de Argentina.', 5, new Date(2024, 3, 8)),
    new Bodega('-27.593500,-48.558540', 'Costa Verde', 'Una bodega que produce vinos blancos y espumosos.', 'Costa Verde fue fundada en 1970 por la familia Costa, que ha estado haciendo vino en Brasil durante tres generaciones.', 6, new Date(2024, 1, 23)),
    new Bodega('-34.651462,-71.657269', 'Valle Central', 'Una bodega extraordinaria, muy amada por los críticos.', 'Valle Central fue fundada en 1900 por la familia Valle, que ha estado cultivando uvas en Chile durante más de un siglo.', 2, new Date(2024, 2, 4)),
    new Bodega('-34.603722,-58.381592', 'Ciudad Autónoma', 'Una bodega urbana, conocida por sus vinos blancos.', 'Ciudad Autónoma fue fundada en 2000 y es una de las pocas bodegas urbanas de Argentina.', 4, new Date(2024, 3, 25)),
    new Bodega('-22.906847,-43.172896', 'Rio de Janeiro', 'Una bodega en Rio de Janeiro que produce vinos blancos y espumosos.', 'La bodega fue fundada en 1980 por la familia de Janeiro, que ha estado haciendo vino en Brasil durante dos generaciones.', 3, new Date(2024, 2, 1)),
    new Bodega('-33.448890,-70.669265', 'Santiago', 'Una bodega alejada de la ciudad.', 'La bodega fue fundada en 1950 por la familia Santiago, que ha estado cultivando uvas en Chile durante más de medio siglo.', 5, new Date(2022, 6, 12)),
    new Bodega('-24.782127,-65.423198', 'Salta', 'Una bodega conocida por sus vinos Torrontés.', 'Salta fue fundada en 1890 por la familia Salta, que ha estado haciendo vino en Argentina durante más de un siglo.', 6, new Date(2024, 4, 22))
];

export function estaParaActualizar(fechaActual, bodega){
    let diferencia = (fechaActual - bodegas[bodega].fechaUltimaActualizacion); // Asumiendo 30 días por mes
    let diferenciaMeses = diferencia / (1000 * 60 * 60 * 24 * 30)
    if (diferenciaMeses >= bodegas[bodega].periodoActualizacion){
        return true
    }else{
        return false
    }
}

export function getNombre(bodega){
    return bodegas[bodega].nombre
}



