import { OrdemUpdateComponent } from './components/ordem/ordem-update/ordem-update.component';
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
  },
  {
    path: "ordens/update/:id",
    component: OrdemUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
