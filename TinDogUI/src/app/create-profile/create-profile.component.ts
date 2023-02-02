import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { OwnerService } from '../owner.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  url='assets/img/picc.png';
  name!: string;
  lastname!:string;
  date!:Date;
  profession!: string;
  bio!: string;
  formData = new FormData()
  file: any;
  gender!: string;
  errorMessage!: string;
  id!: any;
  constructor(private ownerService: OwnerService,  private router: Router) { }

  ngOnInit(): void {
  }

  onselectFile(e:any)
  {

    if (e.target.files){
      this.file = e.target.files[0];
      //this.formData.set("file", this.file);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
       // console.log(this.url+'1');
      }
    }
  }

  createProfile()
  {
    this.id=sessionStorage.getItem('id');
    //this.formData.set("file", this.file);
    this.ownerService.RegisterOwnerProfile(this.id,this.name,this.lastname,this.profession,this.date,this.gender,this.bio,this.file).subscribe(
      data => {
        console.log("response received")
        this.router.navigate(['createProfileDog']);

      },
     error=>{
       console.log("error accured")
       this.errorMessage="Oups! an error occured while creating your profile!";
     }
  );
  }


  test()
  {
    console.log(this.name);
    console.log(uuid());
    console.log("username",this.lastname);
    console.log("prof",this.profession);
    console.log("bio",this.bio);
    console.log("date",this.date);
    console.log("gender",this.gender);
    console.log("file",this.formData.get('file'));
  }
radioChangeHandler(event:any)
{
   this.gender=event.target.value;
}
}
