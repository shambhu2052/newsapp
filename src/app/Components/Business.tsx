"use client";
import React, { useState, useEffect } from "react";
import Blogscard from "./Blogscard";
import { Skeleton } from "antd";
const Business = () => {
  const [businesspost, setBusinesspost] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getBusinessdata = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d6d340aac8f14330954c10c2f51bbef6"
      );
      const data = await res.json();
      console.log(data.articles);
      setBusinesspost(data.articles);
    } catch (error) {
      console.log("Error Fetching:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBusinessdata();
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <Blogscard
          newsdata={businesspost}
          title="Entertainment"
          initial={0}
          last={6}
        />
      )}
    </div>
  );
};

export default Business;
