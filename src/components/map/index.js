import React from 'react';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import './style.scss';

const YaMap = props => {
  const getMap = map => {
    props.getMap(map);
  };

  const onDragEnd = (index, evt) => {
    const coords = evt.originalEvent.target.geometry._coordinates;
    props.updatePoint(index, coords);
  };

  return (
    <YMaps>
      <Map
        width={`100%`}
        height={`100%`}
        className={`map__wrapper`}
        instanceRef={ref => getMap(ref)}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      >
        {props.points.map((point, index) => (
          <Placemark
            key={index}
            geometry={point.coords}
            options={{ draggable: true }}
            modules={["geoObject.addon.hint", 'geoObject.addon.balloon']}
            properties={{
              iconContent: index + 1,
              balloonContentHeader: point.name,
              hintContent: point.name
            }}
            onDragEnd={evt => onDragEnd(index, evt)}
          />
        ))}
        <Polyline
          geometry={props.points.map(point => point.coords)}
          options={{
            balloonCloseButton: false,
            strokeColor: '#000',
            strokeWidth: 4,
            strokeOpacity: 0.5
          }}
        />
      </Map>
    </YMaps>
  );
};

export default YaMap;
