class Maridaje {
    constructor(id, nombre, descripcion) {
        this.id = id
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}


const maridajes = [
    new Maridaje(1, 'Tira de asado', 'Un corte de carne de res típico de Argentina, ideal para asar a la parrilla.'),
    new Maridaje(2, 'Salmón rosado', 'Un pescado de sabor suave y textura firme, ideal para asar o cocinar al vapor.'),
    new Maridaje(3, 'Postre muy dulce', 'Un postre con alto contenido de azúcar, como un pastel de chocolate o un flan.'),
    new Maridaje(4, 'Ensalada de mariscos', 'Una ensalada fresca con una variedad de mariscos, como camarones, pulpo y mejillones.'),
    new Maridaje(5, 'Pescado blanco', 'Un pescado de sabor suave y textura delicada, como el lenguado o la merluza.'),
    new Maridaje(6, 'Champagne con ostras', 'Un maridaje clásico que combina el champagne burbujeante con las ostras saladas.'),
    new Maridaje(7, 'Postre de chocolate', 'Un postre rico en chocolate, como un brownie o una tarta de chocolate.'),
    new Maridaje(8, 'Carne roja a la parrilla', 'Un corte de carne de res cocinado a la parrilla, como un filete o un ribeye.'),
    new Maridaje(9, 'Lenguado a la plancha', 'Un pescado de sabor suave y textura delicada, cocinado a la plancha.'),
    new Maridaje(10, 'Solomillo de cerdo', 'Un corte de carne de cerdo de sabor suave y textura firme, ideal para asar o cocinar al horno.')
];

export function sosMaridaje(maridaje){
    let cantMaridajes = maridajes.length
    for (let i = 0; i < cantMaridajes; i++){
        if(maridaje === maridajes[i].id){
            return true
        }
    }
}