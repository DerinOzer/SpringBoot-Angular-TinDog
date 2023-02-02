import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  owner!:Owner
  id:any;
  profileCollected: boolean = false;
  imageCollected: boolean = false;
  profileImage:any;

  constructor(private ownerService:OwnerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log("test");
    this.ownerService.GetOwnerById(sessionStorage.getItem('id') as string ).subscribe(response =>{
      console.log(sessionStorage.getItem('id') as string );
      this.owner = response;
      this.profileCollected = true;
      console.log(this.owner);

      //Date to String
      //Profile picture !
    });

    this.ownerService.GetOwnerPicture(sessionStorage.getItem('id') as string ).subscribe(image =>{
        this.createImageFromBlob(image);
        this.imageCollected = true;
    }, error =>{
      console.log("Error occured",error);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.profileImage = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
  }
}
