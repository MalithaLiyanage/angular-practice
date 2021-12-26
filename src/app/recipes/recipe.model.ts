import { Ingredient } from "../shared/ingredient.model";

export class Recipe { // Blue print of a Recipe
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
}