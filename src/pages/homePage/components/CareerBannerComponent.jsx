import React, { use } from "react";
import { Button } from "antd";
import { Sparkles, Trophy, MonitorPlay, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CareerBannerComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row bg-[#1c1d1f] text-white p-8 md:p-16 rounded-2xl overflow-hidden max-w-6xl mx-auto items-center gap-12">
      {/* Cột bên trái: Nội dung văn bản */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Reimagine your career in the AI era
        </h1>

        <p className="text-gray-400 text-lg max-w-md">
          Future-proof your skills with Personal Plan. Get access to a variety
          of fresh content from real-world experts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <FeatureItem
            icon={<Sparkles size={20} className="text-purple-400" />}
            text="Learn AI and more"
          />
          <FeatureItem
            icon={<Trophy size={20} className="text-green-400" />}
            text="Prep for a certification"
          />
          <FeatureItem
            icon={<MonitorPlay size={20} className="text-orange-400" />}
            text="Practice with AI coaching"
          />
          <FeatureItem
            icon={<Lightbulb size={20} className="text-blue-400" />}
            text="Advance your career"
          />
        </div>

        {/* Nút bấm và giá cả */}
        <div className="pt-6">
          <Button
            type="default"
            size="large"
            className="h-12 px-10 font-bold rounded-sm hover:bg-gray-100"
            onClick={() => navigate("personal-development")}
          >
            Learn more
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Starting at <span className="line-through">₫260,000</span>/month
          </p>
        </div>
      </div>

      {/* Cột bên phải: Grid hình ảnh (Visual Layout) */}
      <div className="">
        <img
          src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp"
          alt=""
        />
      </div>
    </div>
  );
};

// Component phụ cho các dòng tính năng
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="flex shrink-0">{icon}</div>
    <span className="text-sm font-medium text-gray-200">{text}</span>
  </div>
);

export default CareerBannerComponent;
