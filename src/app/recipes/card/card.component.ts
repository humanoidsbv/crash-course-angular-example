import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() img = '';
  @Input() name = '';
  @Input() selected = true;
  @Input() id = 0;

  constructor(private recipesService: RecipesService) {
    this.selected = recipesService.selectedRecipe === this.id;
    this.recipesService.selectedRecipeChange.subscribe((value) => {
      this.selected = recipesService.selectedRecipe === this.id;
    });
  }

  ngOnInit(): void {}
}
