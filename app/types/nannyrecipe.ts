export interface Recipe {
  name: string;
  servingSize: ServingSize;
  cookTime: number;
  keywords: string[];
  ingredients: Ingredient[];
  description: string;
}

export interface Ingredient {
  name: string;
  preparation?: string;
  measurement: string;
}

export enum ServingSize {
  Small = 0,
  Medium = 1,
  Large = 2,
  Family = 3,
}

export interface SearchQuery extends Recipe { }