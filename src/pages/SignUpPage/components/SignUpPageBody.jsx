import React from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { GoogleOutlined, FacebookFilled, AppleFilled } from "@ant-design/icons";

const SignUpPageBody = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Cột bên trái: Illustration */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* Thay link ảnh minh họa của bạn vào đây */}
            <img
              src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
              alt="Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Cột bên phải: Form đăng ký */}
        <div className="flex-1 max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Sign up with email
          </h2>

          <Form
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="w-full"
          >
            {/* Full Name Field */}
            <Form.Item
              label={<span className="font-semibold">Full name</span>}
              name="fullname"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input
                placeholder="Full name"
                className="py-3 px-4 rounded-md border-gray-300"
              />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label={<span className="font-semibold">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Email"
                className="py-3 px-4 rounded-md border-gray-300"
              />
            </Form.Item>

            {/* Checkbox Marketing */}
            <Form.Item
              name="marketing"
              valuePropName="checked"
              className="mb-6"
            >
              <Checkbox className="text-gray-600 text-sm leading-tight">
                Send me special offers, personalized recommendations, and
                learning tips.
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <button
                type="primary"
                htmlType="submit"
                className="button_primary w-full"
              >
                Continue
              </button>
            </Form.Item>
          </Form>

          {/* Divider */}
          <Divider plain className="text-gray-400 text-sm my-8">
            Other sign up options
          </Divider>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              icon={<GoogleOutlined />}
              className="w-12 h-12 flex items-center justify-center border-gray-300 rounded-lg text-xl"
            />
            <Button
              icon={<FacebookFilled className="text-blue-600" />}
              className="w-12 h-12 flex items-center justify-center border-gray-300 rounded-lg text-xl"
            />
            <Button
              icon={<AppleFilled />}
              className="w-12 h-12 flex items-center justify-center border-gray-300 rounded-lg text-xl"
            />
          </div>

          {/* Footer Text */}
          <p className="text-center text-[12px] text-gray-500 mb-6">
            By signing up, you agree to our{" "}
            <span className="text-[#6d28d1]">Terms of Use</span> and{" "}
            <span className="text-[#6d28d1]">Privacy Policy</span>.
          </p>

          <div className="bg-gray-50 py-4 rounded-lg text-center">
            <span className="text-gray-600">Already have an account? </span>
            <button className="text-[#6d28d1] font-bold hover:underline">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageBody;
