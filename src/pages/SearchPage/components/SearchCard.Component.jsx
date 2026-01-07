import React from "react";
import { Card, Rate, Button, Badge, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col h-full border border-gray-200 hover:shadow-md transition-shadow cursor-pointer bg-white">
      {/* Thumbnail */}
      <div className="relative w-full h-40">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-base leading-tight mb-1 line-clamp-2 h-10">
          {course.title}
        </h3>
        <p className="text-xs text-gray-500 mb-1">{course.instructor}</p>

        {/* Rating & Stats Row */}
        <div className="flex items-center gap-1 mb-2">
          {course.isBestseller && (
            <span className="bg-[#eceb98] text-[10px] font-bold px-2 py-0.5 mr-1">
              Bestseller
            </span>
          )}
          <span className="font-bold text-sm text-orange-800">
            {course.rating}
          </span>
          <Rate
            disabled
            defaultValue={course.rating}
            allowHalf
            className="text-[10px] text-orange-500"
          />
          <span className="text-[10px] text-gray-400">({course.reviews})</span>
        </div>

        {/* Metadata Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="text-[10px] bg-gray-100 px-1 text-gray-600">
            {course.duration}
          </span>
          <span className="text-[10px] bg-gray-100 px-1 text-gray-600">
            {course.lectures}
          </span>
          <span className="text-[10px] bg-gray-100 px-1 text-gray-600">
            {course.level}
          </span>
        </div>

        {/* Price and Action */}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-bold text-lg">{course.price}</span>
            <span className="text-xs text-gray-400 line-through">
              {course.oldPrice}
            </span>
          </div>
          <Button
            type="default"
            className="border-purple-700 text-purple-700 font-bold text-xs px-2 hover:bg-purple-50"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
