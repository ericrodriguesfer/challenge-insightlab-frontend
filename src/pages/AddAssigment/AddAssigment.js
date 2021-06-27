import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Form, Input, Button } from "antd";
import { PlusOutlined, LeftOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

function AddAssigment() {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [duration, setDuration] = useState("");
  const history = useHistory();
  const noLoged = "No loged";
  const idEvent = localStorage.getItem("idEvent");
  const idUser = localStorage.getItem("idUser");
  const nameUser = localStorage.getItem("nameUser");
  const emailUser = localStorage.getItem("emailUser");
  const logedUser = localStorage.getItem("logedUser");
  const userUser = localStorage.getItem("userUser");
  const userAdmin = localStorage.getItem("adminUser");

  const notifyErroLogin = () => {
    toast.error("Verifue suas credencias e tente o login novamente!", {
      className: "toastify",
    });
  };

  const notifyErrorAssigment = () => {
    toast.error("Erro ao tentar adicionar atividade ao evento!", {
      className: "toastify",
    });
  };

  const notifySuccessAssigment = () => {
    toast.setDuration("Atividade adicionado ao evento com sucesso!", {
      className: "toastify",
    });
  };

  if (
    !idUser ||
    !nameUser ||
    !emailUser ||
    !logedUser ||
    !userUser ||
    !userAdmin ||
    idUser === noLoged ||
    nameUser === noLoged ||
    emailUser === noLoged ||
    logedUser === false ||
    userUser === false ||
    userAdmin === false
  ) {
    localStorage.clear();
    notifyErroLogin();
    history.push("/login");
  }

  async function handleSendForm(e) {
    e.preventDefault();

    try {
      await Api.post(`/admin/event/assigment/${idEvent}`, {
        name,
        theme,
        duration,
      });

      notifySuccessAssigment();

      history.push("/home-admin");
    } catch (err) {
      notifyErrorAssigment();
    }
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <Row>
        <Col span={12} offset={6} className="content-form-login-assigment">
          <Form
            onSubmitCapture={handleSendForm}
            className="body-form-assigment"
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
              className="image-logo-form-login-assigment"
              alt="Logo da InsightLab"
            />
            <h1 className="image-title-form-login-assigment">
              Adicione uma atividade a este evento
            </h1>

            <Form.Item
              label="Nome"
              name="name-assigment"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite o nome da atividade!",
                },
              ]}
            >
              <Input
                placeholder="Digite o nome da atividade"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Item>

            <Form.Item
              label="Tema"
              name="theme-assigment"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite o tema da atividade!",
                },
              ]}
            >
              <Input
                placeholder="Digite o tema da atividade"
                required
                onChange={(e) => setTheme(e.target.value)}
                value={theme}
              />
            </Form.Item>

            <Form.Item
              label="Duração"
              name="dutarion-assigment"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite a duração da atividade!",
                },
              ]}
            >
              <Input
                placeholder="Digite a duração da atividade"
                required
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
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
                className="button-login-form"
                icon={<PlusOutlined />}
              >
                Cadastrar
              </Button>
              <Link to="/home-admin">
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

export default AddAssigment;
