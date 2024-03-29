import { DeliveryLocation } from './delivery-location';

export type DeliveryLocatioData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };
