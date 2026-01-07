import React from "react";
import { Layout, Row, Col, Divider, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const footerLinks = [
  {
    title: "In-demand Careers",
    links: [
      "Data Scientist",
      "Full Stack Web Developer",
      "Cloud Engineer",
      "Project Manager",
      "Game Developer",
      "All Career Accelerators",
    ],
  },
  {
    title: "Web Development",
    links: ["Web Development", "JavaScript", "React JS", "Angular", "Java"],
  },
  {
    title: "IT Certifications",
    links: [
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AZ-900: Microsoft Azure",
      "Kubernetes",
    ],
  },
  {
    title: "Leadership",
    links: [
      "Leadership",
      "Management Skills",
      "Project Management",
      "Personal Productivity",
      "Emotional Intelligence",
    ],
  },
];

const footerLinksSecond = [
  {
    title: "Certifications by Skill",
    links: [
      "Cybersecurity Certification",
      "Project Management Certification",
      "Cloud Certification",
      "Data Analytics Certification",
      "HR Management Certification",
      "See all Certifications",
    ],
  },
  {
    title: "Data Science",
    links: ["Data Science", "Python", "React JS", "Angular", "Java"],
  },
  {
    title: "IT Certifications",
    links: [
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AZ-900: Microsoft Azure",
      "Kubernetes",
    ],
  },
  {
    title: "Leadership",
    links: [
      "Leadership",
      "Management Skills",
      "Project Management",
      "Personal Productivity",
      "Emotional Intelligence",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1c1d1f] text-white py-12 px-8 lg:px-20">
      <div className="max-w-335 mx-auto">
        <Row gutter={[32, 32]} className="mb-10">
          {footerLinks.map((section, index) => (
            <Col xs={24} sm={12} md={6} lg={6} key={index}>
              <h3 className="text-white font-bold mb-4 text-base">
                {section.title}
              </h3>
              <ul className="list-none p-0">
                {section.links.map((link) => (
                  <li key={link} className="mb-2">
                    <div className="text-gray-300 hover:underline text-sm transition-colors">
                      {link}
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Row gutter={[32, 32]}>
          {footerLinksSecond.map((section, index) => (
            <Col xs={24} sm={12} md={6} lg={6} key={index}>
              <h3 className="text-white font-bold mb-4 text-base">
                {section.title}
              </h3>
              <ul className="list-none p-0">
                {section.links.map((link) => (
                  <li key={link} className="mb-2">
                    <div className="text-gray-300 hover:underline text-sm transition-colors">
                      {link}
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Divider className="border-gray-700 my-8" />

        {/* Phần 2: Logo và Ngôn ngữ */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-gray-700 pt-6">
          <div className="flex items-center gap-8">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="Udemy"
              className="h-8"
            />
            <span className="text-gray-400 text-xs">© 2026 Udemy, Inc.</span>
          </div>

          <button className="text-gray-400 hover:text-white text-sm">
            Cookie settings
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center border-white text-white gap-2">
              <GlobalOutlined />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
