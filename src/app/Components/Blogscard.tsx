import Link from "next/link";
import React from "react";
import { MdDateRange } from "react-icons/md";
interface Businessnewstype {
  url: string;
  urlToImage: string;
  content: string;
  title: string;
  publishedAt: string;
}
const Blogscard = ({
  newsdata,
  title,
  initial,
  last,
}: {
  newsdata: Businessnewstype[];
  title: string;
  initial: number;
  last: number;
}) => {
  if (!newsdata || !Array.isArray(newsdata)) {
    return null; // or render a loading message or handle the case accordingly
  }
  return (
    <div className="container mx-auto my-7 px-3 md:px-0">
      <div className="flex justify-between items-center py-3">
        <h2 className="text-2xl font-bold text-[#212529]">{title}</h2>
      </div>
      <div className="flex justify-between flex-wrap">
        {newsdata
          .slice(initial, last)
          .map((val: Businessnewstype, index: number) => {
            return (
              <div
                className="w-full md:basis-[30%] my-5   p-2 rounded-xl shadow-2xl"
                key={index}
              >
                <div className="w-full h-[250px] overflow-hidden rounded-xl  ">
                  <img
                    src={val.urlToImage}
                    alt="image of blognews"
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
  );
};

export default Blogscard;
