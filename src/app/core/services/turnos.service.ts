import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserInterfaz } from '../interfaces/userinterface';
import { CategoriaTurno, RequestTurno } from '../interfaces/categoriaTurnoInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http: HttpClient) { }
    
    getCategoriasTurno() : Observable<CategoriaTurno[]>{
        return this.http.get<CategoriaTurno[]>('http://127.0.0.1:8000/categoria-turno/')
    }

    enviarUsuarioCategoria(request : RequestTurno){
      return this.http.post('http://127.0.0.1:8000/turnos/getAll' , request)
    }

    getAllTurnos(){
      return this.http.get('http://127.0.0.1:8000/getTurnos/')
    }
}
