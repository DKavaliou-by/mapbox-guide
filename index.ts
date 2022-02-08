// Import stylesheets
import './style.css';
import { CONFIG } from './src/config';
import { phApiMock } from './src/mocked-data/ph-api';

import mapboxgl from 'mapbox-gl';

// Write TypeScript code!
mapboxgl.accessToken = CONFIG.MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [phApiMock.coordinates.longitude, phApiMock.coordinates.latitude],
  zoom: 5,
});

const geoData = phApiMock.items.map((item, index) => {
  return {
    type: 'Feature',
    properties: {
      value: item.price,
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

const getCircleLayerConfig = (color = 'transperent'): mapboxgl.AnyLayer => ({
  id: 'properties',
  type: 'circle',
  source: 'properties',
  paint: {
    'circle-color': color,
    'circle-radius': 10,
    'circle-stroke-width': 1,
    'circle-stroke-color': color,
  },
});

map.on('load', () => {
  map.addSource('properties', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [...geoData],
    },
  });

  map.addLayer(getCircleLayerConfig('#11874D'));
  // map.addLayer(getCircleLayerConfig());
});
