class Siguiendo {
    constructor(enofilo, siguiendoEnofilo, siguiendoBodega, fechaInicio, fechaFin) {
        this.enofilo = enofilo;
        this.siguiendoEnofilo = siguiendoEnofilo,
        this.siguiendoBodega = siguiendoBodega,
        this.fechaInicio = fechaInicio,
        this.fechaFin = fechaFin
    }

    sosDeBodega(bodega, enofilo){
        if(this.enofilo === enofilo && this.siguiendoBodega === bodega && this.fechaFin === null){
            return true
        } else {
            return false
        }
    }
}


export const siguiendos = [
    new Siguiendo(1, 2, null, '2023-01-15', null),
    new Siguiendo(1, null, 'Valle Central', '2023-02-10', null),
    new Siguiendo(2, 3, null, '2023-01-20', null),
    new Siguiendo(2, null, 'Bodega Luna', '2023-02-15', null),
    new Siguiendo(3, 1, null, '2023-03-05', null),
    new Siguiendo(3, null, 'Bodega Lopez', '2023-04-01', null),
    new Siguiendo(4, 5, null, '2023-01-25', null),
    new Siguiendo(4, null, 'Costa Verde', '2023-03-10', '2023-04-17'),
    new Siguiendo(5, 6, null, '2023-02-01', null),
    new Siguiendo(5, null, 'Valle Central', '2023-04-15', null),
    new Siguiendo(6, 4, null, '2023-02-20', null),
    new Siguiendo(6, null, 'Valle Central', '2023-03-25', null),
    new Siguiendo(7, 6, null, '2023-01-30', null),
    new Siguiendo(7, null, 'Ciudad Autónoma', '2023-03-20', null),
    new Siguiendo(3, 4, null, '2023-02-10', null),
    new Siguiendo(4, null, 'Rio de Janeiro', '2023-04-05', null),
    new Siguiendo(5, 3, null, '2023-01-15', null),
    new Siguiendo(3, null, 'Santiago', '2023-02-25', null),
    new Siguiendo(1, 2, null, '2023-01-20', '2023-02-13'),
    new Siguiendo(2, null, 'Salta', '2023-03-15', null),
    new Siguiendo(6, 4, null, '2023-02-15', null),
    new Siguiendo(1, null, 'Bodega Luna', '2023-04-01', null),
    new Siguiendo(4, 3, null, '2023-03-05', null),
    new Siguiendo(6, null, 'Bodega Lopez', '2023-05-01', null),
    new Siguiendo(7, 2, null, '2023-01-25', null),
    new Siguiendo(2, null, 'Finca La Selva', '2023-03-10', null),
    new Siguiendo(3, 4, null, '2023-02-01', null),
    new Siguiendo(2, null, 'Los Jeroldos', '2023-04-15', null),
    new Siguiendo(7, 5, null, '2023-02-20', null),
    new Siguiendo(6, null, 'Costa Verde', '2023-03-25', '2023-04-25')
];


