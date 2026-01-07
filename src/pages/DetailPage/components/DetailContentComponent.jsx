import React from "react";
import { Button, Tag, Rate, Card, List, Divider, Collapse } from "antd";
import {
  CheckOutlined,
  TeamOutlined,
  DownloadOutlined,
  PlayCircleOutlined,
  MobileOutlined,
  CodeOutlined,
  TrophyOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const learningPoints = [
  "The course provides the entire toolbox you need to become an AI Engineer",
  "Understand key Artificial Intelligence concepts and build a solid foundation",
  "Start coding in Python and learn how to use it for NLP and AI",
  "Impress interviewers by showing an understanding of the AI field",
  "Apply your skills to real-life business cases",
  "Harness the power of Large Language Models",
  "Leverage LangChain for seamless development of AI-driven applications",
  "Become familiar with Hugging Face and the AI tools it offers",
  "Use APIs and connect to powerful foundation models",
  "Utilize Transformers for advanced speech-to-text",
];

const inclusions = [
  { icon: <TeamOutlined />, text: "Role Play" },
  { icon: <DownloadOutlined />, text: "143 downloadable resources" },
  { icon: <PlayCircleOutlined />, text: "29.5 hours on-demand video" },
  { icon: <MobileOutlined />, text: "Access on mobile and TV" },
  { icon: <CodeOutlined />, text: "107 coding exercises" },
  { icon: <TrophyOutlined />, text: "Certificate of completion" },
  { icon: <FileTextOutlined />, text: "22 articles" },
];

const DetailContentComponent = () => {
  return (
    <div className="w-full mx-auto py-8  gap-12">
      <div className="col-span-2">
        {/* Learning Box */}
        <div className="border border-gray-300 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {learningPoints.map((point, index) => (
              <div key={index} className="flex gap-3 items-start py-1">
                <CheckOutlined className="mt-1 text-sm" />
                <span className="text-sm text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Topics */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Explore related topics</h2>
          <div className="flex gap-3">
            {[
              "Artificial Intelligence (AI)",
              "Data Science",
              "Development",
            ].map((topic) => (
              <Button
                key={topic}
                shape="round"
                className="font-bold border-black h-10 px-6 hover:bg-gray-100"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">This course includes:</h2>
          <div className="grid grid-cols-2 gap-y-3 gap-x-8">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-gray-800"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContentComponent;
