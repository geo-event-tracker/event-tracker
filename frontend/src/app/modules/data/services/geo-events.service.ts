import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IGeoEvent } from '~model/interfaces/geo-event.interface';

const createMockGeoEvent = (props: any) => ({
  id: '0',
  coordinates: {
    latitude: 48.858093,
    longitude: 2.294694,
  },
  title: 'Start of construction of the Eiffel Tower',
  timestamp: new Date(2022, 1, 15, 20, 50),
  ...props
})

const today = new Date();

@Injectable({
  providedIn: 'root',
})
export class GeoEventsService {
  private readonly mockGeoEvents$ = new BehaviorSubject<IGeoEvent[]>([
  createMockGeoEvent({ id: 0, address: '1 Street, City Name, Country' }),
  createMockGeoEvent({ id: 1, timestamp: new Date(today.getTime() - 1000 * 24) }),
  createMockGeoEvent({ id: 2, timestamp: new Date(today.getTime() - 1000 * 60 * 1) }),
  createMockGeoEvent({ id: 3, timestamp: new Date(today.getTime() - 1000 * 60 * 50) }),
  createMockGeoEvent({ id: 4, timestamp: new Date(today.getTime() - 1000 * 60 * 60) }),
  createMockGeoEvent({ id: 5, timestamp: new Date(today.getTime() - 1000 * 60 * 60 * 23) }),
  createMockGeoEvent({ id: 6, timestamp: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 10) }),
  createMockGeoEvent({ id: 7, title: 'some stupidly long title wow its so long and useless why would ppl fill in something this long and then we have to deal with them ahhhhhhhhhhhhh'}),
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
