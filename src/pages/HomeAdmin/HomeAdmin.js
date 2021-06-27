import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Layout } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import InsigthLabIcon from "../../images/insigthlab-icon.png";
import Api from "../../services/api";

const { Footer } = Layout;

function HomeAdmin() {
  const [events, setEvents] = useState([]);
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

  const notifyDeletingSuccess = () => {
    toast.success("Evento deletado com sucesso!", {
      className: "toastify",
    });
  };

  const notifyDeletingError = () => {
    toast.error("Erro ao tentar deletar o evento!", {
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
    Api.get("/admin/event").then((response) => {
      setEvents(response.data);
    });
  });

  async function handleDeleteEvent(event) {
    try {
      await Api.delete(`/admin/event/${event}`);

      notifyDeletingSuccess();

      setEvents(events.filter((event) => event._id !== event));
    } catch (err) {
      notifyDeletingError();
    }
  }

  async function handleEditEvent(event) {
    try {
      const response = await Api.get(`/admin/event/${event}`);

      localStorage.setItem("idEvent", response.data._id);
      localStorage.setItem("nameEvent", response.data.name);
      localStorage.setItem("nameTheme", response.data.theme);
      localStorage.setItem("nameType", response.data.type);
      localStorage.setItem("nameOclock", response.data.oclock);
      localStorage.setItem("nameDate", response.data.date);

      history.push("/update-event");
    } catch (err) {}
  }

  function handleShowEvent(event) {
    localStorage.setItem("idEvent", event);

    history.push("/show-event-admin");
  }

  function handleAddAssigmentEvent(event) {
    localStorage.setItem("idEvent", event);

    history.push("/add-assigment");
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <Row>
        <Col span={24}>
          <nav className="nav-home-admin">
            <img
              src={InsigthLabIcon}
              className="logo-home-nav"
              alt="Logo da InsightLab"
            />
            <h1>Administrador, {nameUser}</h1>
            <Link onClick={handleLogout}>
              <Button type="primary" icon={<LeftOutlined />}>
                Sair
              </Button>
            </Link>
          </nav>
        </Col>
      </Row>
      <div className="conteudo-atividades-admin">
        <center>
          <h1>Lista de eventos</h1>
        </center>
        <center>
          <Row className="linha-atividades-admin">
            <Link to="/register-event">
              <Button type="primary" className="button-table-events-add">
                Cadastrar evento
              </Button>
            </Link>
            <table border="1">
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>Tema</td>
                  <td>Tipo</td>
                  <td>Participantes</td>
                  <td>Apagar</td>
                  <td>Editar</td>
                  <td>Atividades</td>
                  <td>Visualizar</td>
                </tr>
              </thead>
              <tbody>
                {events.length > 0 ? (
                  events.map((event) => (
                    <tr>
                      <td>{event.name}</td>
                      <td>{event.theme}</td>
                      <td>{event.type}</td>
                      <td>{event.participants.length}</td>
                      <td>
                        <Button
                          className="button-table-events"
                          type="danger"
                          onClick={(e) => handleDeleteEvent(event._id)}
                        >
                          Apagar
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="button-table-events"
                          type="primary"
                          onClick={(e) => handleEditEvent(event._id)}
                        >
                          Editar
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="button-table-events"
                          type="default"
                          onClick={(e) => handleAddAssigmentEvent(event._id)}
                        >
                          Atividades
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="button-table-events"
                          type="default"
                          onClick={(e) => handleShowEvent(event._id)}
                        >
                          Visualizar
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h4>Sem Eventos</h4>
                )}
              </tbody>
            </table>
          </Row>
        </center>
      </div>
      <Footer className="footer-home-admin">
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

export default HomeAdmin;
