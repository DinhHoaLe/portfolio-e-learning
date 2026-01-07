import React from "react";
import { Button, Tag, Rate, Card, List, Divider, Collapse } from "antd";
import {
  CheckOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  PlayCircleFilled,
  ThunderboltFilled,
} from "@ant-design/icons";

const DetailCardComponent = () => {
  return (
    <div className="sticky top-4">
      <Card
        className=" shadow-xl border-white p-0 overflow-hidden"
        cover={
          <div className="relative group cursor-pointer">
            <img
              alt="course preview"
              src="https://images.ctfassets.net/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png"
              className="w-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <PlayCircleFilled className="text-6xl text-white mb-2" />
              <span className="text-white font-bold">Preview this course</span>
            </div>
          </div>
        }
      >
        <div className="flex mb-4 border-b">
          <div className="w-1/2 text-center pb-2 border-b-2 border-black font-bold cursor-pointer">
            Personal
          </div>
          <div className="w-1/2 text-center pb-2 text-gray-500 font-bold cursor-pointer">
            Teams
          </div>
        </div>

        <div className="px-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold">₫209,000</span>
            <span className="text-gray-500 line-through">₫1,269,000</span>
            <span className="text-sm">84% off</span>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <button
              type="primary"
              size="large"
              className="button_primary"
            >
              Add to cart
            </button>
            <button size="large" className="button_primary_noFill">
              Buy now
            </button>
          </div>

          <div className="text-center text-xs text-gray-500 mb-4">
            <p>30-Day Money-Back Guarantee</p>
            <p>Full Lifetime Access</p>
          </div>

          <div className="flex justify-between text-sm font-bold underline mb-6">
            <span>Share</span>
            <span>Gift this course</span>
            <span>Apply Coupon</span>
          </div>

          <div className="border-2 border-dashed border-gray-300 p-2 mb-4 flex justify-between items-center bg-gray-50">
            <div className="text-xs text-gray-500">
              <span className="font-bold block text-gray-800">
                CP250105G1 is applied
              </span>
              Udemy coupon
            </div>
            <button type="primary" className="button_primary">
              Apply
            </button>
          </div>

          <Divider className="my-4">or</Divider>

          <div className="mb-4">
            <h4 className="font-bold mb-1">Subscribe to Udemy's top courses</h4>
            <p className="text-xs text-gray-600 mb-2">
              Get this course, plus 39,000+ of our top-rated courses, with
              Personal Plan.{" "}
              <span className="text-blue-700 underline font-bold">
                Learn more
              </span>
            </p>
            <button
              block
              size="large"
              className="button_primary_noFill w-full"
            >
              Start subscription
            </button>
            <p className="text-center text-[10px] text-gray-500 mt-2">
              Starting at ₫250,000 per month. Cancel anytime.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DetailCardComponent;
