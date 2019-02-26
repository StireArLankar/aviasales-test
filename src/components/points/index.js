import React, { useState } from 'react';
import './style.scss';

let draggedItem = null;

const Points = props => {
  const [inputValue, setInputValue] = useState(``);

  const onInputChange = evt => {
    const value = evt.target.value;
    setInputValue(value);
  };

  const onEnterDown = evt => {
    if (evt.keyCode !== 13 || inputValue === ``) return;
    evt.preventDefault();

    const check = props.points.find((point) => point.name === inputValue);
    if (check) return;
    
    props.createPoint(inputValue);
    setInputValue(``);
  };

  const deletePoint = index => {
    const points = [...props.points.slice(0, index), ...props.points.slice(index + 1)];
    props.updateList(points);
  };

  const onDragStart = (evt, index) => {
    draggedItem = props.points[index];
    console.log(index, draggedItem);
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/html', evt.target);
    // evt.dataTransfer.setDragImage(evt.target, 20, 20);
  };

  const onDragOver = index => {
    const draggedOverItem = props.points[index];
    if (draggedItem === draggedOverItem) return;

    let items = props.points.filter(item => item !== draggedItem);
    items.splice(index, 0, draggedItem);
    props.updateList(items);
  };

  const onDragEnd = () => {
    draggedItem = null;
  };

  return (
    <div className={`points__wrapper`}>
      <input
        className={`points__input`}
        type="text"
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onEnterDown}
      />
      <ul className={`points__list`}>
        {props.points.map(({ name }, index) => (
          <li
            key={name}
            className={`points__item`}
            onDragOver={() => onDragOver(index)}
            draggable
              onDragStart={evt => onDragStart(evt, index)}
              onDragEnd={onDragEnd}
          >
            <span
              className={`points__content`}
              
            >
              {name}
            </span>
            <button
              className={`points__delete`}
              onClick={() => deletePoint(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Points;
