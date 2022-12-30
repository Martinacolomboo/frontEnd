import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { Pag2Component } from './componentes/pag2/pag2.component';
import { Pagina4004Component } from './componentes/pagina4004/pagina4004.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';

const routes: Routes = [
  {path: '', component: BannerComponent},
  {path: 'menu', component: BannerComponent},
  {path:'porfolio',component: Pag2Component},
  {path:'sobre-mi',component: SobreMiComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path:'educacion',component:  EducacionComponent},
  {path:'skills',component: SoftSkillsComponent},
  {path:'proyectos',component: ProyectosComponent},
  {path:'contactos',component:  ContactosComponent},
  {path:'**',component: Pagina4004Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
