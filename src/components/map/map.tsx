import React, {useEffect, useRef, useState} from 'react';
import {City, OfferMock} from '../../mocks/types.ts';
import useMap from '../../hooks/use-map.tsx';
import {layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  cityOffers: OfferMock[];
  className?: string;
}

const cityDefault: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8
  }};

const Map = ({cityOffers, className = 'cities'}: MapProps): React.JSX.Element => {
  const [city] = useState(cityOffers[0]?.city ? cityOffers[0].city : cityDefault);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });

        marker
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityOffers]);
  return (
    <section
      className={`${className}__map map`}
      style={{height: `${className === 'cities' ? '100%' : '50vh'}`,
        background: 'none'}}
      ref={mapRef}
    >
    </section>
  );
};

export default Map;
