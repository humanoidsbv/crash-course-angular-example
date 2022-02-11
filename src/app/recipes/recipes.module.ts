import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [ListComponent, CardComponent, EditRecipeComponent],
  imports: [CommonModule, SharedModule],
  exports: [ListComponent],
})
export class RecipesModule {}
