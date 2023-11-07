import React from "react";
import type { Metadata } from "next";
import Aboutus from "../Components/Aboutus";
export const metadata: Metadata = {
  title: "News | Aboutus",
};
const page = () => {
  return (
    <div>
      <Aboutus />
    </div>
  );
};

export default page;
