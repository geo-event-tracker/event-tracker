import { Component, OnInit } from '@angular/core';
import { IGeoEvent } from '~model/interfaces/geo-event.interface';
import { GeoEventsService } from '../modules/data/services/geo-events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  geoEvents$ = this.geoEventsService.getAll();

  constructor(private readonly geoEventsService: GeoEventsService) {}

  ngOnInit(): void {}

  deleteGeoEvent(geoEvent: IGeoEvent): Promise<void> {
    return this.geoEventsService.delete(geoEvent.id);
  }
}
