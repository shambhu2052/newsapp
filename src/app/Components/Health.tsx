"use client";
import React, { useState, useEffect } from "react";
import Blogscard from "./Blogscard";
import { Skeleton } from "antd";
const Health = () => {
  const [healthpost, setHealthPost] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getHealthdata = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d6d340aac8f14330954c10c2f51bbef6"
      );
      const data = await res.json();
      setHealthPost(data.articles);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getHealthdata();
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <Blogscard
          newsdata={healthpost}
          title="Health"
          initial={14}
          last={20}
        />
      )}
      {loading ? (
        <Skeleton />
      ) : (
        <Blogscard
          newsdata={healthpost}
          title="Science"
          initial={21}
          last={27}
        />
      )}
      {loading ? (
        <Skeleton />
      ) : (
        <Blogscard
          newsdata={healthpost}
          title="Sports"
          initial={28}
          last={34}
        />
      )}
    </div>
  );
};

export default Health;
