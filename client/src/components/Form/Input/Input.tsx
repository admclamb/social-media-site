import React from 'react';

type Props = {};

const Input = ({ value, handleChange, name, type }: Props) => {
  return (
    <div>
      <label>{name} </label>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
