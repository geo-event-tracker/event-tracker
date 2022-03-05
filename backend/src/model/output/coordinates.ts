import { Field, Float, ObjectType } from '@nestjs/graphql'
import { ICoordinates } from '../interface/coordinates.interface'

@ObjectType()
export class Coordinates implements ICoordinates {
  @Field(() => Float)
  latitude: number

  @Field(() => Float)
  longitude: number
}
