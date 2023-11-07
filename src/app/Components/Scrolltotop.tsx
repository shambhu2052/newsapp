"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const Scrolltotop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handlescroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  });
  return (
    <div>
      {visible && (
        <div
          onClick={scrollup}
          className="w-[50px] h-[50px] shadow-2xl rounded-full cursor-pointer bg-[#FF6501] flex justify-center items-center fixed bottom-3 right-3"
        >
          <AiOutlineArrowUp size={25} color="white" />
        </div>
      )}
    </div>
  );
};

export default Scrolltotop;
