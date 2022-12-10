import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autentificacion/pages/login/login.component';
import { RegistroComponent } from './autentificacion/pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { MisHacksComponent } from './pages/mis-hacks/mis-hacks.component';
import { NuevoHackComponent } from './pages/nuevo-hack/nuevo-hack.component';

const routes: Routes = [
  { path: 'misHacks', component: MisHacksComponent,canActivate:[AuthGuard] },
  { path: 'Hack/:id', component: NuevoHackComponent,canActivate:[AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'registro' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
