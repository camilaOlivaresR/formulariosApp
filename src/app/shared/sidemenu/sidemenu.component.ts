import { Component} from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent  {

templateMenu: MenuItem[] = [
  {
    texto:'Basicos',
    ruta: './template/basicos'
  },
  {
    texto:'Dinamicos',
    ruta: './template/dinamicos'
  },
  {
    texto:'Switches',
    ruta: './template/switches'
  }
];

reactivMenu: MenuItem[] = [
  {
    texto:'Basicos',
    ruta: './reactiv/basicos'
  },
  {
    texto:'Dinamicos',
    ruta: './reactiv/dinamicos'
  },
  {
    texto:'Switches',
    ruta: './reactiv/switches'
  }
]

}
