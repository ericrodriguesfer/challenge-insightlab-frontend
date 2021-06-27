import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { DoubleLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

function ShowEvent() {
  const [event, setEvent] = useState({});
  const [eventAdress, setEventAdress] = useState({});
  const idEvent = localStorage.getItem("idEvent");

  useEffect(() => {
    Api.get(`/admin/event/${idEvent}`).then((response) => {
      setEvent(response.data);
      setEventAdress(response.data.adress);
    });
  }, [idEvent]);

  const notifyNeedLoginParticipate = () => {
    toast.warning("Efetue seu login de participante!", {
      className: "toastify",
    });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Row>
        <Col span={24}>
          <nav className="nav-show-event">
            <img
              src={InsigthLabIcon}
              className="logo-home-nav"
              alt="Logo da InsightLab"
            />
            <Link to="/">
              <Button type="primary" icon={<DoubleLeftOutlined />}>
                Voltar a home
              </Button>
            </Link>
          </nav>
        </Col>
      </Row>
      <center>
        <Row>
          <Col span={12} offset={6} className="content-form-login">
            <div className="box-show-event">
              <div className="content-event">
                <h1>{event.name}</h1>
                <hr color="#f6f6f6" />
                <p className="theme-event">Tema: {event.theme}</p>
                <h2>Endereço</h2>
                <div className="adress-event">
                  <div className="adress-event-1">
                    <p>Rua: {eventAdress.street}</p>
                    <p>Número: {eventAdress.number}</p>
                    <p>Bairro: {eventAdress.district}</p>
                  </div>
                  <div className="adress-event-2">
                    <p>Cidade: {eventAdress.city}</p>
                    <p>Instituição: {eventAdress.institution}</p>
                  </div>
                </div>
                <p className="type-event">Tipo: {event.type}</p>
                <div className="show-presition-event">
                  <p>Horário: {event.oclock}</p>
                  <p>Data: {event.date}</p>
                </div>
                <Link onClick={notifyNeedLoginParticipate}>
                  <Button
                    className="button-participate-event"
                    type="primary"
                    icon={<PlusCircleOutlined />}
                  >
                    Participar
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

export default ShowEvent;
