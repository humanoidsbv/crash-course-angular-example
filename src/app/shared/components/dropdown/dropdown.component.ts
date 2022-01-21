import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  isOpen = false;

  @Input() items: { routerLink: string; text: string }[] = [];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isOpen = !this.isOpen;
  }

  onBackdropClick() {
    this.isOpen = false;
  }
}
