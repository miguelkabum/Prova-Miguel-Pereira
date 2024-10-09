import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";

import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/usuarios"

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const [alertaClass, setAlertalass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const  navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!nome == ""){
      if(!email == ""){
        if(!senha == "" && !confirmaSenha == ""){
          const user = {nome, email, senha}
          const res = await fetch(url, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
          })
          alert("Usuário cadastrado com sucesso!")
          setNome("")
          setEmail("")
          setSenha("")
          setConfirmaSenha("")
          setAlertalass("mb-3 d-none")
          navigate("/login")
        }else{
          setAlertalass("mb-3")
          setAlertaMensagem("O campo 'Senha' não pode ser vazio")
        }

      }else{
        setAlertalass("mb-3")
      setAlertaMensagem("O campo 'E-mail' não pode ser vazio")
      }
    }else{
      setAlertalass("mb-3")
      setAlertaMensagem("O campo 'Nome' não pode ser vazio")
    }
  }

  return (
    <>
      
      <Container style={{display: "flex", flexDirection: "column", textAlign: "center", gap:"12px"}}>
      <span class="material-symbols-outlined" style={{fontSize: "140px"}}>person_add</span>
        <form onSubmit={handleSubmit}>
          <h1 style={{fontSize: "70px"}}>Cadastro</h1> <br />
          <FloatingLabel controlId="floatingName" label="Nome" className="mb-3">
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
            label="E-mail"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingConfirmPassword"
            label="Confirme a sua senha"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={confirmaSenha}
              onChange={(e) => {
                setConfirmaSenha(e.target.value);
              }}
            />
          </FloatingLabel>
          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>
          <Button type="submit" variant="primary">Cadastrar</Button>{" "}
        </form>
        <p>
          Já tem um cadastro? <Nav.Link href="/login">Login</Nav.Link>
        </p>
      </Container>
    </>
  );
};

export default Cadastro;
