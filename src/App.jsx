import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login.jsx";
import NavBarra from "./components/NavBarra.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarra />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
