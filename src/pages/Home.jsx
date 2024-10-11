import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";
import NavBarra from "../components/NavBarra";
const url = "http://localhost:5000/usuarios";


const Home = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const users = await res.json();
        setUsuarios(users);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  });
  return (
    <>
      <NavBarra />
      <div>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
            }}
          >
            <h1>Produtos</h1>
             <Button
              variant="primary"
              size="lg"
              className="mb-3 d-inline-flex justify-content-center"
              style={{backgroundColor: "#344e41", border:"none", color:"#dad7cd"}}
              onClick={() => navigate("/cadastro")}
            >
              <span
                className="material-symbols-outlined flex"
                style={{ fontSize: "30px", paddingRight: "8px" }}
              >
                add_circle
              </span>
              Cadastrar produto
            </Button> 
          </div>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.categoria}</td>
                  <td>{usuario.preco}</td>
                  <td>
                    <ButtonGroup
                      aria-label="Basic example"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button variant="danger" style={{backgroundColor: "#780000",  border:"none", color:"#ffffff"}} onClick={async () => {
                        const res = await fetch(`http://localhost:5000/usuarios/${usuario.id}`, {
                          method: "DELETE",
                          headers: {"Content-Type" : "application/json"}
                        });
                        
                        const funcionarioRemovido  = await res.json()

                      }}>Excluir item</Button>
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
