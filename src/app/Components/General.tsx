"use client";
import React, { useState, useEffect } from "react";
import Blogscard from "./Blogscard";
import { Skeleton } from "antd";
const General = () => {
  const [generalpost, setGeneralpost] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getGeneraldata = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d6d340aac8f14330954c10c2f51bbef6"
      );
      const data = await res.json();
      setGeneralpost(data.articles);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getGeneraldata();
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <Blogscard
          newsdata={generalpost}
          title="General"
          initial={7}
          last={13}
        />
      )}
      {loading ? (
        <Skeleton />
      ) : (
        <Blogscard
          newsdata={generalpost}
          title="Technology"
          initial={14}
          last={20}
        />
      )}
    </div>
  );
};

export default General;
