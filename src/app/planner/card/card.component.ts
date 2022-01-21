import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() imgUrl!: string;
  @Input() portions!: number;
  @Input() id!: number;
  @Output() remove = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onRemove() {
    this.remove.emit(this.id);
  }
}
