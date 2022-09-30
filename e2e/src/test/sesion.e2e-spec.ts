import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { by, element } from 'protractor';
import { SesionPage } from '../page/sesion/sesion.po';
import { PacientePage } from '../page/paciente/paciente.po';
import { formatDate } from '@angular/common';

describe('workspace-project Sesion', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let sesion: SesionPage;
    let paciente: PacientePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        sesion = new SesionPage();
        paciente = new PacientePage();
    });

    it('Deberia listar sesiones pendientes', () => {
        const ID_PACIENTE = 6;

        page.navigateTo();
        navBar.clickBotonSesion();
        sesion.clickBotonListarPendientes();
        sesion.ingresarIdPacienteListar(ID_PACIENTE);
        sesion.clickInputListar();

        expect(1).toBe(sesion.contarSesiones());
    });

    it('Deberia agendar sesion', async () => {
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

        let fecha = new Date();
        fecha.setDate(fecha.getDate() + 3);
        let i = 0;
        const mensajeEstadoTransaccion = element(by.id('agendar-mensaje'));

        while(i < 365){
            page.navigateTo();
            navBar.clickBotonSesion();
            sesion.clickBotonAgendarSesion();
            sesion.ingresarIdPaciente(ID_PACIENTE);
            sesion.ingresarFecha(`${formatDate(fecha, 'MMddyyyy', 'en-US')}`);
            sesion.seleccionarHora();
            sesion.clickInputAgendar();
            if(await mensajeEstadoTransaccion.getText() ==='Se agendo correctamente la sesión'){
                break;
            }
            fecha.setDate(fecha.getDate() + 1);
            i++;
        }
        expect(mensajeEstadoTransaccion.getText()).toBe('Se agendo correctamente la sesión');
    });
});
