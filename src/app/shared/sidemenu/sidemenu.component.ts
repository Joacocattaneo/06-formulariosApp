import { Component } from '@angular/core';

interface MenuItem{
  text: string;
  rute: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      rute: './template/basicos'
    },
    {
      text: 'Dinámicos',
      rute: './template/dinamicos'
    },
    {
      text: 'Switches',
      rute: './template/switches'
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      rute: './reactive/basicos'
    },
    {
      text: 'Dinámicos',
      rute: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      rute: './reactive/switches'
    }
  ]

  authMenu: MenuItem[] = [
    {
      text: 'Registro',
      rute: './auth/registro'
    },
    {
      text: 'Login',
      rute: './auth/login'
    }
    
  ]


}
