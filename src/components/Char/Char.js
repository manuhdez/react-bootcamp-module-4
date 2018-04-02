import React from 'react';

const CharComponent = (props) => {

  const charStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  return (
    <div style={charStyle} onClick={props.remove}>
      <p>{props.letter}</p>
    </div>
  )
}

export default CharComponent;