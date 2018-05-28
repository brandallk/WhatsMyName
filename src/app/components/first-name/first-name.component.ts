import { Component, OnInit } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent implements OnInit {

  constructor(private nameService: NameService) {
  }

  ngOnInit() {
  }

  get firstName(): Name['first'] {
    return this.nameService.name.first;
  }

  set firstName(value: string) {
    this.nameService.name.first = value;
  }

}
