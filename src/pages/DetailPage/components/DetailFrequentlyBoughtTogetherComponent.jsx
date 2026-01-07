import React from "react";
import { Button, Rate } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const DetailFrequentlyBoughtTogetherComponent = () => {
  const bundles = [
    {
      id: 1,
      title: "Intro to AI Agents and Agentic AI",
      author: "365 Careers",
      rating: 4.5,
      reviews: 7728,
      price: 199000,
      oldPrice: 399000,
      image: "https://img-c.udemycdn.com/course/240x135/6791359_66d8_2.jpg",
      isBestseller: true,
    },
    {
      id: 2,
      title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
      author: "365 Careers",
      rating: 4.6,
      reviews: 14109,
      price: 209000,
      oldPrice: 1269000,
      image: "https://img-c.udemycdn.com/course/240x135/6791359_66d8_2.jpg",
      isBestseller: true,
    },
  ];

  return (
    <div className=" border border-gray-200 p-6 mb-12">
      <h2 className="text-2xl font-bold mb-6">
        From AI Engineering to AI Agents: Full Training Path
      </h2>

      <div className="flex flex-col gap-6 relative">
        {bundles.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="flex gap-4 relative group cursor-pointer">
              <div className="relative shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-24 object-cover border border-gray-200"
                />
                {index === 0 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10">
                    <PlusOutlined className="text-xl text-gray-800" />
                  </div>
                )}
              </div>

              <div className="flex-1 flex justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight mb-1 group-hover:underline">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-500 mb-1">
                    {item.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-[#b4690e]">
                      {item.rating}
                    </span>
                    <Rate
                      disabled
                      defaultValue={item.rating}
                      className="text-[12px] text-[#b4690e]"
                    />
                    <span className="text-gray-500 text-sm">
                      ({item.reviews.toLocaleString()})
                    </span>
                  </div>
                  {item.isBestseller && (
                    <span className="inline-block bg-[#eceb98] text-black font-bold text-[11px] px-2 py-0.5 mt-1">
                      Bestseller
                    </span>
                  )}
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="font-bold text-lg">
                    ₫{item.price.toLocaleString()}
                  </div>
                  <div className="text-gray-500 line-through text-sm">
                    ₫{item.oldPrice.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t border-gray-100 pt-4">
        <div className="text-lg">
          Total: <span className="font-bold">₫408,000</span>{" "}
          <span className="text-gray-500 line-through ml-2">₫1,668,000</span>
        </div>
        <button type="primary" size="large" className="button_primary">
          Add all to cart
        </button>
      </div>
    </div>
  );
};
