import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Map } from '../model/map.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map : Map = new Map();
  public subject: Subject<Map> = new Subject();

  constructor() { }

    findPosition(){
      navigator.geolocation.getCurrentPosition( 
        (position: any) => {
          
        this.map.latitude = position.coords.latitude;
        this.map.longitude = position.coords.longitude;
        this.subject.next(this.map);
        this.watchPosition();
        console.log("afficheMap");
        },
        () => {
          console.log("erreur")
        })
        return this.subject;
    }
       watchPosition(): Subject<Map>{
      window.navigator.geolocation.watchPosition(
        (position: any) => {
          console.log('WatchP');
          this.map = new Map;
          this.map.latitude = position.coords.latitude;
          this.map.longitude = position.coords.longitude;
          this.subject.next(this.map);
        },
        (err) => {
          console.log(err);
        }
      );
      return this.subject;
    }

}
