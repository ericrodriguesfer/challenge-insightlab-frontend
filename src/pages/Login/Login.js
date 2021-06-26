import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Select } from "antd";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";

const { Option } = Select;

function Login() {
  const [loginFormAcess, setLoginFormAcess] = useState("");
  const [passFormAcess, setPassFormAcess] = useState("");
  const [typeLoginFormAcess, setTypeLoginFormAcess] = useState("participante");
  const [titleForm, setTitleForm] = useState(
    "Acesse para participar dos eventos"
  );

  localStorage.clear();

  function handleChange(value) {
    if (value === "administrador") {
      setTitleForm("Acesse para administrar os eventos");
    } else {
      setTitleForm("Acesse para participar dos eventos");
    }

    setTypeLoginFormAcess(value);
  }

  function handleSendForm(e) {
    e.preventDefault();
    window.alert(loginFormAcess);
    window.alert(passFormAcess);
    window.alert(typeLoginFormAcess);
  }

  return (
    <React.Fragment>
      <Row>
        <Col span={12} offset={6} className="content-form-login">
          <Form
            onSubmitCapture={handleSendForm}
            className="body-form"
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
              className="image-logo-form-login"
              alt="Logo da InsightLab"
            />
            <h1 className="image-title-form-login">{titleForm}</h1>

            <Form.Item
              label="Login"
              name="login-name-acess"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite seu login de acesso!",
                },
              ]}
            >
              <Input
                placeholder="Digite seu login de acesso"
                required
                onChange={(e) => setLoginFormAcess(e.target.value)}
                value={loginFormAcess}
              />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="login-pass-acesso"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite sua senha de acesso!",
                },
              ]}
            >
              <Input.Password
                placeholder="Digite sua senha de acesso"
                required
                onChange={(e) => setPassFormAcess(e.target.value)}
                value={passFormAcess}
              />
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
                style={{ width: 120 }}
                onChange={handleChange}
                value={typeLoginFormAcess}
                required
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
              <Link to="/register" className="link-page-register">
                Caso ainda não seja um participante, clique aqui!
              </Link>
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
