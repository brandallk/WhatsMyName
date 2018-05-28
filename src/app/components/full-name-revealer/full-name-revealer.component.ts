import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';

@Component({
  selector: 'app-full-name-revealer',
  templateUrl: './full-name-revealer.component.html',
  styleUrls: ['./full-name-revealer.component.css']
})
export class FullNameRevealerComponent implements OnInit {

  showFullName: boolean = false;

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

  get lastName(): Name['last'] {
    return this.nameService.name.last;
  }

  set lastName(value: string) {
    this.nameService.name.last = value;
  }

  get fullName(): Name['full'] {
    return this.nameService.name.full;
  }

  reveal(): void {
    this.showFullName = true;
    setTimeout(() => {
      this.showFullName = false;
    }, 3000);
  }

}
