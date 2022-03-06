import { Field, ID, ObjectType } from '@nestjs/graphql'
import { IGeoEvent } from '~model/interfaces/geo-event.interface'
import { Coordinates } from './coordinates'

@ObjectType()
export class GeoEvent implements IGeoEvent {
  @Field(() => ID)
  id: number

  @Field(() => String)
  title: string

  @Field(() => Coordinates)
  coordinates: Coordinates

  @Field(() => Date)
  timestamp: Date
}
