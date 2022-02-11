import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NewRecipeButtonComponent } from './new-recipe-button/new-recipe-button.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    CardComponent,
    RecipesComponent,
    NewRecipeButtonComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
