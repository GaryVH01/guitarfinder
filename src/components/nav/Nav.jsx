"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <nav className="flex justify-center text-center my-3 md:left-0 md:top-1/3 lg:fixed lg:ml-5 lg:text-left">
      <ul
        className={
          Toggle
            ? " lg:block flex-col lg:gap-10"
            : "hidden lg:block flex-col lg:gap-10"
        }
        id="menu"
      >
        <Link href="/">
          <li className="text-white hover:bg-white py-4 hover:text-black">
            Home
          </li>
        </Link>
        <Link href="/collections">
          <li className="text-white hover:bg-white  py-4 hover:text-black">
            Collections
          </li>
        </Link>
        <Link href="/about">
          <li className="text-white hover:bg-white  py-4 hover:text-black">
            A propos
          </li>
        </Link>
        <Link href="/contact">
          <li className="text-white hover:bg-white  py-4 hover:text-black">
            Contact
          </li>
        </Link>
        <Link href="/guitar-template">
          <li className="text-white hover:bg-white  py-4 hover:text-black">
            guitare
          </li>
        </Link>
      </ul>
      <div
        onClick={() => showMenu(!Toggle)}
        className="absolute cursor-pointer top-3 right-4 text-2xl text-white md:top-4 md:right-6 lg:hidden"
        id="burger"
      >
        <RxHamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
