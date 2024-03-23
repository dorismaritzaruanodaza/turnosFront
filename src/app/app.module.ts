import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { SeleccionarCategoriaComponent } from './seleccionar-categoria/seleccionar-categoria.component';
import { TitulosComponent } from './titulos/titulos.component';
import { BotonesComponent } from './botones/botones.component';
import { EspereLlamadoComponent } from './espere-llamado/espere-llamado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { UserService } from './core/services/user.service';
import { TurnoService } from './core/services/turnos.service';
import { VerTurnosComponent } from './modulo-asesor/ver-turnos/ver-turnos.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaInicialComponent,
    SeleccionarCategoriaComponent,
    TitulosComponent,
    BotonesComponent,
    EspereLlamadoComponent,
    VerTurnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    UserService,
    TurnoService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
