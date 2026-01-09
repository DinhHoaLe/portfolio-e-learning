import React, { useRef, useState } from "react";
import { Tabs, Rate, Tag, Button, Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const items = [
  { key: "0", label: "All Categories" },
  { key: "1", label: "Artificial Intelligence (AI)" },
  { key: "2", label: "Microsoft Excel" },
  { key: "3", label: "Digital Marketing" },
  { key: "4", label: "Python" },
  { key: "5", label: "Amazon AWS" },
];

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
    title: "Excel Web",
    author: "365 Careers",
    rating: 4.6,
    reviews: "14,066",
    price: "₫209,000",
    oldPrice: "₫1,269,000",
    image:
      "	https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_10_5_638321302436787729_excel-web-thum.jpg",
    badge: "Bestseller",
    badgeColor: "bg-[#eceb98] text-[#3d3c0a]",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
  {
    id: 8,
    title: "Pyhon for Beginners: Learn Python Programming from Scratch",
    author: "Matt Gerry",
    rating: 4.7,
    reviews: "111",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://topdev.vn/blog/wp-content/uploads/2022/10/python-la-gi-1.jpg",
    badge: "Premium",
    badgeColor: "bg-[#6a1b9a] text-white",
  },
  {
    id: 9,
    title: "Masterclass digital marketing  - 23 Courses in 1",
    author: "Matt Gerry",
    rating: 4.7,
    reviews: "111",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://futurebrandvietnam.com/wp-content/uploads/2020/07/tkM4MlrTSL-1.jpg",
    badge: "Premium",
    badgeColor: "bg-[#6a1b9a] text-white",
  },
  {
    id: 10,
    title: "Aws Certified Solutions Architect - Associate 2024",
    author: "Matt Gerry",
    rating: 4.7,
    reviews: "111",
    price: "₫199,000",
    oldPrice: "₫399,000",
    image: "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2021/05/25/CourseLaunch__Blog_AllCourses-1024x536.png",
    badge: "Premium",
    badgeColor: "bg-[#6a1b9a] text-white",
  },
];

const CourseSectionComponent = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrData, setArrData] = useState(courses);
  const navigate = useNavigate();

  const slidesToShow = 3;
  const totalSlides = courses.length;

  const value = "Artificial Intelligence (AI)";

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const handleTab = (key) => {
    if (key == "0") {
      console.log("All Categories");
      setArrData(courses);
    }

    if (key == "1") {
      const arr = courses.filter((item) =>
        item.title.toLowerCase().includes("ai")
      );
      setArrData(arr);
      console.log(arr);
    }

    if (key == "2") {
      const arr = courses.filter((item) =>
        item.title.toLowerCase().includes("excel")
      );
      setArrData(arr);
      console.log(arr);
    }

    if (key == "3") {
      const arr = courses.filter((item) =>
        item.title.toLowerCase().includes("marketing")
      );
      setArrData(arr);
      console.log(arr);
    }

    if (key == "4") {
      const arr = courses.filter((item) =>
        item.title.toLowerCase().includes("python")
      );
      setArrData(arr);
      console.log(arr);
    }

    if (key == "5") {
      const arr = courses.filter((item) =>
        item.title.toLowerCase().includes("aws")
      );
      setArrData(arr);
      console.log(arr);
    }

    if (key != "0" && key != "1" && key != "2" && key != "3" && key != "4" && key != "5")  {
      setArrData([]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white font-sans text-[#2d2f31]">
      {/* Tiêu đề */}
      <h2 className="text-3xl font-bold mb-2">
        Skills to transform your career and life
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>

      {/* Tabs Menu */}
      <Tabs
        defaultActiveKey="0"
        items={items}
        className="custom-tabs mb-8"
        tabBarStyle={{ borderBottom: "1px solid #d1d7dc" }}
        onChange={handleTab}
      />

      {/* Grid Khóa học */}
      <div className="relative group px-2">
        {/* NÚT BÊN TRÁI */}
        {currentSlide > 0 && (
          <button
            onClick={() => carouselRef.current.prev()}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 shadow-xl z-10 hover:bg-gray-800 transition-all"
          >
            <LeftOutlined />
          </button>
        )}

        <Carousel ref={carouselRef} {...settings}>
          {arrData?.map((course) => (
            <div
              key={course.id}
              className="px-2 pb-4 h-full"
              onClick={() =>
                navigate(`/detail/${encodeURIComponent(course.id)}`)
              }
            >
              <div className="cursor-pointer flex flex-col group/card rounded-lg border border-gray-200 hover:shadow-lg p-4 h-full bg-white transition-shadow">
                <div className="relative border border-gray-200 rounded-sm overflow-hidden mb-2">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <h3 className="font-bold text-base leading-tight mb-1 line-clamp-2 min-h-10">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500 mb-1 truncate">
                  {course.author}
                </p>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[#b4690e] font-bold text-sm">
                    {course.rating}
                  </span>
                  <Rate
                    disabled
                    defaultValue={course.rating}
                    allowHalf
                    className="text-[12px] text-[#b4690e]"
                  />
                  <span className="text-xs text-gray-500">
                    ({course.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-base">{course.price}</span>
                  <span className="text-gray-500 line-through text-sm">
                    {course.oldPrice}
                  </span>
                </div>
                <div>
                  <span
                    className={`px-2 py-1 text-[10px] font-bold rounded-sm ${course.badgeColor}`}
                  >
                    {course.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* NÚT BÊN PHẢI */}
        {currentSlide < totalSlides - slidesToShow && (
          <button
            onClick={() => carouselRef.current.next()}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 shadow-xl z-10 hover:bg-gray-800 transition-all"
          >
            <RightOutlined />
          </button>
        )}
      </div>

      {/* Link xem tất cả */}
      <div className="mt-8">
        <button
          type="link"
          className="button_text_purple"
          onClick={() => navigate(`/topic?q=${encodeURIComponent(value)}`)}
        >
          Show all Artificial Intelligence (AI) courses{" "}
          <RightOutlined style={{ fontSize: "12px" }} />
        </button>
      </div>

      <style jsx global>{`
        .custom-tabs .ant-tabs-tab {
          padding: 8px 0 !important;
          margin: 0 20px 0 0 !important;
        }
        .custom-tabs .ant-tabs-tab-btn {
          color: #6a6f73 !important;
          font-weight: 700 !important;
          font-size: 16px !important;
        }
        .custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #2d2f31 !important;
        }
        .custom-tabs .ant-tabs-ink-bar {
          background: #2d2f31 !important;
          height: 2px !important;
        }
        .ant-rate-star:not(:last-child) {
          margin-inline-end: 2px !important;
        }
      `}</style>
    </div>
  );
};

export default CourseSectionComponent;
