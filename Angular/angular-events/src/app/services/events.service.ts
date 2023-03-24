import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private productURL="eventos";
  constructor(private http: HttpClient) { }

  getEventos():Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.productURL);
  }

  addEvento(newEvent:IEvent):Observable<IEvent> {
    return this.http.post<{evento:IEvent, mensaje:string, error?:string}>(this.productURL, newEvent)
    .pipe(map(response => response.evento));
  }

  deleteEvento(idEvent:number):Observable<boolean> {
    return this.http.delete<{mensaje:string, error?:string}>(this.productURL+'/'+idEvent)
    .pipe(map(response => response.error!=undefined));
  }
}
