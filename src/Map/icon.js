import L from 'leaflet';

const iconPerson = new L.Icon({
   iconUrl: require('./catIcon2.ico'),
   iconRetinaUrl: require('./catIcon2.ico'),
   iconAnchor: null,
   popupAnchor: [0, -20],
   shadowUrl: null,
   shadowSize: 0,
   shadowAnchor: 0,
   iconSize: new L.Point(30, 37.5),
   fill: false,
   className: 'leaflet-div-icon'
});

export { iconPerson };

const iconBeer = new L.Icon({
    iconUrl: require('./beerIcon.png'),
    iconRetinaUrl: require('./beerIcon.png'),
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 37.5),
    className: 'leaflet-div-icon'
 });
 
 export { iconBeer };

 /*
 const testIcon = new L.icon({ 
    className: 'fa fa-info-circle', // you _could_ add other icon classes, not tested.
    markerColor: '#00a9ce',
    iconColor: '#FFF',
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 37.5),
 });

 export { testIcon };
 */