import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @Input() queryResponse: String;
  title = "honey-bee-angular";
  imgUrl = String();

  @ViewChild("keywordInput", { static: false }) keywordInputRef: ElementRef;
  @ViewChild("zipcodeInput", { static: false }) zipcodeInputRef: ElementRef;
  @ViewChild("radiusInput", { static: false }) radiusInputRef: ElementRef;
  @ViewChild("typeInput", { static: false }) typeInputRef: ElementRef;
  @ViewChild("directionInput", { static: false }) directionInputRef: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // let headers = new HttpHeaders().set(
    //   "Authorization",
    //   "563492ad6f91700001000001960d404e870a4a568d7abc872cdfbab5"
    // );
    // let obs = this.http.get(
    //   "https://api.pexels.com/videos/search?query=party&per_page=15&page=1",
    //   { headers }
    // );
    // obs.subscribe(response => {
    //   console.log(response["videos"][0]["video_files"][0]["link"]);
    //   this.imgUrl = response["videos"][0]["video_files"][0]["link"];
    // });
  }

  public open(event: Event) {
    console.log("tapped");

    var radius = "";
    var zipcode = "";
    var keyword = "";
    var sort = "";

    sort = "&sort=".concat(
      this.typeInputRef.nativeElement.value,
      ",",
      this.directionInputRef.nativeElement.value
    );
    if (this.radiusInputRef.nativeElement.value != "none") {
      console.log("caught rad");
      radius = "&radius=".concat(this.radiusInputRef.nativeElement.value);
    }
    if (this.zipcodeInputRef.nativeElement.value != "") {
      console.log("caught zip");
      zipcode = "&postalCode=".concat(this.zipcodeInputRef.nativeElement.value);
    }
    if (this.keywordInputRef.nativeElement.value != "") {
      console.log("caught key");
      keyword = "&keyword=".concat(this.keywordInputRef.nativeElement.value);
    }
    let obs = this.http.get(basicURL.concat(zipcode, keyword, radius, sort));
    obs.subscribe(response => {
      console.log(response);
      console.log(basicURL.concat(zipcode, keyword, sort));
      this.queryResponse = response["_embedded"]["venues"];
    });
  }
}

var basicURL =
  "https://app.ticketmaster.com/discovery/v2/venues.json?apikey=rZ4yI3gTU9m0uGoNlRHDvNV6ErKfcQYs";
var testURL =
  "https://app.ticketmaster.com/discovery/v2/venues.json?postalCode=07054&keyword=comedy&apikey=rZ4yI3gTU9m0uGoNlRHDvNV6ErKfcQYs&radius=5&sort=name,asc";
