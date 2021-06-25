import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Select } from "antd";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";

const { Option } = Select;

function Login() {
  const [titleForm, setTitleForm] = useState(
    "Acesse para participar dos eventos"
  );

  function handleChange(value) {
    if (value === "administrador") {
      setTitleForm("Acesse para administrar os eventos");
    } else {
      setTitleForm("Acesse para participar dos eventos");
    }
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <React.Fragment>
      <Row>
        <Col span={12} offset={6} className="content-form-login">
          <Form
            className="body-form"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <img
              src={InsigthLabIcon}
              className="image-logo-form-login"
              alt="Logo da InsightLab"
            />
            <h1 className="image-title-form-login">{titleForm}</h1>

            <Form.Item
              label="Login"
              name="Login de acesso"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite seu login de acesso!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="Senha de acesso"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite sua senha de acesso!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Select
                className="select-form-login"
                defaultValue="participante"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="participante">Participante</Option>
                <Option value="administrador">Administrador</Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="button-login-form"
              >
                Logar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Login;
