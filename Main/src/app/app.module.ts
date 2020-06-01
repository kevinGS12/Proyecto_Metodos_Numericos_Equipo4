import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from "./app.routes";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Unidad1Component } from './components/unidad1/unidad1.component';
import { Unidad2Component } from './components/unidad1-pt2/unidad1-pt2.component';
import { Unidad3Component } from './components/unidad2/unidad2.component';
import { Unidad4Component } from './components/unidad3/unidad4.component';
import { Unidad2Pt2Component } from './components/unidad2-pt2/unidad2-pt2.component';
import { RUnidad4Component } from "./components/unidad4/unidad4.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Unidad1Component,
    Unidad2Component,
    Unidad3Component,
    Unidad4Component,
    Unidad2Pt2Component,
    RUnidad4Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
