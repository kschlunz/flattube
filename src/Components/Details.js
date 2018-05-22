import React from 'react';

const Details = (props) => {
  return (
    <div>{props.episode.season}: {props.episode.name} </div>
  )
}

export default Details;
