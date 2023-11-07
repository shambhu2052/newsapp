import React from "react";
import Sport from "../Components/Sport";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "News | Sports",
};
const page = () => {
  return (
    <div>
      <Sport />
    </div>
  );
};

export default page;
