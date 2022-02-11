import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  isOpen = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalOpenChange.subscribe((value) => {
      this.isOpen = value;
    });
  }

  close() {
    this.modalService.close();
  }
}
