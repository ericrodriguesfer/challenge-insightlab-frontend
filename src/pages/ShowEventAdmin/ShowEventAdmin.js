import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Steps } from "antd";
import { DoubleLeftOutlined, LeftOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

const { Step } = Steps;

function ShowEventAdmin() {
  const [event, setEvent] = useState({});
  const [eventAdress, setEventAdress] = useState({});
  const [eventParticipates, setEventParticipates] = useState({});
  const [eventAssigments, setEventAssigments] = useState({});
  const idEvent = localStorage.getItem("idEvent");
  const noLoged = "No loged";
  const history = useHistory();
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

  useEffect(() => {
    Api.get(`/admin/event/${idEvent}`).then((response) => {
      setEvent(response.data);
      setEventAdress(response.data.adress);
      setEventParticipates(response.data.participants);
      setEventAssigments(response.data.assigments);
    });
  }, [idEvent]);

  return (
    <React.Fragment>
      <ToastContainer />
      <Row>
        <Col span={24}>
          <nav className="nav-show-event-user">
            <img
              src={InsigthLabIcon}
              className="logo-home-nav"
              alt="Logo da InsightLab"
            />
            <h1>Administrador, {nameUser}</h1>
            <Link to="/home-admin">
              <Button type="primary" icon={<DoubleLeftOutlined />}>
                Voltar a home
              </Button>
            </Link>
          </nav>
        </Col>
      </Row>
      <center>
        <Row>
          <Col span={12} offset={6} className="content-form-login-user">
            <div className="box-show-event-user">
              <div className="content-event-user">
                <h1>{event.name}</h1>
                <hr color="#f6f6f6" />
                <p className="theme-event-user">Tema: {event.theme}</p>
                <h2>Endereço</h2>
                <div className="adress-event-user">
                  <div className="adress-event-1-user">
                    <p>Rua: {eventAdress.street}</p>
                    <p>Número: {eventAdress.number}</p>
                    <p>Bairro: {eventAdress.district}</p>
                  </div>
                  <div className="adress-event-2-user">
                    <p>Cidade: {eventAdress.city}</p>
                    <p>Instituição: {eventAdress.institution}</p>
                  </div>
                </div>
                <p className="type-event-user">Tipo: {event.type}</p>
                <div className="show-presition-event-user">
                  <p>Horário: {event.oclock}</p>
                  <p>Data: {event.date}</p>
                </div>
                <h2>Participantes</h2>
                <div className="show-participants">
                  {eventParticipates.length > 0 ? (
                    eventParticipates.map((participant) => (
                      <div className="participant" key={participant._id}>
                        <p>Nome: {participant.name}</p>
                        <p>Matricula: {participant.registration}</p>
                      </div>
                    ))
                  ) : (
                    <h4>Sem participates</h4>
                  )}
                </div>
                <h2>Atividades do evento</h2>
                <div className="show-atividades">
                  {eventAssigments.length > 0 ? (
                    eventAssigments.map((assigment) => (
                      <Steps direction="vertical" current={1}>
                        <Step
                          key={assigment._id}
                          title={assigment.title}
                          description={assigment.theme}
                        ></Step>
                      </Steps>
                    ))
                  ) : (
                    <h4>Sem atividades</h4>
                  )}
                </div>
                <Link to="/home-admin">
                  <Button
                    className="button-participate-event-admin"
                    type="primary"
                    icon={<LeftOutlined />}
                  >
                    Voltar
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </center>
    </React.Fragment>
  );
}

export default ShowEventAdmin;
