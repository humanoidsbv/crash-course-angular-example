import { Component, Input, OnInit } from '@angular/core';
import '../../../../assets/icons/hamburger.svg';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon: 'hamburger' | '' = '';
  constructor() {}

  ngOnInit(): void {}
}
