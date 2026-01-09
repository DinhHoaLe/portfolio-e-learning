import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

const CaseStudyPageBody = () => {
  return (
    <div className="w-full font-sans">
      {/* --- TOP INFO BAR --- */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <Row gutter={[32, 32]} align="top">
          <Col xs={24} md={8}>
            <Text className="uppercase tracking-widest text-gray-500 text-xs font-bold block mb-4">
              Case Study
            </Text>
            <Title level={2} className="!m-0 !text-3xl font-serif text-[#1c1d1f]">
              Booz | Allen | Hamilton
            </Title>
          </Col>

          <Col xs={24} md={16}>
            <div className="flex flex-col md:flex-row gap-12 border-l-0 md:border-l border-gray-300 md:pl-12">
              <div>
                <Text className="font-bold block text-sm mb-1">Industry</Text>
                <Text className="text-gray-600">Professional Services</Text>
              </div>
              <div>
                <Text className="font-bold block text-sm mb-1">Headquarters</Text>
                <Text className="text-gray-600">McLean, VA</Text>
              </div>
              <div>
                <Text className="font-bold block text-sm mb-1">Company Size</Text>
                <Text className="text-gray-600">28,000 employees</Text>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* --- PURPLE HERO MESSAGE --- */}
      <div className="bg-[#5624d0] py-20 px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight italic font-serif">
            Booz Allen improves retention and productivity through upskilling
          </h2>
        </div>
      </div>

      {/* --- STATISTICS SECTION --- */}
      <div className="bg-[#a435f0] py-20 px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <Title level={2} className="!text-white text-center !mb-16 !font-serif italic">
            Udemy drives business results
          </Title>
          
          <Row gutter={[48, 48]} justify="center">
            <Col xs={24} md={8} className="text-center">
              <div className="text-6xl font-bold mb-4">3%</div>
              <Paragraph className="text-white text-lg opacity-90 px-4">
                Increase in billable hours
              </Paragraph>
            </Col>

            <Col xs={24} md={8} className="text-center border-x-0 md:border-x border-white/30">
              <div className="text-6xl font-bold mb-4">93%</div>
              <Paragraph className="text-white text-lg opacity-90 px-4">
                Retention rate for program graduates
              </Paragraph>
            </Col>

            <Col xs={24} md={8} className="text-center">
              <div className="text-6xl font-bold mb-4">93.5%</div>
              <Paragraph className="text-white text-lg opacity-90 px-4">
                Learners rated as high proficiency in data science after completion
              </Paragraph>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPageBody;