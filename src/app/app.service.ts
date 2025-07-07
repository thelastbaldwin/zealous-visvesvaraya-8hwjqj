import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { amateurHittingData, proHittingData, type ProHittingData, type AmateurHittingData} from "src/mockData";

@Injectable()
export class AppService {
  getProData(): Observable<ProHittingData[]> {
    return of(proHittingData);
  }

  getAmateurData(): Observable<AmateurHittingData[]> {
    return of(amateurHittingData);
  }
}
