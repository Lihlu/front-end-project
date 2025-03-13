"use client";

import React from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useAuthState } from "@/providers/auth";
import { useRouter } from "next/navigation";
import { useStyles } from "./styles/style";

const { Header, Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  color: "rgba(244, 208, 78, 0.7)",
};

const siderItems = [
  {
    key: "/trainer",
    icon: React.createElement(UserOutlined),
    label: "Profile",
  },
  {
    key: "/trainer/clients",
    icon: React.createElement(TeamOutlined),
    label: "Clients",
  },
  {
    key: "/trainer/createClient",
    icon: React.createElement(TeamOutlined),
    label: "Create Client",
  },
  {
    key: "/trainer",
    icon: React.createElement(UserOutlined),
    label: "Meal Plans",
  },
  {
    key: "/trainer/foodItems",
    icon: React.createElement(UserOutlined),
    label: "Food Items",
  },
  {
    key: "/trainer/createItems",
    icon: React.createElement(UserOutlined),
    label: " Create Food Items",
  },
];

const TrainerLayout: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuthState();
  const router = useRouter();
  const { styles } = useStyles();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  let username = "";
  if (user) {
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
        <Header className={styles.headerStyle}>Hello, {username}</Header>
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
      </Layout>
    </Layout>
  );
};

export default TrainerLayout;
