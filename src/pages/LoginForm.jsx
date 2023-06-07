import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import NavBarHomePage from "../components/NavBarHomePage";
import Swal from "sweetalert2";

function LoginForm({ tela }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [cnpj, setCnpj] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleClose = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  // Formata o CNPJ adicionando pontos, barras e traço
  const formatCNPJ = (value) => {
    return value
      .replace(/\D/g, "") // Substitui qualquer caracter que não seja número por nada
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // Captura 2 dígitos seguidos de um traço e não deixa ser digitado mais nada
  };

  const handleCNPJChange = (e) => {
    setCnpj(formatCNPJ(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de ação assíncrona
    setTimeout(() => {
      // Exibir mensagem de login bem-sucedido
      if (tela === "Cliente") {
        Swal.fire({
          title: "Login realizado com sucesso",
          icon: "success",
        }).then(() => {
          // Redirecionar para a página de cliente após o login
          navigate("/cliente");
        });
      } else {
        Swal.fire({
          title: "Bem-vindo ADM!",
          icon: "success",
        }).then(() => {
          // Redirecionar para a página de dashboard após o login
          navigate("/dashboard");
        });
      }
    }, 1000);
  };

  return (
    <section className="home">
      <NavBarHomePage />
      <div className="wrapper">
        <div className="login-form-2">
          <form className="login-form-2" onSubmit={handleSubmit}>
            <div className="close-btn">
              <FaTimes onClick={handleClose} />
            </div>
            <h1>Login</h1>
            <input
              id="login"
              placeholder="CNPJ"
              className="login-form-2-input"
              value={cnpj}
              onChange={handleCNPJChange}
            />
            <input
              id="password"
              placeholder="Senha"
              className="login-form-2-input"
              type="password"
            />
            <div className="son-form">
              <Link to="/Register">Registro</Link>
              <Link to="">Esqueceu a senha?</Link>
            </div>
            <input type="submit" className="submit" value="Login" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
