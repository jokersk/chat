import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDW7kjAtpLRJ3eqhKwrOcbKmsYn1PAXZpw",
        authDomain: "dsy-chat.firebaseapp.com",
        databaseURL: "https://dsy-chat.firebaseio.com",
        projectId: "dsy-chat",
        storageBucket: "",
        messagingSenderId: "786613915759"
      }
    ),
    AngularFireDatabaseModule
  ],
  providers: [
      ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
