export class Name {
  public first: string = "";
  public last: string = "";
  private _full: string = `${this.first} ${this.last}`;

  get full(): string {
    return `${this.first} ${this.last}`
  }
}