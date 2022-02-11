import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  selectedRecipe: Recipe | undefined;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipeChange.subscribe((value) => {
      this.selectedRecipe = this.recipeService.getRecipeById(value);
    });
  }
}
