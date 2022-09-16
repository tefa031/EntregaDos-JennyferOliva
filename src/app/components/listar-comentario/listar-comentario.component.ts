import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-listar-comentario',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.css']
})
export class ListarComentarioComponent implements OnInit {

  listComentarios:Comentario[] = [
    {
      titulo:'Cibersecurity',
      autor:'Jennyfer Oliva',
      fechaCreacion: new Date(),
      texto:'Este es un comentario '
    },

    {
      titulo:'Angular',
      autor:'Vanesa Diaz',
      fechaCreacion: new Date(),
      texto:'Este es un comentario '
    },

    {
      titulo:'Developer iOS',
      autor:'Miguel Cabrera',
      fechaCreacion: new Date(),
      texto:'Este es un comentario '
    },

    {
      titulo:'developer Angular',
      autor:'Rosa Vallejo',
      fechaCreacion: new Date(),
      texto:'Este es un comentario '
    },

    {
      titulo:'BIG DATA',
      autor:'Marcos Rodriguez',
      fechaCreacion: new Date(),
      texto:'Este es un comentario '
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
