import React from 'react';
import { Card, Rate, Typography, Row, Col } from 'antd';
import { StarFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

const careerData = [
  { title: "Cloud Engineer", rating: 4.7, reviews: "314K", hours: "28.1 total", color: "bg-green-600", icon: "☁️" },
  { title: "Data Scientist", rating: 4.8, reviews: "224K", hours: "471 total", color: "bg-purple-600", icon: "📊" },
  { title: "Digital Marketer", rating: 4.5, reviews: "3.8K", hours: "28.4 total", color: "bg-indigo-600", icon: "📱" },
  // ... thêm các item khác tương tự
];

const CareerCard = ({ item }) => {
  return (
    <Card
      hoverable
      className="overflow-hidden border-none shadow-sm transition-transform duration-300 hover:-translate-y-1"
      bodyStyle={{ padding: '16px' }}
      cover={
        <div className={`relative h-48 flex items-center justify-center ${item.color} overflow-hidden`}>
          {/* Icon giả lập logo mờ phía sau */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 text-8xl font-bold text-white">
            {item.icon}
          </div>
          {/* Ảnh nhân viên - Thay bằng URL ảnh thật nếu có */}
          <img
            alt={item.title}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.title}`} 
            className="relative z-10 h-full w-auto object-cover pt-4"
          />
        </div>
      }
    >
      <div className="flex flex-col gap-2">
        <Title level={5} className="m-0 !mb-1 text-gray-800">
          {item.title}
        </Title>
        
        <div className="flex items-center gap-2 border border-gray-100 rounded p-1 w-fit bg-gray-50">
          <div className="flex items-center text-xs font-bold">
            <StarFilled className="text-yellow-500 mr-1" />
            {item.rating}
          </div>
          <span className="text-[10px] text-gray-400">|</span>
          <span className="text-[10px] text-gray-500">{item.reviews} ratings</span>
          <span className="text-[10px] text-gray-400">|</span>
          <span className="text-[10px] text-gray-500">{item.hours} hours</span>
        </div>
      </div>
    </Card>
  );
};

const CareerAllPageBody = () => {
  const careers = [
    { title: "Cloud Engineer", rating: 4.7, reviews: "314K", hours: "28.1", color: "bg-[#1d7a54]", icon: "☁️" },
    { title: "Data Scientist", rating: 4.8, reviews: "224K", hours: "471", color: "bg-[#9b30b0]", icon: "📊" },
    { title: "Digital Marketer", rating: 4.5, reviews: "3.8K", hours: "28.4", color: "bg-[#6a1b9a]", icon: "📱" },
    { title: "Full Stack Web Developer", rating: 4.7, reviews: "457K", hours: "88", color: "bg-[#f9a825]", icon: "⟨ ⟩" },
    { title: "Game Developer", rating: 4.7, reviews: "117K", hours: "48", color: "bg-[#26a69a]", icon: "🎮" },
    { title: "Project Manager", rating: 4.5, reviews: "7.2K", hours: "22.9", color: "bg-[#ef6c00]", icon: "💡" },
    { title: "Machine Learning Engineer", rating: 4.5, reviews: "235K", hours: "104.2", color: "bg-[#00695c]", icon: "🧠" },
    { title: "Cybersecurity Analyst", rating: 4.7, reviews: "113K", hours: "117.9", color: "bg-[#fbc02d]", icon: "🛡️" },
    { title: "Data Engineer", rating: 4.8, reviews: "4.3K", hours: "82.4", color: "bg-[#4527a0]", icon: "⛓️" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1c1d1f] mb-4">
          Ready to reimagine your career?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join Career Accelerators through Udemy Personal Plan and get the structure, 
          skills, and real-world experience that makes you an exceptional candidate.
        </p>
      </div>

      <Row gutter={[24, 24]}>
        {careers.map((career, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <CareerCard item={career} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CareerAllPageBody;