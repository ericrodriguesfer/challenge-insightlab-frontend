import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Card, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";

const { Footer } = Layout;
const { Meta } = Card;

const data = { name: "Teste", age: 10 };

function Home() {
  const history = useHistory();

  localStorage.clear();

  function handleShowEvent(data) {
    console.log(data);
    localStorage.setItem("nameEvent", data.name);
    localStorage.setItem("ageEvent", data.age);
    history.push("/show-event");
  }

  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <nav className="nav-home">
            <img
              src={InsigthLabIcon}
              className="logo-home-nav"
              alt="Logo da InsightLab"
            />
            <Link to="/login">
              <Button type="primary" icon={<UserOutlined />}>
                Efetuar Login
              </Button>
            </Link>
          </nav>
        </Col>
      </Row>
      <div className="conteudo-atividades">
        <center>
          <h1>Lista de eventos</h1>
        </center>
        <center>
          <Row className="linha-atividades">
            <Col span={8}>
              <Link onClick={(e) => handleShowEvent(data)}>
                <Card
                  className="card-box-atividade"
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
      <Footer className="footer-home">
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

export default Home;
