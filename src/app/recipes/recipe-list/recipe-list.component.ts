import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Vegetable Chopseuy", "Bunch of vegetables get cut and cooked with cornflour", "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200/https://norecipes.com/wp-content/uploads/2017/04/chop-suey-010-1200x800.jpg"),
    new Recipe("Vegetable Salad", "Bunch of vegetables get cut and mixed together", "https://cdn-ap-ec.yottaa.net/5c8fa1e52bb0ac74cc828a3e/d9df52b0e4910138f4cc0ead9ecbf798.yottaa.net/v~4b.45f/adaptivemedia/rendition/50493_3000x2000.jpg?id=df69b1e872f35fffe1b0edd19c630135918366f9&ht=650&wd=1004&clid=pim&yocs=2f_")
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
