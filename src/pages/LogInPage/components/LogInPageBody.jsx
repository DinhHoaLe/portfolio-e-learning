import React from "react";
import { Form, Input, Button, Divider } from "antd";

const LoginPageBody = () => {
  const onFinish = (values) => {
    console.log("Login Email:", values);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Cột bên trái: Illustration */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt="Learning Illustration"
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Cột bên phải: Login Form */}
        <div className="flex-1 max-w-sm w-full">
          <h2 className="text-[28px] font-bold text-[#2d2d2d] leading-tight mb-8 text-center">
            Log in to continue your <br /> learning journey
          </h2>

          <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
            {/* Email Field */}
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Invalid email format!" },
              ]}
            >
              <Input
                placeholder="Email"
                className="py-3 px-4 rounded-md border-gray-300 hover:border-purple-500 focus:border-purple-500"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="mb-8">
              <button
                type="primary"
                htmlType="submit"
                className="button_primary w-full"
              >
                Continue
              </button>
            </Form.Item>
          </Form>

          {/* Bottom Links Section */}
          <div className="bg-[#f8f9fb] border border-gray-100 rounded-sm">
            <div className="py-4 text-center border-b border-gray-200">
              <button className="text-[#6d28d1] font-semibold cursor-pointer">
                Log in to a different account
              </button>
            </div>

            <div className="py-4 text-center border-b border-gray-200">
              <span className="text-gray-600">Don't have an account? </span>
              <button className="text-[#6d28d1] font-semibold cursor-pointer">
                Sign up
              </button>
            </div>

            <div className="py-4 text-center">
              <button className="text-[#6d28d1] font-semibold cursor-pointer">
                Log in with your organization
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageBody;
