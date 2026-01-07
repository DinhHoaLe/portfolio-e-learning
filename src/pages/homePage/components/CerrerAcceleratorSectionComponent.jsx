import React from "react";
import { RightOutlined, StarFilled } from "@ant-design/icons";

const CerrerAcceleratorSectionComponent = () => {
  // Dữ liệu cho các khối chứng chỉ (nền tối)
  const certs = [
    {
      title: "CompTIA",
      tags: "Cloud, Networking, Cybersecurity",
      img: "https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/cert-prep/comptia-thumbnail.png",
    },
    {
      title: "AWS",
      tags: "Cloud, AI, Coding, Networking",
      img: "https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/cert-prep/aws-thumbnail.png",
    },
    {
      title: "PMI",
      tags: "Project & Program Management",
      img: "https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/cert-prep/pmi-thumbnail.png",
    },
  ];

  // Dữ liệu cho Career Accelerators
  const accelerators = [
    {
      title: "Full Stack Web Developer",
      rating: "4.7",
      students: "466K",
      hours: "88 total hours",
      img: "https://s.udemycdn.com/career-academies/product-cards/career-card-fswd.png",
      color: "bg-orange-400",
    },
    {
      title: "Digital Marketer",
      rating: "4.4",
      students: "3.8K",
      hours: "28.4 total hours",
      img: "https://s.udemycdn.com/career-academies/product-cards/career-card-digitalmarketer.png",
      color: "bg-purple-500",
    },
    {
      title: "Data Scientist",
      rating: "4.6",
      students: "224K",
      hours: "47.1 total hours",
      img: "https://s.udemycdn.com/career-academies/product-cards/career-card-data-scientist.png",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="w-full font-sans text-[#2d2f31]">
      {/* SECTION: GET CERTIFIED (DARK BACKGROUND) */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-[#1c1d1f] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Get certified and get ahead in your career
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Prep for certifications with comprehensive courses, practice
              tests, and special offers on exam vouchers.
            </p>
            <button className="flex items-center gap-2 border border-white px-6 py-3 font-bold hover:bg-white/10 transition-colors">
              Explore certifications and vouchers{" "}
              <RightOutlined className="text-xs" />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certs.map((cert, i) => (
              <div
                key={i}
                className="bg-[#2d2f31] p-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-all cursor-pointer group"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-auto mb-4 rounded-lg"
                />
                <h4 className="text-white font-bold mb-1">{cert.title}</h4>
                <p className="text-gray-400 text-[10px] leading-tight group-hover:text-gray-200">
                  {cert.tags}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION: CAREER ACCELERATORS */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-2">
          Ready to reimagine your career?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get the skills and real-world experience employers want with Career
          Accelerators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accelerators.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div
                className={`relative h-48 flex items-end justify-center overflow-hidden `}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[90%] w-auto object-contain z-10 rounded-2xl"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 border border-gray-100 rounded">
                    <StarFilled className="text-orange-500 text-xs" />
                    <span className="text-sm font-bold">{item.rating}</span>
                    <span className="text-gray-500 text-xs font-normal underline">
                      {item.students} ratings
                    </span>
                  </div>
                  <div className="bg-gray-50 px-2 py-1 border border-gray-100 rounded text-xs text-gray-600">
                    {item.hours}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 text-[#5624d0] font-bold flex items-center gap-2 hover:text-[#401b9c] group">
          <span className="underline decoration-2 underline-offset-4">
            All Career Accelerators
          </span>
          <RightOutlined className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default CerrerAcceleratorSectionComponent;
