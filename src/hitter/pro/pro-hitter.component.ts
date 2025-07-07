import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { type ProHittingData } from "src/app/types";

@Component({
  selector: "pro-hitter",
  templateUrl: "../hitter.component.html",
})
export class ProHitterComponent implements OnInit {
  hittingData: ProHittingData[] = [];
  isPro: boolean;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getProData().subscribe((results) => {
      this.hittingData = results;
      this.isPro = true;
    });
  }
}
