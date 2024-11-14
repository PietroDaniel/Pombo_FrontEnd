import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruuListagemComponent } from './pruu-listagem/pruu-listagem.component';

const routes: Routes = [
  { path: "", component: PruuListagemComponent}
];

@NgModule({
  declarations: [
    PruuListagemComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruusRoutingModule { }
