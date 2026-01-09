import React, { useRef } from "react";
import { Button, Carousel, Rate } from "antd";
import {
  RightOutlined,
  ArrowRightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    author: "365 Careers",
    rating: 4.6,
    reviews: "14,066",
    price: "₫209,000",
    oldPrice: "₫1,269,000",
    image: "	https://img-c.udemycdn.com/course/750x422/6112535_7103.jpg",
    badge: "Bestseller",
    badgeColor: "bg-[#eceb98] text-[#3d3c0a]",
  },
  {
    id: 2,
    title: "Complete AI Automation And Agentic AI Bootcamp With n8n",
    author: "KRISHAI Technologies Private Limited...",
    rating: 4.5,
    reviews: "246",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://img-c.udemycdn.com/course/750x422/6831187_5375_2.jpg",
    badge: "Bestseller",
    badgeColor: "bg-[#eceb98] text-[#3d3c0a]",
  },
  {
    id: 3,
    title: "Intro to AI Agents and Agentic AI",
    author: "365 Careers",
    rating: 4.5,
    reviews: "7,615",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://img-c.udemycdn.com/course/750x422/6791359_66d8_2.jpg",
    badge: "Bestseller",
    badgeColor: "bg-[#eceb98] text-[#3d3c0a]",
  },
  {
    id: 4,
    title: "The Complete Guide To AI Powered Salesforce Development",
    author: "Matt Gerry",
    rating: 4.7,
    reviews: "111",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://img-c.udemycdn.com/course/750x422/6814079_b2f0_4.jpg",
    badge: "Premium",
    badgeColor: "bg-[#6a1b9a] text-white",
  },
  {
    id: 5,
    title: "The Complete Guide To AI Powered Salesforce Development",
    author: "Matt Gerry",
    rating: 4.7,
    reviews: "111",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://img-c.udemycdn.com/course/750x422/6789637_d297_3.jpg",
    badge: "Premium",
    badgeColor: "bg-[#6a1b9a] text-white",
  },
  {
    id: 6,
    title: "The Complete Guide To AI Powered Salesforce Development",
    author: "Matt Gerry",
    rating: 4.7,
    reviews: "111",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://img-c.udemycdn.com/course/750x422/1990136_15e0_10.jpg",
    badge: "Premium",
    badgeColor: "bg-[#6a1b9a] text-white",
  },
];

const PopularSkillSectionComponent = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const skillCategories = [
    {
      title: "Development",
      skills: [
        { name: "Python", learners: "50,006,255" },
        { name: "Web Development", learners: "14,446,616" },
        { name: "Data Science", learners: "8,300,906" },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Blender", learners: "3,093,662" },
        { name: "Graphic Design", learners: "4,675,619" },
        { name: "User Experience (UX) Design", learners: "2,142,787" },
      ],
    },
    {
      title: "Business",
      skills: [
        {
          name: "PMI Project Management Professional (PMP)",
          learners: "2,829,664",
        },
        { name: "Microsoft Power BI", learners: "5,096,444" },
        {
          name: "PMI Certified Associate in Project Management (CAPM)",
          learners: "479,088",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 font-sans text-[#2d2f31]">
      <h2 className="text-2xl font-bold pb-4 mb-8 border-b border-gray-200">
        Popular Skills
      </h2>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        <div>
          <h3 className="text-xl font-bold mb-2">ChatGPT is a top skill</h3>
          <button className="text-[#5624d0] font-bold text-sm underline block mb-1 hover:text-[#401b9c]">
            See ChatGPT courses <RightOutlined className="text-[10px]" />
          </button>
          <p className="text-xs text-gray-500 mb-6">6,379,270 learners</p>
          <button
            className="button_primary_noFill"
            onClick={() => navigate("featured-topics")}
          >
            Show all trending skills
          </button>
        </div>

        {skillCategories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
            {cat.skills.map((skill, sIdx) => (
              <div key={sIdx} className="mb-4 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-[#5624d0] font-bold group-hover:text-[#401b9c] transition-colors">
                    {skill.name}{" "}
                    <RightOutlined className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {skill.learners} learners
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Success Story Section */}
      <div className=" items-center gap-12 bg-white border border-gray-100 p-2 shadow-sm">
        <div className="relative group px-2">
          <Carousel ref={carouselRef} {...settings}>
            {courses.map((course) => (
              <div key={course.id} className=" px-2 pb-4 h-full">
                <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-xl  mb-4">Booz | Allen | Hamilton </h2>
                    <h2 className="text-2xl font-bold mb-8 leading-tight">
                      Booz Allen HamiltonUnlocks Talent Retention and
                      Productivity Through Upskilling
                    </h2>

                    <div className="flex gap-12 mb-10">
                      <div>
                        <p className="text-4xl font-bold mb-2">93%</p>
                        <p className="text-sm text-gray-600 border-gray-300 border-b pb-3">
                          retention rate among participating employees
                        </p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold mb-2">65%</p>
                        <p className="text-sm text-gray-600 border-gray-300 border-b pb-3">
                          of learners noted a positive impact on their
                          productivity
                        </p>
                      </div>
                    </div>

                    <button
                      type="primary"
                      size="large"
                      className="button_primary"
                      onClick={() => navigate("case-study")}
                    >
                      Read full story <ArrowRightOutlined />
                    </button>

                    <div className="flex mt-8  gap-4">
                      {/* NÚT BÊN TRÁI */}

                      <button
                        onClick={() => carouselRef.current.prev()}
                        className=" bg-black text-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 shadow-xl z-10 hover:bg-gray-800 transition-all"
                      >
                        <LeftOutlined />
                      </button>
                      {/* NÚT BÊN PHẢI */}

                      <button
                        onClick={() => carouselRef.current.next()}
                        className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 shadow-xl z-10 hover:bg-gray-800 transition-all"
                      >
                        <RightOutlined />
                      </button>
                    </div>
                  </div>

                  <div className="h-full w-full">
                    <img
                      src="https://cms-images.udemycdn.com/96883mtakkm8/4VtZJzu6lTsioWNxHT7InO/96f1940aef37c7cbab353650fbf89eed/UB_Case_Studies_Booz_Allen_image.png"
                      alt="Success Story"
                      className="w-160 h-160 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularSkillSectionComponent;
