import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";

@Component({
  selector: "ama-hitter",
  templateUrl: "./hitter.component.html",
})
export class HitterComponent implements OnInit {
  amateurHittingData: any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAmateurData().subscribe((results) => {
      this.amateurHittingData = results;
    });
  }
}
