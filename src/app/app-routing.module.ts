import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/ordens/list/list.module').then(m => m.ListModule) }, { path: 'new', loadChildren: () => import('./pages/ordens/new/new.module').then(m => m.NewModule) }, { path: 'detalhes', loadChildren: () => import('./pages/ordens/detalhes/detalhes.module').then(m => m.DetalhesModule) }, { path: 'editar', loadChildren: () => import('./pages/ordens/editar/editar.module').then(m => m.EditarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
