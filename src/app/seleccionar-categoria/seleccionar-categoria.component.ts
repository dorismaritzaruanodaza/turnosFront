import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../core/services/turnos.service';
import { CategoriaTurno, RequestTurno } from '../core/interfaces/categoriaTurnoInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-categoria',
  templateUrl: './seleccionar-categoria.component.html',
  styleUrls: ['./seleccionar-categoria.component.css']
})
export class SeleccionarCategoriaComponent implements OnInit{
  titulo: string = 'SELECCIONE SU CATERGORIA';
  tipoboton : string = 'btn btn-success btn-lg';
  mensaje : string = 'FINALIZAR'
  categoriasTurnos: CategoriaTurno[] = [];
  nombre: string= '';
  id: number = 0;

  constructor(private turnosService: TurnoService,
    private route: ActivatedRoute,
    private router: Router){
    this.turnosService.getCategoriasTurno().subscribe((data : CategoriaTurno[]) =>{
      this.categoriasTurnos = data;
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.id = params['documento'];
      
      console.log('Nombre:', this.nombre);
      console.log('Documento:', this.id);
    });
  }

  seleccionarCategoria(id: number){

    let request: RequestTurno = {
      id_categoria : id,
      id_usuario: this.id
    }

    this.turnosService.enviarUsuarioCategoria(request).subscribe((data : any) =>{
      this.router.navigate(['/espere-llamado/'+data.consecutivo]);
    })

  }
}
