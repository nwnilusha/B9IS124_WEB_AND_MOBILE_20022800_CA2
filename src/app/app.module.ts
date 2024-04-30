import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,   
    AngularFireModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDK4JGuxnigC-peWB1t_W8Q282EkpGuQV4",
        authDomain: "visitireland-27619.firebaseapp.com",
        projectId: "visitireland-27619",
        storageBucket: "visitireland-27619.appspot.com",
        messagingSenderId: "506856922478",
        appId: "1:506856922478:web:1531bc4a9d1e03de57757f"
      }
    ),
    HttpClientModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
