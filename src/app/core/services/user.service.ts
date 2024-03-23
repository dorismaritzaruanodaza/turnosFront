import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserInterfaz } from '../interfaces/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    
    createUser(user: UserInterfaz){
      return this.http.post('http://127.0.0.1:8000/usuario/', user)
    }
}
