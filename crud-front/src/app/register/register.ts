import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule], // necessario para utilizar a diretiva [formGroup] no html
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  form: FormGroup;

  constructor(
    private route: Router,
    private userService: User,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/)]]
    })
  }

  goFirstAccess() {
    this.route.navigate(['/first-access'])
  }

  registerUser() {
    if (this.form.invalid) {
      this.toastr.error('Preencha os campos corretamente', 'Tente novamente');
      return;
    }

    const dto: RegisterUserDto = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      confirmPassword: this.form.value.confirmPassword
    }

    this.userService.registerUser(dto).subscribe({
      next: () => {
        this.toastr.success('Usuário cadastrado com sucesso!')
        this.route.navigate([''])
      },
      error: error => {
        this.toastr.error('Erro ao cadastrar usuário', 'Erro')
        console.error(error)
      }
    })
  }
}
