import React from "react";
import { Rate, Avatar, Button, Space } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  MoreOutlined,
  StarFilled,
} from "@ant-design/icons";

const reviewsData = [
  {
    id: 1,
    name: "Stefan O.",
    initials: "SO",
    rating: 5,
    time: "2 weeks ago",
    content:
      "The course was overall good, but certain parts of the course itself needs updating. I am not sure if it was mentioned in the intro to the course but you have to pay for the use of the...",
  },
  {
    id: 2,
    name: "Kunle W.",
    initials: "KW",
    rating: 5,
    time: "3 weeks ago",
    content:
      "This course explicitly takes a learner on the fundamental components of AI, utilising python as a foundational technical skill to build large language models.",
  },
  {
    id: 3,
    name: "Ken S.",
    initials: "KS",
    rating: 4,
    time: "3 weeks ago",
    content:
      "Concatenation of several courses that provides a good overview of the subject but is a little inconsistent with respect to instructor quality and feedback mechanisms. Provider has done a...",
  },
  {
    id: 4,
    name: "Stanley A. M. O.",
    initials: "SO",
    rating: 5,
    time: "2 months ago",
    content:
      "This is an excellent and insightful course on AI. It really broadened my understanding of the subject and gave me practical skills I can apply right away.",
  },
];

const DetailReviewComponent = () => {
  return (
    <div className=" mt-12 mb-20">
      <div className="flex items-center gap-2 mb-6">
        <StarFilled className="text-[#b4690e] text-xl" />
        <h2 className="text-2xl font-bold m-0">
          4.6 course rating • 14K ratings
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {reviewsData.map((review) => (
          <div key={review.id} className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3 items-center">
                <Avatar size={40} className="bg-[#1c1d1f] font-bold">
                  {review.initials}
                </Avatar>
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="flex items-center gap-2">
                    <Rate
                      disabled
                      defaultValue={review.rating}
                      className="text-[12px] text-[#b4690e]"
                    />
                    <span className="text-gray-500 text-xs font-bold">
                      {review.time}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                type="text"
                icon={<MoreOutlined />}
                className="text-gray-400"
              />
            </div>

            <p className="text-[15px] text-gray-800 leading-relaxed mb-4 line-clamp-4">
              {review.content}
            </p>

            {review.content.endsWith("...") && (
              <Button
                type="link"
                className="p-0 h-auto text-[#1c1d1f] font-bold underline mb-4 block"
              >
                Show more
              </Button>
            )}

            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">Helpful?</span>
              <Space size="middle">
                <LikeOutlined className="cursor-pointer hover:text-black" />
                <DislikeOutlined className="cursor-pointer hover:text-black" />
              </Space>
            </div>
          </div>
        ))}
      </div>

      <button
        size="large"
        className="button_primary_noFill mt-8"
      >
        Show all reviews
      </button>
    </div>
  );
};

export default DetailReviewComponent;
