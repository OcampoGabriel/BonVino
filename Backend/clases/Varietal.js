export class Varietal {
    constructor(descripcion, composicion, uva) {
        this.descripcion = descripcion;
        this.composicion = composicion;
        this.uva = uva;
    }

    sosEsteVarietal(varietal){
        if(varietal === this.descripcion){
            return true
        }
    }

    new(){
        varietales.push(this)
    }
}

export const varietales = [
    new Varietal("Cabernet Ácido", 86, "Cabernet Sauvignon"),
    new Varietal("Pinot Dulce", 95, "Pinot Noir"),
    new Varietal("Merlot Afrutado", 83, "Merlot"),
    new Varietal("Pinot Noir Robusto", 88, "Pinot Noir"),
    new Varietal("Chardonnay Ligero", 90, "Chardonnay"),
    new Varietal("Sauvignon Fresco", 95, "Sauvignon Blanc"),
    new Varietal("Cabernet Intenso", 85, "Cabernet Sauvignon"),
    new Varietal("Cabernet Suave", 94, "Cabernet Sauvignon"),
    new Varietal("Cabernet Especiado", 82, "Cabernet Sauvignon"),
    new Varietal("Cabernet Elegante", 87, "Cabernet Sauvignon"),
    new Varietal("Sauvignon Seductor", 92, "Sauvignon Blanc"),
    new Varietal("Sauvignon Floral", 89, "Sauvignon Blanc"),
    new Varietal("Sauvignon Afrutado", 91, "Sauvignon Blanc"),
    new Varietal("Cabernet Potente", 80, "Cabernet Sauvignon"),
    new Varietal("Riesling Refrescante", 93, "Riesling"),
    new Varietal("Cabernet Complejo", 84, "Cabernet Sauvignon"),
    new Varietal("Sauvignon Taninosos", 86, "Sauvignon Blanc"),
    new Varietal("Cabernet Especiado", 97, "Cabernet Sauvignon"),
    new Varietal("Sauvignon Vibrante", 98, "Sauvignon Blanc"),
    new Varietal("Sauvignon Elegante", 80, "Sauvignon Blanc"),
    new Varietal("Cabernet Potente", 85, "Cabernet Sauvignon"),
    new Varietal("Sauvignon Fresco", 88, "Sauvignon Blanc"),
    new Varietal("Pinot Frutal", 95, "Pinot Noir"),
    new Varietal("Sauvignon Robusto", 86, "Sauvignon Blanc")
];
