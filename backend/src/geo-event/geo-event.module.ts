import { Module } from '@nestjs/common'
import { GeoEventResolver } from 'src/resolvers/geo-event.resolver'

@Module({
  providers: [GeoEventResolver],
})
export class GeoEventModule {}
