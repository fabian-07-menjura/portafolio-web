import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  activoInicio: boolean = false;
  activoAbout: boolean = false;
  activoFuncion: boolean = false;
  activoHabilidades: boolean = false;
  activoProyectos: boolean = false;
  activoCotacto: boolean = false;
  palabra: boolean = true;
  estado1: boolean = false;
  estado2: boolean = true;

  constructor(private router: Router, @Inject(DOCUMENT) document: any) {
    if (document.location.pathname == '/perfil/all') {
      this.activoInicio = true;
    } else if (document.location.pathname == '/perfil/about') {
      this.activoAbout = true;
    } else if (document.location.pathname == '/perfil/funcion') {
      this.activoFuncion = true;
    } else if (document.location.pathname == '/perfil/habilidades') {
      this.activoHabilidades = true;
    } else if (document.location.pathname == '/perfil/proyectos') {
      this.activoProyectos = true;
    } else {
      this.activoCotacto = true;
    }
  }

  redirecInicio($event: any) {
    $event.preventDefault();
    this.router.navigate(['perfil/all']);
    this.activoInicio = true;
    this.activoAbout = false;
    this.activoFuncion = false;
    this.activoHabilidades = false;
    this.activoProyectos = false;
    this.activoCotacto = false;
    this.estado1 = !this.estado1;
    this.estado2 = !this.estado2;
  }
  redirecAbout($event: any) {
    $event.preventDefault();
    this.router.navigate(['perfil/about']);
    this.activoInicio = false;
    this.activoAbout = true;
    this.activoFuncion = false;
    this.activoHabilidades = false;
    this.activoProyectos = false;
    this.activoCotacto = false;
    this.estado1 = !this.estado1;
    this.estado2 = !this.estado2;
  }
  redirecFuncion($event: any) {
    $event.preventDefault();
    this.router.navigate(['perfil/funcion']);
    this.activoInicio = false;
    this.activoAbout = false;
    this.activoFuncion = true;
    this.activoHabilidades = false;
    this.activoProyectos = false;
    this.activoCotacto = false;
    this.estado1 = !this.estado1;
    this.estado2 = !this.estado2;
  }
  redirecHabilidades($event: any) {
    $event.preventDefault();
    this.router.navigate(['perfil/habilidades']);
    this.activoInicio = false;
    this.activoAbout = false;
    this.activoFuncion = false;
    this.activoHabilidades = true;
    this.activoProyectos = false;
    this.activoCotacto = false;
    this.estado1 = !this.estado1;
    this.estado2 = !this.estado2;
  }
  redirecProyectos($event: any) {
    $event.preventDefault();
    this.router.navigate(['perfil/proyectos']);
    this.activoInicio = false;
    this.activoAbout = false;
    this.activoFuncion = false;
    this.activoHabilidades = false;
    this.activoProyectos = true;
    this.activoCotacto = false;
    this.estado1 = !this.estado1;
    this.estado2 = !this.estado2;
  }
  redirecContacto($event: any) {
    $event.preventDefault();
    this.router.navigate(['perfil/contactame']);
    this.activoInicio = false;
    this.activoAbout = false;
    this.activoFuncion = false;
    this.activoHabilidades = false;
    this.activoProyectos = false;
    this.activoCotacto = true;
    this.estado1 = !this.estado1;
    this.estado2 = !this.estado2;
  }

  cambiarEstado() {
    this.estado1 = !this.estado1;
    this.estado2 = !this.estado2;
  }
}
