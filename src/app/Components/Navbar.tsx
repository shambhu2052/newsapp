"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Drawers from "./Drawers";
interface navlisttype {
  navlink: string;
  linkname: string;
}
const navlist = [
  {
    navlink: "/",
    linkname: "Home",
  },
  {
    navlink: "/business",
    linkname: "Business",
  },
  {
    navlink: "/entertainment",
    linkname: "Entertainment",
  },
  {
    navlink: "/general",
    linkname: "General",
  },
  {
    navlink: "/health",
    linkname: "Health",
  },
  {
    navlink: "/science",
    linkname: "Science",
  },
  {
    navlink: "/sports",
    linkname: "Sports",
  },
  {
    navlink: "/technology",
    linkname: "Technology",
  },
];
const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    const handlescroll = () => {
      const isScrolled = window.scrollY > 20;
      setScroll(true);
    };
    //Attach the event Listener
    window.addEventListener("scroll", handlescroll);
    //clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  });
  return (
    <>
      <div className={`w-full py-3 sticky top-0 bg-white z-50`}>
        <div className="flex justify-between items-center md:hidden px-3">
          <div className="basis-[20%] h-[44px] flex justify-start">
            <Link href="/">
              <Image
                src="/../assets/logo2.png"
                alt="image of logo"
                width={100}
                height={50}
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="basis-[60%] flex justify-end">
            <Drawers navlist={navlist} />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-between container mx-auto ">
          <div className="basis-[20%] h-[65px] flex justify-start">
            <Link href="/">
              <Image
                src="/../assets/logo2.png"
                alt="image of logo"
                width={100}
                height={50}
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="basis-[65%] flex justify-between">
            {navlist.map((val: navlisttype, index: number) => {
              return (
                <Link
                  href={val.navlink}
                  className="text-sm  font-bold uppercase text-gray-500 hover:text-black"
                  key={index}
                >
                  {val.linkname}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
