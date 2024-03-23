import { Component } from '@angular/core';
import { TurnoService } from 'src/app/core/services/turnos.service';

@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent {
  titulo: string = 'VER TURNOS';
  turnos: any= [];


  constructor(private turnosService: TurnoService){
    this.llamarTurnos()
  }

  llamarTurnos(){
    this.turnosService.getAllTurnos().subscribe((data) => {
      this.turnos = data;
    })
  }

  llamar(){
    
  }
}
