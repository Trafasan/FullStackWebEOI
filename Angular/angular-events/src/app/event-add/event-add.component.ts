import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit{
  @Output() addEvento = new EventEmitter<IEvent>();
  newEvent!:IEvent;
  ngOnInit(): void {
      this.inicializarEvento();
  }
  inicializarEvento() {
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
    reader.addEventListener('loadend', () => this.newEvent.image = reader.result as string);
  }
  addEvent() {
    this.newEvent.date = new Date(this.newEvent.date);
    this.addEvento.emit(this.newEvent);
    this.inicializarEvento();
  }
}
