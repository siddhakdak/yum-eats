import React from "react";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center pb-12">
        Top Picks
      </h1>
      <div className="hidden lg:flex m-auto py-2 px-2">
        <Splide className="flex" options={{ perPage: 4, gap: "0.5rem", drag: 'free', arrows: false }}>
          {topPicks.map((items) => {
            return (
              <SplideSlide key={items.id}>
                <div className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white p-4">
                    <p className="px-2 font-bold text-2xl ">{items.title}</p>
                    <p className="px-2 font-bold text-2xl">{items.price}</p>
                    <button className="border-dotted border-white text-white mx-2 absolute bottom-4">
                      Add To Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                    src={items.img}
                    alt={items.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
