import { MapService } from '../shared/service/map.service';
// import { MarkerService } from '../shared/service/mapmarker.service';
import { Map } from '../shared/model/map.model';
import { Loader } from "@googlemaps/js-api-loader";
import { Component, OnInit } from '@angular/core';
import { Position } from '@angular/compiler';
import { MapsModule } from '../maps.module';
import { Marker } from '../shared/model/mapMarker.model';

import { MarkerService } from '../shared/service/mapmarker.service';
import * as M from 'materialize-css';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public loading: boolean = true;

  constructor(private myService: MapService, private myMarker:MarkerService) { 
    
    // myService.findPosition().subscribe((map: Map) => {
    //   this.displayMap ();
    // });
    // const key = environment.googleApiKey;
   }
     
    ngOnInit(): void {
      M.AutoInit();
     }
  
    displayMap(){
      this.loading = false;
      console.log('hey!')
      new Loader({
        // apiKey: environment.googleApiKey,
      apiKey: "AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s",
      // googleApiKey,
      version: "weekly",
      }) .load()
      .then(() => {
         this.myService.map.googleMap = new (window as any).google.maps.Map(document.querySelector("#map"), {
          center: {lat: this.myService.map.latitude, lng: this.myService.map.longitude},
          zoom: 12,
        }); 
        this.myMarker.displayMarkerUser();
      }) 
      .catch(() => {
        alert("where is my map?")
        })
        
    };
  
  };
 
  
  