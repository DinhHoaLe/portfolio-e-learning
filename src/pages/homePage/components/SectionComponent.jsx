import React, { useRef } from "react";
import { Card, Carousel, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const SectionComponent = () => {
  const carouselRef = useRef(null);

  return (
    <div className="mt-20 mb-20 max-w-7xl mx-auto px-4 flex">
      <div className="w-1/4 flex justify-center items-center ">
        <div className="">
          <p className="text-3xl mb-4 text-slate-900">
            Learn essential career and <span className="font-bold">life </span>
            skills
          </p>

          <p className="text-base text-gray-600">
            Udemy helps you build in-demand skills fast and advance your career
            in a changing job market
          </p>
        </div>
      </div>

      <div className="w-3/4 flex flex-col gap-4">
        <Carousel
          ref={carouselRef}
          slidesToShow={3}
          slidesToScroll={1}
          dots={false}
          infinite={true}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
          ]}
        >
          <div className="px-2">
            <CategoryCard
              title="Generative AI"
              image="https://images.ctfassets.net/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png"
            />
          </div>
          <div className="px-2">
            <CategoryCard
              title="IT Certifications"
              image="https://images.ctfassets.net/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png"
            />
          </div>
          <div className="px-2">
            <CategoryCard
              title="Data Science"
              image="https://images.ctfassets.net/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png"
            />
          </div>
          <div className="px-2">
            <CategoryCard
              title="Full Stack Web"
              image="https://images.ctfassets.net/96883mtakkm8/6cHWrhYDsqfm3k3qfR6gTO/04e768400c598dfa316114282b192987/chat-gpt.png"
            />
          </div>
        </Carousel>

        <div className="flex justify-center">
          <div className="flex gap-2">
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={() => carouselRef.current.prev()}
              className="border-black w-10 h-10 flex items-center justify-center hover:!border-gray-400"
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              onClick={() => carouselRef.current.next()}
              className="bg-black text-white w-10 h-10 flex items-center justify-center border-none hover:!bg-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ title, image }) => (
  <Card
    hoverable
    className="bg-[#f7f9fa] group h-full"
    styles={{ body: { padding: 0 } }}
  >
    <div className="flex flex-col items-center justify-between h-100 relative  rounded-md ">
      <a
        className="w-full h-full bg-cover bg-no-repeat bg-center inline-block relative p-3"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="absolute bottom-2 left-2 right-2 border bg-white">
          <div className="p-3 flex justify-between items-center">
            <span className="text-lg font-bold text-slate-900">{title}</span>
            <RightOutlined />
          </div>
        </div>
      </a>
    </div>
  </Card>
);

export default SectionComponent;
