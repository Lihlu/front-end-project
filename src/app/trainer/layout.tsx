"use client";

import React from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useAuthState } from "@/providers/auth";
import { useRouter } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const siderItems = [
  { key: "/trainer", icon: React.createElement(UserOutlined), label: "Profile" },
  { key: "/trainer/clients", icon: React.createElement(TeamOutlined), label: "Clients" },
  { key: "/trainer", icon: React.createElement(UserOutlined), label: "Meal Plans" },
  { key: "/trainer/foodItems", icon: React.createElement(UserOutlined), label: "Food Items" },
];

const TrainerLayout: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuthState();
  const router = useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  let username = "";
  if (user){
    username = user.name;
  }

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={({ key }) => {
            router.push(key);
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={siderItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          Hello, {username}
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default TrainerLayout;
