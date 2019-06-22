
export interface State {
    id: number;
    name: string;
}
export interface City {
    id: number;
    name: string;
}

export interface Chain {
    id: number;
    name: string;
}

export interface Brand {
    id: number;
    name: string;
}

export class Hotel {
    name: string;
    hotelBrandId: number;
    hotelChainId: number;
    rooms: number;
    cityId: number;
    stateId: number;
}

