import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IGeoEvent } from '~model/interfaces/geo-event.interface';

@Injectable({
  providedIn: 'root',
})
export class GeoEventsService {
  private readonly mockGeoEvents$ = new BehaviorSubject<IGeoEvent[]>([
    {
      id: '0',
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
      title: 'Start of construction of the Eiffel Tower',
      timestamp: new Date(1887, 1, 1887),
    },
    {
      id: '1',
      title: 'End of construction of the Eiffel Tower',
      timestamp: new Date(1887, 3, 1889),
      center: {
        latitude: 48.858093,
        longitude: 2.294694,
      },
    },
  ]);

  constructor() {}

  getAll(): Observable<IGeoEvent[]> {
    return this.mockGeoEvents$.asObservable();
  }

  get(id: IGeoEvent['id']): Observable<IGeoEvent | undefined> {
    return this.mockGeoEvents$.pipe(
      map((geoEvents) => geoEvents.find((geoEvent) => geoEvent.id === id))
    );
  }

  async create(geoEvent: IGeoEvent): Promise<void> {
    this.mockGeoEvents$.next([...this.mockGeoEvents$.value, geoEvent]);
  }

  async delete(id: IGeoEvent['id']): Promise<void> {
    this.mockGeoEvents$.next(
      this.mockGeoEvents$.value.filter((geoEvent) => geoEvent.id !== id)
    );
  }
}
