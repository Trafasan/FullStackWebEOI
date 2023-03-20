import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent {
  alturaImagen=350;
  @Input() fondoRojo!:boolean;
  @Input() fondoAzul!:boolean;
  @Input() eventoHijo!:IEvent;
  @Output() borrarEvento = new EventEmitter<void>();
  deleteEvent(){
    this.borrarEvento.emit();
  }
}
