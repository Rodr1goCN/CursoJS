import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocatioData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createID(data: DeliveryLocatioData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_'); // .join('_') converte uma array para uma string
  }

  makaLocation(dataState: DeliveryLocatioData): DeliveryFlyweight {
    const key = this.createID(dataState);
    // Se a chave existe no locations, retorna a chave
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(dataState);
    return this.locations[key];
  }

  getLocation(): DeliveryLocationDictionary {
    return this.locations;
  }
}
