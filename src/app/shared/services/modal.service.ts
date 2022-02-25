import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen: number[] = [];

  modalOpenChange: Subject<number[]> = new Subject<number[]>();

  constructor() {
    this.modalOpenChange.subscribe((value) => {
      this.isOpen = value;
    });
  }

  toggleOpen(id: number) {
    this.isOpen.includes(id) ? this.close(id) : this.open(id);
  }

  open(id: number) {
    this.modalOpenChange.next((this.isOpen = [...this.isOpen, id]));
  }

  close(id: number) {
    this.modalOpenChange.next(this.isOpen.filter((openId) => id !== openId));
  }
}
