import { Component, OnInit, OnDestroy } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit, OnDestroy {

  name: Name;
  nameSubscription: Subscription;

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

  get lastName(): Name['last'] {
    return this.name.last;
  }

  set lastName(value: string) {
    this.name.last = value;
    this.nameService.updateName(this.name);
  }

}
