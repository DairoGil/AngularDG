export class Paciente {
    id: number;
    nombre: string;
    fechaNacimiento: string;
    telefono: string;

    constructor(id: number, nombre: string, fechaNacimiento: string, telefono?: string) {
        this.id = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }
}
