import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListarComentarioComponent } from './components/listar-comentario/listar-comentario.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [

  {path:'',component:ListarComentarioComponent},
  {path:'add',component:AgregarEditarComentarioComponent},
  {path:'editar/:id',component:AgregarEditarComentarioComponent},
  {path:'visualizar/:id',component:VerComentarioComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
