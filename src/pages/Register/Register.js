import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button } from "antd";
import { UserAddOutlined, LeftOutlined } from "@ant-design/icons";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";

function Register() {
  return (
    <React.Fragment>
      <Row>
        <Col span={12} offset={6} className="content-form-login-register">
          <Form
            // onSubmitCapture={handleSendForm}
            className="body-form-register"
            name="form-login"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
          >
            <img
              src={InsigthLabIcon}
              className="image-logo-form-login-register"
              alt="Logo da InsightLab"
            />
            <h1 className="image-title-form-login-register">
              Cadastre-se como um participante
            </h1>

            <Form.Item
              label="Nome"
              name="login-name-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite seu login de registro!",
                },
              ]}
            >
              <Input
                placeholder="Digite seu nome de registro"
                required
                // onChange={(e) => setLoginFormAcess(e.target.value)}
                // value={loginFormAcess}
              />
            </Form.Item>

            <Form.Item
              label="Matricula"
              name="login-registration-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite sua matricula de registro!",
                },
              ]}
            >
              <Input
                placeholder="Digite sua matricula de registro"
                required
                // onChange={(e) => setPassFormAcess(e.target.value)}
                // value={passFormAcess}
              />
            </Form.Item>

            <Form.Item
              label="E-mail"
              name="login-email-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite seu email de registro!",
                },
              ]}
            >
              <Input
                type="email"
                placeholder="Digite seu email de registro"
                required
                // onChange={(e) => setPassFormAcess(e.target.value)}
                // value={passFormAcess}
              />
            </Form.Item>

            <Form.Item
              label="Login"
              name="login-login-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite seu login de registro!",
                },
              ]}
            >
              <Input
                placeholder="Digite seu login de registro"
                required
                // onChange={(e) => setPassFormAcess(e.target.value)}
                // value={passFormAcess}
              />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="login-pass-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite sua senha de registro!",
                },
              ]}
            >
              <Input.Password
                placeholder="Digite sua senha de registro"
                required
                // onChange={(e) => setPassFormAcess(e.target.value)}
                // value={passFormAcess}
              />
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
                className="button-login-form-register"
                icon={<UserAddOutlined />}
              >
                Cadastrar-se
              </Button>
              <Link to="/login">
                <Button
                  type="default"
                  htmlType="submit"
                  className="button-login-form-register"
                  icon={<LeftOutlined />}
                >
                  Voltar
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Register;
