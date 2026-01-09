import React from 'react';
import { Tabs, Typography, Rate, Badge, Button, Row, Col } from 'antd';

const { Title, Text } = Typography;

const CourseCard = ({ title, author, students, rating, reviews, isBestseller }) => (
  <div className="mb-6 group cursor-pointer">
    <Title level={5} className="!text-[15px] !mb-1 group-hover:text-purple-700 leading-tight">
      {title}
    </Title>
    <div className="text-xs text-gray-500 mb-1">{author}</div>
    <div className="flex items-center space-x-1 mb-1">
      <span className="text-[#b4690e] font-bold text-sm">{rating}</span>
      <Rate disabled defaultValue={rating} className="text-[10px] text-[#b4690e]" />
      <span className="text-xs text-gray-400">({reviews.toLocaleString()})</span>
    </div>
    <div className="text-xs text-gray-600 mb-2">{students.toLocaleString()} students</div>
    {isBestseller && (
      <Badge 
        count="Bestseller" 
        style={{ backgroundColor: '#eceb98', color: '#3d3c0a', fontWeight: 'bold', fontSize: '10px' }} 
      />
    )}
  </div>
);

const CourseCardAIComponent = () => {
  const categories = [
    "Web Development", "Data Science", "IT Certifications", 
    "Graphic Design & Illustration", "Digital Marketing", "Leadership", "Communication"
  ];

  const webDevCourses = [
    { title: "The Complete Full-Stack Web Development Bootcamp", author: "Dr. Angela Yu, Developer and Lead Instructor", students: 1526386, rating: 4.7, reviews: 461524, isBestseller: true },
    { title: "The Complete JavaScript Course 2025: From Zero to Expert!", author: "Jonas Schmedtmann", students: 1013233, rating: 4.7, reviews: 230076, isBestseller: true },
    { title: "Angular - The Complete Guide (2025 Edition)", author: "Maximilian Schwarzmüller", students: 848442, rating: 4.7, reviews: 221087, isBestseller: true },
    { title: "The Ultimate React Course 2025: React, Next.js, Redux & More", author: "Jonas Schmedtmann", students: 154784, rating: 4.7, reviews: 24706, isBestseller: true },
    { title: "Complete web development course", author: "Hitesh Choudhary", students: 65266, rating: 4.6, reviews: 18358, isBestseller: false },
    { title: "Docker & Kubernetes: The Practical Guide [2025 Edition]", author: "Academind by Maximilian Schwarzmüller", students: 241260, rating: 4.7, reviews: 36104, isBestseller: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Tabs
        defaultActiveKey="0"
        className="custom-course-tabs"
        items={categories.map((cat, i) => ({
          key: i.toString(),
          label: <span className="font-bold text-gray-600 hover:text-black px-2">{cat}</span>,
          children: (
            <div className="border border-gray-200 p-8 mt-4 flex flex-col md:flex-row gap-8">
              {/* Left Side: Illustration */}
              <div className="w-full md:w-1/3 bg-[#f7f9fa] flex items-center justify-center p-12 relative overflow-hidden">
                {/* Giả lập nhân vật Wizard bằng SVG hoặc Icon */}
                <div className="text-center">
                  <div className="text-8xl mb-4">🧙‍♂️</div>
                  <div className="absolute top-10 left-10 transform -rotate-12 border border-black p-1 bg-white text-[10px] font-mono">.css</div>
                  <div className="absolute top-10 right-10 transform rotate-12 border border-black p-1 bg-white text-[10px] font-mono">.py</div>
                  <div className="absolute bottom-10 right-10 transform -rotate-6 border border-black p-1 bg-white text-[10px] font-mono">.rb</div>
                </div>
              </div>

              {/* Right Side: Course Grid */}
              <div className="w-full md:w-2/3">
                <Row gutter={[24, 0]}>
                  {webDevCourses.map((course, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <CourseCard {...course} />
                    </Col>
                  ))}
                </Row>
                
                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Text className="text-lg font-bold">Start exploring the collection today.</Text>
                  <button
                    type="primary" 
                    size="large"
                    className="button_primary"
                  >
                    Start subscription
                  </button>
                </div>
              </div>
            </div>
          ),
        }))}
      />
      
      {/* Thêm CSS thủ công cho Tabs Ant Design để bỏ đường line mặc định nếu muốn giống 100% */}
      <style jsx global>{`
        .custom-course-tabs .ant-tabs-nav::before {
          border-bottom: 1px solid #d1d7dc !important;
        }
        .custom-course-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: black !important;
        }
        .custom-course-tabs .ant-tabs-ink-bar {
          background: black !important;
          height: 2px !important;
        }
      `}</style>
    </div>
  );
};

export default CourseCardAIComponent;