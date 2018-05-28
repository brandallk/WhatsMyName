import { Component, OnInit } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';

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

  constructor(
    private nameService: NameService
  ) {
    this.name = this.nameService.name;
  }

  ngOnInit() {
  }

  save(): void {
    this.lastName = this.name.last;
  }

}
