import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";

@Component({
  selector: "pro-hitter",
  templateUrl: "./pro-hitter.component.html",
})
export class ProHitterComponent implements OnInit {
  proHittingData: any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getProData().subscribe((results) => {
      this.proHittingData = results;
      console.log(results);
    });
  }
}
