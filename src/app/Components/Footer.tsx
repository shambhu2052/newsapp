import React from "react";
import Link from "next/link";
interface footerlinktype {
  linkname: string;
  linkhref: string;
}
const footerlink = [
  {
    linkname: "Home",
    linkhref: "/",
  },
  {
    linkname: "About",
    linkhref: "/aboutus",
  },
  {
    linkname: "Write For us",
    linkhref: "/write-for-us",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#22408C] mt-4">
      <div className="container mx-auto px-3 md:px-3">
        <div className="flex justify-center gap-4 items-center py-3">
          {footerlink.map((val: footerlinktype, index: number) => {
            return (
              <div className="">
                <Link
                  href={val.linkhref}
                  key={index}
                  className=" text-white text-sm font-normal "
                >
                  {val.linkname}
                </Link>
              </div>
            );
          })}
        </div>
        <h4 className="text-center py-2 md:py-6 text-3xl text-white font-semibold">
          News Website
        </h4>
        <p className="text-center py-2 md:py-3 text-white font-normal text-sm ">
          Use of this web site constitute acceptance of the Terms of Use
          andPrivacy Policy GDPR
        </p>
        <p className="text-center py-1 text-white font-normal text-sm">
          © newsapi.org 2023
        </p>
        <p className="text-center py-1 text-white font-normal text-sm">
          {" "}
          Article by newsapi.org All right reserved.
        </p>
        <p className="text-center py-1 text-white font-normal text-sm">
          {" "}
          Created by shambhu prasad chaudhary
        </p>
      </div>
    </div>
  );
};

export default Footer;
