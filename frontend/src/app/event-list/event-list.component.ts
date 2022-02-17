import { Component, OnInit } from '@angular/core';
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
}
