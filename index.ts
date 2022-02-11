// Import stylesheets
import './style.css';
import { CONFIG } from './src/config';
import { phApiMock, coordinates } from './src/mocked-data/ph-api';

import mapboxgl from 'mapbox-gl';
import { formatPrice } from './src/utils/data.utils';

// Create a map
mapboxgl.accessToken = CONFIG.MAPBOX_TOKEN;
const map = new mapboxgl.Map({
  container: 'map',
  style: CONFIG.MAP_STYLE,
  // Coordinates to centered a map (Took from PH API)
  center: [coordinates.longitude, coordinates.latitude],
  zoom: 10,
});

// Format PH APi data with geodata to geomarkers for Mapbox
const geoData = phApiMock.response.body.items.map((item, index) => {
  return {
    type: 'Feature',
    properties: {
      value: formatPrice(item.salePrice),
      id: index,
      propertyId: item.offerId,
    },
    geometry: {
      type: 'Point',
      coordinates: [
        +item.coordinates.longitude.toFixed(5),
        +item.coordinates.latitude.toFixed(4),
      ],
    },
  };
});

//Styling Mapbox geodata markers
const getCircleLayerConfig = (color = 'transparent'): mapboxgl.AnyLayer => ({
  id: 'properties',
  type: 'circle',
  source: 'properties',
  paint: {
    'circle-color': color,
    'circle-radius': 3,
    'circle-stroke-width': 1,
    'circle-stroke-color': color,
  },
});

// Create HTML element based on marker info
const createBasicMarker = (marker): HTMLElement => {
  const element = document.createElement('div');

  element.className = 'rectangle-marker';
  element.innerText = marker.properties.value;

  element.id = marker.properties.id.toString();
  element.setAttribute('property-id', marker.properties.propertyId);

  return element;
};

const markers = [];

// To check next examples comment all example and uncomment interested

// Example 1
// Map with simple geodata markers
// map.on('load', () => {
//   map.addSource('properties', {
//     type: 'geojson',
//     data: {
//       type: 'FeatureCollection',
//       features: [...geoData],
//     },
//   });

//   map.addLayer(getCircleLayerConfig('#11874D'));
// });

// Example 2
// Map with html markers based on geodata markers
map.on('load', () => {
  map.addSource('properties', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [...geoData],
    },
  });

  map.addLayer(getCircleLayerConfig());

  geoData.forEach((marker) => {
    const element = createBasicMarker(marker);

    element.addEventListener('click', (event: MouseEvent) => {
      console.log(event.target);
    });

    const newMarker = new mapboxgl.Marker(element).setLngLat(
      marker.geometry.coordinates
    );

    newMarker.addTo(map);
    markers.push(marker);
  });
});
