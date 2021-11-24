import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Vegetable Chopseuy", "Bunch of vegetables get cut and cooked with cornflour", "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200/https://norecipes.com/wp-content/uploads/2017/04/chop-suey-010-1200x800.jpg"),
    new Recipe("Vegetable Chopseuy", "Bunch of vegetables get cut and cooked with cornflour", "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200/https://norecipes.com/wp-content/uploads/2017/04/chop-suey-010-1200x800.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
