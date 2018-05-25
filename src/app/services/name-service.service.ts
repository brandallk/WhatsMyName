import { Injectable } from '@angular/core';
import { Name } from '../models/name.model';

@Injectable()
export class NameService {

  name: Name;

  constructor() {
    this.name = new Name();
  }

}
