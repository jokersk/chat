import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import { Chat } from './models/chats/chat.model';

@Injectable()
export class ChatService {


  constructor(private db:AngularFireDatabase) {

  }
  private chatListRef = this.db.list<Chat>("chat-list");



  abc(){
    return this.chatListRef;
  }

  getChatList(){
    return this.chatListRef;
  }

  addMessage(chat:Chat){
    return this.chatListRef.push(chat);
  }

}
