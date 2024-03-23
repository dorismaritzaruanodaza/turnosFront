import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espere-llamado',
  templateUrl: './espere-llamado.component.html',
  styleUrls: ['./espere-llamado.component.css']
})
export class EspereLlamadoComponent {
  titulo: string = 'ESPERE SU TURNO';
  turno: string = '';
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      // Obtener los parámetros de la URL
      this.turno = params['consecutivo'];
      

    });
  }

}
