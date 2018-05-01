import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
// import { MouseEvent } from '@agm/core';
// import { GeolocationService } from '../../services/geolocation.service';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgModule} from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { Directive, Input  } from '@angular/core';

import { DirectionsMapDirective } from './directiva/google-map.directive';
import { InjectionToken } from '@angular/core';

import {} from '@types/googlemaps';
import { Ruta } from '../../models/ruta.model'
declare var google: any;
declare var jQuery: any;

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css'],
  providers : [ GoogleMapsAPIWrapper ]
})
export class ConductorComponent implements OnInit{
//okokokokokokok
newRoute = {
    'coordA': '',
    'coordB': '',
    'asientos_disponibles':'',
    'activa': '',
    'horario': '',
}
public latitude: number;
public longitude: number;
public destinationInput: FormControl;
public destinationOutput: FormControl;
public zoom: number;
public iconurl: string;
public mapCustomStyles : any;
public estimatedTime: any;
public estimatedDistance: any;

@ViewChild("pickupInput")
public pickupInputElementRef: ElementRef;

 @ViewChild("pickupOutput")
public pickupOutputElementRef: ElementRef;

 @ViewChild("scrollMe")
private scrollContainer: ElementRef;

@ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;

// public origin :any ; // its a example aleatory position
// public destination : any; // its a example aleatory position
origin = { longitude: -86.8295894, lattitude: 21.1354986 };  // its a example aleatory position
destination = { longitude: -86.8261042, lattitude: 21.2013764 };
constructor(
  private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone,
  private gmapsApi: GoogleMapsAPIWrapper,
  private _elementRef : ElementRef
) {
}

ngOnInit() {
  //set google maps defaults
  this.zoom = 4;
  this.latitude = 39.8282;
  this.longitude = -98.5795;
  //this.iconurl = '../image/map-icon.png';
  this.iconurl = '../image/map-icon.png';

 // this.mapCustomStyles = this.getMapCusotmStyles();
  //create search FormControl
  // this.destinationInput = new FormControl();
  // this.destinationOutput = new FormControl();
  //set current position
  this.setCurrentPosition();
  
  //load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
      let autocompleteInput = new google.maps.places.Autocomplete(this.pickupInputElementRef.nativeElement, {
        types: ["address"]
      });

      let autocompleteOutput = new google.maps.places.Autocomplete(this.pickupOutputElementRef.nativeElement, {
        types: ["address"]
      });
    
             this.setupPlaceChangedListener(autocompleteInput, 'ORG');
            this.setupPlaceChangedListener(autocompleteOutput, 'DES');
  });
}

private setupPlaceChangedListener(autocomplete: any, mode: any ) {
  autocomplete.addListener("place_changed", () => {
        console.log(autocomplete);
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined) {
            return;
          }
          if (mode === 'ORG') {
              this.vc.origin = {lng: -86.8295894, la: 21.1354986 };
              this.vc.originPlaceId = place.place_id;
              console.log(this.vc.origin);
          } else {
              this.vc.destination = {lng: -86.8261042, lat: 21.20137644}; // its a example aleatory position
              this.vc.destinationPlaceId = place.place_id;
              console.log(this.destination);
          }

          if(this.vc.directionsDisplay === undefined){ this.mapsAPILoader.load().then(() => { 
                this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
                
              }); 
        }
      
          //Update the directions
          console.log(this.vc, "traza")
          this.vc.updateDirections();
          this.zoom = 12;
        });

     });

}

private route() {
      this.vc.origin = {lng: -86.8295894, la: 21.1354986 };  
      this.vc.destination = {lng: -86.8261042, lat: 21.20137644}; // its a example aleatory position
      this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
  
      this.vc.updateDirections();
      this.zoom = 12;
}


getDistanceAndDuration(){
  this.estimatedTime = this.vc.estimatedTime;
  this.estimatedDistance = this.vc.estimatedDistance;
}

scrollToBottom(): void {
  jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 3000);
}
private setPickUpLocation( place:any ) {

        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        console.log("ok")
        this.zoom = 12;
}

private setCurrentPosition() {
  console.log("ok")
  
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 12;
      console.log(this.latitude,this.longitude,"position");

    });
  
}

private getMapCusotmStyles() {
  // Write your Google Map Custom Style Code Here.
}

}

// just an interface for type safety.
// interface marker {
//  lat: number;
//  lng: number;
//  label?: string;
//  draggable: boolean;
// }
