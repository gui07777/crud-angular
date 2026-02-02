import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserDto } from '../../dtos/register-user.dto';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule], // necessario para utilizar a diretiva [formGroup] no html
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  form: FormGroup;

  constructor(
    private location: Location,
    private route: Router,
    private userService: User,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  goFirstAccess() {
    this.route.navigate(['/first-access'])
  }

  registerUser() {
    const dto: RegisterUserDto = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    console.log('dados pegos no form: ', dto)

    this.userService.registerUser(dto).subscribe({
      next: response => {
        console.log('usuario registrado com sucesso', response)
      },
      error: error => {
        console.error('Erro ao cadastrar usuário', error)
      }
    })
  }
}
