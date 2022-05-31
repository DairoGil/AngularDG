import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PacientePage } from '../page/paciente/paciente.po';
import { by, element } from 'protractor';

describe('workspace-project Paciente', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let paciente: PacientePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        paciente = new PacientePage();
    });

    it('Deberia registrar paciente', () => {
        const numPosibilidades = 1000000 - 100000;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        const ID_PACIENTE = 100000 + aleatorio;
        const NOMBRE = `Paciente protactor ${ID_PACIENTE}`;
        const FECHA_NACIMIENTO = '06241994';
        const TELEFONO = '3211458';

        page.navigateTo();
        navBar.clickBotonPaciente();
        paciente.clickBotonRegistrarPaciente();
        paciente.ingresarId(ID_PACIENTE);
        paciente.ingresarNombre(NOMBRE);
        paciente.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        paciente.ingresarTelefono(TELEFONO);
        paciente.clickInputRegistrar();


        const mensajeEstadoTransaccion = element(by.id('registro-mensaje'));
        expect(mensajeEstadoTransaccion.getText()).toBe('Se registro correctamente el paciente');
    });
});
