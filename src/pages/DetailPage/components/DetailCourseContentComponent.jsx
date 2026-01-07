import React from "react";
import { Collapse, Button } from "antd";
import {
  PlayCircleOutlined,
  CaretRightOutlined,
  CaretDownOutlined,
  BulbOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";

const { Panel } = Collapse;

const DetailCourseContentComponent = () => {
  const sections = [
    {
      key: "1",
      title: "Intro to AI Module: Getting started",
      lectures: 6,
      duration: "26min",
      items: [
        {
          title: "Building an AI tool in 5 minutes: A quick demo",
          duration: "10:16",
          preview: true,
          type: "video",
        },
        {
          title: "What does the course cover",
          duration: "03:17",
          preview: true,
          type: "video",
        },
        {
          title: "Natural vs Artificial Intelligence",
          duration: "02:06",
          preview: true,
          type: "video",
        },
        {
          title: "Brief history of AI",
          duration: "04:43",
          preview: true,
          type: "video",
        },
        {
          title:
            "Demystifying AI, Data science, Machine learning, and Deep learning",
          duration: "02:27",
          preview: false,
          type: "video",
        },
        {
          title: "Weak vs Strong AI",
          duration: "02:43",
          preview: false,
          type: "video",
        },
        { title: "Quiz 1", questions: 4, type: "quiz" },
      ],
    },
    {
      key: "2",
      title: "Intro to AI Module: Data is essential for building AI",
      lectures: 4,
      duration: "10min",
    },
    {
      key: "3",
      title: "Intro to AI Module: Key AI techniques",
      lectures: 3,
      duration: "20min",
    },
    {
      key: "4",
      title: "Intro to AI Module: Important AI branches",
      lectures: 4,
      duration: "15min",
    },
    {
      key: "5",
      title: "Intro to AI Module: Understanding Generative AI",
      lectures: 10,
      duration: "37min",
    },
  ];

  const genExtra = (lectures, duration) => (
    <span className="text-gray-600 text-sm">
      {lectures} lectures • {duration}
    </span>
  );

  return (
    <div className=" mt-10">
      <h2 className="text-2xl font-bold mb-4">Course content</h2>

      {/* Thông tin tổng quát */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm text-gray-700">
          77 sections • 437 lectures • 29h 35m total length
        </div>
        <Button
          type="link"
          className="font-bold text-[#5624d0] hover:text-[#401b9c] p-0"
        >
          Expand all sections
        </Button>
      </div>

      {/* Danh sách Collapse */}
      <Collapse
        accordion
        expandIconPosition="start"
        className="bg-white border-x-0 border-t-0 rounded-none custom-collapse"
        expandIcon={({ isActive }) =>
          isActive ? <CaretDownOutlined /> : <CaretRightOutlined />
        }
      >
        {sections.map((section) => (
          <Panel
            header={
              <span className="font-bold text-[16px]">{section.title}</span>
            }
            key={section.key}
            extra={genExtra(section.lectures, section.duration)}
            className="bg-[#f7f9fa] border-b border-[#d1d7dc]"
          >
            <div className="bg-white -mx-4 -my-3">
              {section.items ? (
                section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start py-2 px-6 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex gap-3 items-center">
                      {item.type === "video" ? (
                        <PlayCircleOutlined className="text-gray-600" />
                      ) : (
                        <BulbOutlined className="text-gray-600" />
                      )}
                      <span
                        className={`text-sm ${
                          item.preview ? "text-gray-800" : "text-gray-500"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div className="flex gap-4 items-center">
                      {item.preview && (
                        <span className="text-[#5624d0] underline text-sm flex items-center gap-1">
                          <PlayCircleFilled className="text-xs" /> Preview
                        </span>
                      )}
                      <span className="text-gray-500 text-sm min-w-[40px] text-right">
                        {item.duration || `${item.questions} questions`}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-400 italic">
                  Content details loading...
                </div>
              )}
            </div>
          </Panel>
        ))}
      </Collapse>

      <style jsx global>{`
        .custom-collapse .ant-collapse-header {
          padding: 16px 24px !important;
          align-items: center !important;
        }
        .custom-collapse .ant-collapse-content-box {
          padding: 0 !important;
        }
        .ant-collapse
          > .ant-collapse-item
          > .ant-collapse-header
          .ant-collapse-extra {
          margin-left: auto;
        }
      `}</style>
    </div>
  );
};

export default DetailCourseContentComponent;
