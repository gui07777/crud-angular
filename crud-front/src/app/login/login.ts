import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { User } from '../../services/user';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form: FormGroup;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private userService: User,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  verifyUser() {
    const dto: LoginUserDto = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.userService.verifyUser(dto).subscribe({
      next: (response: any) => {
        if (response.canProceed) {
          localStorage.setItem('userId', String(response.foundUser));
          console.log('userId salvo:', localStorage.getItem('userId'));
          this.route.navigateByUrl('/landing-page')
        }
      },
      error: err => {
        this.toastr.error('Login ou Senha inválidos', 'Tente novamente')
        console.error(err)
      }
    })
  }

  goFirstAccess() {
    this.route.navigate(['/register'])
  }

}
