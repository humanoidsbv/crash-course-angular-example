import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  links = [
    { routerLink: '/planner', text: 'Planner' },
    { routerLink: '/recipes', text: 'Recipes' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
