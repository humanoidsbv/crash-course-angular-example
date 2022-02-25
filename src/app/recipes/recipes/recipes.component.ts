import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  modalId = 1;

  constructor(
    private recipesService: RecipesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;
    this.recipesService.recipesChange.subscribe((value) => {
      this.recipes = value;
    });
  }

  openModal() {
    this.modalService.open(this.modalId);
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }

  selectRecipe(id: number) {
    this.recipesService.selectRecipe(id);
  }
}
