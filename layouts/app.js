import * as React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const AppLayout = props => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <a href="/">
              <Icon type="form" />
              <span>Content Creation</span>
            </a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="/publishing">
              <Icon type="export" />
              <span>Publishing</span>
            </a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="/personalization">
              <Icon type="sliders" />
              <span>Personalization</span>
            </a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="/accessControl">
              <Icon type="team" />
              <span>Access Control</span>
            </a>
          </Menu.Item>
          <Menu.Item key="5">
            <a href="/statistics">
              <Icon type="pie-chart" />
              <span>Statistics</span>
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0
          }}
        >
          <h1 style={{ marginLeft: "1rem" }}>{props.title}</h1>
        </Header>
        <Content style={{ margin: "0 16px" }}>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>Eesysoft ©2018</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
