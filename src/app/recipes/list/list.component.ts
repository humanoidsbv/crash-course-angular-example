import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  recipes = [
    { name: 'Pasta', image: '../' },
    { name: 'Rice', image: '../' },
    { name: 'Burgers', image: '../' },
    { name: 'Pizza', image: '../' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
