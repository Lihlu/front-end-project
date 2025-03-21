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
  { key: "/client", icon: React.createElement(UserOutlined), label: "Profile" },
  { key: "/client/mealPlans", icon: React.createElement(TeamOutlined), label: "Meal Plans" },
];

const ClientLayout: React.FC = ({
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
          defaultSelectedKeys={["/trainer/clients"]}
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

export default ClientLayout;
