import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Name } from '../../models/name.model';

@Component({
  selector: 'app-full-name-revealer',
  templateUrl: './full-name-revealer.component.html',
  styleUrls: ['./full-name-revealer.component.css']
})
export class FullNameRevealerComponent implements OnInit {

  name: Name;
  fullName: string = '?';

  showFullName: boolean = false;

  @Input() firstName: string;
  @Input() lastName: string;

  constructor() {
    this.name = new Name();
  }

  ngOnInit() {
  }

  reveal(): void {
    this.setFirstAndLast();

    this.fullName = this.name.full;
    this.showFullName = true;
    setTimeout(() => {
      this.showFullName = false;
    }, 3000);
  }

  setFirstAndLast(): void {
    this.name.first = this.firstName;
    this.name.last = this.lastName;
  }

}
