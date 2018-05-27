import { Component, OnInit } from '@angular/core';
import { Name } from '../../models/name.model';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent implements OnInit {

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
    this.firstName = this.name.first;
  }

  setFirstName(newFirstName) {
    this.name.first = newFirstName;
    this.save();
  }

}
