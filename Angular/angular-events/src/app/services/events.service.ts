import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private productURL="http://curso.i234.me:8080/eventos";
  constructor(private http: HttpClient) { }

  getEventos():Observable<IEvent[]> {
    return this.http.get<{eventos: IEvent[], ok:boolean}>(this.productURL)
    .pipe(map(response=>response.eventos));
  }
}
