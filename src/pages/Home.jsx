import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const url = "http://localhost:5000/usuarios";

const Home = () => {
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData()
  });
  return (
    <>
      <div>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
            }}
          >
            <h1>Lista de algo</h1>
            <Button
              variant="primary"
              size="lg"
              className="mb-3 d-inline-flex justify-content-center"
            >
              <span
                className="material-symbols-outlined flex"
                style={{ fontSize: "30px", paddingRight: "4px" }}
              >
                add_circle
              </span>
              Cadastrar
            </Button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Senha</th>
                <th>opções</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (

              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.senha}</td>
                <td>Opções</td>
                <td>
                  <ButtonGroup aria-label="Basic example" style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
                    <Button variant="info">Editar</Button>
                    <Button variant="danger">Apagar</Button>
                  </ButtonGroup>
                </td>
              </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default Home;
