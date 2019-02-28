import React from 'react';

import prefix from './_prefix.js';

const Checkbox = ({ text, value, active, onChange }) => {
  const activeClass = active ? `${prefix}__checkbox--checked` : ``;

  const onClick = (evt, check) => {
    evt.stopPropagation();
    onChange(value, check);
  };

  return (
    <button
      className={`${prefix}__checkbox ${activeClass}`}
      name={`${prefix}__checkbox`}
      value={value}
      onClick={evt => onClick(evt, false)}
    >
      <span>{text}</span>
      {value !== Infinity ? (
        <span
          onClick={evt => onClick(evt, true)}
          className={`${prefix}__checkbox-only`}
        >
          Только
        </span>
      ) : (
        ``
      )}
    </button>
  );
};

export default Checkbox;
