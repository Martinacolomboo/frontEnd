import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginModalComponent } from './componentes/login-modal/login-modal.component';
import { ModalImagenComponent } from './componentes/modal-imagen/modal-imagen.component';
import { ModalTextoComponent } from './componentes/modal-texto/modal-texto.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { Pag2Component } from './componentes/pag2/pag2.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    LoginModalComponent,
    ModalImagenComponent,
    ModalTextoComponent,
    SobreMiComponent,
    Pag2Component,
    EducacionComponent,
    SoftSkillsComponent,
    ProyectosComponent,
    ContactosComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
