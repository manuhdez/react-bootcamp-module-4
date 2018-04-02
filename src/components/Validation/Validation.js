import React from 'react';

const Validation = (props) => {
  const text = props.length < 5 ? 'Text too short' : 'Text long enough';
  return (
    <p>{text}</p>
  )
}

export default Validation;