import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { DoubleLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";

function ShowEventUser() {
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
                <h1>Titulo ou nome do evento</h1>
                <hr color="#f6f6f6" />
                <p className="theme-event-user">Tema: IO</p>
                <h2>Endereço</h2>
                <div className="adress-event-user">
                  <div className="adress-event-1-user">
                    <p>Rua: Rua A</p>
                    <p>Número: 0</p>
                    <p>Bairro: Gatemaltecos</p>
                  </div>
                  <div className="adress-event-2-user">
                    <p>Cidade: Fortaleza</p>
                    <p>Instituição: UFC</p>
                  </div>
                </div>
                <p className="type-event-user">Tipo: Virtual</p>
                <div className="show-presition-event-user">
                  <p>Horário: 12:00 Horas</p>
                  <p>Data: 20/20/2020</p>
                </div>
                <Link>
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

export default ShowEventUser;
