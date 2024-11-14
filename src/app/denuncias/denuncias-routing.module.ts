import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenunciaListagemComponent } from './denuncia-listagem/denuncia-listagem.component';

const routes: Routes = [
  { path: "", component: DenunciaListagemComponent}
];

@NgModule({
  declarations: [
    DenunciaListagemComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunciasRoutingModule { }
