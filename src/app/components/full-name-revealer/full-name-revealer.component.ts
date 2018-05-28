import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-full-name-revealer',
  templateUrl: './full-name-revealer.component.html',
  styleUrls: ['./full-name-revealer.component.css']
})
export class FullNameRevealerComponent implements OnInit, OnDestroy {

  name: Name;
  nameSubscription: Subscription;
  showFullName: boolean = false;

  constructor(private nameService: NameService) {
  }

  ngOnInit() {
    this.nameSubscription = this.nameService.name.subscribe(updatedName => {
      this.name = updatedName;
    });
  }

  ngOnDestroy() {
    this.nameSubscription.unsubscribe();
  }

  get firstName(): Name['first'] {
    return this.name.first;
  }

  set firstName(value: string) {
    this.name.first = value;
    this.nameService.updateName(this.name);
  }

  get lastName(): Name['last'] {
    return this.name.last;
  }

  set lastName(value: string) {
    this.name.last = value;
    this.nameService.updateName(this.name);
  }

  get fullName(): Name['full'] {
    return this.name.full;
  }

  reveal(): void {
    this.showFullName = true;
    setTimeout(() => {
      this.showFullName = false;
    }, 3000);
  }

}
