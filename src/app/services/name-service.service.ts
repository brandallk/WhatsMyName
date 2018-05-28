import { Injectable } from '@angular/core';
import { Name } from '../models/name.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NameService {

  private _name = new BehaviorSubject<Name>(new Name());
  name: Observable<Name> = this._name.asObservable();

  constructor() {
  }

  updateName(newName: Name) {
    this._name.next(newName);
  }

}
