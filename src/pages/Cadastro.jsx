import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import NavBarra from "../components/NavBarra";

const url = "http://localhost:5000/usuarios";

const Cadastrar = (props) => {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");

  const [alertaClass, setAlertaclass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaVariante, setAletaVariante] = useState("");

  const navigate = useNavigate();

  const handleCadastrar = async () => {
    if (!nome == "" && !categoria == "" && !preco == "") {
      const user = { nome, categoria, preco };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      setNome("");
      setCategoria("");
      setPreco("");
      navigate("/home");
    } else {
      setAlertaclass("mb-3");
      setAlertaMensagem("Por favor, preencha todos os campos!");
    }
  };

  return (
    <>
      <NavBarra />
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            padding: "22px 0",
          }}
        >
          Cadastrar Produtos
        </h1>

        <FloatingLabel
          controlId="floatingName"
          label="Nome do produto"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="name@example.com"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputEmail"
          label="Categoria"
          className="mb-3"
        >
          <Form.Control
            type="Categoria"
            placeholder="name@example.com"
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Preços"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Preço"
            value={preco}
            onChange={(e) => {
              setPreco(e.target.value);
            }}
          />
          <Alert
            key="danger"
            variant="danger"
            className={alertaClass}
            style={{ top: "12px" }}
          >
            {alertaMensagem}
          </Alert>
        </FloatingLabel>
        <Button
          style={{
            backgroundColor: "#344e41",
            border: "none",
            color: "#ffffff",
          }}
          onClick={() => handleCadastrar()}
        >
          Cadastrar produto
        </Button>
      </div>
    </>
  );
};

export default Cadastrar;
