import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoEventsService } from '../modules/data/services/geo-events.service';
import { IGeoEvent } from '~model/interfaces/geo-event.interface';
import datetimeUtils from '../utils/datetime';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public geoEvents$: Observable<IGeoEvent[]> | null = null;

  constructor(private geoEventsService: GeoEventsService) { }

  ngOnInit(): void {
    this.geoEvents$ = this.geoEventsService.getAll();
  }

  getTimePassed = (timestamp: Date) => {
    return datetimeUtils.getTimePassed(timestamp)
  }

  getAddress = ({ address, coordinates }: IGeoEvent) => {
    return address || `${coordinates.longitude} ${coordinates.latitude}`;
  }

}
