import React from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { RightOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const CertCard = ({ title, learners, description, logo }) => (
  <Card hoverable className="h-full border-gray-200 rounded-none group">
    <Title level={5} className="!text-sm !mb-2 group-hover:text-purple-700">{title}</Title>
    <div className="flex items-center text-gray-500 text-xs mb-3">
      <UserOutlined className="mr-1" />
      <span>{learners} learners</span>
    </div>
    {description && <Paragraph className="text-xs text-gray-600 line-clamp-2">{description}</Paragraph>}
    {logo && <img src={logo} alt="cert-logo" className="w-12 h-12 object-contain mt-2" />}
  </Card>
);

const CertificationBodyPage = () => {
  const issuers = [
    { title: "Amazon Web Services (AWS) Certifications", learners: "11,180,450", description: "Amazon Web Services (AWS) training and certification certifies professionals in various Amazon..." },
    { title: "Microsoft Certifications", learners: "6,341,179", description: "Microsoft offers a wide range of certifications to validate skills for Microsoft Azure, Microsoft 365..." },
    { title: "Cisco Certifications", learners: "4,873,075", description: "Cisco offers networking certifications that verify a network engineer's ability in planning, implementin..." },
    { title: "CompTIA Certifications", learners: "4,705,278", description: "CompTIA (Computing Technology Industry Association) is a recognized provider of IT..." },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Title level={1} className="!font-serif !text-4xl">Certification Preparation</Title>
          <Paragraph className="max-w-3xl text-gray-600">
            Udemy provides specialized courses in IT, business, and project management, designed by experts to prepare learners for certification exams offered by third parties.
          </Paragraph>
        </div>

        {/* Top Issuers */}
        <section className="mb-12 relative">
          <div className="flex justify-between items-end mb-4">
            <div>
              <Title level={3} className="!mb-1 !text-xl">Top Certification Issuers</Title>
              <Text className="text-gray-500">Get Certified for top Industry Issuers through our catalog of certification preparation courses</Text>
            </div>
          </div>
          <Row gutter={[16, 16]}>
            {issuers.map((item, i) => (
              <Col xs={24} sm={12} lg={6} key={i}>
                <CertCard {...item} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Top Subjects */}
        <section className="mb-12">
           <Title level={3} className="!mb-1 !text-xl">Top Certification Subjects</Title>
           <Text className="text-gray-500 block mb-4">Get Certified for in-demand skills through our catalog of certification preparation courses</Text>
           <Row gutter={[16, 16]}>
              {["Cloud Certification", "Cybersecurity Certification", "Networking Certification", "Project Management Certification"].map((sub, i) => (
                <Col xs={24} sm={12} lg={6} key={i}>
                  <CertCard title={sub} learners="18,313,315" />
                </Col>
              ))}
           </Row>
        </section>
      </div>
    </div>
  );
};

export default CertificationBodyPage;