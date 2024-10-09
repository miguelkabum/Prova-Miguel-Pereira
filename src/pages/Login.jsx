import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";

const url = "http://localhost:5000/usuarios"
const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [alertaClass, setAlertaclass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaVariant, setAletaVariante] = useState("");

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

  const gravarLocal = (usuario) => {
    localStorage.setItem("userName, usuario.nome")
    localStorage.setItem("userEmail, usuario.email")
    localStorage.setItem("userSenha, usuario.senha")

  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {email, senha}

    const userToFind = usuarios.find((userFind) => userFind.email == user.email);

    if (!email == "") {
      if(!senha ==""){
        if(userToFind != undefined && userToFind.senha == senha){
          setAlertaclass("mb-3")
          gravarLocalStorange(userToFind)
          setAlertaMensagem("Login efetuado com sucesso")
          setAletaVariante("success")
        }else{
          setAlertaclass("mb-3")
          setAlertaMensagem("Email ou senha inválidos!")
        }
      }else{
        alertaClass("mb-3");
        setAlertaMensagem("O campo 'senha' não pode ser vazio");
      }
    } else {
      setAlertaclass("mb-3");
      setAlertaMensagem("O campo 'email' não pode ser vazio");
    }
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "12px",
        }}
      >
        <span class="material-symbols-outlined" style={{ fontSize: "140px" }}>
          Login
        </span>
        <form onSubmit={handleLogin}>
          <h1 style={{ fontSize: "70px" }}>Login</h1> <br />
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
          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>
          <Button type="submit" variant="primary">
            Entrar
          </Button>{" "}
        </form>
        <p>
          Não tem um login? <Nav.Link href="/Cadastro">Cadastre-se</Nav.Link>
        </p>
      </Container>
    </>
  );
};

export default Login;
