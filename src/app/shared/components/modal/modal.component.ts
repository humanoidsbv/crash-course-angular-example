import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() id!: number;
  isOpen: number[] = [];

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalOpenChange.subscribe((value) => {
      console.log('got here3', this.isOpen);
      this.isOpen = value;
    });
  }

  close() {
    this.modalService.close(this.id);
  }

  onModalClick(e: Event) {
    e.stopImmediatePropagation();
  }
}
