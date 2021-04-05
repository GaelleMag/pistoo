import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Map } from '../model/map.model';
import { Marker } from '../model/mapMarker.model';
import { MapService } from './map.service';


@Injectable({
    providedIn: 'root'
})

  export class MarkerService {

    public marker: Marker = new Marker;
    private subject: Subject<Marker> = new Subject();


     constructor(private mapService: MapService) {
       mapService.subject.subscribe((map: Map) => {
          this.marker.latitude = map.latitude;
          this.marker.longitude = map.longitude;
       });
      }
  
    displayMarkerUser() {
        this.marker.markerUser = new (window as any).google.maps.Marker({
          position: new (window as any).google.maps.LatLng(this.marker.latitude, this.marker.longitude),
          map: this.mapService.map.googleMap,
          title: "Vous",
        });
      }; 
}