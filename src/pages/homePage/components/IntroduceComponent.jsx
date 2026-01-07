import React from "react";

const IntroduceComponent = () => {
  return (
    <div className="bg-[#401b9c] text-white relative">
      <div className="w-full h-full flex ">
        <img
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/8cdd50fa-5838-4d8d-8411-aac37213f15b.jpg"
          alt="Hero Woman"
          className="object-cover h-full w-full "
        />
      </div>

      <div className="p-8 w-1/3 z-10 absolute top-10 left-10 bg-white">
        <h1 className="text-2xl  font-serif font-bold mb-4 leading-tight text-black">
          Big ambitions? Meet big savings.
        </h1>
        <p className="text-sm opacity-90 mb-6 text-black ">
          Get the skills you need for your 2026 dreams with courses from
          ₫199,000. Sale ends January 13.
        </p>
      </div>
    </div>
  );
};

export default IntroduceComponent;
