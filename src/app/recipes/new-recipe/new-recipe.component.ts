import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit {
  @Output() close = new EventEmitter<number>();

  modalId = 2;

  ingredients = new FormArray([
    new FormGroup({
      name: new FormControl('Pasta', [Validators.required]),
      amount: new FormControl(200, [Validators.required]),
      unit: new FormControl('gram'),
    }),
    new FormGroup({
      name: new FormControl('Geraspte kaas', [Validators.required]),
      amount: new FormControl(1, [Validators.required]),
      unit: new FormControl('zakje'),
    }),
  ]);

  newRecipeForm: any = new FormGroup({
    recipename: new FormControl('Pasta', [Validators.required]),
    description: new FormControl(''),
    img: new FormControl('test', [Validators.required]),
    ingredients: this.ingredients,
    serves: new FormControl(2),
  });

  constructor(
    private recipesService: RecipesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  onAddIngredient() {
    this.ingredients.push(
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        amount: new FormControl(2, [Validators.required]),
        unit: new FormControl(''),
      })
    );
  }

  onRemoveIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  onAdd() {
    if (this.newRecipeForm.status === 'VALID') {
      this.recipesService.addRecipe({
        ...this.newRecipeForm.value,
        name: this.newRecipeForm.value.recipename,
      });

      this.modalService.close(this.modalId);
      this.newRecipeForm.reset();
    }
  }

  onClose() {
    this.close.emit(this.modalId);
  }
}
