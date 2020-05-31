import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from './components/inicio/inicio.component';
import { Unidad1Component } from "./components/unidad1/unidad1.component";

const APP_ROUTES: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'Unidad1', component: Unidad1Component }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
