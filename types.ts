
export enum CoffeeCategory {
  ARABICA = 'Arabica',
  ROBUSTA = 'Robusta',
  BLEND = 'Blend',
  ORIGIN = 'Origin Countries'
}

export interface CoffeeProduct {
  id: string;
  name: string;
  category: CoffeeCategory;
  origin: string;
  price: number;
  rating: number;
  description: string;
  longDescription: string;
  flavorNotes: string[];
  roastLevel: number; // 1-5 (Light to Dark)
  image: string;
  brewingRecs: string[];
  reviewsCount: number;
}

export interface CartItem extends CoffeeProduct {
  quantity: number;
}
