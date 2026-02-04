import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
  standalone: true
})
export class LandingPage implements OnInit {

  userName: string | null = null;

  constructor(
    private userService: User,
  ) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId')

    if (!userId) {
      console.warn('Usuário não autenticado')
      return;
    }

    this.userService.getNameById(userId).subscribe({
      next: (res: any) => {
        this.userName = res.name
        console.log(this.userName)
      },

      error: err => {
        console.error(err)
      }
    })
  }

}
