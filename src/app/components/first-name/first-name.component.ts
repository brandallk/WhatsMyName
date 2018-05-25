import { Component, OnInit } from '@angular/core';
import { Name } from '../../models/name.model';
// import { NameService } from '../../services/name-service.service';

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

  constructor(
    // private nameService: NameService
  ) {
    this.name = new Name();
    // this.name = this.nameService.name;
  }

  ngOnInit() {
  }

  save(): void {
    this.firstName = this.name.first;
  }

  setFirstName(firstName) {
    this.name.first = firstName;
    this.save();
  }

}
