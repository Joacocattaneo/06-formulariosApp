import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
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
export class DinamicosComponent   {

  persona : Persona = {
    nombre: 'Joaquin',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'DeathStranding'}
    ]
  }

  nuevoJuego: string = '';

  agregarJuego(){
    const juegoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...juegoFavorito });
    this.nuevoJuego = '';
  }

  guardar(){
    console.log('Formulario Posteado')
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

}
