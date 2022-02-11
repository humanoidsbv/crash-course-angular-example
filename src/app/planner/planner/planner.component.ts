import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent implements OnInit {
  img =
    'https://smaakmenutie.nl/wp-content/uploads/2019/03/Pasta-met-broccoli-en-zalm-in-roomsaus-2.jpg';
  id = 2;
  plannedMeals = [
    {
      title: 'Pasta',
      id: 0,
      portions: 2,
      imgUrl: this.img,
    },
    {
      title: 'Curry',
      id: 1,
      portions: 2,
      imgUrl: this.img,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.plannedMeals = [
      ...this.plannedMeals,
      {
        title: 'Rice',
        portions: 2,
        imgUrl: this.img,
        id: this.id,
      },
    ];
    this.id++;
  }

  remove(id: number) {
    this.plannedMeals = this.plannedMeals.filter((meal) => meal.id !== id);
  }
}
