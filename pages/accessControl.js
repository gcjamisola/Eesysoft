import { Form, Input, Button, Checkbox } from "antd";
import Layout from "../layouts/app";

const AccessControl = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 6 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 4,
        offset: 1
      }
    }
  };
  return (
    <Layout title="Access Control">
      <Form {...formItemLayout}>
        <Form.Item>
          <Checkbox>Administrator</Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox>Marketing</Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox>IT</Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox>User</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default AccessControl;
