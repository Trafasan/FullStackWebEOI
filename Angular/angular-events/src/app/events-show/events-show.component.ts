import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event'

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent {
  events:IEvent[] =[{
    title: "Evento 1",
    image: "assets/evento1.jpg",
    date: new Date('2016-10-03').toLocaleDateString(),
    description: "Descripción del evento 1",
    price: 99.95
  },{
    title: "Evento 2",
    image: "assets/evento2.jpg",
    date: new Date('2021-10-03').toLocaleDateString(),
    description: "Descripción del evento 2",
    price: 70
  },{
    title: "Evento 3",
    image: "assets/acdc.jpg",
    date: new Date('2022-10-03').toLocaleDateString(),
    description: "Descripción del evento 3",
    price: 30
  }]
}
