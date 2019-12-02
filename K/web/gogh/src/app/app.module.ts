import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ColeccionComponent } from './components/coleccion/coleccion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AtencionClientesComponent } from './components/atencion-clientes/atencion-clientes.component';
import { TerminosComponent } from './components/terminos/terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColeccionComponent,
    RegistroComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    AtencionClientesComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
