import React from "react";
import { Card, Button, Typography, Collapse, Checkbox } from "antd";
import { CheckOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const PricingAndFAQComponent = () => {
  const plans = [
    {
      title: "Personal Plan",
      subtitle: "Streamline your career goals",
      price: "₫250,000",
      period: "per month",
      description: "Billed monthly or annually. Cancel anytime.",
      features: [
        "39,000+ professional and personal development courses",
        "4.5/5 average rating",
        "28,000+ practice exercises",
        "13,000+ top instructors",
      ],
      buttonText: "Start subscription",
      highlight: true,
      badge: "Best value",
    },
    {
      title: "Buy individual courses",
      subtitle: "Learn anything",
      price: "₫299,000-₫2,499,000",
      period: "One time purchase",
      description: "Pay as you go for specific needs.",
      features: [
        "250,000+ professional and personal development courses",
        "Pay as you go",
      ],
      buttonText: "Browse courses",
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "What is Personal Plan?",
      a: "Personal Plan is a subscription-based model that gives you unlimited access to thousands of top-rated courses.",
    },
    {
      q: "How is Personal Plan different from buying a course?",
      a: "With Personal Plan, you pay a monthly fee for a library of courses, whereas individual buying is a one-time fee per course.",
    },
    {
      q: "How are courses selected for Personal Plan?",
      a: "We select courses based on student ratings, instructor quality, and topic relevance.",
    },
    {
      q: "How and when will I be billed?",
      a: "You will be billed at the start of your subscription and every month/year thereafter depending on your choice.",
    },
    {
      q: "How can I cancel my subscription?",
      a: "You can cancel anytime through your account settings under the Subscription tab.",
    },
  ];

  return (
    <div className="bg-[#f7f9fa] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section: Pricing Cards */}
        <Title level={2} className="text-center !mb-12 !font-serif">
          Choose a plan that works for you
        </Title>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative border-2 ${
                plan.highlight ? "border-purple-600" : "border-gray-200"
              } rounded-none shadow-sm`}
              bodyStyle={{ padding: 0 }}
            >
              <div className="flex flex-col justify-around h-full">
                <div className="h-125">
                  {plan.highlight && (
                    <div className="bg-purple-700 text-white text-xs font-bold py-2 px-4 flex items-center justify-center">
                      <CheckOutlined className="mr-2" /> {plan.badge}
                    </div>
                  )}

                  <div className="p-8">
                    <Title level={3} className="!mb-1 !text-2xl">
                      {plan.title}
                    </Title>
                    <Text className="text-gray-500 block mb-4 italic">
                      {plan.subtitle}
                    </Text>

                    <div className="mb-2">
                      <span className="text-xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 ml-1 text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <Paragraph className="text-xs text-gray-400 mb-8">
                      {plan.description}
                    </Paragraph>

                    <div className="space-y-4 mb-10 min-h-[180px]">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start">
                          <CheckOutlined className="text-purple-700 mt-1 mr-3 flex-shrink-0" />
                          <Text className="text-sm text-[#2d2f31]">{feat}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-8">
                  <button
                    block
                    size="large"
                    type={plan.highlight ? "primary" : "default"}
                    className={`h-12 font-bold rounded-none ${
                      plan.highlight
                        ? "button_primary w-1/2"
                        : "button_primary_noFill w-1/2"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Section: FAQ */}
        <div className="max-w-3xl mx-auto">
          <Title level={3} className="!mb-8 !font-serif">
            Frequently asked questions
          </Title>
          <Collapse
            ghost
            expandIconPosition="end"
            className="udemy-faq"
            expandIcon={({ isActive }) =>
              isActive ? <MinusOutlined /> : <PlusOutlined />
            }
          >
            {faqs.map((faq, index) => (
              <Panel
                header={
                  <span className="font-bold text-[#2d2f31] py-2 block">
                    {faq.q}
                  </span>
                }
                key={index}
                className="border-b border-gray-200"
              >
                <p className="text-gray-600 pb-4">{faq.a}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>

      <style jsx global>{`
        .udemy-faq .ant-collapse-header {
          padding: 20px 0 !important;
          align-items: center !important;
        }
        .udemy-faq .ant-collapse-content-box {
          padding: 0 0 20px 0 !important;
        }
      `}</style>
    </div>
  );
};

export default PricingAndFAQComponent;
