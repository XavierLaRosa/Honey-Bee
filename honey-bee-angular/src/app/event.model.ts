export class Event {
  public name: string;
  public url: string;
  public classifications: object;
  public ticketLimit: {};
  public _embedded: object;

  constructor(
    namePassed: string,
    urlPassed: string,
    classificationsPassed: object,
    ticketLimitPassed: object,
    _embeddedPassed: object
  ) {
    this.name = namePassed;
    this.url = urlPassed;
    this.classifications = classificationsPassed;
    this.ticketLimit = ticketLimitPassed;
    this._embedded = _embeddedPassed;
  }
}
