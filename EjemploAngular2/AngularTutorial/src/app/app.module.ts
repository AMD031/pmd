import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoService } from './servicios/listado.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Paso2Component } from './pages/paso2/paso2.component';
import { Page404Component } from './pages/page404/page404.component';
import { HeaderComponent } from './comunes/header/header.component';
import { FormsModule } from '@angular/forms';
import { Paso3Component } from './pages/paso3/paso3.component';
import { UsuarioallamarComponent } from './comunes/usuarioallamar/usuarioallamar.component';
const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'paso2',      component: Paso2Component },
  { path: 'paso3', component: Paso3Component },
  { path: '**', component: Page404Component },

];




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Paso2Component,
    Page404Component,
    HeaderComponent,
    Paso3Component,
    UsuarioallamarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ListadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
