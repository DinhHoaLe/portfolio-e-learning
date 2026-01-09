import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text, Paragraph } = Typography;

const FeatureSection = ({ title, subtitle, description, imageUrl, imageBgColor, reverse = false, label }) => {
  return (
    <div className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Row gutter={[64, 48]} align="middle" direction={reverse ? 'rtl' : 'ltr'}>
          {/* Image Side */}
          <Col xs={24} lg={12} className={reverse ? 'lg:order-2' : ''}>
            <div className={`relative flex justify-center items-center rounded-sm overflow-hidden p-8 min-h-[400px] ${imageBgColor}`}>
              {/* Giả lập khối màu trang trí phía sau nếu cần */}
              <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
              <img 
                src={imageUrl} 
                alt={title} 
                className="relative z-10 w-full max-w-md object-contain shadow-xl rounded-md"
              />
            </div>
          </Col>

          {/* Text Side */}
          <Col xs={24} lg={12} className={reverse ? 'lg:order-1' : ''}>
            <div className="max-w-md">
              <Text className="text-purple-700 font-bold text-sm mb-3 block">
                {label}
              </Text>
              <Title level={2} className="!text-3xl lg:!text-4xl !font-serif !mb-6 !leading-tight text-[#2d2f31]">
                {title}
              </Title>
              <Paragraph className="text-base text-[#2d2f31] leading-relaxed">
                {description}
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const UdemyFeatures = () => {
  const features = [
    {
      label: "Current",
      title: "Cutting-edge skills to keep you sharp",
      description: "Learn confidently with up-to-date courses covering in-demand topics like development, data science, IT certification, web design, digital marketing, leadership, communication, and more.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", // Thay bằng ảnh chân dung cô gái
      imageBgColor: "bg-gray-50",
      reverse: false
    },
    {
      label: "Flexible",
      title: "Freedom to explore and discover",
      description: "Test drive a new subject, switch between courses, or pick and choose the lessons that best fit your needs. Personal Plan gives you the power to control what and how you learn.",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop", // Thay bằng ảnh Tablet/Slider
      imageBgColor: "bg-white",
      reverse: true
    },
    {
      label: "Effective",
      title: "Learning designed to help you start doing",
      description: "Gain practical knowledge through coding exercises, practice tests and quizzes, plus in-course note taking and Q&A. Once you finish a course, strut your new skills with a certificate of completion.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop", // Thay bằng ảnh Mobile App bài tập
      imageBgColor: "bg-gray-50",
      reverse: false
    }
  ];

  return (
    <section className="bg-white">
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </section>
  );
};

export default UdemyFeatures;