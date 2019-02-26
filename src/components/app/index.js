import React, {useState} from 'react';
import Map from '../map';
import Points from '../points';
import './style.scss';

const App = props => {
  const [map, setMap] = useState();
  const [points, setPoints] = useState([]);

  const createPoint = (name) => {
    const coords = map.getCenter();
    setPoints([...points, {coords, name}]);
  }

  const updatePoint = (index, coords) => {
    const { name } = points[index];
    const temp = [...points.slice(0, index), {coords, name}, ...points.slice(index + 1)];
    setPoints([...temp]);
  }

  const updateList = (points) => {
    setPoints(points);
  }

  const getMap = (map) => {
    setMap(map);
  }

  return (
    <div className={`app__wrapper`}>
      <div className={`app__points`}>
        <Points createPoint={createPoint} points={points} updateList={updateList}/>
      </div>
      <div className={`app__map`}>
        <Map getMap={getMap} points={points} updatePoint={updatePoint}/>
      </div>
    </div>
  );
}

export default App;