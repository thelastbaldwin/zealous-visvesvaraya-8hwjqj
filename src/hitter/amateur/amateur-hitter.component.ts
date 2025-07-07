import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { type AmateurHittingData } from "src/app/types";
import { getSDColor, clamp } from "src/app/util";

@Component({
  selector: "ama-hitter",
  templateUrl: "../hitter.component.html",
})
export class AmateurHitterComponent implements OnInit {
  hittingData: AmateurHittingData[] = [];
  isPro: boolean;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAmateurData().subscribe((results) => {
      this.hittingData = results;
      this.isPro = false;
    });
  }

  colorFromSD(value: number): string {
    return getSDColor(clamp(value, -2, 2));
  }
}
