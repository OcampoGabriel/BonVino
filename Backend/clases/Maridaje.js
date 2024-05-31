class Maridaje {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    sosMaridaje(maridaje){
    if(maridaje === this.nombre){
        return true
    }
}
}


export const maridajes = [
    new Maridaje('Tira de asado', 'Un corte de carne de res típico de Argentina, ideal para asar a la parrilla.'),
    new Maridaje('Salmón rosado', 'Un pescado de sabor suave y textura firme, ideal para asar o cocinar al vapor.'),
    new Maridaje('Postre muy dulce', 'Un postre con alto contenido de azúcar, como un pastel de chocolate o un flan.'),
    new Maridaje('Ensalada de mariscos', 'Una ensalada fresca con una variedad de mariscos, como camarones, pulpo y mejillones.'),
    new Maridaje('Pescado blanco', 'Un pescado de sabor suave y textura delicada, como el lenguado o la merluza.'),
    new Maridaje('Champagne con ostras', 'Un maridaje clásico que combina el champagne burbujeante con las ostras saladas.'),
    new Maridaje('Postre de chocolate', 'Un postre rico en chocolate, como un brownie o una tarta de chocolate.'),
    new Maridaje('Carne roja a la parrilla', 'Un corte de carne de res cocinado a la parrilla, como un filete o un ribeye.'),
    new Maridaje('Lenguado a la plancha', 'Un pescado de sabor suave y textura delicada, cocinado a la plancha.'),
    new Maridaje('Solomillo de cerdo', 'Un corte de carne de cerdo de sabor suave y textura firme, ideal para asar o cocinar al horno.')
];
