import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-project';
  showRecipe= true;

  onNavigate(isRecipeView: boolean) {
    this.showRecipe = isRecipeView;

  }
}
