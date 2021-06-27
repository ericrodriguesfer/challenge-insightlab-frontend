import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { DoubleLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

function ShowEventUser() {
  const [event, setEvent] = useState({});
  const [eventAdress, setEventAdress] = useState({});
  const idEvent = localStorage.getItem("idEvent");
  const noLoged = "No loged";
  const history = useHistory();
  const idUser = localStorage.getItem("idUser");
  const nameUser = localStorage.getItem("nameUser");
  const registrationUser = localStorage.getItem("registrationUser");
  const emailUser = localStorage.getItem("emailUser");
  const logedUser = localStorage.getItem("logedUser");
  const userUser = localStorage.getItem("userUser");
  const userAdmin = localStorage.getItem("adminUser");

  const notifyErroLogin = () => {
    toast.error("Verifue suas credencias e tente o login novamente!", {
      className: "toastify",
    });
  };

  const notifyParticipateEvent = () => {
    toast.success("Você está participando deste evento!", {
      className: "toastify",
    });
  };

  const notifyErrorParticipateEvent = () => {
    toast.error("Erro ao tentar participar desde evento!", {
      className: "toastify",
    });
  };

  if (
    !idUser ||
    !nameUser ||
    !registrationUser ||
    !emailUser ||
    !logedUser ||
    !userUser ||
    !userAdmin ||
    idUser === noLoged ||
    nameUser === noLoged ||
    registrationUser === noLoged ||
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
    });
  }, [idEvent]);

  function handleParticipateEvent() {
    try {
      Api.post(`/user/event/${idEvent}`, {
        id: idUser,
        name: nameUser,
        registration: registrationUser,
      });

      notifyParticipateEvent();
    } catch (err) {
      notifyErrorParticipateEvent();
    }
  }

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
            <h1>Particpante, {nameUser}</h1>
            <Link to="/home-user">
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

                <Button
                  className="button-participate-event"
                  type="primary"
                  icon={<PlusCircleOutlined />}
                  onClick={(e) => handleParticipateEvent()}
                >
                  Participar
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </center>
    </React.Fragment>
  );
}

export default ShowEventUser;
