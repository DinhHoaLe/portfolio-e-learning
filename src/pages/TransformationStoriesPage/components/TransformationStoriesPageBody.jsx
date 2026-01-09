import React from "react";
import { Tabs, Typography, Button, Row, Col, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const TransformationStoriesPageBody = () => {
  const thumbnailPeople = [
    {
      name: "FirstRand",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=FirstRand",
    },
    {
      name: "Axel R.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Axel",
    },
    {
      name: "Ogochukwu O.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ogo",
    },
    {
      name: "Juan P.",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="max-w-2xl">
          <Text className="uppercase tracking-widest text-xs font-bold text-gray-500 block mb-2">
            Stories of Transformation
          </Text>
          <Title level={1} className="!text-5xl !font-serif !mb-8">
            The right skills can rewrite your story
          </Title>
        </div>
        <div className="max-w-xs text-sm text-gray-600">
          Discover the people who are creating possibilities for themselves with
          Udemy.
        </div>
      </div>

      {/* Main Feature Video/Image */}
      <div className="relative rounded-3xl overflow-hidden mb-16 h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
          alt="Main Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10 bg-white p-8 rounded-xl max-w-sm shadow-xl">
          <Title level={4} className="!mb-4">
            The wild side of leadership
          </Title>
          <Button
            type="link"
            className="p-0 text-purple-700 font-bold flex items-center gap-2"
          >
            Watch now <ArrowRightOutlined />
          </Button>
        </div>
      </div>

      <Title level={3} className="!mb-8">
        If you can dream it, you can learn to do it.
      </Title>

      <Tabs
        defaultActiveKey="1"
        className="mb-10"
        items={[
          { label: "Featured stories", key: "1" },
          { label: "Customers", key: "2" },
          { label: "Instructors", key: "3" },
          { label: "Learners", key: "4" },
          { label: "Udemy Employees", key: "5" },
        ]}
      />

      <Row gutter={[24, 24]}>
        {thumbnailPeople.map((person, index) => (
          <Col xs={12} md={6} key={index}>
            <div className="bg-[#f7f9fa] rounded-2xl overflow-hidden aspect-[3/4] relative group cursor-pointer shadow-sm">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-4 left-4 font-bold text-sm">
                {person.name}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="flex justify-end mt-12">
        <Button
          type="link"
          className="text-purple-700 font-bold flex items-center gap-2 text-lg"
        >
          See all stories <ArrowRightOutlined />
        </Button>
      </div>

      <div className="max-w-6xl mx-auto bg-[#6d28d1] rounded-3xl text-center text-white relative mt-32 py-20 px-8">
        <span className="text-white font-bold text-lg block mb-8">
          What about you?
        </span>

        <h2 className="text-white text-4xl md:text-6xl font-serif leading-tight max-w-5xl mb-12">
          For learners, instructors, and organizations alike,{" "}
          <span className="italic">skills have the power to empower.</span>
          What possibilities have they opened for{" "}
          <span className="italic font-light">you?</span> We want to hear your
          transformation story.
        </h2>

        <button className="bg-black text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-900 transition-colors">
          Share your story
        </button>
      </div>

      {/* Vertical Text Side Bar */}
      <div className="absolute right-8 bottom-0 origin-bottom-right rotate-[-90deg] translate-y-[-100%] hidden lg:block">
        <span className="text-white/80 text-xs font-bold tracking-widest uppercase">
          Skills learned. Stories transformed.
        </span>
      </div>
    </div>
  );
};

export default TransformationStoriesPageBody;
