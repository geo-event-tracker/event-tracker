import { ICoordinates } from './coordinates.interface'

/** An event that can be shown on the map
 *
 * It's likely that this interface will change quite a bit.
 * We might want to refer to an address, area or multiple
 * locations. Events usually aren't limited to a single
 * point in time, so we'll need time ranges too.
 */
export interface IGeoEvent {
  /** Database identifier */
  id: ID
  /** An as short as possible title */
  title: string
  /** To be used for zooming and placing a marker */
  coordinates: ICoordinates
  /** The moment at which this event started */
  timestamp: Date
  address?: string

  /** Short text that can replace a title, to be shown in list views */
  // pitch: string;
}
