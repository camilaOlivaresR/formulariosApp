import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favorito: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  
  persona: Persona = {
    nombre: 'Camala',
    favorito: [
      {id: 1, nombre: 'Packman'},
      {id: 2, nombre: 'Super Mario'},
      {id: 3, nombre: 'Snake'}
    ]
  }

  eliminar(index: number ) {
    this.persona.favorito.splice(index, 1);
  }

  guardar() {
    console.log('formulario posteado')
  }

}
