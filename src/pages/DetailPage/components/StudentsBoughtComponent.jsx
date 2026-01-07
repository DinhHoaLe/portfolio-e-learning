import React from "react";
import { List, Tag, Button } from "antd";
import { HeartOutlined, StarFilled, UserOutlined } from "@ant-design/icons";

const StudentsBoughtComponent = () => {
  const courses = [
    {
      id: 1,
      title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
      image: "https://img-c.udemycdn.com/course/50x50/6100015_1979_5.jpg", // Thay bằng link ảnh thật
      rating: 4.7,
      students: "185,174",
      price: "₫209,000",
      oldPrice: "₫1,299,000",
      duration: "33.5 total hours",
      updated: "1/2026",
      isBestseller: true,
    },
    {
      id: 2,
      title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
      image: "https://img-c.udemycdn.com/course/50x50/6100015_1979_5.jpg",
      rating: 4.7,
      students: "184,109",
      price: "₫199,000",
      oldPrice: "₫409,000",
      duration: "17 total hours",
      updated: "1/2026",
      isBestseller: true,
    },
    {
      id: 3,
      title: "Artificial Intelligence A-Z 2026: Agentic AI, Gen AI, and RL",
      image: "https://img-c.udemycdn.com/course/50x50/6100015_1979_5.jpg",
      rating: 4.4,
      students: "339,911",
      price: "₫309,000",
      oldPrice: "₫2,069,000",
      duration: "15.5 total hours",
      updated: "1/2026",
    },
    {
      id: 4,
      title: "AI Mastery Bootcamp 2026: Complete Guide with 1000 Projects",
      image: "https://img-c.udemycdn.com/course/50x50/6100015_1979_5.jpg",
      rating: 4.4,
      students: "39,154",
      price: "₫229,000",
      oldPrice: "₫1,209,000",
      duration: "83 total hours",
      updated: "12/2025",
    },
  ];

  return (
    <div className="w-full mt-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Students also bought</h2>

      <List
        itemLayout="horizontal"
        dataSource={courses}
        renderItem={(item) => (
          <List.Item
            className="border-b border-gray-200 py-4 hover:bg-gray-50 cursor-pointer group px-2"
            actions={[
              <div className="flex flex-col items-end min-w-[100px]">
                <span className="font-bold text-gray-900">{item.price}</span>
                <span className="text-xs text-gray-500 line-through">
                  {item.oldPrice}
                </span>
              </div>,
              <Button
                shape="circle"
                icon={<HeartOutlined />}
                className="border-gray-400 group-hover:bg-white"
              />,
            ]}
          >
            <div className="flex gap-4 w-full">
              {/* Thumbnail */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover border border-gray-200"
              />

              {/* Info */}
              <div className="flex flex-col flex-1 gap-1">
                <h4 className="font-bold text-[15px] leading-tight text-gray-900 line-clamp-2">
                  {item.title}
                </h4>

                <div className="flex items-center gap-2 flex-wrap">
                  {item.isBestseller && (
                    <Tag
                      color="#eceb98"
                      className="text-black font-bold border-none m-0 text-[11px] px-1"
                    >
                      Bestseller
                    </Tag>
                  )}
                  <span className="text-[#1e3a1a] font-bold text-xs">
                    {item.duration}
                  </span>
                  <span className="text-gray-500 text-xs">
                    • Updated {item.updated}
                  </span>
                </div>
              </div>

              {/* Rating & Students */}
              <div className="flex items-center gap-4 px-4">
                <div className="flex items-center gap-1 font-bold text-sm">
                  <span>{item.rating}</span>
                  <StarFilled className="text-[#b4690e] text-xs" />
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <UserOutlined className="text-xs" />
                  <span>{item.students}</span>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />

      <button block size="large" className="button_primary_noFill mt-6  w-full">
        Show more
      </button>
    </div>
  );
};

export default StudentsBoughtComponent;
