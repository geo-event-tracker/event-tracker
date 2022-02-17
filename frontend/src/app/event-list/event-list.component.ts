import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// TODO: replace by GeoEventService, blocked by #9
const createMockGeoEvent = (props: any) => ({
  id: '0',
  center: {
    latitude: 48.858093,
    longitude: 2.294694,
  },
  title: 'Start of construction of the Eiffel Tower',
  timestamp: new Date(2022, 1, 15, 20, 50),
  ...props
})

// TODO: replace by GeoEventService, blocked by #9
const today = new Date();
const geoEventMocks = new BehaviorSubject([
  createMockGeoEvent({ id: 0, address: '1 Street, City Name, Country' }),
  createMockGeoEvent({ id: 1, timestamp: new Date(today.getTime() - 1000 * 24) }),
  createMockGeoEvent({ id: 2, timestamp: new Date(today.getTime() - 1000 * 60 * 1) }),
  createMockGeoEvent({ id: 3, timestamp: new Date(today.getTime() - 1000 * 60 * 50) }),
  createMockGeoEvent({ id: 4, timestamp: new Date(today.getTime() - 1000 * 60 * 60) }),
  createMockGeoEvent({ id: 5, timestamp: new Date(today.getTime() - 1000 * 60 * 60 * 23) }),
  createMockGeoEvent({ id: 6, timestamp: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 10) }),
  createMockGeoEvent({ id: 7, title: 'some stupidly long title wow its so long and useless why would ppl fill in something this long and then we have to deal with them ahhhhhhhhhhhhh'}),
]);

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getTimePassed = (timestamp: Date) => {
    let currentTime = new Date().getTime() / 1000;
    let eventTime = timestamp.getTime() / 1000;

    let diff = currentTime - eventTime;

    if (diff < 60) return `${diff.toFixed(0)} second${diff >= 2 ? 's' : ''}`;

    diff = diff / 60;

    if (diff < 60 ) return `${diff.toFixed(0)} minute${diff >= 2 ? 's' : ''}`;

    diff = diff / 60;

    if (diff < 24 ) return `${diff.toFixed(0)} hour${diff >= 2 ? 's' : ''}`;

    diff = diff / 24;

    return `${diff.toFixed(0)} day${diff >= 2 ? 's' : ''}`;
  }

  getAddress = (geoEvent: any) => {
    const { address, center } = geoEvent; console.log(geoEvent)
    if (address) return address;
    return `${center.longitude} ${center.latitude}`
  }

  /**
   * Format a Date object into a "yyyy.mm.dd h:mm" string
   */
  formatDate = (d: Date) => {
    return d.getDate() + "." + (d.getMonth()+1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
  }

  geoEvents$ = geoEventMocks.asObservable();

}
