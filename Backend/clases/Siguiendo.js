class Siguiendo {
    constructor(enofilo, siguiendoEnofilo, siguiendoBodega, fechaInicio, fechaFin) {
        this.enofilo = enofilo;
        this.siguiendoEnofilo = siguiendoEnofilo,
        this.siguiendoBodega = siguiendoBodega,
        this.fechaInicio = fechaInicio,
        this.fechaFin = fechaFin
    }
}


const siguiendo = [
    new Siguiendo(1, 2, null, '2023-01-15', null),
    new Siguiendo(1, null, 3, '2023-02-10', null),
    new Siguiendo(2, 3, null, '2023-01-20', null),
    new Siguiendo(2, null, 1, '2023-02-15', null),
    new Siguiendo(3, 1, null, '2023-03-05', null),
    new Siguiendo(3, null, 2, '2023-04-01', null),
    new Siguiendo(4, 5, null, '2023-01-25', null),
    new Siguiendo(4, null, 4, '2023-03-10', '2023-04-17'),
    new Siguiendo(5, 6, null, '2023-02-01', null),
    new Siguiendo(5, null, 5, '2023-04-15', null),
    new Siguiendo(6, 4, null, '2023-02-20', null),
    new Siguiendo(6, null, 6, '2023-03-25', null),
    new Siguiendo(7, 6, null, '2023-01-30', null),
    new Siguiendo(7, null, 7, '2023-03-20', null),
    new Siguiendo(3, 4, null, '2023-02-10', null),
    new Siguiendo(4, null, 8, '2023-04-05', null),
    new Siguiendo(5, 3, null, '2023-01-15', null),
    new Siguiendo(3, null, 9, '2023-02-25', null),
    new Siguiendo(1, 2, null, '2023-01-20', '2023-02-13'),
    new Siguiendo(2, null, 10, '2023-03-15', null),
    new Siguiendo(6, 4, null, '2023-02-15', null),
    new Siguiendo(1, null, 1, '2023-04-01', null),
    new Siguiendo(4, 3, null, '2023-03-05', null),
    new Siguiendo(6, null, 2, '2023-05-01', null),
    new Siguiendo(7, 2, null, '2023-01-25', null),
    new Siguiendo(2, null, 3, '2023-03-10', null),
    new Siguiendo(3, 4, null, '2023-02-01', null),
    new Siguiendo(2, null, 4, '2023-04-15', null),
    new Siguiendo(7, 5, null, '2023-02-20', null),
    new Siguiendo(6, null, 5, '2023-03-25', '2023-04-25')
];

