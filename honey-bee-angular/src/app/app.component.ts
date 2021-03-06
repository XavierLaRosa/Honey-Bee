import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

var basicURL =
  "https://app.ticketmaster.com/discovery/v2/events?apikey=rZ4yI3gTU9m0uGoNlRHDvNV6ErKfcQYs&locale=*";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  rendered = false;
  keywordInput: string = "";
  zipcodeInput: string = "";
  radiusInput: string = "none";
  typeInput: string = "name";
  directionInput: string = "asc";
  radius = "";
  zipcode = "";
  keyword = "";
  sort = "";

  @Input() queryResponse: string;
  queryResponeLength: number;
  imgUrl: string;

  constructor(private http: HttpClient) {}

  public open(event: Event) {
    //this.sort = "&sort=".concat(this.typeInput, ",", this.directionInput);
    if (this.radiusInput != "none") {
      console.log("caught rad");
      this.radius = "&radius=".concat(this.radiusInput);
    }
    if (this.zipcodeInput != "") {
      console.log("caught zip");
      this.zipcode = "&postalCode=".concat(this.zipcodeInput);
    }
    if (this.keywordInput != "") {
      console.log("caught key");
      this.keyword = "&keyword=".concat(this.keywordInput);
    }
    let obs = this.http.get(
      basicURL.concat(this.zipcode, this.keyword, this.radius, this.sort)
    );
    obs.subscribe(response => {
      console.log(response);
      console.log(
        basicURL.concat(this.zipcode, this.keyword, this.radius, this.sort)
      );

      this.queryResponeLength = response["page"]["size"];
      if (this.queryResponeLength == 0) {
      } else {
        this.queryResponse = response["_embedded"]["events"];
      }
      console.log(
        "length of query: " +
          this.queryResponeLength +
          " type: " +
          typeof this.queryResponeLength
      );
    });
  }

  public clear(event: Event) {
    console.log("tapped");
    this.queryResponse = null;

    this.keywordInput = "";
    this.zipcodeInput = "";
    this.radiusInput = "none";
    this.typeInput = "name";
    this.directionInput = "asc";
    this.radius = "";
    this.zipcode = "";
    this.keyword = "";
    this.sort = "";
  }

  public emptyQuery(query: number) {
    if (query > 0) {
      console.log("returning false");
      return false;
    } else if (query == 0) {
      console.log("returning true");
      return true;
    }
  }

  ngOnInit() {
    let headers = new HttpHeaders().set(
      "Authorization",
      "563492ad6f91700001000001960d404e870a4a568d7abc872cdfbab5"
    );
    let randomPage = Math.floor(Math.random() * 999);
    var page = "&page=".concat(String(randomPage));
    let obs = this.http.get(
      "https://api.pexels.com/v1/search?query=party&per_page=1&min_width=1920&max_width=2300".concat(
        page
      ),
      { headers }
    );
    obs.subscribe(response => {
      console.log(response["photos"][0]["src"]["original"]);
      this.imgUrl = response["photos"][0]["src"]["original"];
      this.rendered = true;
    });
  }
}
