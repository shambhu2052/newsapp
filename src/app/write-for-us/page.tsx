import React from "react";
import Writeforus from "../Components/Writeforus";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "News | write-for-us",
};
const page = () => {
  return (
    <div>
      <Writeforus />
    </div>
  );
};

export default page;
