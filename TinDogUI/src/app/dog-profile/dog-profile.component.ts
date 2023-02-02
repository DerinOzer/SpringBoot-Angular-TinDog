import { Component, OnInit, ɵisBoundToModule } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';




@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {
  i: number=0;
  test:boolean=true
  list: string[][]=[];
  Listsize: number=this.list.length;
  durationInSeconds = 5;


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.list=[["lizy","12-06-2019","Je suis miniscule ","assets/img/dogggy.jpg"],["ouzy","12-06-2019","Je suis miniscule","assets/img/dog.jpg"] ,["pepite","12-06-2019","Je suis miniscule","assets/img/doggy.jpg"]];
    //this.showDogProfiles(0);
 //this.injectProfile(this.i);


  }
  swipeRight()
  {
    /*if (this.i==this.list.length-1){
      this.test=true
    }*/

/*if (this.i==this.list.length-1)
{

}
*/
    if (this.list.length>1 && this.i<this.list.length)
  {
    this.i++;
  }
else{
  alert("Oups c'est le dernier profil")
  console.log(this.i)
}
   console.log(this.i);

  }
  swipeLeft()
  {

  if (this.list.length>1 && this.i>0)
  {
    this.i--;
  }

  }
  openSnackBar() {
    this._snackBar.openFromComponent(DogProfileComponent, {
      data: 'bonjour',
      duration: 10000
    });
  }




}


 /* showDogProfiles(i:number)
  {
    if (this.list.length>1)
    {

      let mydivContainer=document.getElementById("profiles");
      let iElement= document.createElement('button');
      iElement.style.height='20 px'
      iElement.className='fas fa-angle-left'
      iElement.style.backgroundColor='white'
      iElement.style.border='white'
      iElement.style.fontSize='48px'
      iElement.style.marginTop='2%'
      iElement.style.marginLeft='3%'
      iElement.style.top='50%'
     iElement.style.float='right'
     iElement.onclick=function(){swipeLeft()}
     iElement.addEventListener('click',this.swipeLeft)
    mydivContainer?.append(iElement);
    }



   // for (i= 0;i<this.list.length;i++)
   // {


   this.injectProfile(i);

     // let mydivContainer=document.getElementById("profiles");

     if (this.list.length>1){
      let mydivContainer=document.getElementById("profiles");
     let iElementRight= document.createElement('button');
     iElementRight.className='fas fa-angle-right'
     iElementRight.style.fontSize='48px'
     iElementRight.style.marginTop='2%'
     iElementRight.style.marginRight='3%'
     iElementRight.style.backgroundColor='white'
     iElementRight.style.border='white'
     iElementRight.addEventListener('onclick',this.swipeRight)
     mydivContainer?.append(iElementRight);
     }


    }

    swipeRight()
    {
    // console.log(this.Listsize)
     this.i=2
     console.log(this.i);
   /*  if(this.i<this.list.length)
     {
      //this.injectProfile(this.i+1)
      this.i++
     }*/
  /*   this.injectProfile(2);


    }

    function swipeLeft()
    {
     // this.i=0
   // console.log('i ++ =',this.i)
   // this.showDogProfiles(0);
     //console.log(this.Listsize)
    /*  console.log('swipeleft marche')
      this.i--*/
    /*  if(this.i>0)
      {
      this.injectProfile(this.i-1)

      }*/
    //  this.injectProfile(2);
   // }
  //}
 /* injectProfile(i:number)
  {

    let contain=document.createElement('div')
    let mydiv=document.getElementById("profiles");
    let newdiv=document.createElement('div');
    newdiv.className='card';
    newdiv.style.width='400px'
    newdiv.style.backgroundColor='rgb(245, 232, 232)';
    newdiv.style.boxShadow=' 0 4px 8px 0 rgba(0, 0, 0, 0.2);';
    newdiv.style.margin='auto';
    newdiv.style.textAlign='center';
    newdiv.style.fontFamily='arial';
    newdiv.style.maxWidth='3000px'
    newdiv.style.borderRadius='10px'
    contain.append(newdiv);
    let image=document.createElement('img');
    image.src=this.list[i][3];
    newdiv.append(image)
    mydiv?.appendChild(newdiv);
    console.log(newdiv.className);
    console.log(mydiv?.className)
    image.style.width='400px'
    image.style.borderRadius='10px'
    image.style.height='300px'
    let nom= document.createElement('h1')
    nom.textContent=this.list[i][0];
    newdiv.append(nom);
    let date= document.createElement('p');
    date.className="title";
    date.style.color='grey'
    date.style.fontSize='18px'
    date.textContent=this.list[i][1];
    newdiv.append(date);
    let bio= document.createElement('p');
    bio.textContent=this.list[i][2];
    newdiv.append(bio);
    let p= document.createElement('p');
    newdiv.append(p)
    let button= document.createElement('button');
    button.textContent='modifier'
    button.style.border='none'
    button.style.outline='0'
    button.style.display='inline-block'
    button.style.padding='8px'
    button.style.color='white'
    button.style.backgroundColor='#000'
    button.style.textAlign='center'
    button.style.cursor='pointer'
    button.style.width='100%'
    button.style.fontSize='18px'

    p.append(button);
  }
*/

