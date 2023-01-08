import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BannerComponent } from './componentes/banner/banner.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { Pag2Component } from './componentes/pag2/pag2.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { Pagina4004Component } from './componentes/pagina4004/pagina4004.component';
import { LoginOutComponent } from './componentes/login-out/login-out.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { LoginComponent } from './modales/login/login.component';
import { Header2Component } from './componentes/header2/header2.component';
import { ImagenComponent } from './modales/imagen/imagen.component';
import { TextoComponent } from './modales/texto/texto.component';
import { LapizTextoComponent } from './componentes/lapiz-texto/lapiz-texto.component';
import { LapizImagenComponent } from './componentes/lapiz-imagen/lapiz-imagen.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { BackComponent } from './componentes/back/back.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    SobreMiComponent,
    Pag2Component,
    EducacionComponent,
    SoftSkillsComponent,
    ProyectosComponent,
    ContactosComponent,
    ExperienciaComponent,
    Pagina4004Component,
    LoginOutComponent,
    LogInComponent,
    LoginComponent,
    Header2Component,
    ImagenComponent,
    TextoComponent,
    LapizTextoComponent,
    LapizImagenComponent,
    BorrarComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
