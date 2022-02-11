import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes = [
    { name: 'Pasta', image: '../' },
    { name: 'Rice', image: '../' },
    { name: 'Burgers', image: '../' },
    { name: 'Pizza', image: '../' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
