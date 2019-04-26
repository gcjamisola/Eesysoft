import { Statistic, Row, Col } from "antd";
import Layout from "../layouts/app";

const Statistics = () => {
  return (
    <Layout title="Statistics">
      <Row gutter={4}>
        <Col span={3}>
          <Statistic title="Number of logins" value={78} />
        </Col>
        <Col span={3}>
          <Statistic title="Content usage" value={63} suffix="%" />
        </Col>
      </Row>
    </Layout>
  );
};

export default Statistics;
