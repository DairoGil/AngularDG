import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/li[1]/a'));
    linkPaciente = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/li[2]/a'));
    linkSesion = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/li[4]/a'));

    async clickBotonPaciente() {
        await this.linkPaciente.click();
    }

    async clickBotonSesion() {
        await this.linkSesion.click();
    }
}
