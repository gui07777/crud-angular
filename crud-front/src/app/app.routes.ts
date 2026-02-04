import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'register', component: Register },
    { path: 'landing-page', component: LandingPage },
];
