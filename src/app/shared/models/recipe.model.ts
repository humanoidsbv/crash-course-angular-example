import { Ingredient } from './ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string | undefined,
    public img: string,
    public ingredients: Ingredient[],
    public serves: number
  ) {}
}
