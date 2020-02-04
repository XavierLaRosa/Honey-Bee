import { Component, OnInit, Input } from "@angular/core";
import { Event } from "../event.model";

@Component({
  selector: "app-event-tile",
  templateUrl: "./event-tile.component.html",
  styleUrls: ["./event-tile.component.css"]
})
export class EventTileComponent implements OnInit {
  @Input() event: Event;
  constructor() {}

  ngOnInit() {
    this.event.classifications[0]["segment"]["name"] != "Undefined"
      ? console.log("caught")
      : (this.event.classifications[0]["segment"]["name"] = "");

    this.event.classifications[0]["genre"]["name"] != "Undefined"
      ? console.log("caught")
      : (this.event.classifications[0]["genre"]["name"] = "");

    // this.event.ticketLimit["info"] != null
    //   ? console.log("caught")
    //   : (this.event.ticketLimit["info"] = "");
  }
}
