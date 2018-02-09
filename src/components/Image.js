import React from "react";
import './Image.css'

const Image = props => {
  return (
    <div className="card Image">
      <div className="card-block">
        <h8 className="card-title">{ props.item.title}</h8>
      </div>
      <img className="card-img-bottom card-img image" src={props.item.media.m} alt="{props.item.title}" />
    </div>
  );
};

export default Image;
