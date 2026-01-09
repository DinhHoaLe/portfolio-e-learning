import React from "react";
import { Tabs, List, Card, Button } from "antd";
import { FireOutlined, RightOutlined } from "@ant-design/icons";

const FeaturedTopicsBody = () => {
  // Dữ liệu cho các thẻ phía trên
  const trendingCards = [
    {
      title: "Blockchain",
      desc: "Learn blockchain and programming in Udemy's many courses on cryptocurrencies.",
      tag: "Popular in IT & Software",
      images:
        "https://s.udemycdn.com/browse_components/featured-topic-unit/blockchain.jpg",
    },
    {
      title: "Google Flutter",
      desc: "Flutter is Google's mobile framework for crafting native interfaces on iOS and Android.",
      tag: "Trending topic",
      isHot: true,
      images:
        "https://s.udemycdn.com/browse_components/featured-topic-unit/blockchain.jpg",
    },
    {
      title: "Public Speaking",
      desc: "Level up your public speaking skills and confidence with Udemy's array of courses.",
      tag: "Popular in Communications",
      images:
        "https://s.udemycdn.com/browse_components/featured-topic-unit/blockchain.jpg",
    },
  ];

  // Dữ liệu cho danh sách xếp hạng
  const rankingData = [
    { id: 1, name: "Python", category: "Programming Languages" },
    { id: 2, name: "Microsoft Excel", category: "Microsoft" },
    {
      id: 3,
      name: "PMI Project Management Professional (PMP)",
      category: "Project Management",
    },
    {
      id: 4,
      name: "AWS Certified Solutions Architect - Associate",
      category: "IT Certifications",
    },
    {
      id: 5,
      name: "Microsoft Power BI",
      category: "Business Analytics & Intelligence",
    },
    {
      id: 6,
      name: "AWS Certified Cloud Practitioner",
      category: "IT Certifications",
    },
    { id: 7, name: "Web Development", category: "Web Development" },
    { id: 8, name: "Data Science", category: "Data Science" },
    { id: 9, name: "SQL", category: "Business Analytics & Intelligence" },
    { id: 10, name: "Amazon AWS", category: "IT Certifications" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Popular and trending topics
        </h2>
        <p className="text-gray-600 mt-1">
          Learn something completely new or improve your existing skills
        </p>
      </header>

      {/* Section 1: Trending Cards */}
      <div className="relative mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trendingCards.map((card, idx) => (
            <Card
              key={idx}
              className="hover:bg-gray-50 cursor-pointer border-gray-200"
            >
              <div className="flex gap-1 mb-4 overflow-hidden rounded">
                <img
                  src={card.images}
                  alt="topic"
                  className="w-full h-16 object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {card.desc}
              </p>
              <div className="flex items-center text-xs font-semibold text-purple-700">
                {card.isHot ? (
                  <FireOutlined className="mr-1 text-orange-500" />
                ) : (
                  <RightOutlined className="mr-1 text-green-600" />
                )}
                {card.tag}
              </div>
            </Card>
          ))}
        </div>
        <Button
          shape="circle"
          icon={<RightOutlined />}
          className="absolute -right-4 top-1/2 shadow-lg hidden md:flex items-center justify-center"
        />
      </div>

      {/* Section 2: Tabs & Ranking List */}
      <Tabs
        defaultActiveKey="1"
        className="custom-tabs"
        items={[
          { label: "Bestselling", key: "1" },
          { label: "Development", key: "2" },
          { label: "Design", key: "3" },
          { label: "Business", key: "4" },
          { label: "Personal Development", key: "5" },
        ]}
      />

      <div className="mt-6">
        <List
          dataSource={rankingData}
          renderItem={(item) => (
            <div className="flex justify-between items-center py-4 border-b border-gray-100 hover:bg-gray-50 px-2 transition-colors">
              <div className="flex items-center gap-6">
                <span className="text-gray-400 font-bold w-4">{item.id}</span>
                <a
                  href="#"
                  className="text-purple-700 font-bold hover:underline underline-offset-4 decoration-1"
                >
                  {item.name}
                </a>
              </div>
              <div className="flex items-center text-sm text-purple-700 font-medium">
                <RightOutlined className="mr-2 text-green-600 text-xs" />
                Popular in{" "}
                <span className="underline ml-1 cursor-pointer">
                  {item.category}
                </span>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default FeaturedTopicsBody;
