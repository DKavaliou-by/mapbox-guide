// Import stylesheets
import './style.css';
import { CONFIG } from './src/config';
import { phApiMock } from './src/mocked-data/ph-api';

import mapboxgl from 'mapbox-gl';
import { formatPrice } from './src/utils/data.utils';

// Create a map
mapboxgl.accessToken = CONFIG.MAPBOX_TOKEN;
const map = new mapboxgl.Map({
  container: 'map',
  style: CONFIG.MAP_STYLE,
  center: [phApiMock.coordinates.longitude, phApiMock.coordinates.latitude],
  zoom: 14,
});

// Format PH APi data with geodata to geomarkers for Mapbox
const geoData = phApiMock.items.map((item, index) => {
  return {
    type: 'Feature',
    properties: {
      value: formatPrice(item.price),
      id: index,
      propertyId: item.id,
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

map.once('load', () => {
  map.addSource('properties', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [...geoData],
    },
  });

  // map.addLayer(getCircleLayerConfig('#11874D'));
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
