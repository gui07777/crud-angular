import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { User } from '../../services/user';

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
    private userService: User
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  verifyUser() {
    const dto: RegisterUserDto = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.userService.verifyUser(dto).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('response: ', response)
          // this.welcome()
        }
      },
      error: err => {
        console.error('O usuário não foi encontrado no banco', err)
      }
    })
  }

  goFirstAccess() {
    this.route.navigate(['/register'])
  }

  welcome() {
    alert('WELCOME')
  }
}
