import React from "react";
import { Layout, Input, Button, Badge, Row, Col, Card, Menu } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  GlobalOutlined,
  RightOutlined,
  LeftOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {} from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { Header, Sider } = Layout;
  const navigate = useNavigate();
  return (
    <header className="bg-white px-6 h-20 flex items-center gap-4 border-b sticky top-0 z-50">
      <div className="shrink-0" onClick={() => navigate("/")}>
        <img
          src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
          className="h-8 cursor-pointer"
        />
      </div>

      <button type="text" className="button_text_primary">
        Explore
      </button>

      <div className="flex grow ">
        <Input
          prefix={<SearchOutlined className="text-gray-400" />}
          placeholder="Tìm kiếm nội dung bất kỳ"
          className="rounded-full h-12 border-black hover:border-black focus:border-black "
          onPressEnter={(e) => {
            const value = e.target.value;
            if (value.trim()) {
              navigate(`/search?q=${encodeURIComponent(value)}`);
            }
          }}
        />
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <button type="text" className="button_text_primary">
          Udemy Business
        </button>
        <button type="text" className="button_text_primary">
          Tech on Udemy
        </button>
        <Badge
          count={0}
          showZero
          size="small"
          className="button_text_primary"
          offset={[-12, 8]}
        >
          <ShoppingCartOutlined style={{ fontSize: "24px" }} />
        </Badge>
        <button
          className="button_primary_noFill"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
        <button className="button_primary" onClick={() => navigate("/signup")}>
          Sign up
        </button>
        <Button
          icon={<GlobalOutlined />}
          style={{ height: "40px", width: "40px" }}
          className="button_primary_noFill"
        />
      </div>
    </header>
  );
};

export default Header;
