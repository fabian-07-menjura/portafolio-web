import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './contenido/proyectos/proyectos.component';
import { SobreMiComponent } from './contenido/sobre-mi/sobre-mi.component';
import { LoQueHagoComponent } from './contenido/lo-que-hago/lo-que-hago.component';
import { SkillsComponent } from './contenido/skills/skills.component';
import { FooterComponent } from './contenido/footer/footer.component';
import { AllComponentsComponent } from './contenido/all-components/all-components.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'perfil',
    component: ContenidoComponent,
    children: [
      { path: 'all', component: AllComponentsComponent },
      { path: 'about', component: SobreMiComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'funcion', component: LoQueHagoComponent },
      { path: 'contactame', component: FooterComponent },
      { path: 'habilidades', component: SkillsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
