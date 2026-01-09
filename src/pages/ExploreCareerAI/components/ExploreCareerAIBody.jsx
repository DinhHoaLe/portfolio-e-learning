import React from "react";
import { Button, Typography, Row, Col } from "antd";

const { Title, Text, Paragraph } = Typography;

const ExploreCareerAIBobyPage = () => {
  return (
    <div className="w-full font-sans">
      {/* Section: Hero */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center bg-[oklch(97.59%_.0029_264.54deg)]">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <text className="text-[#6d28d1] font-bold text-sm uppercase tracking-wider mb-2 block">
            Personal Plan
          </text>
          <Title level={1} className="text-2xl ">
            Take your career
            <br />
            to the next level
          </Title>
          <Paragraph className="text-lg text-gray-700 max-w-md mb-8">
            Go further at work and in life with subscription access to a
            collection of top-rated courses in tech, business, and more.
          </Paragraph>

          <div className="flex flex-col space-y-2 w-1/2">
            <button type="primary" className="button_primary">
              Start subscription
            </button>
            <Text className="text-xs text-gray-500">
              Starting at ₫250,000 per month. Cancel anytime.
            </Text>
          </div>
        </div>

        {/* Right Content: Image with Background */}
        <div className="lg:w-1/2 relative flex justify-center items-end">
          {/* Background Decorative Element (Teal shapes) */}
          <div className="absolute right-0 bottom-0 -z-10 opacity-80">
            {/* Bạn có thể dùng SVG hoặc CSS để tạo các hình thang màu xanh lục */}
            <div className="flex items-end space-x-1">
              <div className="w-20 h-40 bg-teal-500 opacity-20 transform skew-x-12"></div>
              <div className="w-24 h-56 bg-teal-500 opacity-40 transform skew-x-12"></div>
              <div className="w-28 h-72 bg-teal-600 transform skew-x-12"></div>
            </div>
          </div>

          {/* Main Image */}
          <img
            src="https://s.udemycdn.com/consumer-subscription/billboard/desktop-v5.png"
            alt="Professional Woman"
            className="w-full max-w-md object-contain z-10"
          />
        </div>
      </div>

      {/* Section: Statistics */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Row gutter={[32, 32]} justify="space-between">
            <Col xs={12} md={6} className="text-center">
              <Title level={2} className="!mb-0 !font-bold">
                39,000+
              </Title>
              <Text className="text-gray-600">on-demand courses</Text>
            </Col>

            <Col xs={12} md={6} className="text-center">
              <Title level={2} className="!mb-0 !font-bold">
                28,000+
              </Title>
              <Text className="text-gray-600">practice exercises</Text>
            </Col>

            <Col xs={12} md={6} className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Title level={2} className="!mb-0 !font-bold">
                  4.5
                </Title>
                <span className="text-orange-500 text-2xl">★</span>
              </div>
              <Text className="text-gray-600">average course rating</Text>
            </Col>

            <Col xs={12} md={6} className="text-center">
              <Title level={2} className="!mb-0 !font-bold">
                13,000+
              </Title>
              <Text className="text-gray-600">top instructors</Text>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ExploreCareerAIBobyPage;
