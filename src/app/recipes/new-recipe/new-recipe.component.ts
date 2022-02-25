import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit {
  newRecipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    ingredients: new FormControl([]),
    serves: new FormControl(2),
  });
  constructor() {}

  ngOnInit(): void {}
}
