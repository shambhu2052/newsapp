import React from "react";
import Science from "../Components/Science";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "News | Science",
};
const page = () => {
  return (
    <div>
      <Science />
    </div>
  );
};

export default page;
