import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'docentes', redirectTo: 'docentes/index', pathMatch: 'full'},
  { path: 'docentes/index', component: IndexComponent },
  { path: 'docentes/:docenteId/view', component: ViewComponent },
  { path: 'docentes/create', component: CreateComponent },
  { path: 'docentes/:docenteId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
