import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Name } from '../../models/name.model';
// import { NameService } from '../../services/name-service.service';

@Component({
  selector: 'app-full-name-revealer',
  templateUrl: './full-name-revealer.component.html',
  styleUrls: ['./full-name-revealer.component.css']
})
export class FullNameRevealerComponent implements OnInit {

  name: Name;
  firstName: string = '?';
  lastName: string = '?';
  fullName: string = '?';

  showFullName: boolean = false;

  // @Input() firstName: string;
  // @Output() setFirstName = new EventEmitter();
  // @Input() lastName: string;
  // @Output() setLastName = new EventEmitter();

  constructor(
    // private nameService: NameService
  ) {
    this.name = new Name();
    // this.name = this.nameService.name;
  }

  ngOnInit() {
  }

  reveal(): void {
    // this.setFirstAndLast();

    this.fullName = this.name.full;
    this.showFullName = true;
    setTimeout(() => {
      this.showFullName = false;
    }, 3000);
  }

  // setFirstAndLast(): void {
  //   this.name.first = this.firstName;
  //   this.name.last = this.lastName;
  // }

  // saveFirstName(): void {
  //   this.firstName = this.name.first;
  //   this.setFirstName.emit(this.firstName);
  // }

  // saveLastName() {
  //   this.lastName = this.name.last;
  //   this.setLastName.emit(this.lastName);
  // }

}
