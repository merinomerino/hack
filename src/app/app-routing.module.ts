import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisHacksComponent } from './pages/mis-hacks/mis-hacks.component';
import { NuevoHackComponent } from './pages/nuevo-hack/nuevo-hack.component';

const routes: Routes = [
  { path: 'misHacks', component: MisHacksComponent },
  { path: 'Hack', component: NuevoHackComponent },
  { path: 'Hack/:id', component: NuevoHackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'misHacks' }
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
