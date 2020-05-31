import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from './components/inicio/inicio.component';
import { Unidad1Component } from "./components/unidad1/unidad1.component";
import { Unidad2Component } from "./components/unidad2/unidad2.component";
import { Unidad3Component } from './components/unidad3/unidad3.component';
import { Unidad4Component } from './components/unidad4/unidad4.component';


const APP_ROUTES: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'Unidad1', component: Unidad1Component },
    { path: 'Unidad2', component: Unidad2Component },
    { path: 'Unidad3', component: Unidad3Component },
    { path: 'Unidad4', component: Unidad4Component }



];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
