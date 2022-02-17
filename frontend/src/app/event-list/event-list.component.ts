import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  geoEvents$ = [
    {
      id: '0',
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
      title: 'Start of construction of the Eiffel Tower',
      timestamp: new Date(1887, 1, 1887),
      timePassed: '5 days ago',
    },
    {
      id: '1',
      title: 'End of construction of the Eiffel Tower',
      timestamp: new Date(1887, 3, 1889),
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
      timePassed: '5 days ago',
    },
    {
      id: '2',
      title: 'End of construction of the Eiffel Tower',
      timestamp: new Date(1887, 3, 1889),
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
      timePassed: '5 days ago',
    },
    {
      id: '3',
      title: 'End of construction of the Eiffel Tower',
      timestamp: new Date(1887, 3, 1889),
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
      timePassed: '5 days ago',
    },
    {
      id: '4',
      title: 'End of construction of the Eiffel Tower',
      timestamp: new Date(1887, 3, 1889),
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
      timePassed: '5 days ago',
    },
    {
      id: '5',
      title: 'End of construction of the Eiffel Tower',
      timestamp: new Date(1887, 3, 1889),
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
      timePassed: '5 days ago',
    },
  ];

}
