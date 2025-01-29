import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { HeaderComponent } from './contenido/header/header.component';
import { SobreMiComponent } from './contenido/sobre-mi/sobre-mi.component';
import { LoQueHagoComponent } from './contenido/lo-que-hago/lo-que-hago.component';
import { SkillsComponent } from './contenido/skills/skills.component';
import { ProyectosComponent } from './contenido/proyectos/proyectos.component';
import { FooterComponent } from './contenido/footer/footer.component';
import { PieDePaginaComponent } from './contenido/pie-de-pagina/pie-de-pagina.component';
import { LoginComponent } from './login/login.component';

import { AllComponentsComponent } from './contenido/all-components/all-components.component';
import { NavComponent } from './contenido/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    HeaderComponent,
    SobreMiComponent,
    LoQueHagoComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    PieDePaginaComponent,
    LoginComponent,
    AllComponentsComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
