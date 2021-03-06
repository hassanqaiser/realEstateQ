import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IHouse } from '../../../shared/interfaces';
declare var google: any;

import {
  MouseEvent,
  GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
	selector: 'googleMap',
	styles:[`

			.sebm-google-map-container {
		    width: 100%;
		  }
			.sebm-google-map-container-inner {
				width: 100%;
			}
		  .map {
				position: absolute;
		    top: 5;
		    left: 5;
		    width: 100%;
		  }
		@media (max-width: 1440px) {
			.sebm-google-map-container {
		    height: 620px;
		  }
		  .map {
		    height: 620px;
		  }
		}
		@media (max-width: 768px) {
		  .sebm-google-map-container {
		    height: 560px;
		  }
			.map {
		    height: 560px;
		  }
		}
		@media (max-width: 450px) {
		  .sebm-google-map-container {
		    height: 460px;
		  }
			.map {
		    height: 420px;
		  }
		}
		
  	`],
	directives: [GOOGLE_MAPS_DIRECTIVES],
	templateUrl: 'googleMap.component.html',
	changeDetection: ChangeDetectionStrategy.Default
})

export class GoogleMapComponent implements OnInit {
	onlineStatus: boolean = true;
	@Input() houses: IHouse[] = [];
  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 31.51;
  lng: number = 74.43;
	
	ngOnInit() { 
		if (window.navigator.onLine) {
			this.onlineStatus = true;
		} else {
			this.onlineStatus = false;
		}

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					let pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};
					this.lat = pos.lat;
					this.lng = pos.lng;
				}, () => {
					console.log('Geolocation not Permitted');
				});
			} else {
				// Browser doesn't support Geolocation
				console.log('Browser doesnt support Geolocation');
				
			}
  }
}
