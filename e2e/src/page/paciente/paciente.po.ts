import { by, element } from 'protractor';

export class PacientePage {
    private linkRegistrar = element(by.id('linkRegistrar'));
    private inputIdPaciente = element(by.id('idPaciente'));
    private inputNombre = element(by.id('nombre'));
    private inputFechaNacimiento = element(by.id('fechaNacimiento'));
    private inputTelefono = element(by.id('telefono'));
    private linkInputRegistrar = element(by.id('registrar-paciente'));

    async clickBotonRegistrarPaciente() {
        await this.linkRegistrar.click();
    }

    async ingresarId(idPaciente) {
        await this.inputIdPaciente.sendKeys(idPaciente);
    }

    async ingresarNombre(nombrePaciente) {
        await this.inputNombre.sendKeys(nombrePaciente);
    }

    async ingresarFechaNacimiento(fechaNacimiento) {
        await this.inputFechaNacimiento.sendKeys(fechaNacimiento);
    }

    async ingresarTelefono(telefonoPaciente) {
        await this.inputTelefono.sendKeys(telefonoPaciente);
    }

    async clickInputRegistrar() {
        await this.linkInputRegistrar.click();
    }
}
