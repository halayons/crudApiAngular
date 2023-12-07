import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent,
    CreateComponent,
    ViewComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NotasModule { }
