import { Routes } from '@angular/router';

export const routes: Routes = [

{path: '', redirectTo: 'pruus', pathMatch: 'full'},

{path: 'pruus',
  loadChildren:() => import('./pruus/pruus.module').then(m => m.PruusModule)
}





];
