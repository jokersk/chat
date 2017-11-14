import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat } from './models/chats/Chat.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chatList$:Observable<Chat[]>;

  messages : Chat = {
    name :"",
    content :""
  };
  constructor(private chatSer : ChatService) {
    this.chatList$ = this.chatSer.getChatList()
      .snapshotChanges()
      .map(
        change => {
          return change.map(c=>({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      );
  }
  addMessages(){
    this.chatSer.addMessage(this.messages).then(ref=>{
      console.log(ref.key)
    });
  }
  
}
