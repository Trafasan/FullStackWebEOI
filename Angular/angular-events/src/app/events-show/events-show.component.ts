import { Component/*, DoCheck, OnChanges, OnDestroy, OnInit*/ } from '@angular/core';
import { IEvent } from '../interfaces/i-event'

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent /*implements OnInit, OnChanges, DoCheck, OnDestroy*/{
  /*ngOnInit(){
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }*/

  desplegable="";
  fondoRojo=false;
  fondoAzul=false;
  cambiarFondo(){
    if(this.desplegable=="rojo") {
      this.fondoRojo=true;
      this.fondoAzul=false;
    }
    else if (this.desplegable=="azul") {
      this.fondoRojo=false;
      this.fondoAzul=true;
    }
    else {
      this.fondoRojo=false;
      this.fondoAzul=false;
    }
  }
  search = "";
  orderDate(){
    this.search = "";
    // this.events.sort((a, b) => (a.date > b.date) ? 1 : -1);
    this.events.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  orderPrice(){
    this.search = "";
    this.events.sort((a, b)=> a.price-b.price);
  }
  addEvent() {
    this.newEvent.date = new Date(this.newEvent.date);
    this.events.push(this.newEvent);
    console.log(typeof this.newEvent.date);
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: new Date('')
    };
  }
  changeImage(fileInput:HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {return;}
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result as string;
    });
  }
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: new Date('')
  };
  alturaImagen=350;
  events:IEvent[] =[{
    title: "Evento 1",
    image: "assets/evento1.jpg",
    date: new Date('2016-10-03'),
    description: "Descripción del evento 1",
    price: 99.95
  },{
    title: "Evento 2",
    image: "assets/evento2.jpg",
    date: new Date('2021-10-03'),
    description: "Descripción del evento 2",
    price: 70
  },{
    title: "Evento 3",
    image: "assets/acdc.jpg",
    date: new Date('2018-10-13'),
    description: "Descripción del evento 3",
    price: 30
  }]
}
