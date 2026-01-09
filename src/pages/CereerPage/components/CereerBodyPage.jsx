import React from "react";
import { Button, Card, Row, Col, Rate, Badge } from "antd";
// import { PlayCircleOutlined, ExerciseOutlined, ClockCircleOutlined } from '@ant-design/icons';

const CereerBodyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 font-sans">
      {/* --- HERO SECTION --- */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-12 shadow-sm flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Full Stack Web Developer Career Accelerator
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-md">
            Your career in full stack web development starts here. Fast-track
            learning and interview prep.
          </p>

          <div className="flex gap-12 mb-8">
            <div className="text-center">
              <div className="flex items-center gap-1 font-bold text-lg">
                <Rate disabled defaultValue={1} count={1} /> 4.7
              </div>
              <div className="text-gray-400 text-xs">average rating</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">126</div>
              <div className="text-gray-400 text-xs">practice exercises</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">88</div>
              <div className="text-gray-400 text-xs">hours of content</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="primary"
              size="large"
              className="button_primary"
            >
              Get started
            </button>
            <div className="flex flex-col">
              <span className="text-xl font-bold">₫647,000</span>
              <span className="text-gray-400 line-through text-sm">
                ₫5,127,000
              </span>
            </div>
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            👥 1.6M learners already enrolled
          </p>
        </div>

        <div className="flex-1 relative">
          <img
            src="https://s.udemycdn.com/career-academies/careers/full-stack-web-developer/frontend-webdev-human.png"
            alt="Instructor"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* --- WHAT YOU'LL LEARN SECTION --- */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-8 text-slate-800">
          What you'll learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LearningCard
            number="1"
            title="JavaScript, React, & Node.js"
            desc="Build fully-fledged websites and web apps."
          />
          <LearningCard
            number="2"
            title="JavaScript Interviews"
            desc="Prepare for JavaScript Interviews."
          />
          <LearningCard
            number="3"
            title="Data Structures & Algorithms"
            desc="Prepare for the data structures and algorithm interviews."
          />
        </div>
      </div>
    </div>
  );
};

// Component con cho các thẻ kỹ năng
const LearningCard = ({ number, title, desc }) => (
  <Card className="relative overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
    <span className="absolute right-[-10px] bottom-[-20px] text-9xl font-bold text-gray-100 select-none">
      {number}
    </span>
    <h3 className="text-lg font-bold mb-2 relative z-10">{title}</h3>
    <p className="text-gray-500 mb-6 relative z-10">{desc}</p>
    <a href="#" className="text-indigo-600 font-semibold relative z-10">
      Course content &gt;
    </a>
  </Card>
);

export default CereerBodyPage;
