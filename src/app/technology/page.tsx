"use client";
import React, { useState, useEffect } from "react";
import Blogscard from "../Components/Blogscard";
const page = () => {
  const [generalpost, setGeneralpost] = useState([]);
  const getGeneraldata = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d6d340aac8f14330954c10c2f51bbef6"
    );
    const data = await res.json();
    setGeneralpost(data.articles);
  };
  useEffect(() => {
    getGeneraldata();
  }, []);
  return (
    <div>
      <Blogscard
        newsdata={generalpost}
        title="Technology"
        initial={14}
        last={20}
      />
    </div>
  );
};

export default page;
