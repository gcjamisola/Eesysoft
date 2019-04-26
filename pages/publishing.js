import { Form, Icon, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import Layout from "../layouts/app";

const Publishing = () => {
  return (
    <Layout title="Publishing">
      <__Form className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <__ForgotButton className="login-form-forgot" href="">
            Forgot password
          </__ForgotButton>
          <__LoginButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </__LoginButton>
          Or <a href="">register now!</a>
        </Form.Item>
      </__Form>
    </Layout>
  );
};

export default Publishing;

const __Form = styled(Form)`
  max-width: 300px;
`;

const __ForgotButton = styled.a`
  float: right;
`;

const __LoginButton = styled(Button)`
  width: 100%;
`;
