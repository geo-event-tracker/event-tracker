import { Query, Resolver } from '@nestjs/graphql'
import { GeoEvent } from 'src/model/output/geo-event'

@Resolver(() => GeoEvent)
export class GeoEventResolver {
  @Query(() => [GeoEvent])
  async geoEvents(): Promise<GeoEvent[]> {
    return [
      {
        title: 'The title of an event',
        coordinates: {
          latitude: 10,
          longitude: 20,
        },
        id: 1,
        timestamp: new Date(),
      },
    ]
  }
}
