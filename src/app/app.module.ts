import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from "angularfire2/auth";
 import {ConexionService} from './services/conexion.service'
import { environment } from 'src/environments/environment';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),


    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,

    FormsModule
  ],
  providers: [
    ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
