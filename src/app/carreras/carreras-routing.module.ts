import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'carreras',redirectTo:'carreras/index',pathMatch:'full'},
  {path:'carreras/index',component:IndexComponent},
  {path:'carreras/:carreraId/view',component:ViewComponent},
  {path:'carreras/create', component:CreateComponent},
  {path:'carreras/:postId/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrerasRoutingModule { }
