import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Select } from "antd";
import { PlusCircleOutlined, LeftOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

const { Option } = Select;

function RegisterEvent() {
  const noLoged = "No loged";
  const idUser = localStorage.getItem("idUser");
  const nameUser = localStorage.getItem("nameUser");
  const emailUser = localStorage.getItem("emailUser");
  const logedUser = localStorage.getItem("logedUser");
  const userUser = localStorage.getItem("userUser");
  const userAdmin = localStorage.getItem("adminUser");
  const [typeEvent, setTypeEvent] = useState("virtual");
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [institution, setInstitution] = useState("");
  const [oclock, setOclock] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();

  const notifyErroLogin = () => {
    toast.error("Verifue suas credencias e tente o login novamente!", {
      className: "toastify",
    });
  };

  const notifyErrorAddEvent = () => {
    toast.success("Erro ao tentar cadastrar evento!", {
      className: "toastify",
    });
  };

  const notifySuccessAddEvent = () => {
    toast.success("Evento cadastrado com sucesso!", {
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
      const responseAdress = await Api.post("/admin/adress", {
        street,
        number,
        district,
        city,
        institution,
      });

      const adress = responseAdress.data;
      const participants = [];
      const assigments = [];

      await Api.post("/admin/event", {
        name,
        theme,
        adress,
        type: typeEvent,
        participants,
        oclock,
        date,
        assigments,
      });

      notifySuccessAddEvent();

      history.push("/home-admin");
    } catch (err) {
      notifyErrorAddEvent();
    }
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <Row>
        <Col span={12} offset={6} className="content-form-login-register-event">
          <Form
            onSubmitCapture={handleSendForm}
            className="body-form-register-event"
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
              className="image-logo-form-login-register-event"
              alt="Logo da InsightLab"
            />
            <h1 className="image-title-form-login-register-event">
              Cadastre-se um novo evento
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
                onChange={(e) => setTheme(e.target.value)}
                value={theme}
              />
            </Form.Item>

            <Form.Item
              label="Rua"
              name="event-street-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite a rua do evento!",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Digite a rua do evento"
                required
                onChange={(e) => setStreet(e.target.value)}
                value={street}
              />
            </Form.Item>

            <Form.Item
              label="Numero"
              name="event-number-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite o numero do local do evento!",
                },
              ]}
            >
              <Input
                placeholder="Digite o numero do local do evento"
                required
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </Form.Item>

            <Form.Item
              label="Bairro"
              name="event-district-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite o bairro do evento!",
                },
              ]}
            >
              <Input
                placeholder="Digite o bairro do evento"
                required
                onChange={(e) => setDistrict(e.target.value)}
                value={district}
              />
            </Form.Item>

            <Form.Item
              label="Cidade"
              name="event-city-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite a cidade do evento!",
                },
              ]}
            >
              <Input
                placeholder="Digite a cidade do evento"
                required
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </Form.Item>

            <Form.Item
              label="Instituição"
              name="event-institution-register"
              rules={[
                {
                  required: true,
                  message: "Por favor, digite a instituição do evento!",
                },
              ]}
            >
              <Input
                placeholder="Digite a instituição do evento"
                required
                onChange={(e) => setInstitution(e.target.value)}
                value={institution}
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
                className="button-login-form-register-event"
                icon={<PlusCircleOutlined />}
              >
                Cadastrar
              </Button>
              <Link to="/home-admin">
                <Button
                  type="default"
                  htmlType="submit"
                  className="button-login-form-register-event"
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

export default RegisterEvent;
