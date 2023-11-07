"use client";
import React, { useState, useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import { Skeleton } from "antd";
const Slidecard = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getdata = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d6d340aac8f14330954c10c2f51bbef6"
      );
      const data = await res.json();
      setPost(data.articles);
      console.log(data.articles);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="container mx-auto px-2 md:px-0 py-3 md:py-6">
      <h2 className="text-2xl font-bold text-[#212529] pt-8 md:pt-0">News</h2>
      {loading ? (
        <Skeleton />
      ) : (
        <div>
          <div className="flex flex-wrap justify-between  ">
            {post?.slice(0, 6).map((val: any, index: number) => {
              return (
                <div
                  className="w-full  md:basis-[30%] my-5   p-2 rounded-xl shadow-2xl"
                  key={index}
                >
                  <div className="w-full h-[250px] overflow-hidden rounded-xl">
                    <img
                      src={val?.urlToImage}
                      alt="image of news"
                      className="w-full h-full object-fill hover:scale-105 duration-150"
                    />
                  </div>
                  <div className="flex gap-3 items-center text-black py-2">
                    <MdDateRange size={20} />
                    <p>{val?.publishedAt}</p>
                  </div>
                  <h2 className="text-[#253869] text-xl font-bold py-3">
                    {val?.title}
                  </h2>
                  <p className="text-black font-normal py-3 ">{val?.content}</p>
                  <Link
                    href={val.url}
                    target="_blank"
                    className="py-2 px-4 rounded-lg bg-[#253869] hover:bg-[#3873FF] text-white text-sm "
                  >
                    Read More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slidecard;
