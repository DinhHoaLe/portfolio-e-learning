import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="min-h-screen bg-white">
      <Header />
      <Content className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
