import { Component, OnInit, OnDestroy } from '@angular/core';
import { Name } from '../../models/name.model';
import { NameService } from '../../services/name-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent implements OnInit, OnDestroy {

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

  get firstName(): Name['first'] {
    return this.name.first;
  }

  set firstName(value: string) {
    this.name.first = value;
    this.nameService.updateName(this.name);
  }

}
