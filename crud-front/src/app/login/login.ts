import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private location: Location,
    private route: Router
  ) { }

  goFirstAccess() {
    this.route.navigate(['/register'])
  }
}
