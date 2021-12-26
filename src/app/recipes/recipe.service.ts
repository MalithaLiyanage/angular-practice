import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Vegetable Chopseuy", "Bunch of vegetables get cut and cooked with cornflour", "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200/https://norecipes.com/wp-content/uploads/2017/04/chop-suey-010-1200x800.jpg", [new Ingredient("Carrot", 4), new Ingredient("Cabbage", 1)]),
    new Recipe("Vegetable Salad", "Bunch of vegetables get cut and mixed together", "https://cdn-ap-ec.yottaa.net/5c8fa1e52bb0ac74cc828a3e/d9df52b0e4910138f4cc0ead9ecbf798.yottaa.net/v~4b.45f/adaptivemedia/rendition/50493_3000x2000.jpg?id=df69b1e872f35fffe1b0edd19c630135918366f9&ht=650&wd=1004&clid=pim&yocs=2f_", [new Ingredient("Leaks", 10), new Ingredient("Carrot", 5)])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}