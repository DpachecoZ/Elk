import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { ColeccionComponent } from '../app/components/coleccion/coleccion.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'coleccion', component: ColeccionComponent },
  { path: 'login', component: LoginComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'home'  },


];

export const routing = RouterModule.forRoot(routes);


