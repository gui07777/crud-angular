import { Injectable } from '@angular/core';
import { Api } from './connectApi/api';
import { HttpClient } from '@angular/common/http';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { VerifyUserResponse } from '../dtos/verify-user-response.dto';
import { LoginUserDto } from '../dtos/login-user.dto';

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
    return this.http.post(`${this.apiUrl}/register-user`, dto)
  }

  verifyUser(dto: LoginUserDto) {
    return this.http.post(`${this.apiUrl}/verify-user`, dto);
  }

  getNameById(userId: any) {
    return this.http.get(`${this.apiUrl}/get-name/${userId}`)
  }
}
