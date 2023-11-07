import React, { useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { FaBars } from "react-icons/fa";
interface navlisttype {
  navlink: string;
  linkname: string;
}
const Drawers = ({ navlist }: { navlist: navlisttype[] }) => {
  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="cursor-pointer" onClick={showDrawer}>
        <FaBars size={35} color="#22408C" />
      </div>
      <Drawer title="NavList" placement="right" onClose={onClose} open={open}>
        <div className="flex flex-col gap-2">
          {navlist.map((val: navlisttype, index: number) => {
            return (
              <Link
                href={val.navlink}
                className="text-sm  font-bold  text-gray-500 hover:text-black"
                key={index}
              >
                {val.linkname}
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default Drawers;
