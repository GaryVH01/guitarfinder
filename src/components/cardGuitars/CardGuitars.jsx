import React from "react";
import Link from "next/link";

const CardGuitars = (props) => {
  return (
    <div className="flex flex-col w-40 h-auto gap-5 justify-between ">
      {" "}
      <p className="text-white text-center uppercase ">{props.title}</p>
      <Link href={`/guitars/${props.id}`} className=" w-40 h-auto  ">
        <img className="w-40 h-40 object-cover " src={props.src} alt="" />
      </Link>
    </div>
  );
};

export default CardGuitars;
