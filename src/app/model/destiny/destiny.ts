import {DestinyNames} from './destiny-names';

export class Destiny {
    hotelId: number | undefined;
    destinationId: number | undefined;
    countryId: string | undefined;
    name: DestinyNames = new DestinyNames();
    type: string | undefined;
}
