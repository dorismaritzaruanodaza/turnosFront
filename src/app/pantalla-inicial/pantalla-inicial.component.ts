import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../core/services/user.service';
import { UserInterfaz } from '../core/interfaces/userinterface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-inicial',
  templateUrl: './pantalla-inicial.component.html',
  styleUrls: ['./pantalla-inicial.component.css']
})
export class PantallaInicialComponent {
  titulo: string = 'BIENVENIDO';
  tipoboton : string = 'btn btn-success btn-lg';
  mensaje : string = 'SIGUIENTE'

  formUser: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService, 
    private router: Router){

    this.formUser = this.fb.group({
      nombre: [''],
      documento: ['']
    })
    
  }

  enviarDatos() {
    const datos = {
      nombre: this.formUser.controls['nombre'].value,
      documento: this.formUser.controls['documento'].value
      
    };
    console.log(datos); // Para demostración en consola
    let user: UserInterfaz = {
      nombre: datos.nombre,
      documento: datos.documento
    }
    this.userService.createUser(user).subscribe((_: any) =>{
      this.router.navigate(['/seleccionar-categoria/'+_.nombre+'/'+_.id]);
      console.log('Usuario creado correctamente', _);
    })
  }
}
