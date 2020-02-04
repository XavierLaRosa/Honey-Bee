export class Event {
  public name: string;
  public url: string;
  constructor(namePassed: string, urlPassed: string) {
    this.name = namePassed;
    this.url = urlPassed;
  }
}
