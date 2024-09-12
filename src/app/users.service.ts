import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://randomuser.me/api/?results=150';

  constructor(private http: HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
