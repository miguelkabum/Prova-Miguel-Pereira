import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import NavBarra from "./components/NavBarra.jsx";
import Cadastrar from "./pages/Cadastro.jsx"

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/cadastro" element={<Cadastrar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
