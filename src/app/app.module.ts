import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { HttpClientModule } from '@angular/common/http';
import { DocentesModule } from './docentes/docentes.module';
import { CarrerasModule } from './carreras/carreras.module';
import { MateriasModule } from './materias/materias.module';
import { NotasModule } from './notas/notas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    DocentesModule,
    CarrerasModule,
    MateriasModule,
    NotasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
