import { Injectable } from '@angular/core';
import { Api } from './connectApi/api';
import { HttpClient } from '@angular/common/http';
import { RegisterUserDto } from '../dtos/register-user.dto';

@Injectable({
  providedIn: 'root',
})
export class User {

  apiUrl: string;

  constructor(
    private api: Api,
    private http: HttpClient
  ) {
    this.apiUrl = `${this.api.baseUrl}/user`;
  }


  registerUser(dto: RegisterUserDto) {
    console.log(dto)
    return this.http.post(`${this.apiUrl}/register-user`, dto)
  }
}
