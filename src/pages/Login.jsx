import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import { useNavigate } from "react-router-dom";
const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [alertaClass, setAlertaclass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaVariante, setAletaVariante] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    setEmail("admin")
    setSenha("4321")

    if(email != undefined && senha == senha){
      setAlertaclass("mb-3")
      setAlertaMensagem("Login efetuado com sucesso")
      setAletaVariante("success")
      navigate("/home")
    }else{
      setAlertaclass("mb-3")
      setAlertaMensagem("Email ou senha inválidos!")
    }
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "35px"
        }}
      >
  
        <form onSubmit={handleLogin} style={{display:"flex", flexDirection:"column",
          gap: "19px"}}>
          <h1 style={{ fontSize: "70px" }}>Login</h1> <br />
          <FloatingLabel
            controlId="floatingInputEmail"
            label="E-mail"
            className="mb-3"
          >
            <Form.Control
              type="text"
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
          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>
          <Button type="submit" variant="primary" style={{
            margingBottom: "5px", backgroundColor: "#344e41", border:"none", color:"#dad7cd"
          }}>
            Entrar
          </Button>{" "}
        </form>
      </Container>
    </>
  );
};

export default Login;
