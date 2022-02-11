import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private data: Recipe[] = [
    {
      name: 'Pasta zalm met spinazie en cherrytomaten',
      img: '../../../assets/images/pasta-met-zalm.jpeg',
      description:
        'Kook de penne volgens de bereidingswijze op de verpakking. De ui en prei in stukjes snijden en dit bakken in een pan met boter. Schenk de crème fraîche en de room culinair erbij. Zalm in kleine stukjes snijden. De kruidenboter, zalm en geraspte kaas bij de pan in doen. Alles nog even warm laten worden en dan serveren.',
      ingredients: [
        {
          name: 'Tagliatelle',
          amount: 200,
          unit: 'gram',
        },
        {
          name: 'Cherrytomaten',
          amount: 100,
          unit: 'gram',
        },
        {
          name: 'Spinazie',
          amount: 200,
          unit: 'gram',
        },
        {
          name: 'Zalm',
          amount: 200,
          unit: 'gram',
        },
        {
          name: 'Pijnboompitten',
          amount: 1,
          unit: 'handje',
        },
      ],
      serves: 2,
    },
    {
      name: 'Bloemkool curry',
      img: '../../../assets/images/curry-bloemkool.jpg',
      description:
        'Kook de bloemkool en de sperziebonen 3 minuutjes in een pan met water voor. Bak de ui en knoflook in een beetje olijfolie in een grote pan. Voeg de kip toe, en als deze gaar is de rode curry pasta. Giet de kokosmelk er bij en de tomatenblokjes. Laat het mengsel even pruttelen. Voeg de boontjes en bloemkool toe en verwarm nog even mee. Serveer de curry met cashewnoten, gekookte eieren en wat verse peterselie. ',
      ingredients: [
        {
          name: 'Bloemkool',
          amount: 400,
          unit: 'gram',
        },
        {
          name: 'Eieren',
          amount: 4,
        },
        {
          name: 'Kikkererwten',
          amount: 500,
          unit: 'gram',
        },
        {
          name: 'Kokosmelk',
          amount: 250,
          unit: 'gram',
        },
        {
          name: 'Rode curry pasta',
          amount: 2,
          unit: 'eetlepels',
        },
        {
          name: 'Ui',
          amount: 1,
        },
        {
          name: 'Sperziebonen',
          amount: 200,
          unit: 'gram',
        },
        {
          name: 'Tomatenblokjes',
          amount: 1,
          unit: 'blik',
        },
        {
          name: 'Knoflook',
          amount: 2,
          unit: 'tenen',
        },
        {
          name: 'Cashewnoten',
          amount: 50,
          unit: 'gram',
        },
        {
          name: 'Peterselie',
          amount: 0.5,
          unit: 'bosje',
        },
      ],
      serves: 4,
    },
    {
      name: 'Gado gado noedels',
      img: '../../../assets/images/noedels.jpg',
      description: 'Test',
      ingredients: [],
      serves: 2,
    },
    {
      name: 'Tagliatelle met paprika roomsaus',
      img: '../../../assets/images/tagliatelle-paprika.jpg',
      description: 'Test',
      ingredients: [],
      serves: 2,
    },
  ];

  constructor() {}

  get recipes() {
    return this.data;
  }

  set recipes(newRecipes) {
    this.recipes = newRecipes;
  }
}
