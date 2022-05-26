export class Sesion {
    idPaciente: number;
    fecha: string;
    hora: number;

    constructor(idPaciente: number, fecha: string, hora: number) {
        this.idPaciente = idPaciente;
        this.fecha = fecha;
        this.hora = hora;
    }
}
