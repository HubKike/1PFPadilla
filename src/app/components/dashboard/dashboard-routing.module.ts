import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearAlumnosComponent } from './alumnos/crear-alumnos/crear-alumnos.component';

const routes: Routes = [
  /* {path:'', component: DashboardComponent} */
  {path:'', component: DashboardComponent, children:[
    {path:'', component:InicioComponent},
    {path: 'alumnos', component:AlumnosComponent},
    /* , {path: 'reportes', component:ReportesComponent}, */
    {path: 'crear-alumnos', component:CrearAlumnosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
