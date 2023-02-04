import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';
import { MatchService } from '../match.service';
import { MessageService } from '../message.service';
import { MessageDto } from '../messagedto';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches!:Dog[]
  images!:any[]
  conversation!: MessageDto[]
  matchesRetrieved:boolean = false;
  conversationOpen:boolean = false;
  conversationRetrieved:boolean = true;
  currentDog!:Dog;
  senderId!:string;
  message!:string;

  constructor(private matchService:MatchService, private dogService:DogService, private messageService:MessageService) { }


  ngOnInit(): void {
    this.senderId = sessionStorage.getItem('id') as string; 
    this.matchService.GetMatchesOfOwner(sessionStorage.getItem('id') as string).subscribe(listOfMatch => {
      this.matches = listOfMatch;
      this.matchesRetrieved = true;
    });
  }

  /*getImages(list:any[]){
    list.forEach(dog => {
      this.dogService.GetDogPicture(dog.id).subscribe(image => {
        this.createImageFromBlob(image);
        this.transferOkay = true;
      });
    });

    if(list.length == this.images.length)
      return true
    
  }*/

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.images.push(reader.result);
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
  }

  save(dog: Dog)
  {
    this.conversationRetrieved = false;
    this.conversationOpen = true;
    this.currentDog = dog;
    this.messageService.GetConversation(sessionStorage.getItem('id') as string, this.currentDog.ownerId).subscribe(conv =>{
      this.conversation = conv;
      console.log(this.conversation);
      this.conversationRetrieved = true;
    })
  }

  send(){
    this.conversationRetrieved = false;
    this.messageService.SendMessage(this.senderId, this.currentDog.ownerId, this.message).subscribe(message => {
      this.messageService.GetConversation(sessionStorage.getItem('id') as string, this.currentDog.ownerId).subscribe(conv =>{
        this.conversation = conv;
        this.conversationRetrieved = true;
        this.message= "";
      });
    }); 
  }
}
