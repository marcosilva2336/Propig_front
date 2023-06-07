import React, { useState } from "react";
import Swal from "sweetalert2";
import footerStyle from "../styles/footerStyle.css";
import Logo from "../assets/logo.png";
import TalkToUs from "../assets/talk.svg";
import NavBarHomePage from "./NavBarHomePage";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const [cnpj, setCnpj] = useState("");
  
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar a mensagem usando o CNPJ e os outros dados do formulário
    // Por exemplo:
    console.log("CNPJ:", cnpj);
    // Faça o necessário para enviar a mensagem e definir a variável messageSent como true
    Swal.fire("Sucesso!", "Mensagem enviada com sucesso!", "success");
  };

  return (
    <section className="section-footer">
      <NavBarHomePage />
      <div className="contact">
        <div className="custom-shape-divider-top-1681173828">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="content">
          <p>Por favor, preencha o formulário para que possamos ajudá-lo.</p>
        </div>
        <div className="container-footer">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <PlaceIcon />
              </div>
              <div className="text">
                <h3>Endereço</h3>
                <p>Cais do Apolo, 222 - 15º Andar - Recife, PE, 50030-230</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <PhoneIcon />
              </div>
              <div className="text">
                <h3>Telefone</h3>
                <p>4002-8922</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <AttachEmailIcon />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>propig@gmail.com</p>
                <p className="direitos-reservados">
                  © 2023 Squad-19. Direitos Reservados.
                </p>
              </div>
            </div>
            <div className="p">Nos siga nas redes sociais !</div>
            <ul className="sci">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Fale Conosco</h2>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={cnpj}
                  onChange={handleCNPJChange}
                />
                <span>CNPJ</span>
              </div>
              <div className="inputBox">
                <input type="email" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required></textarea>
                <span>Digite sua Mensagem...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Envie" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
