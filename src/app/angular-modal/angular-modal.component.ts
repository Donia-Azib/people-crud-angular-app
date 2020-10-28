import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './angular-modal.component.html',
  styleUrls: ['./angular-modal.component.css']
})
export class AngularModalComponent {

  @Input() user:User;

  constructor(public activeModal: NgbActiveModal) {}

}
