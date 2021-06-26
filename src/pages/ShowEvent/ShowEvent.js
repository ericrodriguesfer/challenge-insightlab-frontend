import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { DoubleLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";

function ShowEvent() {
  return (
    <React.Fragment>
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
                <h1>Titulo ou nome do evento</h1>
                <hr color="#f6f6f6" />
                <p className="theme-event">Tema: IO</p>
                <h2>Endereço</h2>
                <div className="adress-event">
                  <div className="adress-event-1">
                    <p>Rua: Rua A</p>
                    <p>Número: 0</p>
                    <p>Bairro: Gatemaltecos</p>
                  </div>
                  <div className="adress-event-2">
                    <p>Cidade: Fortaleza</p>
                    <p>Instituição: UFC</p>
                  </div>
                </div>
                <p className="type-event">Tipo: Virtual</p>
                <div className="show-presition-event">
                  <p>Horário: 12:00 Horas</p>
                  <p>Data: 20/20/2020</p>
                </div>
                <Button
                  className="button-participate-event"
                  type="primary"
                  icon={<PlusCircleOutlined />}
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

export default ShowEvent;
