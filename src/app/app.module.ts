import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UtentilistComponent } from './components/utentilist/utentilist.component';
import { UtenteformComponent } from './components/utenteform/utenteform.component';
import { UtenteService } from './service/utente.service';


import {
  RouterModule,
  Routes
} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: UtentilistComponent },
  { path: 'form', component: UtenteformComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    UtentilistComponent,
    UtenteformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    UtenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
