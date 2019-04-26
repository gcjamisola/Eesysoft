import { Form, Input, Button, Checkbox } from "antd";
import Layout from "../layouts/app";

const Home = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 4 }
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
        offset: 2
      }
    }
  };
  return (
    <Layout title="Content Creation">
      <Form {...formItemLayout}>
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Body">
          <textarea />
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

export default Home;
