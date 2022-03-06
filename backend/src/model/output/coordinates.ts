import { Field, Float, ObjectType } from '@nestjs/graphql'
import { ICoordinates } from '~model/interfaces/coordinates.interface'
@ObjectType()
export class Coordinates implements ICoordinates {
  @Field(() => Float)
  latitude: number

  @Field(() => Float)
  longitude: number
}
