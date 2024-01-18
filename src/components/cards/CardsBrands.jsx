import Link from "next/link";
import React from "react";

const CardsBrands = (props) => {
  return (
    <div className="flex">
      <Link className="cursor-pointer w-44 flex" href="/guitar-template">
        <div className="bg-black w-44 flex ">
          <img
            className="object-contains rounded-lg border-white border-4 "
            src={props.src}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default CardsBrands;
