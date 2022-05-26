export class DetalleSesion {
    id: number;
    fecha: string;
    hora: number;
    estado: string;
    nota: string;

    constructor(id: number, fecha: string, hora: number, estado: string, nota: string) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.estado = estado;
        this.nota = nota;
    }
}
