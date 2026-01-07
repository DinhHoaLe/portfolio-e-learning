import React from "react";
import { Button } from "antd";
import {
  CheckOutlined,
  RightOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const BusinessSectionComponent = () => {
  const teamFeatures = [
    "Access to 11,000+ top courses",
    "Certification prep",
    "Goal-focused recommendations",
    "AI-powered coaching",
    "Analytics and adoption reports",
  ];

  const enterpriseFeatures = [
    "Access to 30,000+ top courses",
    "Certification prep",
    "Goal-focused recommendations",
    "AI-powered coaching",
    "Advanced analytics and insights",
    "Dedicated customer success team",
    "International course collection featuring 15 languages",
    "Customizable content",
    "Hands-on tech training with add-on",
    "Strategic implementation services with add-on",
  ];

  const aiFeatures = [
    "More than 100 people Build org-wide AI fluency fast with 50 curated courses + AI Assistant to accelerate learning.",
    "More than 20 people Scale AI and technical expertise with 800+ specialized courses and 30+ role-specific learning paths in multiple languages.",

  ];

  return (
    <div className="w-full bg-[#f7f9fa] py-16 px-4 font-sans text-[#2d2f31]">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Grow your team's skills and your business
          </h2>
          <p className="text-gray-600">
            Reach goals faster with one of our plans or programs. Try one free
            today or contact sales to learn more.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Team Plan */}
          <div className="bg-white border-t-8 border-[#a435f0] p-6 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">Team Plan</h3>
            <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
              <TeamOutlined /> 2 to 20 people - For your team
            </p>
            <button size="large" className="button_primary_noFill mb-8">
              Try it free
            </button>

            <div className="mb-6">
              <p className="font-bold text-lg">₫750,000 a month per user</p>
              <p className="text-xs text-gray-500">
                Billed annually. Cancel anytime.
              </p>
            </div>

            <ul className="space-y-3 flex-1">
              {teamFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckOutlined className="text-green-600 mt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border-t-8 border-[#5624d0] p-6 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
            <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
              <UserOutlined /> More than 20 people - For your whole organization
            </p>
            <button
              type="primary"
              size="large"
              className="button_primary_noFill mb-8 w-full"
            >
              Request a demo
            </button>

            <p className="text-sm text-gray-600 mb-6 font-medium">
              Contact sales for pricing
            </p>

            <ul className="space-y-3 flex-1">
              {enterpriseFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckOutlined className="text-green-600 mt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Fluency Section */}
          <div className="bg-white border-t-8 border-[#1c1d1f] p-6 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">AI Fluency</h3>
            <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
              <UserOutlined /> From AI foundations to Enterprise transformation
            </p>
            <button
              type="primary"
              size="large"
              className="button_primary_noFill mb-8 w-full"
            >
              Contact Us
            </button>

            <p className="text-sm text-gray-600 mb-6 font-medium">
              Contact sales for pricing
            </p>

            <ul className="space-y-3 flex-1">
              {aiFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckOutlined className="text-green-600 mt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TRENDS REPORT SECTION */}
        <div className="flex flex-col md:flex-row items-center  pt-10 bg-white w-full">
          <div className="">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Get the 2026 Global Learning & Skills Trends Report
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              If you or your organization are looking for help navigating change
              and AI transformation, you'll find a roadmap for action in our
              popular annual report.
            </p>
            <button size="large" className="button_primary_noFill">
              Download now <RightOutlined className="text-xs" />
            </button>
          </div>

          <div className="">
            {/* Ảnh minh họa báo cáo (Giả lập độ nghiêng 3D bằng CSS) */}
            <div className="">
              <img
                src="https://cms-images.udemycdn.com/96883mtakkm8/BlUue9Lgty7lk3Gc1Ublo/53ac7130fb86e7505b9296c5e0922589/2026GlobalTrendsReportImageLOHPModule__1_.png"
                alt="2026 Trends Report"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectionComponent;
