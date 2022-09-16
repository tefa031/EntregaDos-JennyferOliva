import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  agregarComentario: FormGroup;

  constructor(private fb: FormBuilder) { 
  this.agregarComentario = this.fb.group({
    titulo:['',Validators.required],
    autor:['',Validators.required],
    texto:['',Validators.required],


  }    
  )
}
  ngOnInit(): void {
  }

  agregar(){
    console.log(this.agregarComentario);

    const comentario:Comentario={
      titulo: this.agregarComentario.get('titulo')?.value,
      autor: this.agregarComentario.get('autor')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion: new Date()
      
    }
    console.log(comentario);
  }

}
