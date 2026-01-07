import React from "react";
import {
  Layout,
  Menu,
  Rate,
  Checkbox,
  Select,
  Button,
  Collapse,
  Tag,
} from "antd";
import { FilterOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;
const { Option } = Select;

const courses = [
  {
    id: 1,
    title: "Generative AI for Beginners",
    description:
      "Generative AI Made Easy: Start Your Generative AI Journey, Learn ChatGPT, LLM, Prompt engineering...",
    author: "Aakriti E-Learning Academy",
    rating: 4.5,
    reviews: "81,379",
    duration: "3.5 total hours",
    lectures: "27 lectures",
    level: "Beginner",
    price: "₫209,000",
    oldPrice: "₫429,000",
    isBestseller: true,
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg", 
  },
  {
    id: 2,
    title: "Generative AI for Beginners",
    description:
      "Generative AI Made Easy: Start Your Generative AI Journey, Learn ChatGPT, LLM, Prompt engineering...",
    author: "Aakriti E-Learning Academy",
    rating: 4.5,
    reviews: "81,379",
    duration: "3.5 total hours",
    lectures: "27 lectures",
    level: "Beginner",
    price: "₫209,000",
    oldPrice: "₫429,000",
    isBestseller: true,
    image: "https://img-c.udemycdn.com/course/480x270/6704021_a06b.jpg", 
  },
  {
    id: 3,
    title: "Generative AI for Beginners",
    description:
      "Generative AI Made Easy: Start Your Generative AI Journey, Learn ChatGPT, LLM, Prompt engineering...",
    author: "Aakriti E-Learning Academy",
    rating: 4.5,
    reviews: "81,379",
    duration: "3.5 total hours",
    lectures: "27 lectures",
    level: "Beginner",
    price: "₫209,000",
    oldPrice: "₫429,000",
    isBestseller: true,
    image: "https://img-c.udemycdn.com/course/480x270/6324929_df40.jpg", 
  },

];

const ListingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header Info */}
      <div className="flex items-center gap-2 p-4 mb-6 border border-gray-200 bg-gray-50">
        <InfoCircleOutlined className="text-blue-600 text-xl" />
        <span className="font-bold text-gray-800">Not sure?</span>
        <span className="text-gray-600">
          All courses have a 30-day money-back guarantee
        </span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <Button icon={<FilterOutlined />} size="large" className="font-bold">
            Filter
          </Button>
          <Select
            defaultValue="most-popular"
            style={{ width: 180 }}
            size="large"
          >
            <Option value="most-popular">Most Popular</Option>
            <Option value="newest">Newest</Option>
            <Option value="highest-rated">Highest Rated</Option>
          </Select>
        </div>
        <span className="font-bold text-gray-500">1,219 results</span>
      </div>

      <Layout className="bg-white">
        {/* Sidebar Filters */}
        <Sider
          width={280}
          theme="light"
          className="hidden lg:block border-r border-gray-100 pr-4"
        >
          <Collapse
            ghost
            defaultActiveKey={["1", "2"]}
            expandIconPosition="right"
          >
            <Collapse.Panel
              header={<span className="font-bold text-lg">Ratings</span>}
              key="1"
            >
              {[4.5, 4.0, 3.5, 3.0].map((star) => (
                <div key={star} className="flex items-center gap-2 mb-2">
                  <Checkbox />
                  <Rate
                    disabled
                    defaultValue={star}
                    allowHalf
                    className="text-sm text-yellow-500"
                  />
                  <span className="text-sm text-gray-600">{star} & up</span>
                </div>
              ))}
            </Collapse.Panel>

            <Collapse.Panel
              header={<span className="font-bold text-lg">Video Duration</span>}
              key="2"
            >
              <div className="flex flex-col gap-2">
                <Checkbox>0-1 Hour (173)</Checkbox>
                <Checkbox>1-3 Hours (499)</Checkbox>
                <Checkbox>3-6 Hours (303)</Checkbox>
                <Checkbox>6-17 Hours (185)</Checkbox>
              </div>
            </Collapse.Panel>
          </Collapse>
        </Sider>

        {/* Course List Content */}
        <Content className="pl-0 lg:pl-8">
          <div className="flex flex-col gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-6 group cursor-pointer"
              >
                {/* Image */}
                <div className="w-full md:w-64 h-36 flex-shrink-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover border border-gray-200"
                  />
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold leading-tight mb-1 group-hover:text-blue-700">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                    {course.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-1">{course.author}</p>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-orange-800">
                      {course.rating}
                    </span>
                    <Rate
                      disabled
                      defaultValue={course.rating}
                      allowHalf
                      className="text-xs text-orange-500"
                    />
                    <span className="text-xs text-gray-500">
                      ({course.reviews})
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 flex gap-2">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.lectures}</span>
                    <span>•</span>
                    <span>{course.level}</span>
                  </div>

                  {course.isBestseller && (
                    <Tag
                      color="#eceb98"
                      className="text-black font-bold border-none mt-2"
                    >
                      Bestseller
                    </Tag>
                  )}
                </div>

                {/* Price */}
                <div className="flex flex-col items-end min-w-[100px]">
                  <span className="text-lg font-bold">{course.price}</span>
                  <span className="text-sm text-gray-500 line-through">
                    {course.oldPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ListingPage;
