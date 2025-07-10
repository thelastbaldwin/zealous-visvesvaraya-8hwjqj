import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { type ProHittingData, type AmateurHittingData } from "../types";
import { amateurHittingData, proHittingData } from "../mockData";

@Injectable()
export class AppService {
  getProData(): Observable<ProHittingData[]> {
    return of(proHittingData);
  }

  getAmateurData(): Observable<AmateurHittingData[]> {
    return of(amateurHittingData);
  }
}
