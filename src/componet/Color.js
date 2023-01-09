import React from 'react';
import { firstCapitalized } from '../utils';

const Color = ({ name, color, setColor }) => {
  return (
    <div>
      <label htmlFor={name}>{firstCapitalized(name)}</label>
      <input
        type='color'
        id={name}
        name={name}
        value={color[`${name}`]}
        onChange={(e) => setColor({ ...color, [e.target.name]: e.target.value })}
      />
    </div>
  );
};

export default Color;
