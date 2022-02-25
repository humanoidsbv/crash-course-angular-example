import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  modalId = 3;
  selectedRecipe: Recipe | undefined;

  constructor(
    private recipeService: RecipesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipeChange.subscribe((value) => {
      value === null
        ? (this.selectedRecipe = undefined)
        : (this.selectedRecipe = this.recipeService.getRecipeById(value));
    });
  }

  onDelete(id: number) {
    this.recipeService.deleteRecipe(id);
    this.modalService.close(this.modalId);
  }

  openModal() {
    this.modalService.open(this.modalId);
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }
}
