import { by, element } from 'protractor';

export class SesionPage {
    private linkAgendar = element(by.id('linkAgendar'));
    private inputIdPacienteAgendar = element(by.id('idPacienteAgendar'));
    private inputFecha = element(by.id('fecha'));
    private selectHora = element(by.cssContainingText('option', '08:00'));
    private linkInputAgendar = element(by.id('agendar-sesion'));

    private linkListarPendientes = element(by.id('linkListarPendientes'));
    private inputIdPacienteListar = element(by.id('idPacienteListar'));
    private linkInputListar = element(by.id('buscar-sesiones'));
    private listaSesiones = element.all(by.css('app-resumen-sesion'));

    async clickBotonAgendarSesion() {
        await this.linkAgendar.click();
    }

    async ingresarIdPaciente(idPaciente) {
        await this.inputIdPacienteAgendar.sendKeys(idPaciente);
    }

    async ingresarFecha(fecha) {
        await this.inputFecha.sendKeys(fecha);
    }

    async seleccionarHora() {
        await this.selectHora.click();
    }

    async clickInputAgendar() {
        await this.linkInputAgendar.click();
    }

    async clickBotonListarPendientes() {
        await this.linkListarPendientes.click();
    }

    async ingresarIdPacienteListar(idPaciente) {
        await this.inputIdPacienteListar.sendKeys(idPaciente);
    }

    async clickInputListar() {
        await this.linkInputListar.click();
    }

    async contarSesiones() {
        return this.listaSesiones.count();
    }
}
