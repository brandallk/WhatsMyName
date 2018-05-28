import { Component, OnInit } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {

  constructor(private nameService: NameService) {
  }

  ngOnInit() {
  }

  get lastName(): Name['last'] {
    return this.nameService.name.last;
  }

  set lastName(value: string) {
    this.nameService.name.last = value;
  }

}
