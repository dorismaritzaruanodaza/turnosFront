import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarCategoriaComponent } from './seleccionar-categoria/seleccionar-categoria.component';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { EspereLlamadoComponent } from './espere-llamado/espere-llamado.component';
import { VerTurnosComponent } from './modulo-asesor/ver-turnos/ver-turnos.component';

const routes: Routes = [
  { path: 'seleccionar-categoria/:nombre/:documento', component: SeleccionarCategoriaComponent },
  { path: 'espere-llamado/:consecutivo', component: EspereLlamadoComponent },
  { path: '', component: PantallaInicialComponent },
  { path: 'ver-turnos' , component : VerTurnosComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
