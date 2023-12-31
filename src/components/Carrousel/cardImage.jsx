import React from "react";

const cardImage = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default cardImage;
