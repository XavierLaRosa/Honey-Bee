import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "honey-bee-angular";
  imgUrl = String();

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
}
