"use client";
import React, { useState, useEffect } from "react";
import Blogscard from "../Components/Blogscard";
const Sport = () => {
  const [healthpost, setHealthPost] = useState([]);
  const getHealthdata = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d6d340aac8f14330954c10c2f51bbef6"
    );
    const data = await res.json();
    setHealthPost(data.articles);
  };
  useEffect(() => {
    getHealthdata();
  }, []);
  return (
    <div>
      <Blogscard newsdata={healthpost} title="Sports" initial={0} last={11} />
    </div>
  );
};

export default Sport;
