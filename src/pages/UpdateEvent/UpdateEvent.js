import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Select } from "antd";
import { ReloadOutlined, LeftOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

const { Option } = Select;

function UpdateEvent() {
  const noLoged = "No loged";
  const idUser = localStorage.getItem("idUser");
  const nameUser = localStorage.getItem("nameUser");
  const emailUser = localStorage.getItem("emailUser");
  const logedUser = localStorage.getItem("logedUser");
  const userUser = localStorage.getItem("userUser");
  const userAdmin = localStorage.getItem("adminUser");
  const [typeEvent, setTypeEvent] = useState(localStorage.getItem("nameType"));
  const [idEvent, setIdEvent] = useState(localStorage.getItem("idEvent"));
  const [name, setName] = useState(localStorage.getItem("nameEvent"));
  const [theme, setTheme] = useState(localStorage.getItem("nameTheme"));
  const [oclock, setOclock] = useState(localStorage.getItem("nameOclock"));
  const [date, setDate] = useState(localStorage.getItem("nameDate"));
  const history = useHistory();

  const notifyErroLogin = () => {
    toast.error("Verifue suas credencias e tente o login novamente!", {
      className: "toastify",
    });
  };

  const notifyErrorUpdate = () => {
    toast.error("Erro ao tentar atualizar as informações do evento!", {
      className: "toastify",
    });
  };

  const notifySuccessUpdate = () => {
    toast.success("Dados do evento atualizados com sucesso!", {
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

  function handleChange(value) {
    if (value === "presencial") {
      setTypeEvent("presencial");
    } else {
      setTypeEvent("virtual");
    }

    setTypeEvent(value);
  }

  async function handleSendForm(e) {
    e.preventDefault();

    try {
      await Api.put(`/admin/event/${idEvent}`, {
        name,
        theme,
        type: typeEvent,
        oclock,
        date,
      });

      notifySuccessUpdate();

      history.push("/home-admin");
    } catch (err) {
      notifyErrorUpdate();
    }
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <Row>
        <Col
          span={12}
          offset={6}
          className="content-form-login-register-event-update"
        >
          <Form
            onSubmitCapture={handleSendForm}
            className="body-form-register-event-update"
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
              className="image-logo-form-login-register-event-update"
              alt="Logo da InsightLab"
            />
            <h1 className="image-title-form-login-register-event-update">
              Atualizar este evento
            </h1>

            <Form.Item
              label="Nome"
              name="event-name-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite o nome do evento!",
                },
              ]}
            >
              <Input
                placeholder="Digite o nome do evento"
                required
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Item>

            <Form.Item
              label="Tema"
              name="event-theme-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite o tema do evento!",
                },
              ]}
            >
              <Input
                placeholder="Digite o tema do evento"
                required
                defaultValue={theme}
                onChange={(e) => setTheme(e.target.value)}
                value={theme}
              />
            </Form.Item>

            <Form.Item
              name="event-type-register"
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
                value={typeEvent}
                required
              >
                <Option value="virtual">Virtual</Option>
                <Option value="presencial">Presencial</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Horário"
              name="event-oclock-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite o horario do evento!",
                },
              ]}
            >
              <Input
                placeholder="Digite o horario do evento"
                required
                defaultValue={oclock}
                onChange={(e) => setOclock(e.target.value)}
                value={oclock}
              />
            </Form.Item>

            <Form.Item
              label="Data"
              name="event-date-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite a data do evento!",
                },
              ]}
            >
              <Input
                type="date"
                placeholder="Digite a data do evento"
                required
                datatype="dd-MM-yyyy"
                defaultValue={date}
                onChange={(e) => setDate(e.target.value)}
                value={date}
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
                className="button-login-form-register-event-update"
                icon={<ReloadOutlined />}
              >
                Atualizar
              </Button>
              <Link to="/home-admin">
                <Button
                  type="default"
                  htmlType="submit"
                  className="button-login-form-register-event-update"
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

export default UpdateEvent;
