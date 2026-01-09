import React, { use } from "react";
import { Avatar, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const StudentSoriesComponent = () => {
  // Dữ liệu cho phần đối tác
  const logos = [
    {
      name: "Volkswagen",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png",
    },
    {
      name: "Samsung",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_old_logo_before_year_2015.svg",
    },
    {
      name: "Cisco",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    },
    {
      name: "Vimeo",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vimeo_Logo.svg/2560px-Vimeo_Logo.svg.png",
    },
    {
      name: "P&G",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/2560px-Procter_%26_Gamble_logo.svg.png",
    },
    {
      name: "HPE",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/2560px-Hewlett_Packard_Enterprise_logo.svg.png",
    },
    {
      name: "Citi",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/2560px-Citi.svg.png",
    },
    {
      name: "Ericsson",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ericsson_%282018%29.svg/250px-Ericsson_%282018%29.svg.png",
    },
  ];

  // Dữ liệu cho lời cảm nhận
  const testimonials = [
    {
      content: (
        <>
          Udemy was rated the{" "}
          <span className="font-bold">
            most popular online course or certification program
          </span>{" "}
          for learning how to code according to StackOverflow’s 2023 Developer
          survey.
        </>
      ),
      footer: (
        <div className="mt-4 flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
            className="w-6 h-6"
            alt="stack"
          />
          <span className="text-gray-500 text-xs">
            37,076 responses collected
          </span>
        </div>
      ),
      linkText: "View Web Development courses",
      isSpecial: true,
    },
    {
      content: (
        <>
          Udemy was truly{" "}
          <span className="font-bold">a game-changer and a great guide</span>{" "}
          for me as we brought Dimensional to life.
        </>
      ),
      author: "Alvin Lim",
      role: "Technical Co-Founder, CTO at Dimensional",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      linkText: "View this iOS & Swift course",
    },
    {
      content: (
        <>
          Udemy gives you the ability to be persistent. I learned exactly what I
          needed to know in the real world. It helped me sell myself to{" "}
          <span className="font-bold">get a new role.</span>
        </>
      ),
      author: "William A. Wachlin",
      role: "Partner Account Manager at Amazon Web Services",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      linkText: "View this AWS course",
    },
    {
      content: (
        <>
          With Udemy Business employees were able to marry the two together,
          technology and consultant soft skills... to help{" "}
          <span className="font-bold">drive their careers forward.</span>
        </>
      ),
      author: "Ian Stevens",
      role: "Head of Capability Development, North America at Publicis Sapient",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      linkText: "Read full story",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full bg-white font-sans text-[#2d2f31]">
      {/* SECTION 1: Trusted Companies */}
      <div className="bg-[#f7f9fa] py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-600 mb-8">
            Trusted by over 17,000 companies and millions of learners around the
            world
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: Testimonials */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">
          Join others transforming their lives through learning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors h-full"
            >
              <div>
                <span className="text-4xl font-serif text-gray-300 block mb-2 leading-none">
                  “
                </span>
                <p className="text-[15px] leading-relaxed mb-6 italic text-[#2d2f31]">
                  {item.content}
                </p>
              </div>

              <div>
                {/* Author Info */}
                {item.author ? (
                  <div className="flex items-center gap-3 mb-6">
                    <Avatar
                      src={item.avatar}
                      size={40}
                      className="border border-gray-200"
                    />
                    <div>
                      <p className="font-bold text-sm leading-none mb-1">
                        {item.author}
                      </p>
                      <p className="text-xs text-gray-500 leading-tight">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ) : (
                  item.footer
                )}

                {/* Bottom Link */}
                <div
                  className="pt-4 border-t border-gray-100"
                  onClick={() =>
                    navigate(
                      `/topic?q=${encodeURIComponent("web development")}`
                    )
                  }
                >
                  <button className="text-[#5624d0] font-bold text-sm flex items-center gap-1 hover:text-[#401b9c] group">
                    <span className="underline decoration-2 underline-offset-4 group-hover:no-underline">
                      {item.linkText}
                    </span>
                    <RightOutlined className="text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            type="link"
            className="button_text_purple"
            onClick={() => navigate("stories")}
          >
            View all stories
            <RightOutlined style={{ fontSize: "12px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSoriesComponent;
