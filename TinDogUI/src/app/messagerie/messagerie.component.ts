import { Component, OnInit } from '@angular/core';
import { stringify } from 'uuid';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  name!:any;
  formdata=new FormData();
  date!:any;
  file:any;
  bio!:any;
  j:number= 0;
  i:number= 0;
  path!:any;
  souslist: string[][]=[];
  dog=[];
  k!:any;
  list: string[][]=[];
  mesg!:string;


  //list=[["lizy","12-06-2019","Je suis miniscule","assets/img/dogggy.jpg"],["ouzy","12-06-2019","Je suis miniscule","assets/img/dog.jpg"] ,["pepite","12-06-2019","Je suis miniscule","assets/img/doggy.jpg"]];
  constructor() { }

  ngOnInit(): void {

    this.list=[["lizy","12-06-2019","Je suis miniscule","assets/img/dogggy.jpg"],["ouzy","12-06-2019","Je suis miniscule","assets/img/dog.jpg"] ,["pepite","12-06-2019","Je suis miniscule","assets/img/doggy.jpg"],["sirine","12-06-2019","Je suis miniscule","assets/img/dogggy.jpg"]];
    this.name=this.list[0][0];
      //console.log(typeof this.list[0].at(0));
      this.date=this.list[0][1];
      this.bio=this.list[0][2];
      this.path=this.list[0][3];


  }

  swipeYES()
  {
    if(this.i>=this.list.length)
     {
       this.i=0;
     }
    console.log(this.i)

    if (this.i<this.list.length)
    {
     this.i++;
     if(this.i>=this.list.length)
     {
       this.i=0;
     }


      this.name=this.list[this.i][0];
      //console.log(typeof this.list[0].at(0));
      this.date=this.list[this.i][1];
      this.bio=this.list[this.i][2];
      this.path=this.list[this.i][3];
    //  this.i++;

    }


  }
  swipeNO()
  {
    if (this.i==0)
    {
      this.list.splice(0,1);
      console.log("liste à jour",this.list);
      this.name=this.list[this.i][0];
      //console.log(typeof this.list[0].at(0));
      this.date=this.list[this.i][1];
      this.bio=this.list[this.i][2];
      this.path=this.list[this.i][3];
    }
    else
    {
      console.log('test',this.i)
      this.list.splice(this.i,1);

      //console.log('swipeno',this.i)
      if(this.i>=this.list.length)
      {
        this.i=0;
      }
      console.log('swipeno',this.i)
      console.log("liste à jour",this.list);
      this.name=this.list[this.i][0];
      //console.log(typeof this.list[0].at(0));
      this.date=this.list[this.i][1];
      this.bio=this.list[this.i][2];
      this.path=this.list[this.i][3];
    }

  }
send()
{
  let mydiv=document.getElementById("mymsg");
  console.log(this.mesg);
  let newp=document.createElement('p');
  newp.style.marginLeft=' auto'
  newp.style.borderRadius='20px'
  newp.style.lineHeight='25px';
  newp.style.height='50px'
   newp.style.width='50%'
   newp.style.fontSize='18px'
   newp.style.alignItems='center'
   newp.style.textAlign='center'
   newp.style.alignItems='center';
  newp.style.color='white'
  newp.style.background='#0078FF';
  newp.style.marginRight='10px';
  newp.textContent=this.mesg;
  mydiv?.prepend(newp);
}
}
