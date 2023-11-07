"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Slidecard from "./Slidecard";
interface slidetype {
  imageurl: string;
  title: string;
  content: string;
  linkurl: string;
}
const slides = [
  {
    imageurl:
      " https://media.wired.com/photos/6525c8ac419624284be05210/191:100/w_1280,c_limit/HANF-Michael%20Casey.jpg",
    title: "Where Does Crypto Go From Here?",
    content:
      "We talk with Michael Casey, the chief content officer of CoinDesk, almost one year after the news site brought down Sam Bankman-Fried’s cryptocurrency empire FTX.",
    linkurl: "https://www.wired.com/story/have-a-nice-future-podcast-24/",
  },
  {
    imageurl:
      "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/46326bbf3c33c4ddb3f18069c82167d7.jpg",
    title: "Crypto Exchanges, Not Just FTX, Are All a Mess Right Now",
    content:
      "The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes … [+1852 chars]",
    linkurl:
      "https://gizmodo.com/crypto-exchanges-ftx-binance-genesis-gemini-are-a-mess-1850968083",
  },
  {
    imageurl:
      "https://i.insider.com/652d698c55f52b01b3606b6c?width=1200&format=jpeg",

    title:
      "Bitcoin briefly spiked 10% after a false report said the SEC approved BlackRock's spot bitcoin ETF",

    content:
      "NurPhoto / Contributor\r\n<ul><li>Bitcoin briefly popped 10% on Monday after a false report said the SEC approved a spot bitcoin ETF from BlackRock.</li><li>BlackRock told Bloomberg that its ETF is, in… [+2410 chars]",
    linkurl:
      "https://markets.businessinsider.com/news/currencies/bitcoin-price-false-report-said-sec-approved-spot-bitcoin-etf-2023-10",
  },
  {
    imageurl:
      "https://i.insider.com/653bb6950487ff031cb0368b?width=1200&format=jpeg",
    title:
      "Bitcoin may see a 'supply shock' as available tokens hit their lowest level since 2018 with a potential ETF likely to jolt demand, analyst says",
    content:
      "Namthip Muanthongthae/Getty Images\r\n<ul>\n<li>The supply of available bitcoin to trade on crypto exchanges is at its lowest level in five years.</li>\n<li>That could set up a supply shock with potentia… [+1845 chars]",
    linkurl:
      "https://markets.businessinsider.com/news/currencies/bitcoin-price-supply-shock-tokens-spot-etf-crypto-exchange-sec-2023-10",
  },
];
export default class Simpleslider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 3000,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {slides?.map((val: slidetype, index: number) => {
            return (
              <div
                className="py-3 md:py-6 slide cursor-pointer px-3 md:px-0"
                key={index}
              >
                <div className="w-full md:basis-[47%] h-[300px]">
                  <img
                    src={val?.imageurl}
                    alt="image of news"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="hidden md:basis-[47%] md:block">
                  <h2 className="py-3 text-[#253869] font-bold  text-3xl">
                    {val?.title}
                  </h2>
                  <p className="text-base text-gray-500 py-3">{val?.content}</p>
                  <Link
                    href={val.linkurl}
                    target="_blank"
                    className="mt-10 py-3 px-5 rounded-lg bg-[#253869] hover:bg-[#3873FF] text-white text-base"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            );
          })}
          {/* <Slidecard /> */}
        </Slider>
      </div>
    );
  }
}
