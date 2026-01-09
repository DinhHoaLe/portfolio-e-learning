import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Switch,
  Row,
  Col,
  Typography,
} from "antd";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const SkillsReportPageBody = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1c1d1f]">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#ffc671] relative overflow-hidden px-8 py-16 md:px-24 flex flex-col md:flex-row items-center justify-between">
        <div className="z-10 max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            2026{" "}
            <span className="block">
              Global Learning & Skills Trends Report
            </span>
          </h1>
          <p className="text-xl">
            Navigating transformational change in the era of AI and beyond
          </p>
        </div>

        {/* Decorative Image/Graphic Area */}
        <div className="relative mt-12 md:mt-0">
          <div className="absolute -top-10 -left-10 text-4xl">✦</div>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
            alt="Hero"
            className="rounded-t-full w-64 h-80 object-cover border-b-8 border-[#f38120]"
          />
          {/* Abstract Orange Shape (Scribble) */}
          <div className="absolute -z-10 bottom-0 -right-20 w-80 h-40 bg-orange-400 opacity-50 blur-3xl rounded-full transform rotate-12"></div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <Row gutter={[64, 48]}>
          {/* Left Column: Text Content */}
          <Col xs={24} lg={14}>
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <Paragraph className="font-bold text-xl">
                Develop the workplace skills to keep pace with change. Focus on
                AI fluency and practice skills in the flow of work. Scale
                leadership, agency, and AI ethics, and prepare your teams for
                whatever comes after AI. Get the report to learn more.
              </Paragraph>

              <Paragraph>
                We are at a tipping point that will define the future of work:
                AI has evolved from being a promising experiment to a
                company-wide imperative...
              </Paragraph>

              <div className="mt-8">
                <Title level={4}>
                  Top learning and skills trends for 2026:
                </Title>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>AI fluency:</strong> Treat it as a company-wide
                    operating system, not just a technical skillset.
                  </li>
                  <li>
                    <strong>Immersive learning:</strong> Embed learning directly
                    into daily workflows for faster, stickier skills
                    development.
                  </li>
                  <li>
                    <strong>Leadership, ethics, and agency:</strong> Scale human
                    capabilities with the same commitment as technical AI
                    skills.
                  </li>
                  <li>
                    <strong>Adaptive skills:</strong> Build complementary skills
                    that prepare people for AI and for whatever comes after.
                  </li>
                </ol>
              </div>
            </div>
          </Col>

          {/* Right Column: Lead Gen Form */}
          <Col xs={24} lg={10}>
            <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-100 sticky top-8">
              <Title level={3} className="!mb-6">
                Unlock the trends and skills data
              </Title>

              <Form layout="vertical" requiredMark={false} size="large">
                <Form.Item
                  label={<span className="font-bold">First Name *</span>}
                  name="firstName"
                >
                  <Input className="rounded-md border-gray-400" />
                </Form.Item>

                <Form.Item
                  label={<span className="font-bold">Last Name *</span>}
                  name="lastName"
                >
                  <Input className="rounded-md border-gray-400" />
                </Form.Item>

                <Form.Item
                  label={<span className="font-bold">Work Email *</span>}
                  name="email"
                >
                  <Input className="rounded-md border-gray-400" />
                </Form.Item>

                <Form.Item
                  label={<span className="font-bold">Company Name *</span>}
                  name="company"
                >
                  <Input className="rounded-md border-gray-400" />
                </Form.Item>

                <Form.Item
                  label={<span className="font-bold">Job Title *</span>}
                  name="jobTitle"
                >
                  <Input className="rounded-md border-gray-400" />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-bold text-gray-400">
                      Company Size *
                    </span>
                  }
                  name="size"
                >
                  <Select placeholder="Select..." className="rounded-md">
                    <Option value="1-10">1-10 employees</Option>
                    <Option value="11-50">11-50 employees</Option>
                    <Option value="51-200">51-200 employees</Option>
                  </Select>
                </Form.Item>

                <div className="flex items-center gap-4 my-6">
                  <span className="text-xs text-gray-500 max-w-[200px]">
                    Send me special offers, event updates, and learning tips.
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400">Yes</span>
                    <Switch
                      size="small"
                      defaultChecked={false}
                      className="bg-gray-300"
                    />
                    <span className="text-[10px] text-gray-400">No</span>
                  </div>
                </div>

                <button type="primary" block className="button_primary w-full">
                  Submit
                </button>

                <p className="text-[10px] text-gray-500 mt-4 text-center">
                  By signing up, you agree to our{" "}
                  <a href="#" className="underline text-purple-700">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline text-purple-700">
                    Privacy Policy
                  </a>
                  .
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default SkillsReportPageBody;
