import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AmateurHitterComponent } from "../hitter/amateur/amateur-hitter.component";
import { ProHitterComponent } from "../hitter/pro/pro-hitter.component";
import { AppService } from "./app.service";

@NgModule({
  declarations: [AppComponent, AmateurHitterComponent, ProHitterComponent],
  imports: [BrowserModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
