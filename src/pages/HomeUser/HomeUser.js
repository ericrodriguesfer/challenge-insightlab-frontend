import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Card, Layout } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";

const { Footer } = Layout;
const { Meta } = Card;

const data = { name: "Teste", age: 10 };

function HomeUser() {
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

  function handleLogou() {
    localStorage.clear();
    history.push("/");
  }

  function handleShowEvent(data) {
    console.log(data);
    localStorage.setItem("nameEvent", data.name);
    localStorage.setItem("ageEvent", data.age);
    history.push("/show-event-user");
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <Row>
        <Col span={24}>
          <nav className="nav-home-user">
            <img
              src={InsigthLabIcon}
              className="logo-home-nav"
              alt="Logo da InsightLab"
            />
            <h1>Particpante, {nameUser}</h1>
            <Link onClick={handleLogou}>
              <Button type="primary" icon={<LeftOutlined />}>
                Sair
              </Button>
            </Link>
          </nav>
        </Col>
      </Row>
      <div className="conteudo-atividades-user">
        <center>
          <h1>Lista de eventos</h1>
        </center>
        <center>
          <Row className="linha-atividades-user">
            <Col span={8}>
              <Link onClick={(e) => handleShowEvent(data)}>
                <Card
                  className="card-box-atividade-user"
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="Imagem de amostragem para evento Insight Lab"
                      src="https://avatars.githubusercontent.com/u/29547270?s=200&v=4"
                    />
                  }
                >
                  <Meta
                    title="Titulo do evento"
                    description="www.instagram.com"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
        </center>
      </div>
      <Footer className="footer-home-user">
        Desenvolvedor:&nbsp;
        <a href="https://github.com/ericrodriguesfer" target="_blanck">
          Eric Rodrigues Ferreira
        </a>
        &nbsp;| Desafio Full Stack:&nbsp;
        <a href="https://insightlab.ufc.br/" target="_blanck">
          Insight Lab
        </a>
      </Footer>
    </React.Fragment>
  );
}

export default HomeUser;
