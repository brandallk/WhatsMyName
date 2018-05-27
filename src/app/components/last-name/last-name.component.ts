import { Component, OnInit } from '@angular/core';
import { Name } from '../../models/name.model';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {

  name: Name;
  firstName: string = '?';
  lastName: string = '?';
  fullName: string = '?';

  constructor() {
    this.name = new Name();
  }

  ngOnInit() {
  }

  save(): void {
    this.lastName = this.name.last;
  }

  setLastName(newLastName) {
    this.name.last = newLastName;
    this.save();
  }

}
