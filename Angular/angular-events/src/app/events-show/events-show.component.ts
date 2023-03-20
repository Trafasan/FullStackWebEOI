import { Component, /*DoCheck, OnChanges, OnDestroy,*/ OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event'
import { EventsService } from '../services/events.service';

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit/*, OnChanges, DoCheck, OnDestroy*/{
  /*ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }*/

  events:IEvent[] = [];
  constructor(private servicio:EventsService){}
  ngOnInit() {
    this.servicio.getEventos().subscribe(evs=> this.events=evs);
  }
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

  deleteEvent(evento:IEvent){
    this.events=this.events.filter(e=>e!=evento);
  }
  addEvent(newEvent:IEvent) {
    this.events.push(newEvent);
  }
}
