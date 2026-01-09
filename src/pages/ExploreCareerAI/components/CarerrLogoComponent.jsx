import React from "react";

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

const CarerrLogoComponent = () => {
  return (
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
  );
};

export default CarerrLogoComponent;
