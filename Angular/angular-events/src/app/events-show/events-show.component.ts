import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event'

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent {
  events:IEvent[] =[{
    title: "Evento de prueba",
    image: "",
    date: new Date('2019-03-15').toLocaleDateString(),
    description: "Nos lo pasaremos genial",
    price: 23.95
  },{
    title: "Evento de prueba 2",
    image: "",
    date: new Date('2019-03-21').toLocaleDateString(),
    description: "Este es peor",
    price: 15.5
  }]
}
