import { Component, OnInit } from '@angular/core';
import { Name } from '../../models/name.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent implements OnInit {

  name: Name;
  firstName: string = "";
  lastName: string = "";
  fullName: string = "";

  constructor(
    private route: ActivatedRoute
  ) {
    this.name = new Name();
  }

  ngOnInit() {
    this.firstName = this.route.snapshot.queryParamMap.get('first-name');
    this.lastName = this.route.snapshot.queryParamMap.get('last-name');
  }

  save(): void {
    this.firstName = this.name.first;
  }

  setFirstName(newFirstName) {
    if (newFirstName) {
      this.name.first = newFirstName;
      this.firstName = this.name.first;
    }
  }

  setLastName(newLastName) {
    if (newLastName) {
      this.name.last = newLastName;
      this.lastName = this.name.last;
    }
  }

}
