import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvent[], filtro: string): IEvent[] {
    const filtroTit=filtro ? filtro.toLocaleLowerCase() : null;
    return filtroTit ? eventos.filter(elem=>elem.nombre.toLocaleLowerCase().includes(filtroTit)||
      elem.descripcion.toLocaleLowerCase().includes(filtroTit)):eventos;
  }

}
