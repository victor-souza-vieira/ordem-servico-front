import { OrdemCreateComponent } from './components/ordem/ordem-create/ordem-create.component';
import { OrdemCrudComponent } from './views/ordem-crud/ordem-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"ordens",
    component: OrdemCrudComponent
  },
  {
    path: "ordens/ordem-create",
    component: OrdemCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
