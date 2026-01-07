import React from "react";
import { Button, Tag, Rate, Card, List, Divider, Collapse } from "antd";
import {
  CheckOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  PlayCircleFilled,
  ThunderboltFilled,
} from "@ant-design/icons";
const DetailTitleComponent = () => {
  return (
    <div className="bg-[#1c1d1f] text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="col-span-2">
          <nav className="text-[#cec0fc] font-bold text-sm mb-4 flex gap-2">
            <span>Development</span> {">"} <span>Data Science</span> {">"}{" "}
            <span>Artificial Intelligence (AI)</span>
          </nav>

          <h1 className="text-white text-4xl font-bold mb-4">
            The AI Engineer Course 2026: Complete AI Engineer Bootcamp
          </h1>

          <p className="text-xl mb-4">
            Complete AI Engineer Training: Python, NLP, Transformers, LLMs,
            LangChain, Hugging Face, APIs
          </p>

          <div className="flex items-center gap-2 mb-3">
            <Tag color="#eceb98" className="text-black font-bold border-none">
              Bestseller
            </Tag>
            <Tag color="#f3ca8c" className="text-black font-bold border-none">
              Role Play
            </Tag>
            <span className="text-[#f69c08] font-bold">4.6</span>
            <Rate
              disabled
              defaultValue={4.5}
              className="text-xs text-[#f69c08]"
            />
            <span className="text-[#cec0fc] underline text-sm">
              (14,115 ratings)
            </span>
            <span className="text-sm">96,789 students</span>
          </div>

          <div className="text-sm mb-3">
            Created by{" "}
            <span className="text-[#cec0fc] underline ml-1 cursor-pointer">
              365 Careers
            </span>
          </div>

          <div className="flex gap-4 text-sm">
            <span className="flex items-center gap-1">
              <InfoCircleOutlined /> Last updated 1/2026
            </span>
            <span className="flex items-center gap-1">
              <GlobalOutlined /> English
            </span>
            <span className="flex items-center gap-1">
              English [Auto], Arabic [Auto], 21 more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTitleComponent;
