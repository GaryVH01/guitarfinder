import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 className="m-5 md:my-14">{props.title}</h1>
    </div>
  );
};

export default Title;
