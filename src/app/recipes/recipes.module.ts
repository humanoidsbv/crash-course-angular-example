import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesService } from '../shared/services/recipes.service';
import { NewRecipeButtonComponent } from './new-recipe-button/new-recipe-button.component';

@NgModule({
  declarations: [CardComponent, EditRecipeComponent, RecipesComponent, NewRecipeButtonComponent],
  imports: [CommonModule, SharedModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
