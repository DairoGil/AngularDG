export class Sesion {
    idPaciente: number;
    fecha: String;
    hora: number;

    constructor(idPaciente: number, fecha: string, hora: number) {
        this.idPaciente = idPaciente;
        this.fecha = fecha;
        this.hora = hora;
    }
}