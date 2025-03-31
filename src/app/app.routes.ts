import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { DisplayButtonComponent } from './components/display-button/display-button.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Angular Virtual | Home'},
  {path: 'form', component: DisplayButtonComponent, title: 'Angular Virtual | Formulario'},
];
