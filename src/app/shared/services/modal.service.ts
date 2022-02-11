import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen = false;

  modalOpenChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.modalOpenChange.subscribe((value) => {
      this.isOpen = value;
    });
  }

  toggleOpen() {
    this.modalOpenChange.next(!this.isOpen);
  }

  open() {
    this.modalOpenChange.next(true);
  }

  close() {
    this.modalOpenChange.next(false);
  }
}
