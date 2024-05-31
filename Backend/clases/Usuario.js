class Usuario {
    constructor(username, password, enofiloAsociado, notificacionPendiente = []) {
        this.username = username;
        this.password = password;
        this.enofiloAsociado = enofiloAsociado;
        this.notificacionPendiente = notificacionPendiente
    }

    sosMiUser(idEno){
        if(this.enofiloAsociado === idEno){
            return true
        }
    }

    getNombre(){
        return this.username
    }
}

export const usuarios = [
    new Usuario("frankito9", "Pica4Ever", 1, []),
    new Usuario("amanteVino", "vino123", 2, []),
    new Usuario("sommelier45", "claveSommelier", 3, []),
    new Usuario("degustador", "tintoBlanco", 4, []),
    new Usuario("vinolover", "secretovino", 5, []),
    new Usuario("cataVinos", "1234abcd", 6, []),
    new Usuario("piquetin", "bochomaximo", 7, [])
];

