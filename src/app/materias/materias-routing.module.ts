import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'materias',redirectTo:'materias/index',pathMatch:'full'},
  {path:'materias/index',component:IndexComponent},
  {path:'materias/:materiaId/view',component:ViewComponent},
  {path:'materias/create', component:CreateComponent},
  {path:'materias/:materiaId/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
