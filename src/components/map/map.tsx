import React, {useEffect, useRef} from 'react';
import {CityDetailed, OfferDetailed, OfferMain} from '../../types.ts';
import useMap from '../../hooks/use-map.tsx';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';

interface MapProps {
  cityOffers: (OfferMain | OfferDetailed)[];
  city: CityDetailed;
  className?: string;
  selectedOfferId: string | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const Map = ({city, cityOffers, className = 'cities', selectedOfferId}: MapProps): React.JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [city, map]);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOfferId && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityOffers, selectedOfferId, city]);
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
