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
      coordinates: {
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
      coordinates: {
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

  async create(template: IGeoEvent): Promise<void> {
    const deepCopy: IGeoEvent = {
      ...template,
      coordinates: { ...template.coordinates },
    };
    this.mockGeoEvents$.next([...this.mockGeoEvents$.value, deepCopy]);
  }

  async delete(id: IGeoEvent['id']): Promise<void> {
    this.mockGeoEvents$.next(
      this.mockGeoEvents$.value.filter((geoEvent) => geoEvent.id !== id)
    );
  }

  /** Overwrites the event and returns the previous value upon success */
  async update(template: IGeoEvent): Promise<IGeoEvent> {
    const previousValue = this.mockGeoEvents$.value.find(
      (geoEvent) => geoEvent.id === template.id
    );

    if (!previousValue) {
      throw new Error(`No GeoEvent with ID ${JSON.stringify(template.id)}`);
    }

    this.mockGeoEvents$.next(
      this.mockGeoEvents$.value.map((geoEvent) =>
        geoEvent.id === template.id ? template : geoEvent
      )
    );
    return previousValue;
  }
}
