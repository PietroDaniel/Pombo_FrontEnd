import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagemListagemComponent } from './imagem-listagem/imagem-listagem.component';

const routes: Routes = [
  { path: "", component: ImagemListagemComponent}
];

@NgModule({
  declarations: [
    ImagemListagemComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagensRoutingModule { }
