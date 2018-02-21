import React from 'react';
import ReactDOM from 'react-dom';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import styles from './map.css';
import L from 'leaflet';
import { iconPerson, iconBeer, testIcon } from './icon.js'



export default class CatMap extends React.Component { 
    state = {
                lat: 45.674900199999996,
                lng: -111.1439401,
                zoom: 11,
            }
            render() {
                const position = [this.state.lat, this.state.lng];
                var outLaw = [45.7078, -111.0728];
                var bunkHouse = [45.6636, -111.0529];
                var bridger = [45.6627, -111.0526];
                var whiteDog = [45.6796, -111.0394];
                var mapBrewing = [45.7033, -111.04];
                var fourSix = [45.6930, -111.0344];
                var bozone = [45.6846, -111.0239];
                var mtnsWalking = [45.6849, -111.0249];
                var madison = [45.7714, -111.1685];
             return(
                <div id = "mapStyle"> 
                 <Map id = "map" style={{width:'100%', height:'300px'}} center = {position} zoom = {this.state.zoom}>
                
                  <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                  <Marker position={position} icon={iconPerson}>
                    <Popup>
                      <span>Moby's crib</span>
                    </Popup>
                  </Marker>
                  <Marker position={outLaw} icon={iconBeer}>
                    <Popup>
                      <span>Outlaw Brewing</span>
                    </Popup>
                 </Marker>
                 <Marker position={bunkHouse} icon={iconBeer}>
                    <Popup>
                      <span>Bunk House</span>
                    </Popup>
                  </Marker>
                  <Marker position={bridger} icon={iconBeer}>
                    <Popup>
                      <span>Bridger Brewing</span>
                    </Popup>
                 </Marker>
                 <Marker position={whiteDog} icon={iconBeer}>
                    <Popup>
                      <span>WhiteDog <br/>warning:dogs are here</span>
                    </Popup>
                  </Marker>   
                  <Marker position={mapBrewing} icon={iconBeer}>
                    <Popup>
                      <span>Map Brewing</span>
                    </Popup>
                 </Marker>
                 <Marker position={fourSix} icon={iconBeer}>
                    <Popup>
                      <span>406 Brewery</span>
                    </Popup>
                  </Marker>
                  <Marker position={bozone} icon={iconBeer}>
                    <Popup>
                      <span>Bozeman Brewing</span>
                    </Popup>
                 </Marker>
                 <Marker position={mtnsWalking} icon={iconBeer}>
                    <Popup>
                      <span>Mountains Walking <br/>warning: lumbersexuals are here </span>
                    </Popup>
                  </Marker> 
                  <Marker position={madison} icon={iconBeer}>
                    <Popup>
                      <span>Madison Brewery <br/>warning: good beer!! </span>
                    </Popup>
                  </Marker>        
                </Map>
              </div>
             )   
            }
}




/*const iconPerson = new L.Icon({
   iconUrl: require('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png'),
   iconRetinaUrl: require('../img/marker-pin-person.svg'),
   iconAnchor: null,
   popupAnchor: null,
   shadowUrl: null,
   shadowSize: null,
   shadowAnchor: null,
   iconSize: new L.Point(60, 75),
   className: 'leaflet-div-icon'
});

export { iconPerson }; */
