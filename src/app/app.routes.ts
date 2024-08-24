import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', title: 'Angular Boilerplate', component: HomeComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
