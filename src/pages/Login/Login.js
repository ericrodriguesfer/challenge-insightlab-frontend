import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Select } from "antd";
import { UserOutlined, LeftOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

const { Option } = Select;

function Login() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [typeLoginFormAcess, setTypeLoginFormAcess] = useState("participante");
  const [titleForm, setTitleForm] = useState(
    "Acesse para participar dos eventos"
  );
  const history = useHistory();

  localStorage.clear();

  function handleChange(value) {
    if (value === "administrador") {
      setTitleForm("Acesse para administrar os eventos");
    } else {
      setTitleForm("Acesse para participar dos eventos");
    }

    setTypeLoginFormAcess(value);
  }

  async function handleSendForm(e) {
    e.preventDefault();

    if (typeLoginFormAcess === "administrador") {
      window.alert("Login de adminstrador");
    } else {
      try {
        const response = await Api.post("/user/login", {
          login,
          pass,
        });

        localStorage.setItem("idUser", response.data.id);
        localStorage.setItem("nameUser", response.data.name);
        localStorage.setItem("registrationUser", response.data.registration);
        localStorage.setItem("emailUser", response.data.email);
        localStorage.setItem("logedUser", response.data.loged);
        localStorage.setItem("userUser", response.data.user);
        localStorage.setItem("adminUser", response.data.admin);

        history.push("/home-user");
      } catch (err) {
        notifyErroLogin();
      }
    }
  }

  const notifyErroLogin = () => {
    toast.error("Erro ao tentar efetuar login!", {
      className: "toastify",
    });
  };

  return (
    <React.Fragment>
      <ToastContainer />
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
                onChange={(e) => setLogin(e.target.value)}
                value={login}
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
                onChange={(e) => setPass(e.target.value)}
                value={pass}
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
                icon={<UserOutlined />}
              >
                Logar
              </Button>
              <Link to="/">
                <Button
                  type="default"
                  htmlType="submit"
                  className="button-login-form"
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

export default Login;
