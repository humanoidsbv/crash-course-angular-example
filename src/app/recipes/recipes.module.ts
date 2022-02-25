import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NewRecipeButtonComponent } from './new-recipe-button/new-recipe-button.component';
import { DetailsComponent } from './details/details.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent,
    RecipesComponent,
    NewRecipeButtonComponent,
    DetailsComponent,
    NewRecipeComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
