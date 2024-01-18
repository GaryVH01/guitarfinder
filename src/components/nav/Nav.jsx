"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Nav = () => {
  const currentRoute = usePathname();
  const [Toggle, showMenu] = useState(false);

  return (
    <nav className="flex justify-center text-center my-3 md:left-0 md:top-1/3 lg:fixed lg:text-left">
      <ul
        className={
          Toggle
            ? " lg:block flex-col lg:gap-10 "
            : "hidden lg:block flex-col lg:gap-10"
        }
        id="menu"
      >
        <Link href="/">
          <li className="text-white lg:hover:bg-white lg:hover:rounded-r-2xl  py-4 lg:hover:text-black px-5">
            Home
          </li>
        </Link>
        <Link href="/collections">
          <li className="text-white lg:hover:bg-white lg:hover:rounded-r-2xl  py-4 lg:hover:text-black px-5">
            Collections
          </li>
        </Link>
        <Link href="/about">
          <li className="text-white lg:hover:bg-white lg:hover:rounded-r-2xl   py-4 lg:hover:text-black px-5">
            A propos
          </li>
        </Link>
        <Link href="/contact">
          <li className="text-white lg:hover:bg-white lg:hover:rounded-r-2xl   py-4 lg:hover:text-black px-5">
            Contact
          </li>
        </Link>
        <Link href="/add-guitar">
          <li className="text-white lg:hover:bg-white lg:hover:rounded-r-2xl   py-4 lg:hover:text-black px-5">
            Add Guitar
          </li>
        </Link>
        <Link href="/getguitars">
          <li className="text-white lg:hover:bg-white lg:hover:rounded-r-2xl   py-4 lg:hover:text-black px-5">
            get guitars{" "}
          </li>
        </Link>
        <Link href="/add-guitar2">
          <li className="text-white lg:hover:bg-white lg:hover:rounded-r-2xl   py-4 lg:hover:text-black px-5">
            essai{" "}
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
