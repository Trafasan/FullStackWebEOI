import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventoItemComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
