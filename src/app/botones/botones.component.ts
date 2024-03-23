import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  @Input() tipoboton: string = '';
  @Input() mensaje: string = '';
   
}
