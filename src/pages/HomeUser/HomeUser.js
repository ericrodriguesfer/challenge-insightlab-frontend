import React from "react";
import { Row, Col } from "antd";

function HomeUser() {
  return (
    <React.Fragment>
      <Row>
        <Col span={24}>Menu</Col>
      </Row>
      <Row>
        <Col span={8}>Evento 1</Col>
        <Col span={8}>Evento 2</Col>
        <Col span={8}>Evento 3</Col>
      </Row>
    </React.Fragment>
  );
}

export default HomeUser;
