import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';

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

  constructor(
    private nameService: NameService
  ) {
    this.name = this.nameService.name;
  }

  ngOnInit() {
  }

  reveal(): void {

    this.fullName = this.name.full;
    this.showFullName = true;
    setTimeout(() => {
      this.showFullName = false;
    }, 3000);
  }

  saveName(): void {
    this.firstName = this.name.first;
    this.lastName = this.name.last;
  }

}
