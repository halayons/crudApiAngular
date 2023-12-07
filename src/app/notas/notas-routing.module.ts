import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'notas',redirectTo:'notas/index',pathMatch:'full'},
  {path:'notas/index',component:IndexComponent},
  {path:'notas/:notaId/view',component:ViewComponent},
  {path:'notas/create', component:CreateComponent},
  {path:'notas/:notaId/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
