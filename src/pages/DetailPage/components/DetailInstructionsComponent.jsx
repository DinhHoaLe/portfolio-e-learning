import React from "react";
import { Avatar, Button } from "antd";
import {
  StarFilled,
  MessageFilled,
  UserOutlined,
  PlayCircleFilled,
  DownOutlined,
} from "@ant-design/icons";

export const DetailInstructionsComponent = () => {
  const stats = [
    { icon: <StarFilled />, label: "4.5 Instructor Rating" },
    { icon: <MessageFilled />, label: "1,114,904 Reviews" },
    { icon: <UserOutlined />, label: "3,661,577 Students" },
    { icon: <PlayCircleFilled />, label: "131 Courses" },
  ];

  return (
    <div className="w-full mb-12">
      <h2 className="text-2xl font-bold mb-4">Instructor</h2>
      <div className="mb-4">
        <a
          href="#"
          className="text-xl font-bold text-[#5624d0] underline block mb-1"
        >
          365 Careers
        </a>
        <p className="text-gray-600 italic">
          Creating opportunities for Data Science and Finance students
        </p>
      </div>

      <div className="flex gap-6 mb-6">
        <Avatar
          size={120}
          src="https://via.placeholder.com/120" // Thay bằng logo 365 Careers
          className="border border-gray-200 shrink-0"
        />
        <div className="flex flex-col gap-2 justify-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-gray-700 font-medium"
            >
              <span className="text-sm">{stat.icon}</span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[15px] leading-relaxed text-gray-800 space-y-4">
        <p className="font-bold">
          365 Careers is the #1 best-selling provider of business, finance, data
          science and AI courses on Udemy.
        </p>
        <p>
          The company's courses have been taken by more than 3,600,000 students
          in 210 countries. People working at world-class firms like Apple,
          PayPal, and Citibank have completed 365 Careers trainings.
        </p>
        <p>
          Currently, 365 focuses on the following topics on Udemy:{" "}
          <span className="font-bold">1 Finance</span> Finance fundamentals,
          Financial modeling in Excel, Valuation, Accounting...
        </p>

        <Button
          type="link"
          className="p-0 text-[#5624d0] font-bold flex items-center gap-1 hover:text-[#401b9c]"
        >
          Show more <DownOutlined className="text-xs" />
        </Button>
      </div>
    </div>
  );
};
