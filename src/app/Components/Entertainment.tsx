"use client";
import React, { useState, useEffect } from "react";
import Blogscard from "./Blogscard";
import { Skeleton } from "antd";
const Entertainment = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getEntertainmentdata = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d6d340aac8f14330954c10c2f51bbef6"
      );
      const data = await res.json();
      setPost(data.articles);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getEntertainmentdata();
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <Blogscard newsdata={post} title="Business" initial={7} last={13} />
      )}
    </div>
  );
};

export default Entertainment;
