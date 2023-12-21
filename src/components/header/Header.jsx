import React from "react";

const Header = () => {
  return (
    <header className="">
      <div
        className="flex justify-center bg-red-400 md:rounded-b-full md:mx-32 py-1 lg:mb-5
      lg:mx-56"
      >
        <img className="w-48" src="logo.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
